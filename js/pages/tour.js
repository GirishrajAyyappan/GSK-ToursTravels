/* Tour package detail page (?id=chennai-kanyakumari) */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.tour = function () {
  var t = GSK.getTour(GSK.param('id'));
  if (!t) return GSK.notFound('package', 'tours');
  var app = GSK.$('#app');
  GSK.setSeo({ title: t.title + ' — ' + t.days + ' Days from ' + GSK.price(t.price) + ' | GSK Tour & Travels', description: t.summary, image: t.image, query: '?id=' + t.id });

  var dests = t.destinationIds.map(GSK.getDestination).filter(Boolean);
  var related = GSK.tours.filter(function (x) { return x.id !== t.id && (x.regionFilter === t.regionFilter || x.type === t.type); }).slice(0, 3);
  if (related.length < 3) related = related.concat(GSK.tours.filter(function (x) { return x.id !== t.id && related.indexOf(x) < 0; })).slice(0, 3);

  var list = function (arr, icon) { return '<ul class="icon-list">' + arr.map(function (i) { return '<li><i class="fa-solid ' + icon + '" aria-hidden="true"></i>' + i + '</li>'; }).join('') + '</ul>'; };

  app.innerHTML =
    GSK.detailHero({
      image: t.image, alt: t.title,
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Tour Packages', href: GSK.link('tours') }, { label: t.title }],
      eyebrow: t.from + ' → ' + t.to + ' · ' + t.type,
      title: t.title, lede: t.summary,
      meta: [['Duration', t.days + ' days / ' + t.nights + ' nights'], ['Starting price', GSK.price(t.price)], ['Priced', t.priceUnit], ['Level', t.tier]]
    }) +

    '<nav class="subnav" aria-label="On this page"><div class="container"><ul>' +
      [['overview', 'Overview'], ['itinerary', 'Itinerary'], ['inclusions', 'Inclusions'], ['stays', 'Stays & travel'], ['gallery', 'Gallery'], ['faq', 'FAQ']].map(function (a) {
        return '<li><a href="#' + a[0] + '">' + a[1] + '</a></li>'; }).join('') + '</ul></div></nav>' +

    '<section class="section"><div class="container detail-layout">' +
      '<div class="detail-main">' +
        '<section id="overview" class="block reveal"><h2>Overview</h2><p class="prose-lg">' + t.overview + '</p>' +
          '<h3 class="mini-title">Highlights</h3><ol class="highlight-list">' + t.highlights.map(function (h, i) { return '<li><span>' + String(i + 1).padStart(2, '0') + '</span>' + h + '</li>'; }).join('') + '</ol></section>' +

        '<section id="itinerary" class="block"><h2 class="reveal">Day by day</h2>' + GSK.itineraryHtml(t.itinerary) + '</section>' +

        '<section id="inclusions" class="block reveal"><h2>What’s included</h2><div class="incl-grid">' +
          '<div><h3 class="mini-title">Included</h3>' + list(t.inclusions, 'fa-check') + '</div>' +
          '<div><h3 class="mini-title">Not included</h3>' + list(t.exclusions, 'fa-xmark').replace('icon-list', 'icon-list icon-list--x') + '</div></div></section>' +

        '<section id="stays" class="block reveal"><h2>Stays & travel</h2>' +
          '<table class="stay-table"><caption class="sr-only">Hotels on this package</caption><thead><tr><th scope="col">Stop</th><th scope="col">Stay</th><th scope="col">Category</th></tr></thead><tbody>' +
          t.hotels.map(function (h) { return '<tr><th scope="row">' + h[0] + '</th><td>' + h[1] + '</td><td>' + h[2] + '</td></tr>'; }).join('') + '</tbody></table>' +
          '<div class="transport"><i class="fa-solid fa-car-side" aria-hidden="true"></i><div><h3>Your vehicle & driver</h3><p>' + t.transport + ' Your driver has completed this route many times and doubles as your local guide.</p></div></div>' +
          '<h3 class="mini-title">Good to know</h3>' + list(t.important, 'fa-circle-info') + '</section>' +

        '<section id="gallery" class="block"><h2 class="reveal">Gallery</h2><div id="tgal">' + GSK.galleryHtml(t.gallery, t.title) + '</div></section>' +

        '<section id="faq" class="block"><h2 class="reveal">Questions, answered</h2>' + GSK.faqHtml(GSK.getFaqs(t.faqIds), 'tf') + '</section>' +
      '</div>' +

      '<aside class="quote-panel quote-panel--price reveal" aria-label="Enquire about this package">' +
        '<p class="eyebrow">From</p><p class="quote-panel__price">' + GSK.price(t.price) + ' <small>' + t.priceUnit + '</small></p>' +
        '<form data-tour-form>' +
          '<div class="field"><label for="tp-date">Preferred start date</label><input id="tp-date" name="date" type="date"></div>' +
          '<div class="field"><label for="tp-pax">Travellers</label><select id="tp-pax" name="pax">' + [1, 2, 3, 4, 5, 6, 7, 8, '9–12', '13+'].map(function (n) { return '<option>' + n + '</option>'; }).join('') + '</select></div>' +
          '<fieldset class="pill-group"><legend>Trip</legend><label><input type="radio" name="trip" value="Round trip" checked><span>Round trip</span></label><label><input type="radio" name="trip" value="One-way circuit"><span>One-way</span></label></fieldset>' +
          '<button class="btn btn--accent btn--block" type="submit">Enquire about this package <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>' +
        '</form>' +
        '<a class="btn btn--outline-dark btn--block" href="' + GSK.waLink('Hello GSK, I’m interested in the package: ' + t.title + '. Please share details.') + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Chat on WhatsApp</a>' +
        '<ul class="quote-panel__trust"><li><i class="fa-solid fa-lock" aria-hidden="true"></i> No payment to enquire</li><li><i class="fa-solid fa-pen-ruler" aria-hidden="true"></i> Fully customisable</li><li><i class="fa-solid fa-clock" aria-hidden="true"></i> Reply within 2 hours</li></ul>' +
      '</aside>' +
    '</div></section>' +

    (dests.length ? '<section class="section section--tint"><div class="container">' + GSK.sectionHeader({ eyebrow: 'On this route', title: 'Places you’ll <em>visit.</em>' }) +
      '<div class="card-grid card-grid--3">' + dests.map(function (d) { return GSK.destinationCard(d, 'wide'); }).join('') + '</div></div></section>' : '') +

    '<section class="section"><div class="container">' + GSK.sectionHeader({ eyebrow: 'You may also like', title: 'Related <em>packages.</em>', action: { href: GSK.link('tours'), label: 'All packages' } }) +
      '<div class="card-grid card-grid--3">' + related.map(function (x) { return GSK.tourCard(x); }).join('') + '</div></div></section>' +
    GSK.ctaSection({ params: { tour: t.id, service: t.type === 'Student IV' ? 'student-tours' : 'tour-packages' }, waText: 'Hello GSK, I’d like a quote for: ' + t.title });

  GSK.bindAccordion(GSK.$('.faq', app));
  GSK.bindItinerary(GSK.$('.itin', app));
  GSK.bindGallery(GSK.$('#tgal', app), t.gallery, t.title);

  var form = GSK.$('[data-tour-form]', app);
  GSK.$('#tp-date', form).min = new Date().toISOString().slice(0, 10);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = new FormData(form);
    location.href = GSK.link('contact', { tour: t.id, service: t.type === 'Student IV' ? 'student-tours' : 'tour-packages', trip: f.get('trip'), date: f.get('date'), pax: f.get('pax') });
  });

  GSK.addJsonLd({ '@context': 'https://schema.org', '@type': 'TouristTrip', name: t.title, description: t.summary,
    offers: { '@type': 'Offer', priceCurrency: 'INR', price: t.price }, provider: { '@type': 'TravelAgency', name: GSK.config.brand } });
  GSK.initReveal(app);
};
