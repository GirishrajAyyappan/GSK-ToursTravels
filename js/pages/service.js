/* Service detail page (reusable template, ?id=acting-driver) */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.service = function () {
  var s = GSK.getService(GSK.param('id'));
  if (!s) return GSK.notFound('service', 'services');
  var app = GSK.$('#app');
  GSK.setSeo({ title: s.title + ' — ' + s.tagline + ' | GSK Tour & Travels', description: s.short + ' ' + s.overview.slice(0, 110) + '…', image: s.image, query: '?id=' + s.id });

  var related = (s.id === 'tour-packages' || s.id === 'student-tours')
    ? GSK.tours.filter(function (t) { return s.id === 'student-tours' ? t.type === 'Student IV' : t.type !== 'Student IV'; }).slice(0, 3) : [];

  app.innerHTML =
    GSK.detailHero({
      image: s.image, alt: s.title,
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Services', href: GSK.link('services') }, { label: s.title }],
      eyebrow: s.no + ' — ' + s.tripTypes.join(' · '),
      title: s.title,
      lede: s.tagline + ' ' + s.short,
      meta: [['Trip types', s.tripTypes.join(', ')], ['Coverage', 'TN · KL · KA · AP · TG']]
    }) +
    '<section class="section"><div class="container detail-layout">' +
      '<div class="detail-main">' +
        '<div class="prose-lg reveal"><h2>The idea</h2><p>' + s.overview + '</p></div>' +

        '<div class="block reveal"><h2>Who it’s for</h2><ul class="tick-list tick-list--lg">' + s.who.map(function (w) { return '<li>' + w + '</li>'; }).join('') + '</ul></div>' +

        '<div class="block"><h2 class="reveal">What you get</h2><ul class="feature-list">' + s.features.map(function (f) {
          return '<li class="reveal"><i class="fa-solid ' + f[0] + '" aria-hidden="true"></i><div><h3>' + f[1] + '</h3><p>' + f[2] + '</p></div></li>';
        }).join('') + '</ul></div>' +

        '<div class="block"><h2 class="reveal">How it works</h2><ol class="steps">' + s.steps.map(function (st, i) {
          return '<li class="reveal"><span>' + (i + 1) + '</span><h3>' + st[0] + '</h3><p>' + st[1] + '</p></li>';
        }).join('') + '</ol></div>' +

        '<div class="block reveal"><h2>Pricing, plainly</h2><div class="price-note"><p class="price-note__amt">Contact us for a quote</p><p>' + s.priceNote + ' Final quote is confirmed on WhatsApp before you pay anything.</p></div></div>' +

        (related.length ? '<div class="block"><h2 class="reveal">Popular packages</h2><div class="card-grid card-grid--2">' + related.map(function (t) { return GSK.tourCard(t); }).join('') + '</div></div>' : '') +

        '<div class="block"><h2 class="reveal">Questions, answered</h2>' + GSK.faqHtml(GSK.getFaqs(s.faqIds), 'sf') + '</div>' +
      '</div>' +

      /* Sticky quote panel: package / trip selection */
      '<aside class="quote-panel reveal" aria-label="Request a quote">' +
        '<p class="eyebrow">Get my quote</p><h2>Plan this service</h2>' +
        '<form data-service-form>' +
          '<fieldset class="pill-group"><legend>Trip type</legend>' + s.tripTypes.map(function (t, i) {
            return '<label><input type="radio" name="trip" value="' + t + '"' + (i === 0 ? ' checked' : '') + '><span>' + t + '</span></label>'; }).join('') + '</fieldset>' +
          '<div class="field"><label for="sp-from">Pickup</label><input id="sp-from" name="from" type="text" placeholder="Area / city"></div>' +
          '<div class="field"><label for="sp-to">Drop / destination</label><input id="sp-to" name="to" type="text" placeholder="Where to?"></div>' +
          '<div class="field"><label for="sp-date">Date</label><input id="sp-date" name="date" type="date"></div>' +
          '<button class="btn btn--accent btn--block" type="submit">Continue <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>' +
        '</form>' +
        '<a class="btn btn--outline-dark btn--block" href="' + GSK.waLink('Hello GSK, I’m interested in: ' + s.title + '. Please share a quote.') + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Ask on WhatsApp</a>' +
        '<p class="quote-panel__note"><i class="fa-solid fa-clock" aria-hidden="true"></i> Usual reply time: under 2 hours, 6 am – 10 pm.</p>' +
      '</aside>' +
    '</div></section>' +

    '<section class="section section--tint"><div class="container">' +
      GSK.sectionHeader({ eyebrow: 'More from GSK', title: 'Other ways we can <em>help you travel.</em>' }) +
      '<div class="more-services">' + GSK.services.filter(function (x) { return x.id !== s.id; }).slice(0, 3).map(function (x) {
        return '<a class="more-services__item reveal" href="' + GSK.link('service', { id: x.id }) + '"><span>' + x.no + '</span><h3>' + x.title + '</h3><p>' + x.short + '</p><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>';
      }).join('') + '</div></div></section>' +
    GSK.ctaSection({ params: { service: s.id }, waText: 'Hello GSK, I’d like a quote for ' + s.title + '.' });

  GSK.bindAccordion(GSK.$('.faq', app));
  var form = GSK.$('[data-service-form]', app);
  GSK.$('#sp-date', form).min = new Date().toISOString().slice(0, 10);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = new FormData(form);
    location.href = GSK.link('contact', { service: s.id, trip: f.get('trip'), from: f.get('from'), to: f.get('to'), date: f.get('date') });
  });
  GSK.initReveal(app);
};
