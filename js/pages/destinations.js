/* Destinations discovery page */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.destinations = function () {
  var app = GSK.$('#app');
  var state = { q: '', region: GSK.param('region') || 'All' };

  var lead = GSK.destinations.filter(function (d) { return d.primary; });

  app.innerHTML =
    GSK.pageHeader({
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Destinations' }],
      eyebrow: 'Destinations',
      title: 'Places we know <em>by heart.</em>',
      lede: 'Our drivers live in these cities and have driven these roads for years. Each guide carries a driver’s note — the kind of detail no brochure includes.'
    }) +
    '<section class="section section--tight dest-lead" aria-label="Featured destinations"><div class="container dest-lead__grid">' +
      GSK.destinationCard(lead[0], 'wide') +
      lead.slice(1).map(function (d) { return GSK.destinationCard(d, 'list'); }).join('') +
    '</div></section>' +
    '<section class="section"><div class="container">' +
      GSK.sectionHeader({ eyebrow: 'Explore all', title: 'Find your <em>next route.</em>' }) +
      '<div class="filters filters--dest" role="search">' +
        '<div class="field field--search"><label class="sr-only" for="dq">Search destinations</label><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
        '<input id="dq" type="search" placeholder="Search — Kerala, temple, hills, beach…"></div></div>' +
      '<div class="chips" role="group" aria-label="Filter by state">' + GSK.regions.map(function (r) {
        return '<button type="button" class="chip-btn' + (r === state.region ? ' is-active' : '') + '" data-region="' + r + '" aria-pressed="' + (r === state.region) + '">' + r + '</button>'; }).join('') + '</div>' +
      '<div class="results-bar"><p id="dcount" role="status" aria-live="polite"></p></div>' +
      '<div class="dest-mosaic" id="dgrid"></div>' +
      '<div class="empty" id="dempty" hidden><h2>Nothing here yet — but we’ve probably driven it.</h2><p>Tell us where you want to go and we’ll plan the route.</p><a class="btn btn--dark" href="' + GSK.link('contact') + '">Ask our team</a></div>' +
    '</div></section>' +
    GSK.ctaSection({ eyebrow: 'Somewhere else in mind?', title: 'Name the place. <em>We’ll find the road.</em>' });

  var grid = GSK.$('#dgrid'), count = GSK.$('#dcount'), empty = GSK.$('#dempty');
  var variants = ['tall', 'wide', 'wide', 'tall', 'tall', 'tall', 'wide', 'tall', 'tall', 'tall'];

  function render() {
    var q = state.q.toLowerCase();
    var list = GSK.destinations.filter(function (d) {
      if (state.region !== 'All' && d.region !== state.region) return false;
      return !q || [d.name, d.state, d.tag, d.short, d.highlights.join(' ')].join(' ').toLowerCase().indexOf(q) > -1;
    });
    grid.innerHTML = list.map(function (d, i) { return GSK.destinationCard(d, variants[i % variants.length]); }).join('');
    count.textContent = list.length + (list.length === 1 ? ' destination' : ' destinations');
    empty.hidden = list.length > 0;
    GSK.initReveal(grid);
  }

  GSK.$('#dq').addEventListener('input', GSK.debounce(function (e) { state.q = e.target.value.trim(); render(); }));
  GSK.$('.chips', app).addEventListener('click', function (e) {
    var b = e.target.closest('.chip-btn'); if (!b) return;
    state.region = b.getAttribute('data-region');
    GSK.$$('.chip-btn', app).forEach(function (x) { var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on); });
    render();
  });
  render();
  GSK.initReveal(app);
};
