/* Destination detail page (?id=kerala) */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.destination = function () {
  var d = GSK.getDestination(GSK.param('id'));
  if (!d) return GSK.notFound('destination', 'destinations');
  var app = GSK.$('#app');
  GSK.setSeo({ title: d.name + ' Travel Guide & Tour Packages | GSK Tour & Travels', description: d.intro.slice(0, 150) + '…', image: d.image, query: '?id=' + d.id });

  var tours = d.tourIds.map(GSK.getTour).filter(Boolean);
  var others = GSK.destinations.filter(function (x) { return x.id !== d.id; }).slice(0, 3);

  app.innerHTML =
    GSK.detailHero({
      image: d.image, alt: d.name + ', ' + d.state,
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Destinations', href: GSK.link('destinations') }, { label: d.name }],
      eyebrow: d.state + ' · ' + d.tag, title: d.name, lede: d.short,
      meta: [['Best time', d.bestTime], ['Ideal stay', d.duration], ['Packages', d.from]]
    }) +

    '<section class="section"><div class="container dest-intro">' +
      '<div class="dest-intro__text reveal"><p class="eyebrow">The place</p><p class="prose-xl">' + d.intro + '</p>' +
        '<div class="actions"><a class="btn btn--accent" href="' + GSK.link('contact', { destination: d.name, service: 'tour-packages' }) + '">Enquire about ' + d.name.split(' ')[0] + ' <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>' +
        '<a class="btn btn--outline-dark" href="' + GSK.waLink('Hello GSK, I’d like to plan a trip to ' + d.name + '.') + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp</a></div></div>' +
      '<dl class="facts reveal"><div><dt>Best time</dt><dd>' + d.bestTime + '</dd></div><div><dt>Ideal duration</dt><dd>' + d.duration + '</dd></div><div><dt>Starting price</dt><dd>' + d.from + '</dd></div><div><dt>State</dt><dd>' + d.state + '</dd></div></dl>' +
    '</div></section>' +

    '<section class="section section--dark dest-highlights"><div class="container">' +
      GSK.sectionHeader({ light: true, eyebrow: 'Highlights', title: 'What you’ll <em>remember.</em>' }) +
      '<ol class="big-list">' + d.highlights.map(function (h, i) { return '<li class="reveal"><span>' + String(i + 1).padStart(2, '0') + '</span><strong>' + h + '</strong></li>'; }).join('') + '</ol>' +
    '</div></section>' +

    '<section class="section driver-note"><div class="container driver-note__grid">' +
      '<figure class="pullquote reveal"><blockquote>“' + d.driverNote + '”</blockquote><figcaption>— A GSK driver’s note on ' + d.name + '</figcaption></figure>' +
      '<div class="reveal"><h2>Travel information</h2><dl class="info-list">' + d.info.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join('') + '</dl></div>' +
    '</div></section>' +

    '<section class="section section--tint"><div class="container">' + GSK.sectionHeader({ eyebrow: 'Gallery', title: d.name + ' in <em>pictures.</em>' }) +
      '<div id="dgal">' + GSK.galleryHtml(d.gallery, d.name) + '</div></div></section>' +

    (tours.length ? '<section class="section"><div class="container">' + GSK.sectionHeader({ eyebrow: 'Packages', title: 'Ready-made ways to <em>see ' + d.name.split(' ')[0] + '.</em>', action: { href: GSK.link('tours'), label: 'All packages' } }) +
      '<div class="card-grid card-grid--3">' + tours.map(function (t) { return GSK.tourCard(t); }).join('') + '</div></div></section>' : '') +

    '<section class="section section--tint"><div class="container">' + GSK.sectionHeader({ eyebrow: 'Keep exploring', title: 'More <em>destinations.</em>' }) +
      '<div class="card-grid card-grid--3">' + others.map(function (x) { return GSK.destinationCard(x, 'wide'); }).join('') + '</div></div></section>' +
    GSK.ctaSection({ params: { destination: d.name, service: 'tour-packages' }, title: 'Thinking of ' + d.name + '? <em>Let’s plan it.</em>' });

  GSK.bindGallery(GSK.$('#dgal', app), d.gallery, d.name);
  GSK.initReveal(app);
};
