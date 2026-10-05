/* Layout components: Navbar, mobile menu, Footer, floating WhatsApp, newsletter */
window.GSK = window.GSK || {};

GSK.nav = [
  { page: 'services',     label: 'Services',       match: ['services', 'service'] },
  { page: 'call-drivers', label: 'Call Drivers',    match: ['call-drivers'] },
  { page: 'tours',        label: 'Tour Packages',  match: ['tours', 'tour'] },
  { page: 'destinations', label: 'Destinations',   match: ['destinations', 'destination'] },
  { page: 'about',        label: 'About',          match: ['about'] },
  { page: 'stories',      label: 'Travel Stories', match: ['stories', 'story'] },
  { page: 'contact',      label: 'Contact',        match: ['contact'] }
];

/* Same icons as the footer logo lockup */
GSK.icoRoute = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-10.3a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z"/><circle cx="12" cy="10.7" r="2.3"/><path d="M3 21.5h4M17 21.5h4" stroke-dasharray="0.1 3.2"/></svg>';
GSK.icoWheel = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="2.2"/><path d="M2.6 11.2l7.3.4M21.4 11.2l-7.3.4M12 14.3V21.5"/></svg>';
GSK.logoSrc = function (name) { return GSK.root + 'assets/logo/' + name + '.svg'; };

/* Header logo: light + dark artwork, CSS swaps them (dark artwork on transparent/dark headers). */
GSK.logo = function () {
  return '<a class="logo" href="' + GSK.link('home') + '" aria-label="' + GSK.esc(GSK.config.brand) + ' — home">' +
    '<img class="logo__img logo__img--ink" src="' + GSK.logoSrc('logo-horizontal') + '" alt="' + GSK.esc(GSK.config.brand) + '" width="470" height="120">' +
    '<img class="logo__img logo__img--paper" src="' + GSK.logoSrc('logo-horizontal-dark') + '" alt="" aria-hidden="true" width="470" height="120">' +
    '<span class="logo__services"><span>' + GSK.icoWheel + 'Acting Drivers</span><span>' + GSK.icoRoute + 'Tour Packages</span></span></a>';
};

/* Footer logo: stacked lockup with the two signature services underneath. */
GSK.logoFull = function () {
  return '<a class="logo logo--full" href="' + GSK.link('home') + '" aria-label="' + GSK.esc(GSK.config.brand) + ' — home">' +
    '<img src="' + GSK.logoSrc('logo-full-dark') + '" alt="' + GSK.esc(GSK.config.brand) + ' — Acting Drivers and Tour Packages" width="274" height="198"></a>';
};

GSK.renderLayout = function () {
  var cfg = GSK.config, overlay = document.body.getAttribute('data-header') === 'overlay';

  /* ---- Header ---- */
  var links = GSK.nav.filter(function (n) { return n.page !== 'contact'; }).map(function (n) {
    var cur = n.match.indexOf(GSK.page) > -1;
    return '<li><a href="' + GSK.link(n.page) + '"' + (cur ? ' aria-current="page"' : '') + '>' + n.label + '</a></li>';
  }).join('');

  var header = GSK.$('#site-header');
  header.className = 'site-header' + (overlay ? ' is-overlay' : '');
  header.innerHTML =
    '<div class="container site-header__inner">' + GSK.logo() +
    '<nav class="primary-nav" aria-label="Primary"><ul>' + links + '</ul></nav>' +
    '<div class="site-header__actions">' +
      '<a class="header-phone" href="' + cfg.phoneHref + '"><i class="fa-solid fa-phone" aria-hidden="true"></i><span>' + cfg.phone + '</span></a>' +
      '<a class="btn btn--accent btn--sm header-cta" href="' + GSK.link('contact') + '">Get my quote</a>' +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu"><span></span><span></span></button>' +
    '</div></div>';

  /* ---- Mobile menu ---- */
  var mm = document.createElement('div');
  mm.id = 'mobile-menu';
  mm.className = 'mobile-menu';
  mm.setAttribute('aria-hidden', 'true');
  mm.innerHTML =
    '<div class="mobile-menu__inner">' +
      '<ul>' + GSK.nav.map(function (n, i) {
        return '<li style="--i:' + i + '"><a href="' + GSK.link(n.page) + '">' + n.label + '</a></li>';
      }).join('') + '</ul>' +
      '<div class="mobile-menu__foot">' +
        '<a class="btn btn--accent btn--block" href="' + GSK.link('contact') + '">Get my quote</a>' +
        '<a class="btn btn--ghost-light btn--block" href="' + GSK.waLink() + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp us</a>' +
        '<p>' + cfg.phone + ' · ' + cfg.email + '</p>' +
      '</div></div>';
  header.after(mm);

  var toggle = GSK.$('.menu-toggle', header);
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mm.setAttribute('aria-hidden', !open);
    mm.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (open) GSK.$('a', mm).focus();
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  mm.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mm.classList.contains('open')) { setMenu(false); toggle.focus(); } });

  /* ---- Scroll state ---- */
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Footer ---- */
  var f = GSK.$('#site-footer');
  f.className = 'site-footer';
  f.innerHTML =
    '<div class="container">' +
      '<div class="footer-top">' +
        '<div class="footer-brand">' +
          GSK.logoFull() +
          '<p class="footer-brand__line">' + GSK.esc(cfg.tagline) + '</p>' +
          '<p class="footer-brand__sub">Verified drivers, premium cabs and route-expert tours across ' + cfg.markets.join(', ') + '.</p>' +
        '</div>' +
        '<div class="footer-col"><h2>Services</h2><ul>' + GSK.services.map(function (s) {
          return '<li><a href="' + GSK.link('service', { id: s.id }) + '">' + s.title + '</a></li>'; }).join('') + '</ul></div>' +
        '<div class="footer-col"><h2>Explore</h2><ul>' +
          GSK.nav.map(function (n) { return '<li><a href="' + GSK.link(n.page) + '">' + n.label + '</a></li>'; }).join('') + '</ul></div>' +
        '<div class="footer-col footer-col--contact"><h2>Talk to us</h2>' +
          '<a href="' + cfg.phoneHref + '">' + cfg.phone + '</a>' +
          '<a href="mailto:' + cfg.email + '">' + cfg.email + '</a>' +
          '<address>' + cfg.address.join('<br>') + '</address>' +
          '<div class="social"><a href="' + cfg.social.instagram + '" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
          '<a href="' + cfg.social.facebook + '" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
          '<a href="' + cfg.social.youtube + '" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>' +
          '<a href="' + GSK.waLink() + '" aria-label="WhatsApp" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i></a></div>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom"><p>© ' + new Date().getFullYear() + ' ' + cfg.brand + '. All rights reserved.</p>' +
      '<p>Serving ' + cfg.markets.join(' · ') + '</p></div>' +
    '</div>';

  /* ---- Floating WhatsApp ---- */
  var wa = document.createElement('a');
  wa.className = 'wa-float';
  wa.href = GSK.waLink();
  wa.target = '_blank'; wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'Chat with GSK on WhatsApp');
  wa.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i><span>WhatsApp</span>';
  document.body.appendChild(wa);
};

