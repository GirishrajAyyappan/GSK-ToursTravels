/* Tour packages listing: search + filters */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.tours = function () {
  var app = GSK.$('#app');
  var types = ['All'].concat(GSK.tours.map(function (t) { return t.type; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
  var state = { q: GSK.param('q') || '', type: GSK.param('type') || 'All', duration: 'Any', budget: 'Any', region: 'All' };

  app.innerHTML =
    GSK.pageHeader({
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Tour Packages' }],
      eyebrow: 'Tour packages',
      title: 'Routes planned by people <em>who drive them.</em>',
      lede: 'Every package comes with a route-expert chauffeur, sightseeing, temples, hand-picked stays and meals worth stopping for. Customise any of them.'
    }) +
    '<section class="section section--tight"><div class="container">' +
      '<div class="filters" role="search" aria-label="Filter tour packages">' +
        '<div class="field field--search"><label class="sr-only" for="tq">Search packages</label><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
          '<input id="tq" type="search" placeholder="Search by route, place or theme — e.g. Kanyakumari" value="' + GSK.esc(state.q) + '"></div>' +
        '<div class="field"><label for="tr">Region</label><select id="tr">' + GSK.regions.map(function (r) { return '<option>' + r + '</option>'; }).join('') + '</select></div>' +
        '<div class="field"><label for="td">Duration</label><select id="td">' + GSK.tourFilters.durations.map(function (r) { return '<option>' + r + '</option>'; }).join('') + '</select></div>' +
        '<div class="field"><label for="tb">Budget</label><select id="tb">' + GSK.tourFilters.budgets.map(function (r) { return '<option>' + r + '</option>'; }).join('') + '</select></div>' +
      '</div>' +
      '<div class="chips" role="group" aria-label="Travel type">' + types.map(function (t) {
        return '<button type="button" class="chip-btn' + (t === state.type ? ' is-active' : '') + '" data-type="' + GSK.esc(t) + '" aria-pressed="' + (t === state.type) + '">' + t + '</button>'; }).join('') + '</div>' +
      '<div class="results-bar"><p id="tcount" role="status" aria-live="polite"></p><button type="button" class="link-arrow" id="treset" hidden>Clear filters</button></div>' +
      '<div class="card-grid tour-grid" id="tgrid"></div>' +
      '<div class="empty" id="tempty" hidden><h2>No packages match just yet.</h2><p>Every route can be custom-built. Tell us where you’d like to go and we’ll design it.</p>' +
        '<a class="btn btn--dark" href="' + GSK.link('contact', { service: 'tour-packages' }) + '">Request a custom tour</a></div>' +
    '</div></section>' +
    '<section class="section section--tint custom-tour"><div class="container custom-tour__inner">' +
      GSK.sectionHeader({ eyebrow: 'Don’t see your route?', title: 'We’ll plan it <em>from scratch.</em>', lede: 'Tell us the start, the end and what you want to see on the way. A route specialist will reply with a plan and a fixed price.' }) +
      '<a class="btn btn--accent btn--lg" href="' + GSK.link('contact', { service: 'tour-packages' }) + '">Plan my route <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></section>' +
    GSK.ctaSection({ params: { service: 'tour-packages' } });

  var grid = GSK.$('#tgrid'), count = GSK.$('#tcount'), empty = GSK.$('#tempty'), reset = GSK.$('#treset');

  function match(t) {
    var hay = [t.title, t.from, t.to, t.type, t.summary, t.highlights.join(' ')].join(' ').toLowerCase();
    if (state.q && hay.indexOf(state.q.toLowerCase()) < 0) return false;
    if (state.type !== 'All' && t.type !== state.type) return false;
    if (state.region !== 'All' && t.regionFilter !== state.region) return false;
    if (state.duration === '1–2 days' && t.days > 2) return false;
    if (state.duration === '3–4 days' && (t.days < 3 || t.days > 4)) return false;
    if (state.duration === '5+ days' && t.days < 5) return false;
    if (state.budget === 'Under ₹15,000' && t.price >= 15000) return false;
    if (state.budget === '₹15,000 – ₹25,000' && (t.price < 15000 || t.price > 25000)) return false;
    if (state.budget === 'Above ₹25,000' && t.price <= 25000) return false;
    return true;
  }

  function render() {
    var list = GSK.tours.filter(match);
    var filtered = state.q || state.type !== 'All' || state.region !== 'All' || state.duration !== 'Any' || state.budget !== 'Any';
    grid.innerHTML = list.map(function (t, i) { return GSK.tourCard(t, (!filtered && i === 0 && list.length > 2) ? 'large' : ''); }).join('');
    count.textContent = list.length + (list.length === 1 ? ' package' : ' packages') + (filtered ? ' match your filters' : '');
    empty.hidden = list.length > 0;
    reset.hidden = !filtered;
    GSK.initReveal(grid);
  }

  GSK.$('#tq').addEventListener('input', GSK.debounce(function (e) { state.q = e.target.value.trim(); render(); }));
  GSK.$('#tr').addEventListener('change', function (e) { state.region = e.target.value; render(); });
  GSK.$('#td').addEventListener('change', function (e) { state.duration = e.target.value; render(); });
  GSK.$('#tb').addEventListener('change', function (e) { state.budget = e.target.value; render(); });
  GSK.$('.chips', app).addEventListener('click', function (e) {
    var b = e.target.closest('.chip-btn'); if (!b) return;
    state.type = b.getAttribute('data-type');
    GSK.$$('.chip-btn', app).forEach(function (x) { var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on); });
    render();
  });
  reset.addEventListener('click', function () {
    state = { q: '', type: 'All', duration: 'Any', budget: 'Any', region: 'All' };
    GSK.$('#tq').value = ''; GSK.$('#tr').value = 'All'; GSK.$('#td').value = 'Any'; GSK.$('#tb').value = 'Any';
    GSK.$$('.chip-btn', app).forEach(function (x) { var on = x.getAttribute('data-type') === 'All'; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on); });
    render();
  });
  render();
  GSK.initReveal(app);
};
