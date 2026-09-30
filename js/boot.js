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
    'data/testimonials.js', 'data/stories.js', 'data/faqs.js',
    'lib/utils.js',
    'components/layout.js', 'components/cards.js', 'components/widgets.js',
    'pages/' + page + '.js'
  ];

  function run() {
    var cfg = GSK.seo[page] || {};
    GSK.page = page;
    GSK.setSeo(cfg);
    GSK.renderLayout();
    var ctrl = GSK.pages && GSK.pages[page];
    if (ctrl) ctrl();
    GSK.initReveal(document);
    GSK.initCounters(document);
    document.documentElement.classList.add('ready');
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
