/* ==========================================================================
   Shared helpers: DOM, formatting, routing, images, reveal, SEO
   ========================================================================== */
window.GSK = window.GSK || {};

GSK.$  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
GSK.$$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

GSK.esc = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
};

/* ---- Routing ----------------------------------------------------------- */
GSK.root = document.body.getAttribute('data-root') || '';           // '' on index, '../' in /views
GSK.pageFiles = {
  home: 'index.html', services: 'views/services.html', 'call-drivers': 'views/call-drivers.html', service: 'views/service-detail.html',
  tours: 'views/tours.html', tour: 'views/tour-detail.html', destinations: 'views/destinations.html',
  destination: 'views/destination-detail.html', about: 'views/about.html', contact: 'views/contact.html',
  stories: 'views/stories.html', story: 'views/story-detail.html'
};
GSK.link = function (page, params) {
  var f = GSK.pageFiles[page] || page;
  var inViews = GSK.root !== '';
  var href = inViews ? (page === 'home' ? '../index.html' : f.replace('views/', '')) : f;
  var q = [];
  Object.keys(params || {}).forEach(function (k) {
    if (params[k] !== '' && params[k] != null) q.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]));
  });
  return href + (q.length ? '?' + q.join('&') : '');
};
GSK.param = function (name) { return new URLSearchParams(location.search).get(name); };

/* ---- Formatting -------------------------------------------------------- */
GSK.price = function (n) { return '₹' + Number(n).toLocaleString('en-IN'); };
GSK.date = function (iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};
GSK.waLink = function (text) {
  return 'https://wa.me/' + GSK.config.whatsapp + '?text=' + encodeURIComponent(text || 'Hello GSK Tour & Travels, I would like a quote.');
};
GSK.debounce = function (fn, ms) {
  var t; return function () { var a = arguments, c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms || 180); };
};

/* ---- Images (never broken: branded fallback) --------------------------- */
GSK.img = function (key, opts) {
  opts = opts || {};
  var w = opts.w || 900;
  var alt = opts.alt != null ? opts.alt : '';
  var src = GSK.imgUrl(key, w), src2x = GSK.imgUrl(key, Math.round(w * 1.6), 60);
  return '<img src="' + src + '" srcset="' + GSK.imgUrl(key, Math.round(w * 0.6), 60) + ' ' + Math.round(w * 0.6) + 'w, ' + src + ' ' + w + 'w, ' + src2x + ' ' + Math.round(w * 1.6) + 'w"' +
    ' sizes="' + (opts.sizes || '(max-width: 720px) 100vw, 50vw') + '" alt="' + GSK.esc(alt) + '"' +
    ' data-label="' + GSK.esc(alt || '') + '"' +
    (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">';
};

document.addEventListener('error', function (e) {
  var img = e.target;
  if (!img || img.tagName !== 'IMG' || img.getAttribute('data-fallback')) return;
  img.setAttribute('data-fallback', '1');
  img.removeAttribute('srcset');
  var label = (img.getAttribute('data-label') || 'GSK Tour & Travels').slice(0, 40);
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f3d2e"/><stop offset="1" stop-color="#0b0d0c"/></linearGradient></defs>' +
    '<rect width="1200" height="800" fill="url(#g)"/>' +
    '<path d="M-50 640 C 250 560 450 720 700 600 S 1100 520 1300 600" stroke="#ff6a00" stroke-width="3" fill="none" stroke-dasharray="14 12" opacity=".8"/>' +
    '<circle cx="980" cy="210" r="90" fill="#ff6a00" opacity=".18"/>' +
    '<text x="60" y="720" fill="#f6f3ec" font-family="Georgia,serif" font-size="44" font-style="italic" opacity=".85">' + label.replace(/[<&>]/g, '') + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}, true);

/* ---- Scroll reveal + counters ----------------------------------------- */
GSK.reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

GSK.initReveal = function (ctx) {
  var items = GSK.$$('.reveal:not(.in)', ctx);
  if (!items.length) return;
  if (GSK.reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  if (!GSK._io) {
    GSK._io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); GSK._io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }
  items.forEach(function (el) { GSK._io.observe(el); });
};

GSK.initCounters = function (ctx) {
  GSK.$$('[data-count]', ctx).forEach(function (el) {
    var target = parseFloat(el.getAttribute('data-count')), dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    var fmt = function (v) { return dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-IN'); };
    if (GSK.reducedMotion || !('IntersectionObserver' in window)) { el.textContent = fmt(target); return; }
    var io = new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return;
      io.disconnect();
      var start = performance.now(), dur = 1400;
      (function tick(now) {
        var p = Math.min(1, (now - start) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * e);
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    }, { threshold: 0.4 });
    io.observe(el);
  });
};

/* ---- SEO --------------------------------------------------------------- */
GSK.setSeo = function (meta) {
  var cfg = GSK.config;
  if (meta.title) document.title = meta.title;
  var setMeta = function (attr, name, content) {
    var el = document.head.querySelector('meta[' + attr + '="' + name + '"]');
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute('content', content);
  };
  if (meta.description) setMeta('name', 'description', meta.description);
  setMeta('property', 'og:title', meta.title || document.title);
  setMeta('property', 'og:description', meta.description || '');
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:site_name', cfg.brand);
  if (meta.image) setMeta('property', 'og:image', GSK.imgUrl(meta.image, 1200));
  setMeta('name', 'twitter:card', 'summary_large_image');
  var canon = document.head.querySelector('link[rel="canonical"]');
  if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
  canon.href = cfg.siteUrl + '/' + (GSK.root ? 'views/' : '') + (location.pathname.split('/').pop() || 'index.html') + (meta.query || '');
};

GSK.addJsonLd = function (obj) {
  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(obj);
  document.head.appendChild(s);
};

/* ---- Shared 404 for detail templates opened with an unknown ?id ---- */
GSK.notFound = function (what, backPage) {
  GSK.$('#app').innerHTML = '<section class="section"><div class="container not-found"><p class="eyebrow">404</p><h1>We couldn’t find that ' + what + '.</h1>' +
    '<p class="lede">It may have moved. Let’s get you back on the road.</p><a class="btn btn--dark" href="' + GSK.link(backPage) + '">Browse ' + (what === 'story' ? 'stories' : what + 's') + '</a></div></section>';
};
