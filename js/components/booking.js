/* Booking form: trip-type tabs + pickup / drop / date / time, with a live estimate.
   Used in the home hero and on the Call Drivers page. Submits to WhatsApp. */
window.GSK = window.GSK || {};

GSK._bkSeq = 0;

GSK.bookingForm = function (o) {
  o = o || {};
  var n = ++GSK._bkSeq, p = 'bk' + n + '-';
  var active = o.active || 'oneway';
  return '<form class="booking' + (o.flat ? ' booking--flat' : '') + '" data-booking novalidate aria-label="Book a driver">' +
    (o.title === false ? '' : '<div class="booking__head"><h2>' + (o.title || 'Book your driver') + '</h2><p>Tell us the trip — we reply on WhatsApp.</p></div>') +
    '<div class="booking__tabs" role="tablist" aria-label="Trip type">' + GSK.tariffs.map(function (t) {
      return '<button type="button" role="tab" class="booking__tab' + (t.id === active ? ' is-active' : '') + '" data-trip="' + t.id + '" aria-selected="' + (t.id === active) + '">' +
        '<i class="fa-solid ' + t.icon + '" aria-hidden="true"></i><span>' + t.tab + '</span></button>';
    }).join('') + '</div>' +
    '<div class="booking__fields">' +
      '<div class="field"><label for="' + p + 'from">Pickup location</label><input id="' + p + 'from" name="from" type="text" placeholder="Area / address" autocomplete="off" required></div>' +
      '<div class="field"><label for="' + p + 'to">Drop location</label><input id="' + p + 'to" name="to" type="text" placeholder="Where to?" autocomplete="off" required></div>' +
      '<div class="field booking__row-2"><div class="field"><label for="' + p + 'date">Pickup date</label><input id="' + p + 'date" name="date" type="date" required></div>' +
        '<div class="field"><label for="' + p + 'time">Pickup time</label><input id="' + p + 'time" name="time" type="time" required></div></div>' +
      '<div class="field" data-for="round" hidden><label for="' + p + 'hrs">Hours needed</label><select id="' + p + 'hrs" name="hours">' +
        [4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (h) { return '<option value="' + h + '">' + h + ' hours</option>'; }).join('') + '</select></div>' +
      '<div class="field" data-for="days" hidden><label for="' + p + 'days">Number of days</label><select id="' + p + 'days" name="days">' +
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30].map(function (d) { return '<option value="' + d + '">' + d + (d === 1 ? ' day' : ' days') + '</option>'; }).join('') + '</select></div>' +
    '</div>' +
    '<p class="booking__est" data-est role="status" aria-live="polite"></p>' +
    '<p class="booking__err" data-err role="alert" hidden></p>' +
    '<button class="btn btn--accent btn--block btn--lg" type="submit"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Book on WhatsApp</button>' +
    '<a class="booking__call" href="' + GSK.config.phoneHref + '"><i class="fa-solid fa-phone" aria-hidden="true"></i> Or call ' + GSK.config.phone + '</a>' +
  '</form>';
};

GSK.estimate = function (tripId, v) {
  var t = GSK.getTariff(tripId);
  if (tripId === 'oneway') return 'Approx. 75 minutes · fare confirmed on WhatsApp';
  if (tripId === 'round') {
    var h = parseInt(v.hours || t.baseHours, 10), extra = Math.max(0, h - t.baseHours);
    return 'Estimate: ' + GSK.price(t.base + extra * t.extraPerHour) + ' for ' + h + ' hours' + (extra ? ' (₹550 + ' + extra + ' × ₹100)' : '');
  }
  if (tripId === 'sameday') {
    var night = v.time && (v.time >= '22:00' || v.time < '06:00');
    return 'Estimate: ' + GSK.price(t.base + (night ? t.night : 0)) + ' for 12 hours' + (night ? ' (incl. ₹100 night charge)' : ' · +₹100 if travelling 10 PM – 6 AM');
  }
  var d = parseInt(v.days || 1, 10);
  return 'Estimate: ' + GSK.price(d * t.perDay) + ' for ' + d + (d === 1 ? ' day' : ' days') + ' (₹1,500 per day)';
};

GSK.bindBooking = function (form) {
  var trip = (GSK.$('.booking__tab.is-active', form) || {}).dataset.trip || 'oneway';
  var date = form.elements.date;
  date.min = new Date().toISOString().slice(0, 10);
  var est = GSK.$('[data-est]', form), err = GSK.$('[data-err]', form);

  function values() {
    return { hours: form.elements.hours.value, days: form.elements.days.value, time: form.elements.time.value };
  }
  function refresh() {
    GSK.$$('[data-for="round"]', form).forEach(function (el) { el.hidden = trip !== 'round'; });
    GSK.$$('[data-for="days"]', form).forEach(function (el) { el.hidden = trip !== 'days'; });
    GSK.$$('.booking__tab', form).forEach(function (b) {
      var on = b.dataset.trip === trip; b.classList.toggle('is-active', on); b.setAttribute('aria-selected', on);
    });
    est.textContent = GSK.estimate(trip, values());
  }
  GSK.$('.booking__tabs', form).addEventListener('click', function (e) {
    var b = e.target.closest('.booking__tab'); if (!b) return;
    trip = b.dataset.trip; refresh();
  });
  form.addEventListener('input', refresh);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, missing = ['from', 'to', 'date', 'time'].filter(function (k) { return !f[k].value.trim(); });
    GSK.$$('input', form).forEach(function (i) { i.removeAttribute('aria-invalid'); });
    if (missing.length) {
      missing.forEach(function (k) { f[k].setAttribute('aria-invalid', 'true'); });
      err.textContent = 'Please fill in pickup, drop, date and time.'; err.hidden = false; f[missing[0]].focus(); return;
    }
    err.hidden = true;
    var t = GSK.getTariff(trip), v = values();
    var lines = ['Hello GSK, I would like to book a driver.', 'Trip type: ' + t.title,
      'Pickup: ' + f.from.value.trim(), 'Drop: ' + f.to.value.trim(),
      'Date: ' + f.date.value + ' at ' + f.time.value];
    if (trip === 'round') lines.push('Hours: ' + v.hours);
    if (trip === 'days') lines.push('Days: ' + v.days);
    lines.push(GSK.estimate(trip, v));
    window.open(GSK.waLink(lines.join('\n')), '_blank', 'noopener');
  });
  refresh();
};
