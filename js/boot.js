/* ==========================================================================
   Boot loader — each HTML page includes only this one script:
     <script src="js/boot.js" data-page="home"></script>
   It loads config, data, libs and components IN ORDER, then runs the page
   controller (js/pages/<page>.js). Works from file:// — no build, no modules.
   ========================================================================== */
(function () {
  var me = document.currentScript;
  var page = me.getAttribute('data-page');
  var base = me.src.replace(/boot\.js.*$/, '');

  var files = [
    'config.js',
    'data/images.js', 'data/services.js', 'data/tours.js', 'data/destinations.js',
    'data/testimonials.js', 'data/stories.js', 'data/faqs.js', 'data/tariffs.js',
    'lib/utils.js',
    'components/layout.js', 'components/cards.js', 'components/widgets.js', 'components/booking.js', 'components/select.js',
    'pages/' + page + '.js'
  ];

  function run() {
    var cfg = GSK.seo[page] || {};
    GSK.page = page;
    GSK.setSeo(cfg);
    GSK.renderLayout();
    var ctrl = GSK.pages && GSK.pages[page];
    if (ctrl) ctrl();
    GSK.enhanceSelects(document);
    GSK.initReveal(document);
    GSK.initCounters(document);
    document.documentElement.classList.add('ready');
    /* Deep links (e.g. services.html#valet-parking): content is rendered by JS, so the browser's
       own hash scroll has nothing to land on. Scroll once rendered, and again after images load. */
    var hash = decodeURIComponent(location.hash.slice(1));
    if (hash) {
      var go = function () { var el = document.getElementById(hash); if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' }); };
      go(); requestAnimationFrame(go); setTimeout(go, 500);
      window.addEventListener('load', function () { setTimeout(go, 100); });
    }
  }

  function load(i) {
    if (i >= files.length) return run();
    var s = document.createElement('script');
    s.src = base + files[i];
    s.async = false;
    s.onload = function () { load(i + 1); };
    s.onerror = function () { console.error('GSK: failed to load ' + files[i]); load(i + 1); };
    document.head.appendChild(s);
  }
  load(0);
})();
