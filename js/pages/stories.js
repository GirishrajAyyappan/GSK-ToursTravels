/* Travel stories listing */
window.GSK = window.GSK || {};
GSK.pages = GSK.pages || {};

GSK.pages.stories = function () {
  var app = GSK.$('#app');
  var state = { q: '', cat: 'All' };
  var feature = GSK.stories.filter(function (s) { return s.featured; })[0] || GSK.stories[0];

  app.innerHTML =
    GSK.pageHeader({
      crumbs: [{ label: 'Home', href: GSK.link('home') }, { label: 'Travel Stories' }],
      eyebrow: 'Travel stories',
      title: 'Notes from <em>the road.</em>',
      lede: 'Route guides, temple trails, family travel advice and stories from the drivers who make it all happen.'
    }) +
    '<section class="section section--tight"><div class="container">' + GSK.storyCard(feature, 'feature') + '</div></section>' +
    '<section class="section"><div class="container">' +
      '<div class="filters filters--dest" role="search"><div class="field field--search"><label class="sr-only" for="sq">Search stories</label><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
        '<input id="sq" type="search" placeholder="Search stories — temples, Kerala, seniors…"></div></div>' +
      '<div class="chips" role="group" aria-label="Story categories">' + GSK.storyCategories.map(function (c) {
        return '<button type="button" class="chip-btn' + (c === 'All' ? ' is-active' : '') + '" data-cat="' + c + '" aria-pressed="' + (c === 'All') + '">' + c + '</button>'; }).join('') + '</div>' +
      '<div class="results-bar"><p id="scount" role="status" aria-live="polite"></p></div>' +
      '<div class="card-grid card-grid--3 story-grid-list" id="sgrid"></div>' +
      '<div class="empty" id="sempty" hidden><h2>No stories match that search.</h2><p>Try another word, or browse all stories.</p></div>' +
    '</div></section>' +
    GSK.ctaSection({ eyebrow: 'Planning your own trip?', title: 'Read the guide. <em>Then let us drive it.</em>' });

  var grid = GSK.$('#sgrid'), count = GSK.$('#scount'), empty = GSK.$('#sempty');
  function render() {
    var q = state.q.toLowerCase();
    var list = GSK.stories.filter(function (s) {
      if (s.id === feature.id && state.cat === 'All' && !q) return false;   // featured shown above
      if (state.cat !== 'All' && s.category !== state.cat) return false;
      return !q || [s.title, s.excerpt, s.category].join(' ').toLowerCase().indexOf(q) > -1;
    });
    grid.innerHTML = list.map(function (s) { return GSK.storyCard(s); }).join('');
    count.textContent = list.length + (list.length === 1 ? ' story' : ' stories');
    empty.hidden = list.length > 0;
    GSK.initReveal(grid);
  }
  GSK.$('#sq').addEventListener('input', GSK.debounce(function (e) { state.q = e.target.value.trim(); render(); }));
  GSK.$('.chips', app).addEventListener('click', function (e) {
    var b = e.target.closest('.chip-btn'); if (!b) return;
    state.cat = b.getAttribute('data-cat');
    GSK.$$('.chip-btn', app).forEach(function (x) { var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on); });
    render();
  });
  render();
  GSK.initReveal(app);
};
