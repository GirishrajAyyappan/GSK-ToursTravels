/* Interactive widgets: FAQ accordion, itinerary timeline, gallery + lightbox, quote slider */
window.GSK = window.GSK || {};

/* ---- Generic accordion (used by FAQ + itinerary) ----------------------- */
GSK.bindAccordion = function (root) {
  root.addEventListener('click', function (e) {
    var btn = e.target.closest('.acc__btn');
    if (!btn || !root.contains(btn)) return;
    var item = btn.closest('.acc__item'), open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open);
    item.classList.toggle('is-open', open);
    GSK.$('.acc__panel', item).setAttribute('aria-hidden', !open);
  });
};

/* ---- FAQ --------------------------------------------------------------- */
GSK.faqHtml = function (faqs, uid) {
  uid = uid || 'faq';
  return '<div class="acc faq" data-acc>' + faqs.map(function (f, i) {
    return '<div class="acc__item"><h3><button class="acc__btn" type="button" aria-expanded="false" aria-controls="' + uid + i + '" id="' + uid + 'b' + i + '">' +
      '<span>' + GSK.esc(f.q) + '</span><i class="fa-solid fa-plus" aria-hidden="true"></i></button></h3>' +
      '<div class="acc__panel" id="' + uid + i + '" role="region" aria-labelledby="' + uid + 'b' + i + '" aria-hidden="true"><div><p>' + GSK.esc(f.a) + '</p></div></div></div>';
  }).join('') + '</div>';
};

/* ---- Itinerary --------------------------------------------------------- */
GSK.kindIcon = { temple: 'fa-place-of-worship', sight: 'fa-camera', food: 'fa-utensils', stay: 'fa-bed', drive: 'fa-car-side' };
GSK.kindLabel = { temple: 'Temple', sight: 'Sightseeing', food: 'Food', stay: 'Stay', drive: 'Drive' };

GSK.itineraryHtml = function (days) {
  return '<div class="itin"><div class="itin__tools"><button type="button" class="link-arrow" data-itin-toggle>Expand all days</button></div>' +
    '<ol class="acc itin__list" data-acc>' + days.map(function (d, i) {
      var open = i === 0;
      return '<li class="acc__item itin__day' + (open ? ' is-open' : '') + '">' +
        '<h3><button class="acc__btn" type="button" aria-expanded="' + open + '" aria-controls="day' + d.day + '" id="dayb' + d.day + '">' +
          '<span class="itin__no"><small>Day</small>' + String(d.day).padStart(2, '0') + '</span>' +
          '<span class="itin__title"><strong>' + d.title + '</strong><em>' + d.summary + '</em></span>' +
          '<span class="itin__drive">' + d.drive + '</span>' +
          '<i class="fa-solid fa-plus" aria-hidden="true"></i></button></h3>' +
        '<div class="acc__panel" id="day' + d.day + '" role="region" aria-labelledby="dayb' + d.day + '" aria-hidden="' + !open + '"><div>' +
          '<ul class="itin__stops">' + d.stops.map(function (s) {
            return '<li class="stop stop--' + s.kind + '"><i class="fa-solid ' + GSK.kindIcon[s.kind] + '" aria-hidden="true"></i>' +
              '<span><small>' + GSK.kindLabel[s.kind] + '</small>' + s.text + '</span></li>';
          }).join('') + '</ul></div></div></li>';
    }).join('') + '</ol></div>';
};

GSK.bindItinerary = function (root) {
  var acc = GSK.$('[data-acc]', root);
  GSK.bindAccordion(acc);
  var tog = GSK.$('[data-itin-toggle]', root), all = false;
  tog.addEventListener('click', function () {
    all = !all;
    GSK.$$('.acc__item', acc).forEach(function (it) {
      it.classList.toggle('is-open', all);
      GSK.$('.acc__btn', it).setAttribute('aria-expanded', all);
      GSK.$('.acc__panel', it).setAttribute('aria-hidden', !all);
    });
    tog.textContent = all ? 'Collapse all days' : 'Expand all days';
  });
};

/* ---- Gallery + lightbox ------------------------------------------------ */
GSK.galleryHtml = function (keys, name) {
  var shapes = ['tall', 'wide', '', '', 'wide', 'tall'];
  return '<div class="gallery">' + keys.map(function (k, i) {
    return '<button type="button" class="gallery__item ' + (shapes[i % shapes.length] ? 'is-' + shapes[i % shapes.length] : '') + ' reveal" data-i="' + i + '" aria-label="Open photo ' + (i + 1) + ' of ' + keys.length + '">' +
      GSK.img(k, { w: 800, alt: name + ' — photo ' + (i + 1), sizes: '(max-width: 720px) 50vw, 33vw' }) + '</button>';
  }).join('') + '</div>';
};

GSK.bindGallery = function (root, keys, name) {
  var box, idx = 0, lastFocus;
  function build() {
    box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', name + ' photo gallery');
    box.hidden = true;
    box.innerHTML = '<button class="lightbox__close" type="button" aria-label="Close gallery"><i class="fa-solid fa-xmark"></i></button>' +
      '<button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous photo"><i class="fa-solid fa-chevron-left"></i></button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next photo"><i class="fa-solid fa-chevron-right"></i></button>';
    document.body.appendChild(box);
    GSK.$('.lightbox__close', box).addEventListener('click', close);
    GSK.$('.lightbox__nav--prev', box).addEventListener('click', function () { show(idx - 1); });
    GSK.$('.lightbox__nav--next', box).addEventListener('click', function () { show(idx + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }
  function show(i) {
    idx = (i + keys.length) % keys.length;
    var img = GSK.$('img', box);
    img.removeAttribute('data-fallback');
    img.src = GSK.imgUrl(keys[idx], 1800);
    img.alt = name + ' — photo ' + (idx + 1);
    img.setAttribute('data-label', name);
    GSK.$('figcaption', box).textContent = name + ' · ' + (idx + 1) + ' / ' + keys.length;
  }
  function open(i, trigger) {
    if (!box) build();
    lastFocus = trigger;
    box.hidden = false;
    document.body.classList.add('lightbox-open');
    show(i);
    GSK.$('.lightbox__close', box).focus();
  }
  function close() {
    box.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (lastFocus) lastFocus.focus();
  }
  root.addEventListener('click', function (e) {
    var b = e.target.closest('.gallery__item');
    if (b) open(parseInt(b.getAttribute('data-i'), 10), b);
  });
};

/* ---- Testimonial slider ------------------------------------------------ */
GSK.bindQuotes = function (root) {
  var slides = GSK.$$('.quote', root), i = 0;
  var count = GSK.$('.quotes__count', root);
  function go(n) {
    slides[i].hidden = true; slides[i].classList.remove('is-active');
    i = (n + slides.length) % slides.length;
    slides[i].hidden = false; slides[i].classList.add('is-active');
    if (count) count.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
  }
  GSK.$('[data-q-prev]', root).addEventListener('click', function () { go(i - 1); });
  GSK.$('[data-q-next]', root).addEventListener('click', function () { go(i + 1); });
  go(0);
};

/* ---- Related tours strip (used by destination + story pages) ---------- */
GSK.relatedTours = function (ids) {
  return (ids || []).map(GSK.getTour).filter(Boolean);
};
