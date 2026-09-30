/* Contact / Get my quote. Works in demo mode (localStorage + WhatsApp hand-off);
   set GSK.config.api.enquiryEndpoint to POST enquiries to a real backend. */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.contact = function () {
  var app = GSK.$('#app'), cfg = GSK.config;
  var tour = GSK.getTour(GSK.param('tour'));
  var today = new Date().toISOString().slice(0, 10);

  var opt = function (arr, sel) { return arr.map(function (a) { var v = a[0], l = a[1]; return '<option value="' + v + '"' + (v === sel ? ' selected' : '') + '>' + l + '</option>'; }).join(''); };
  var svcOpts = GSK.services.map(function (s) { return [s.id, s.title]; });

  app.innerHTML =
    GSK.pageHeader({
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Get my quote' }],
      eyebrow: 'Get my quote',
      title: 'Tell us where you’re going. <em>We’ll take it from there.</em>',
      lede: 'Share a few details and we’ll reply on WhatsApp or by phone with a clear, fixed quote — usually within two hours.'
    }) +
    '<section class="section section--tight"><div class="container contact-grid">' +
      '<div class="contact-form-wrap">' +
        (tour ? '<div class="selected-pkg" role="status"><i class="fa-solid fa-suitcase-rolling" aria-hidden="true"></i><div><small>Package selected</small><strong>' + tour.title + '</strong></div><a href="' + GSK.link('tour', { id: tour.id }) + '">View</a></div>' : '') +
        '<form id="enquiry" novalidate>' +
          '<fieldset><legend><span>1</span> The trip</legend>' +
            '<div class="form-grid">' +
              '<div class="field field--full"><label for="f-service">What do you need?</label><select id="f-service" name="service">' + opt(svcOpts, GSK.param('service') || (tour ? 'tour-packages' : '')) + '</select></div>' +
              '<fieldset class="pill-group field--full"><legend>Trip type</legend>' +
                ['Single trip', 'Round trip', 'Hourly', 'Monthly package'].map(function (t, i) {
                  var want = GSK.param('trip'); var on = want ? want === t : i === 0;
                  return '<label><input type="radio" name="trip" value="' + t + '"' + (on ? ' checked' : '') + '><span>' + t + '</span></label>'; }).join('') + '</fieldset>' +
              '<div class="field"><label for="f-from">Pickup</label><input id="f-from" name="from" type="text" value="' + GSK.esc(GSK.param('from') || '') + '" placeholder="Area / city" autocomplete="off"></div>' +
              '<div class="field"><label for="f-to">Drop / destination</label><input id="f-to" name="to" type="text" value="' + GSK.esc(GSK.param('to') || GSK.param('destination') || (tour ? tour.to : '')) + '" placeholder="Where to?" autocomplete="off"></div>' +
              '<div class="field"><label for="f-date">Travel date</label><input id="f-date" name="date" type="date" min="' + today + '" value="' + GSK.esc(GSK.param('date') || '') + '"></div>' +
              '<div class="field"><label for="f-time">Pickup time</label><input id="f-time" name="time" type="time"></div>' +
              '<div class="field"><label for="f-pax">Travellers</label><select id="f-pax" name="pax">' + [1, 2, 3, 4, 5, 6, 7, '8–12', '13–30', '30+'].map(function (n) { return '<option' + (String(n) === GSK.param('pax') ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div>' +
              '<div class="field"><label for="f-car">Vehicle</label><select id="f-car" name="vehicle"><option>Driver only — I have a car</option><option>Sedan + driver</option><option>SUV / MPV + driver</option><option>Tempo traveller / coach</option></select></div>' +
            '</div></fieldset>' +
          '<fieldset><legend><span>2</span> About you</legend><div class="form-grid">' +
              '<div class="field"><label for="f-name">Your name <abbr title="required">*</abbr></label><input id="f-name" name="name" type="text" autocomplete="name" required aria-describedby="e-name"><p class="error" id="e-name"></p></div>' +
              '<div class="field"><label for="f-phone">Phone / WhatsApp <abbr title="required">*</abbr></label><input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+91" required aria-describedby="e-phone"><p class="error" id="e-phone"></p></div>' +
              '<div class="field"><label for="f-email">Email <span class="opt">optional</span></label><input id="f-email" name="email" type="email" autocomplete="email" aria-describedby="e-email"><p class="error" id="e-email"></p></div>' +
              '<div class="field"><label for="f-budget">Budget <span class="opt">optional</span></label><select id="f-budget" name="budget"><option>Not sure yet</option><option>Economy</option><option>Comfortable</option><option>Premium</option></select></div>' +
              '<div class="field field--full"><label for="f-msg">Anything we should know? <span class="opt">optional</span></label><textarea id="f-msg" name="message" rows="4" placeholder="Elders travelling, luggage, temple dress code, special stops…"></textarea></div>' +
          '</div></fieldset>' +
          '<div class="form-foot"><button class="btn btn--accent btn--lg" type="submit">Send my request <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>' +
            '<p><i class="fa-solid fa-lock" aria-hidden="true"></i> No payment needed. We’ll only use your details to reply.</p></div>' +
        '</form>' +
        '<div class="form-success" id="success" hidden tabindex="-1"><i class="fa-solid fa-circle-check" aria-hidden="true"></i><h2>Thank you — we’ve got it.</h2><p>A GSK travel specialist will contact you shortly. To speed things up, send the same details on WhatsApp:</p>' +
          '<pre id="summary"></pre><div class="actions"><a class="btn btn--accent" id="wa-send" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Send on WhatsApp</a><button class="btn btn--outline-dark" type="button" id="again">Make another request</button></div></div>' +
      '</div>' +

      '<aside class="contact-side">' +
        '<div class="contact-card reveal"><h2>Prefer to talk?</h2>' +
          '<ul class="contact-list">' +
            '<li><i class="fa-solid fa-phone" aria-hidden="true"></i><div><small>Call</small><a href="' + cfg.phoneHref + '">' + cfg.phone + '</a></div></li>' +
            '<li><i class="fa-brands fa-whatsapp" aria-hidden="true"></i><div><small>WhatsApp</small><a href="' + GSK.waLink() + '" target="_blank" rel="noopener">Chat with us now</a></div></li>' +
            '<li><i class="fa-solid fa-envelope" aria-hidden="true"></i><div><small>Email</small><a href="mailto:' + cfg.email + '">' + cfg.email + '</a></div></li>' +
            '<li><i class="fa-solid fa-location-dot" aria-hidden="true"></i><div><small>Office</small><address>' + cfg.address.join(', ') + '</address></div></li>' +
          '</ul>' +
          '<h3>Business hours</h3><dl class="hours">' + cfg.hours.map(function (h) { return '<div><dt>' + h[0] + '</dt><dd>' + h[1] + '</dd></div>'; }).join('') + '</dl>' +
        '</div>' +
        '<div class="map reveal" role="img" aria-label="Map placeholder showing the GSK office location in Chennai"><span class="map__pin"><i class="fa-solid fa-location-dot" aria-hidden="true"></i></span>' +
          '<a class="btn btn--dark btn--sm" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(cfg.address.join(', ')) + '" target="_blank" rel="noopener">Open in Google Maps</a></div>' +
      '</aside>' +
    '</div></section>';

  var form = GSK.$('#enquiry'), success = GSK.$('#success');

  function err(id, msg, input) { GSK.$('#' + id).textContent = msg; input.setAttribute('aria-invalid', msg ? 'true' : 'false'); return !msg; }

  function validate() {
    var n = form.elements.name, p = form.elements.phone, e = form.elements.email, first = null, ok = true;
    var r1 = err('e-name', n.value.trim().length < 2 ? 'Please tell us your name.' : '', n); if (!r1) { ok = false; first = first || n; }
    var r2 = err('e-phone', !/^[+\d][\d\s-]{8,14}$/.test(p.value.trim()) ? 'Enter a valid phone number (10 digits).' : '', p); if (!r2) { ok = false; first = first || p; }
    var r3 = err('e-email', e.value && !/^\S+@\S+\.\S+$/.test(e.value) ? 'That email doesn’t look right.' : '', e); if (!r3) { ok = false; first = first || e; }
    if (first) first.focus();
    return ok;
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!validate()) return;
    var f = Object.fromEntries(new FormData(form).entries());
    f.serviceTitle = (GSK.getService(f.service) || {}).title;
    f.package = tour ? tour.title : '';
    f.createdAt = new Date().toISOString();

    var store = JSON.parse(localStorage.getItem('gsk_enquiries') || '[]'); store.push(f);
    localStorage.setItem('gsk_enquiries', JSON.stringify(store));          // demo-mode persistence
    if (cfg.api.enquiryEndpoint) {
      fetch(cfg.api.enquiryEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) }).catch(function () {});
    }

    var BLANK = '\u0001';
    var lines = ['Hello GSK Tour & Travels, I’d like a quote.', BLANK,
      'Service: ' + f.serviceTitle, f.package && 'Package: ' + f.package, 'Trip: ' + f.trip,
      (f.from || f.to) && 'Route: ' + (f.from || '—') + ' → ' + (f.to || '—'),
      f.date && 'Date: ' + f.date + (f.time ? ' ' + f.time : ''), 'Travellers: ' + f.pax, 'Vehicle: ' + f.vehicle,
      f.budget !== 'Not sure yet' && 'Budget: ' + f.budget, f.message && 'Note: ' + f.message, BLANK, 'Name: ' + f.name, 'Phone: ' + f.phone]
      .filter(Boolean).map(function (l) { return l === BLANK ? '' : l; });
    var text = lines.join('\n');
    GSK.$('#summary').textContent = text;
    GSK.$('#wa-send').href = GSK.waLink(text);
    form.hidden = true;
    var sel = GSK.$('.selected-pkg'); if (sel) sel.hidden = true;
    success.hidden = false; success.focus();
    success.scrollIntoView({ behavior: GSK.reducedMotion ? 'auto' : 'smooth', block: 'start' });
  });

  GSK.$('#again').addEventListener('click', function () {
    form.reset(); form.hidden = false; success.hidden = true; form.elements.service.focus();
  });
  GSK.initReveal(app);
};
