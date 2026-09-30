/* Presentational components — each returns an HTML string from a data object. */
window.GSK = window.GSK || {};

GSK.sectionHeader = function (o) {
  return '<header class="section-header' + (o.center ? ' is-center' : '') + (o.light ? ' is-light' : '') + ' reveal">' +
    (o.eyebrow ? '<p class="eyebrow">' + o.eyebrow + '</p>' : '') +
    '<h2' + (o.id ? ' id="' + o.id + '"' : '') + '>' + o.title + '</h2>' +
    (o.lede ? '<p class="lede">' + o.lede + '</p>' : '') +
    (o.action ? '<a class="link-arrow" href="' + o.action.href + '">' + o.action.label + ' <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>' : '') +
    '</header>';
};

GSK.breadcrumb = function (items) {
  return '<nav class="breadcrumb" aria-label="Breadcrumb"><ol>' + items.map(function (it, i) {
    return '<li>' + (it.href && i < items.length - 1 ? '<a href="' + it.href + '">' + GSK.esc(it.label) + '</a>' : '<span aria-current="page">' + GSK.esc(it.label) + '</span>') + '</li>';
  }).join('') + '</ol></nav>';
};

/* Editorial page header for list pages (light) */
GSK.pageHeader = function (o) {
  return '<section class="page-header"><div class="container">' +
    (o.crumbs ? GSK.breadcrumb(o.crumbs) : '') +
    '<div class="page-header__grid">' +
      '<div><p class="eyebrow">' + o.eyebrow + '</p><h1>' + o.title + '</h1></div>' +
      '<p class="lede">' + o.lede + '</p>' +
    '</div></div></section>';
};

/* Full-bleed image hero for detail pages (dark) */
GSK.detailHero = function (o) {
  return '<section class="detail-hero"><div class="detail-hero__media">' +
    GSK.img(o.image, { w: 1800, alt: o.alt || o.title, eager: true, sizes: '100vw' }) + '</div>' +
    '<div class="container detail-hero__body">' +
      (o.crumbs ? GSK.breadcrumb(o.crumbs) : '') +
      (o.eyebrow ? '<p class="eyebrow">' + o.eyebrow + '</p>' : '') +
      '<h1>' + o.title + '</h1>' +
      (o.lede ? '<p class="lede">' + o.lede + '</p>' : '') +
      (o.meta ? '<ul class="meta-row">' + o.meta.map(function (m) {
        return '<li><span>' + m[0] + '</span><strong>' + m[1] + '</strong></li>'; }).join('') + '</ul>' : '') +
    '</div></section>';
};

GSK.ctaSection = function (o) {
  o = o || {};
  var wa = GSK.waLink(o.waText || 'Hello GSK Tour & Travels, I would like a quote.');
  return '<section class="cta-band"><div class="container cta-band__inner">' +
    '<div class="reveal"><p class="eyebrow">' + (o.eyebrow || 'Ready when you are') + '</p>' +
    '<h2>' + (o.title || 'Tell us where you need to go. <em>We’ll handle the rest.</em>') + '</h2></div>' +
    '<div class="cta-band__actions reveal">' +
      '<a class="btn btn--dark btn--lg" href="' + (o.href || GSK.link('contact', o.params)) + '">' + (o.label || 'Get my quote') + ' <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>' +
      '<a class="btn btn--outline-dark btn--lg" href="' + wa + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Chat on WhatsApp</a>' +
    '</div></div></section>';
};

GSK.statBlock = function (s) {
  return '<div class="stat reveal"><strong><span data-count="' + s.value + '"' + (s.decimals ? ' data-dec="' + s.decimals + '"' : '') + '>0</span>' + (s.suffix || '') + '</strong><span>' + s.label + '</span></div>';
};

/* ---- Services ---------------------------------------------------------- */
GSK.serviceRow = function (s) {
  return '<a class="svc-row reveal" href="' + GSK.link('service', { id: s.id }) + '">' +
    '<span class="svc-row__no">' + s.no + '</span>' +
    '<span class="svc-row__main"><h3>' + s.title + '</h3><p>' + s.short + '</p></span>' +
    '<span class="svc-row__meta"><span>' + s.tripTypes.join(' · ') + '</span><strong>from ' + s.priceFrom + ' <small>' + s.priceUnit + '</small></strong></span>' +
    '<span class="svc-row__thumb" aria-hidden="true">' + GSK.img(s.image, { w: 520, alt: '', sizes: '260px' }) + '</span>' +
    '<span class="svc-row__go" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span></a>';
};

GSK.serviceFeature = function (s, flip) {
  return '<article class="svc-feature' + (flip ? ' is-flip' : '') + ' reveal">' +
    '<div class="svc-feature__media">' + GSK.img(s.image, { w: 1000, alt: s.title + ' — GSK Tour & Travels' }) + '<span class="svc-feature__no">' + s.no + '</span></div>' +
    '<div class="svc-feature__body">' +
      '<p class="eyebrow"><i class="fa-solid ' + s.icon + '" aria-hidden="true"></i> ' + s.tripTypes.join(' · ') + '</p>' +
      '<h2>' + s.title + '</h2><p class="svc-feature__tag">' + s.tagline + '</p>' +
      '<p>' + s.overview + '</p>' +
      '<ul class="tick-list">' + s.who.slice(0, 3).map(function (w) { return '<li>' + w + '</li>'; }).join('') + '</ul>' +
      '<div class="svc-feature__foot"><p class="price-tag"><small>from</small> ' + s.priceFrom + ' <small>' + s.priceUnit + '</small></p>' +
      '<a class="btn btn--dark" href="' + GSK.link('service', { id: s.id }) + '">Explore ' + s.title.split(' ')[0] + ' <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div>' +
    '</div></article>';
};

