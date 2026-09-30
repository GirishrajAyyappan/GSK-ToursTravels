/* Home page controller */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.home = function () {
  var $ = GSK.$, cfg = GSK.config;
  var mount = function (name, html) { var el = $('[data-mount="' + name + '"]'); if (el) el.innerHTML = html; return el; };

  /* Hero */
  mount('hero-media', GSK.img('hero', { w: 2000, alt: 'A GSK chauffeur at the wheel at dusk', eager: true, sizes: '100vw' }));
  GSK.$$('[data-wa]').forEach(function (a) { a.href = GSK.waLink(); });

  /* Quick quote bar → contact page prefilled */
  var bar = $('[data-quote-bar]');
  $('#qb-service', bar).innerHTML = GSK.services.map(function (s) { return '<option value="' + s.id + '">' + s.title + '</option>'; }).join('');
  var d = $('#qb-date', bar); d.min = new Date().toISOString().slice(0, 10);
  bar.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = new FormData(bar);
    location.href = GSK.link('contact', { service: f.get('service'), trip: f.get('trip'), from: f.get('from'), to: f.get('to'), date: f.get('date') });
  });

  /* Stats */
  mount('stats', cfg.stats.map(GSK.statBlock).join(''));

  /* Services list */
  mount('services-header', GSK.sectionHeader({ id: 'svc-title', eyebrow: 'Six ways to travel with GSK', title: 'Whatever the journey, <em>someone reliable</em> is driving.', lede: 'From a two-hour ride home after a wedding to a five-day pilgrimage — choose what fits, and we’ll take care of the rest.' }));
  mount('services', GSK.services.map(GSK.serviceRow).join(''));

  /* Why */
  mount('why-photo', GSK.img('family', { w: 900, alt: 'A family setting off on a trip', sizes: '(max-width: 900px) 100vw, 45vw' }));

  /* Featured route: Chennai → Kanyakumari */
  var route = GSK.getTour('chennai-kanyakumari');
  mount('route-header', GSK.sectionHeader({ id: 'route-title', light: true, eyebrow: 'Route story', title: 'Chennai to Kanyakumari, <em>the way drivers love it.</em>', lede: 'Five days down the temple coast. Brihadeeswarar at dusk, Meenakshi by lamplight, and the sun coming up over three seas.' }));
  mount('route-track', '<ol class="route__list">' + route.itinerary.map(function (day, i) {
    var first = day.stops.filter(function (s) { return s.kind === 'temple' || s.kind === 'sight'; }).slice(0, 2);
    return '<li class="route__stop reveal" style="--d:' + (i * 80) + 'ms"><span class="route__no">' + String(day.day).padStart(2, '0') + '</span>' +
      '<h3>' + day.title + '</h3><p>' + day.summary + '</p>' +
      '<ul>' + first.map(function (s) { return '<li><i class="fa-solid ' + GSK.kindIcon[s.kind] + '" aria-hidden="true"></i>' + s.text + '</li>'; }).join('') + '</ul>' +
      '<span class="route__drive">' + day.drive + '</span></li>';
  }).join('') + '</ol>');
  mount('route-foot', '<div class="route__arrows"><button type="button" data-route-prev aria-label="Previous stops"><i class="fa-solid fa-arrow-left"></i></button><button type="button" data-route-next aria-label="Next stops"><i class="fa-solid fa-arrow-right"></i></button></div>' +
    '<div class="route__foot-cta"><p>' + route.days + ' days · ' + route.nights + ' nights · from <strong>' + GSK.price(route.price) + '</strong> per vehicle</p>' +
    '<a class="btn btn--accent" href="' + GSK.link('tour', { id: route.id }) + '">See the full itinerary <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div>');
  var track = $('[data-mount="route-track"]');
  var step = function (dir) { track.scrollBy({ left: dir * 362, behavior: GSK.reducedMotion ? 'auto' : 'smooth' }); };
  $('[data-route-prev]').addEventListener('click', function () { step(-1); });
  $('[data-route-next]').addEventListener('click', function () { step(1); });

  /* Featured tours mosaic */
  var feat = GSK.tours.filter(function (t) { return t.featured; }).slice(0, 3);
  mount('tours-header', GSK.sectionHeader({ id: 'ft-title', eyebrow: 'Featured tour packages', title: 'Journeys with the <em>stops already chosen.</em>', action: { href: GSK.link('tours'), label: 'All tour packages' } }));
  mount('tours', GSK.tourCard(feat[0], 'large') + feat.slice(1).map(function (t) { return GSK.tourCard(t); }).join(''));

  /* Senior photo */
  mount('senior-photo', GSK.img('senior', { w: 900, alt: 'An elderly woman in her home', sizes: '(max-width: 900px) 100vw, 45vw' }));

  /* Destinations */
  mount('dest-header', GSK.sectionHeader({ id: 'ds-title', eyebrow: 'Where we go most', title: 'Four cities. <em>Countless roads out.</em>', action: { href: GSK.link('destinations'), label: 'All destinations' } }));
  mount('destinations', GSK.destinations.filter(function (x) { return x.primary; }).map(function (x) { return GSK.destinationCard(x, 'tall'); }).join(''));

  /* Process */
  mount('process-header', GSK.sectionHeader({ id: 'process-title', eyebrow: 'How it works', title: 'From message to on-the-road in <em>one conversation.</em>' }));
  mount('process', [
    ['Tell us the trip', 'Message us on WhatsApp or fill the quick form — where, when and how many.'],
    ['Get a clear quote', 'A fixed price within a few hours, with tolls, waiting and stay itemised.'],
    ['Meet your driver', 'Name, photo and number shared before pick-up. No surprises at the door.'],
    ['Travel at ease', 'Live support throughout, and a short check-in once you’re home.']
  ].map(function (s, i) {
    return '<li class="reveal"><span class="process__no">' + (i + 1) + '</span><h3>' + s[0] + '</h3><p>' + s[1] + '</p></li>';
  }).join(''));

  /* Testimonials */
  var qs = mount('quotes',
    '<div class="container quotes__inner"><div class="quotes__head reveal"><p class="eyebrow">Kind words</p><h2 id="quotes-title">Trusted by families, principals and <em>people far from home.</em></h2></div>' +
    '<div class="quotes__stage reveal"><div class="quotes__slides" aria-live="polite">' + GSK.testimonials.map(GSK.testimonialSlide).join('') + '</div>' +
    '<div class="quotes__ctrl"><button type="button" data-q-prev aria-label="Previous testimonial"><i class="fa-solid fa-arrow-left"></i></button>' +
    '<span class="quotes__count"></span><button type="button" data-q-next aria-label="Next testimonial"><i class="fa-solid fa-arrow-right"></i></button></div></div></div>');
  GSK.bindQuotes(qs);

  mount('cta', GSK.ctaSection());

  /* Structured data */
  GSK.addJsonLd({
    '@context': 'https://schema.org', '@type': 'TravelAgency', name: cfg.brand, url: cfg.siteUrl,
    telephone: cfg.phone, email: cfg.email, areaServed: cfg.markets,
    address: { '@type': 'PostalAddress', streetAddress: cfg.address[1], addressRegion: 'Tamil Nadu', addressCountry: 'IN' }
  });
};
