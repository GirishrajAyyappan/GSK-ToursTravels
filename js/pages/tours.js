/* Tour packages listing — cards shown directly, high-priority packages first */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.tours = function () {
  var app = GSK.$('#app');
  var list = GSK.tours.slice().sort(function (a, b) { return (a.priority || 99) - (b.priority || 99); });

  app.innerHTML =
    '<section class="section section--tight"><div class="container">' +
      '<h1 class="sr-only">Tour packages</h1>' +
      '<div class="card-grid tour-grid" id="tgrid">' + list.map(function (t) { return GSK.tourCard(t); }).join('') + '</div>' +
    '</div></section>' +
    '<section class="section section--tint custom-tour"><div class="container custom-tour__inner">' +
      GSK.sectionHeader({ eyebrow: 'Don’t see your route?', title: 'We’ll plan it <em>from scratch.</em>', lede: 'Tell us the start, the end and what you want to see on the way. A route specialist will reply with a plan and a fixed price.' }) +
      '<a class="btn btn--accent btn--lg" href="' + GSK.link('contact', { service: 'tour-packages' }) + '">Plan my route <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></section>' +
    GSK.ctaSection({ params: { service: 'tour-packages' } });

  GSK.initReveal(app);
};
