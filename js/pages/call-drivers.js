/* Call Drivers: tariff cards + booking form */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK['pages']['call-drivers'] = function () {
  var app = GSK.$('#app');
  var want = GSK.param('trip');

  app.innerHTML =
    GSK.pageHeader({
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Call Drivers' }],
      eyebrow: 'Call drivers · Tariff',
      title: 'Simple rates, <em>no surprises.</em>',
      lede: 'Pick the kind of trip, see what it costs and book on WhatsApp. The fare you see here is the fare you pay.'
    }) +
    '<section class="section section--tight"><div class="container tariff-layout">' +
      '<div class="tariff-grid">' + GSK.tariffs.map(function (t) {
        return '<article class="tariff-card reveal" id="' + t.id + '"><span class="tariff-card__icon" aria-hidden="true"><i class="fa-solid ' + t.icon + '"></i></span>' +
          '<h2>' + t.title + '</h2>' +
          '<p class="tariff-card__price"><strong>' + t.headline + '</strong><span>' + t.headlineNote + '</span></p>' +
          '<ul class="tick-list">' + t.lines.map(function (l) { return '<li>' + l + '</li>'; }).join('') + '</ul>' +
          '<button type="button" class="btn btn--outline-dark btn--sm" data-pick="' + t.id + '">Book this trip</button></article>';
      }).join('') + '</div>' +
      '<aside class="tariff-book reveal" id="book" aria-label="Book a driver">' + GSK.bookingForm({ title: 'Book your driver', active: GSK.tariffs.some(function (t) { return t.id === want; }) ? want : 'oneway' }) + '</aside>' +
    '</div></section>' +
    GSK.ctaSection({ eyebrow: 'Need something else?', title: 'Hourly, monthly or <em>custom trips?</em>' });

  var form = GSK.$('[data-booking]', app);
  GSK.bindBooking(form);
  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-pick]'); if (!b) return;
    var tab = GSK.$('.booking__tab[data-trip="' + b.getAttribute('data-pick') + '"]', form);
    tab.click();
    GSK.$('#book', app).scrollIntoView({ behavior: GSK.reducedMotion ? 'auto' : 'smooth', block: 'center' });
    form.elements.from.focus({ preventScroll: true });
  });
  GSK.initReveal(app);
};
