/* Home page controller */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.home = function () {
  var $ = GSK.$, cfg = GSK.config;
  var mount = function (name, html) { var el = $('[data-mount="' + name + '"]'); if (el) el.innerHTML = html; return el; };

  /* Hero */
  mount('hero-media', GSK.img('hero', { w: 2000, alt: 'A GSK driver at the wheel at dusk', eager: true, sizes: '100vw' }));
  GSK.$$('[data-wa]').forEach(function (a) { a.href = GSK.waLink(); });
  GSK.$$('[data-call]').forEach(function (a) { a.href = cfg.phoneHref; });
  GSK.bindBooking($('[data-booking]', mount('booking', GSK.bookingForm())));

  /* Services: three cards per row */
  mount('services', GSK.services.map(GSK.serviceCard).join(''));

  mount('cta', GSK.ctaSection());

  /* Structured data */
  GSK.addJsonLd({
    '@context': 'https://schema.org', '@type': 'TravelAgency', name: cfg.brand, url: cfg.siteUrl,
    telephone: cfg.phone, email: cfg.email, areaServed: cfg.markets,
    address: { '@type': 'PostalAddress', streetAddress: cfg.address[1], addressRegion: 'Tamil Nadu', addressCountry: 'IN' }
  });
};