/* ---- Tours ------------------------------------------------------------- */
GSK.tourCard = function (t, variant) {
  var href = GSK.link('tour', { id: t.id });
  if (variant === 'large') {
    return '<a class="tour-card tour-card--large reveal" href="' + href + '">' +
      '<div class="tour-card__media">' + GSK.img(t.image, { w: 1400, alt: t.title, sizes: '(max-width: 900px) 100vw, 60vw' }) + '</div>' +
      '<div class="tour-card__overlay"><span class="chip">' + t.type + '</span>' +
        '<h3>' + t.title + '</h3><p>' + t.summary + '</p>' +
        '<div class="tour-card__foot"><span>' + t.days + 'D / ' + t.nights + 'N</span><span>From <strong>' + GSK.price(t.price) + '</strong> <small>' + t.priceUnit + '</small></span></div>' +
      '</div></a>';
  }
  return '<a class="tour-card reveal" href="' + href + '">' +
    '<div class="tour-card__media">' + GSK.img(t.image, { w: 800, alt: t.title, sizes: '(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw' }) +
      '<span class="chip chip--on-image">' + t.days + 'D / ' + t.nights + 'N</span></div>' +
    '<div class="tour-card__body">' +
      '<p class="tour-card__route">' + t.from + ' <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i> ' + t.to + '</p>' +
      '<h3>' + t.title + '</h3>' +
      '<ul class="dot-list">' + t.highlights.slice(0, 2).map(function (h) { return '<li>' + h + '</li>'; }).join('') + '</ul>' +
      '<div class="tour-card__foot"><span>' + t.type + '</span><span>From <strong>' + GSK.price(t.price) + '</strong></span></div>' +
    '</div></a>';
};

/* ---- Destinations ------------------------------------------------------ */
GSK.destinationCard = function (d, variant) {
  var href = GSK.link('destination', { id: d.id });
  var cls = 'dest-card dest-card--' + (variant || 'tall') + ' reveal';
  if (variant === 'list') {
    return '<a class="' + cls + '" href="' + href + '"><div class="dest-card__media">' + GSK.img(d.image, { w: 500, alt: d.name, sizes: '160px' }) + '</div>' +
      '<div class="dest-card__body"><p class="eyebrow">' + d.state + '</p><h3>' + d.name + '</h3><p>' + d.short + '</p>' +
      '<span class="link-arrow">' + d.from + ' <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span></div></a>';
  }
  return '<a class="' + cls + '" href="' + href + '"><div class="dest-card__media">' + GSK.img(d.image, { w: variant === 'wide' ? 1200 : 800, alt: d.name + ', ' + d.state, sizes: '(max-width: 720px) 80vw, 33vw' }) + '</div>' +
    '<div class="dest-card__body"><p class="eyebrow">' + d.tag + '</p><h3>' + d.name + '</h3><p class="dest-card__short">' + d.short + '</p>' +
    '<span class="dest-card__from">' + d.from + '</span></div></a>';
};

/* ---- Stories ----------------------------------------------------------- */
GSK.storyCard = function (s, variant) {
  var href = GSK.link('story', { id: s.id });
  if (variant === 'feature') {
    return '<a class="story-feature reveal" href="' + href + '"><div class="story-feature__media">' + GSK.img(s.image, { w: 1400, alt: s.title, sizes: '(max-width: 900px) 100vw, 60vw' }) + '</div>' +
      '<div class="story-feature__body"><p class="eyebrow">' + s.category + ' · ' + s.readMins + ' min read</p><h2>' + s.title + '</h2><p>' + s.excerpt + '</p>' +
      '<span class="story-meta">' + s.author + ' · ' + GSK.date(s.date) + '</span></div></a>';
  }
  return '<a class="story-card reveal" href="' + href + '"><div class="story-card__media">' + GSK.img(s.image, { w: 700, alt: s.title, sizes: '(max-width: 720px) 100vw, 33vw' }) + '</div>' +
    '<p class="eyebrow">' + s.category + ' · ' + s.readMins + ' min</p><h3>' + s.title + '</h3>' +
    '<span class="story-meta">' + s.author + ' · ' + GSK.date(s.date) + '</span></a>';
};

/* ---- Testimonial ------------------------------------------------------- */
GSK.testimonialSlide = function (t, i) {
  return '<figure class="quote' + (i === 0 ? ' is-active' : '') + '" data-i="' + i + '" ' + (i === 0 ? '' : 'hidden') + '>' +
    '<blockquote><p>“' + t.quote + '”</p></blockquote>' +
    '<figcaption><strong>' + t.name + '</strong><span>' + t.place + ' · ' + t.service + '</span></figcaption></figure>';
};
