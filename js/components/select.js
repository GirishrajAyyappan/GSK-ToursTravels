/* Custom dropdown: replaces the browser's native <select> popup (blue highlight, white text)
   with an orange-highlight, black-text listbox. The native <select> stays in the DOM
   (visually hidden) so FormData, labels and change events keep working. */
window.GSK = window.GSK || {};

GSK.enhanceSelects = function (ctx) {
  GSK.$$('select', ctx).forEach(function (sel) {
    if (sel.getAttribute('data-enhanced')) return;
    sel.setAttribute('data-enhanced', '1');
    sel.classList.add('cselect__native');
    sel.tabIndex = -1;
    sel.setAttribute('aria-hidden', 'true');

    var wrap = document.createElement('div'); wrap.className = 'cselect';
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'cselect__btn';
    btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false');
    var label = sel.id && document.querySelector('label[for="' + sel.id + '"]');
    if (label) { if (!label.id) label.id = sel.id + '-lbl'; btn.setAttribute('aria-labelledby', label.id); }
    var list = document.createElement('ul'); list.className = 'cselect__list'; list.setAttribute('role', 'listbox'); list.hidden = true;
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel); wrap.appendChild(btn); wrap.appendChild(list);

    var items = [], active = -1;
    function build() {
      list.innerHTML = '';
      items = Array.prototype.map.call(sel.options, function (o, i) {
        var li = document.createElement('li'); li.setAttribute('role', 'option'); li.textContent = o.text; li.dataset.i = i;
        list.appendChild(li); return li;
      });
      sync();
    }
    function sync() {
      var o = sel.options[sel.selectedIndex];
      btn.textContent = o ? o.text : '';
      items.forEach(function (li, i) { var on = i === sel.selectedIndex; li.classList.toggle('is-selected', on); li.setAttribute('aria-selected', on); });
    }
    function highlight(i) {
      active = Math.max(0, Math.min(items.length - 1, i));
      items.forEach(function (li, j) { li.classList.toggle('is-active', j === active); });
      if (items[active]) items[active].scrollIntoView({ block: 'nearest' });
    }
    function open() {
      if (!list.hidden) return;
      GSK.$$('.cselect__list').forEach(function (l) { l.hidden = true; });
      list.hidden = false; wrap.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true');
      var r = btn.getBoundingClientRect();
      wrap.classList.toggle('is-up', window.innerHeight - r.bottom < 260 && r.top > 260);
      highlight(sel.selectedIndex);
    }
    function close() { list.hidden = true; wrap.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
    function choose(i) {
      if (sel.selectedIndex !== i) {
        sel.selectedIndex = i;
        sel.dispatchEvent(new Event('input', { bubbles: true }));
        sel.dispatchEvent(new Event('change', { bubbles: true }));
      }
      sync(); close(); btn.focus();
    }

    btn.addEventListener('click', function () { list.hidden ? open() : close(); });
    list.addEventListener('click', function (e) { var li = e.target.closest('li'); if (li) choose(+li.dataset.i); });
    list.addEventListener('mousemove', function (e) { var li = e.target.closest('li'); if (li) highlight(+li.dataset.i); });
    btn.addEventListener('keydown', function (e) {
      var k = e.key;
      if (list.hidden) {
        if (k === 'ArrowDown' || k === 'ArrowUp' || k === 'Enter' || k === ' ') { e.preventDefault(); open(); }
        return;
      }
      if (k === 'ArrowDown') { e.preventDefault(); highlight(active + 1); }
      else if (k === 'ArrowUp') { e.preventDefault(); highlight(active - 1); }
      else if (k === 'Home') { e.preventDefault(); highlight(0); }
      else if (k === 'End') { e.preventDefault(); highlight(items.length - 1); }
      else if (k === 'Enter' || k === ' ') { e.preventDefault(); choose(active); }
      else if (k === 'Escape') { e.preventDefault(); close(); }
      else if (k === 'Tab') { close(); }
      else if (k.length === 1) {
        var n = items.findIndex(function (li, i) { return i > active && li.textContent.toLowerCase().indexOf(k.toLowerCase()) === 0; });
        if (n > -1) highlight(n);
      }
    });
    sel.addEventListener('focus', function () { btn.focus(); });
    sel.addEventListener('change', sync);
    if (sel.form) sel.form.addEventListener('reset', function () { setTimeout(sync, 0); });
    build();
  });

  if (!GSK._selectDoc) {
    GSK._selectDoc = true;
    document.addEventListener('click', function (e) {
      if (e.target.closest('.cselect')) return;
      GSK.$$('.cselect__list').forEach(function (l) { l.hidden = true; });
      GSK.$$('.cselect.is-open').forEach(function (w) { w.classList.remove('is-open'); GSK.$('.cselect__btn', w).setAttribute('aria-expanded', 'false'); });
    });
  }
};
