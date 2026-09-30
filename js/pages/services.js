/* Services overview page */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.services = function () {
  var app = GSK.$('#app');

  var chooser = [
    ['I own a car and need someone to drive it tonight', 'acting-driver'],
    ['I need a car and a driver for a trip or airport run', 'cab-with-driver'],
    ['My parents need regular hospital visits', 'senior-care-rides'],
    ['We’re planning a family or pilgrimage tour', 'tour-packages'],
    ['Our college is planning an industrial visit', 'student-tours'],
    ['Our company needs daily employee transport', 'corporate-pickups']
  ];

  app.innerHTML =
    GSK.pageHeader({
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Services' }],
      eyebrow: 'Services',
      title: 'Six ways to get there, <em>well looked after.</em>',
      lede: 'Every GSK service shares the same standard: a verified driver, a clear price and someone to call if plans change. Single trip or round trip — always.'
    }) +
    '<section class="section section--tight"><div class="container svc-features">' +
      GSK.services.map(function (s, i) { return GSK.serviceFeature(s, i % 2 === 1); }).join('') +
    '</div></section>' +
    '<section class="section section--tint chooser"><div class="container chooser__grid">' +
      GSK.sectionHeader({ eyebrow: 'Not sure where to start?', title: 'Tell us your situation. <em>We’ll point you right.</em>' }) +
      '<ul class="chooser__list">' + chooser.map(function (c, i) {
        return '<li class="reveal"><a href="' + GSK.link('service', { id: c[1] }) + '"><span>' + String(i + 1).padStart(2, '0') + '</span>' + c[0] + '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></li>';
      }).join('') + '</ul></div></section>' +
    GSK.ctaSection({ title: 'Not sure which service fits? <em>Just ask us.</em>', eyebrow: 'Talk to a person' });

  GSK.initReveal(app);
};
