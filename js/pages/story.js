/* Story detail page (?id=chennai-to-kanyakumari-road-guide) */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.story = function () {
  var s = GSK.getStory(GSK.param('id'));
  if (!s) return GSK.notFound('story', 'stories');
  var app = GSK.$('#app');
  GSK.setSeo({ title: s.title + ' | GSK Travel Stories', description: s.excerpt, image: s.image, query: '?id=' + s.id });

  var dests = s.destinationIds.map(GSK.getDestination).filter(Boolean);
  var tour = s.tourId && GSK.getTour(s.tourId);
  var more = GSK.stories.filter(function (x) { return x.id !== s.id; }).slice(0, 3);

  var body = s.body.map(function (b) {
    if (b.h) return '<h2>' + b.h + '</h2>';
    if (b.quote) return '<blockquote class="pullquote-inline">“' + b.quote + '”</blockquote>';
    return '<p>' + b.p + '</p>';
  }).join('');

  app.innerHTML =
    GSK.detailHero({
      image: s.image, alt: s.title,
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Travel Stories', href: GSK.link('stories') }, { label: s.category }],
      eyebrow: s.category, title: s.title,
      meta: [['By', s.author], ['Published', GSK.date(s.date)], ['Reading time', s.readMins + ' min']]
    }) +
    '<section class="section"><div class="container article-layout">' +
      '<article class="article reveal"><p class="article__lede">' + s.excerpt + '</p>' + body +
        '<footer class="article__author"><span class="team__avatar" aria-hidden="true">' + s.author.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2) + '</span><div><strong>' + s.author + '</strong><span>' + s.role + '</span></div></footer>' +
      '</article>' +
      '<aside class="article-side">' +
        (tour ? '<div class="side-card reveal"><p class="eyebrow">Take this route</p><h3>' + tour.title + '</h3><p>' + tour.days + ' days · from ' + GSK.price(tour.price) + '</p><a class="btn btn--accent btn--block" href="' + GSK.link('tour', { id: tour.id }) + '">View package</a></div>' : '') +
        '<div class="side-card side-card--dark reveal"><p class="eyebrow">Plan your trip</p><h3>Want a driver who knows this road?</h3><a class="btn btn--accent btn--block" href="' + GSK.link('contact', tour ? { tour: tour.id } : {}) + '">Get my quote</a>' +
          '<a class="btn btn--ghost-light btn--block" href="' + GSK.waLink('Hello GSK, I read your story: ' + s.title) + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp</a></div>' +
      '</aside>' +
    '</div></section>' +

    (dests.length ? '<section class="section section--tint"><div class="container">' + GSK.sectionHeader({ eyebrow: 'Related destinations', title: 'Where this <em>story goes.</em>' }) +
      '<div class="card-grid card-grid--2">' + dests.map(function (d) { return GSK.destinationCard(d, 'wide'); }).join('') + '</div></div></section>' : '') +

    '<section class="section"><div class="container">' + GSK.sectionHeader({ eyebrow: 'Keep reading', title: 'More <em>stories.</em>', action: { href: GSK.link('stories'), label: 'All stories' } }) +
      '<div class="card-grid card-grid--3">' + more.map(function (x) { return GSK.storyCard(x); }).join('') + '</div></div></section>' +
    GSK.ctaSection({ params: tour ? { tour: tour.id } : {} });

  GSK.addJsonLd({ '@context': 'https://schema.org', '@type': 'Article', headline: s.title, author: { '@type': 'Person', name: s.author },
    datePublished: s.date, description: s.excerpt, publisher: { '@type': 'Organization', name: GSK.config.brand } });
  GSK.initReveal(app);
};
