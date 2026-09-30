/* About page. Team names/roles are SAMPLE content — replace with real people. */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.about = function () {
  var app = GSK.$('#app'), cfg = GSK.config;

  var values = [
    ['Safety before speed', 'We will always choose the slower road that gets you there calmly.'],
    ['Say what we’ll do', 'Fixed quotes, clear inclusions and no hidden charges — in writing.'],
    ['Respect for the driver', 'Well-treated drivers drive better. We pay fairly, train continuously and listen.'],
    ['Warmth, not scripts', 'Real people answer the phone. They know the route and they know your name.']
  ];
  var team = [
    ['GS', 'Founder & Managing Director', 'Started GSK with one car and a simple rule: treat every passenger like family.'],
    ['OP', 'Head of Operations', 'Builds the routes, rosters and back-up plans that keep trips on time.'],
    ['DT', 'Driver Training Lead', 'Runs onboarding, road assessments and annual refreshers for every chauffeur.'],
    ['CC', 'Customer Care Lead', 'Leads the team that picks up at 6 am and stays on the line until you’re home.']
  ];
  var trust = [
    ['fa-id-badge', 'Verified chauffeurs', 'ID, licence, address and background checks before anyone drives for us.'],
    ['fa-car-on', 'Well-kept vehicles', 'Commercial-permit, insured and serviced vehicles, cleaned before every trip.'],
    ['fa-location-crosshairs', 'Tracked trips', 'Live trip updates for families and corporate clients.'],
    ['fa-file-invoice-dollar', 'Proper paperwork', 'GST invoices, clear terms and receipts for every booking.']
  ];

  app.innerHTML =
    GSK.pageHeader({
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'About' }],
      eyebrow: 'About GSK',
      title: 'We started with <em>one car</em> and one promise.',
      lede: 'GSK Tour & Travels began as a simple idea: people deserve a driver they can trust, at a price they understand, on roads the driver actually knows.'
    }) +

    '<section class="section section--tight"><div class="container about-hero reveal">' + GSK.img('road', { w: 1800, alt: 'An open highway in South India', sizes: '100vw' }) + '</div></section>' +

    '<section class="section"><div class="container story-grid">' +
      '<div class="reveal"><p class="eyebrow">Our story</p><h2>Built around the people behind the wheel.</h2></div>' +
      '<div class="story-grid__text reveal">' +
        '<p class="dropcap">Every long road has a driver nobody thanks. The one who leaves at 4 am, knows which dhaba is clean and which ghat turns to avoid after dark. We built GSK around those people.</p>' +
        '<p>What began as car-and-driver hire has grown into six services: acting drivers for people who own their cars, cabs for people who don’t, steady rides for elderly parents, tours that span states, school trips and daily corporate pickups.</p>' +
        '<p>The promise is the same across all of them. A verified driver. A price that doesn’t move. A human being at the other end of the phone. Premium, to us, means nothing more or less than being looked after.</p>' +
      '</div></div></section>' +

    '<section class="section section--dark mv"><div class="container mv__grid">' +
      '<div class="reveal"><p class="eyebrow">Mission</p><p class="mv__text">To make every journey in South India safe, dignified and stress-free — for the traveller and for the driver.</p></div>' +
      '<div class="reveal"><p class="eyebrow">Vision</p><p class="mv__text">To be the first name families, schools and companies call when the road matters.</p></div>' +
    '</div></section>' +

    '<section class="section"><div class="container">' + GSK.sectionHeader({ eyebrow: 'What we value', title: 'Four rules we <em>don’t bend.</em>' }) +
      '<ol class="values">' + values.map(function (v, i) { return '<li class="reveal"><span>' + String(i + 1).padStart(2, '0') + '</span><h3>' + v[0] + '</h3><p>' + v[1] + '</p></li>'; }).join('') + '</ol></div></section>' +

    '<section class="trust trust--about"><div class="container"><div class="trust__stats">' + cfg.stats.map(GSK.statBlock).join('') + '</div></div></section>' +

    '<section class="section"><div class="container">' + GSK.sectionHeader({ eyebrow: 'The team', title: 'The people you’ll <em>actually speak to.</em>' }) +
      '<div class="team">' + team.map(function (m) {
        return '<article class="team__member reveal"><span class="team__avatar" aria-hidden="true">' + m[0] + '</span><h3>' + m[1] + '</h3><p>' + m[2] + '</p></article>'; }).join('') + '</div></div></section>' +

    '<section class="section section--tint"><div class="container trust-why">' +
      GSK.sectionHeader({ eyebrow: 'Why customers trust us', title: 'Trust is <em>built in the details.</em>' }) +
      '<ul class="feature-list feature-list--2">' + trust.map(function (f) {
        return '<li class="reveal"><i class="fa-solid ' + f[0] + '" aria-hidden="true"></i><div><h3>' + f[1] + '</h3><p>' + f[2] + '</p></div></li>'; }).join('') + '</ul>' +
      '<ul class="badges reveal" aria-label="Credentials"><li>GST registered</li><li>Commercial-permit fleet</li><li>Insured vehicles</li><li>Police-verified drivers</li></ul>' +
    '</div></section>' +
    GSK.ctaSection({ eyebrow: 'Let’s talk', title: 'Meet your driver <em>before the trip begins.</em>' });

  GSK.initReveal(app);
  GSK.initCounters(app);
};
