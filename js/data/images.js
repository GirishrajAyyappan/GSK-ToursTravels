/* ==========================================================================
   Image registry — every photo on the site is referenced by KEY.
   To swap a photo, change the value here (an Unsplash photo id, a full URL
   or a local path such as "assets/hero.jpg"). Broken URLs automatically fall
   back to a branded placeholder, so the layout never breaks.
   ========================================================================== */
window.GSK = window.GSK || {};

GSK.images = {
  hero:        '1449965408869-eaa3f722e40d', // driver at the wheel, dusk city
  road:        '1519003722824-194d4455a60c', // open highway
  roadMist:    '1473445730015-841f29a9490b',
  temple:      '1582510003544-4d00b7f74220', // south Indian gopuram
  keralaBoat:  '1593693397690-362cb9666fc2',
  keralaWater: '1602216056096-3b40cc0c9944',
  keralaCanal: '1590050752117-238cb0fb12b1',
  hills:       '1506905925346-21bda4d32df4',
  forest:      '1511884642898-4c92249e20b6',
  green:       '1469474968028-56623f02e42e',
  beach:       '1507525428034-b723cf961d3e',
  coast:       '1609766418204-94aae0ecfdfc', // tropical shoreline
  cityNight:   '1596176530529-78163a4f7af2',
  sunrise:     '1586348943529-beaae6c28db9',
  hotel:       '1571896349842-33c89424de2d',
  hotelLodge:  '1566073771259-6a8506099945',
  resortPool:  '1520250497591-112f2f40a3f4',
  corporate:   '1454165804606-c3d57bc86b40',
  meeting:     '1556761175-5973dc0f32e7',
  handshake:   '1521791136064-7986c2920216',
  students:    '1529156069898-49953e39b3ac',
  studyGroup:  '1523240795612-9a054b0db644',
  family:      '1609220136736-443140cffec6',
  senior:      '1576765608866-5b51046452be', // senior check-up
  hospital:    '1516841273335-e39b37888115',
  cab:         '1502877338535-766e1452684a',
  traveller:   '1530521954074-e64f6810b32d'
};

/** Resolve an image key (or raw id / url / path) to a sized URL. */
GSK.imgUrl = function (keyOrUrl, width, quality) {
  var v = GSK.images[keyOrUrl] || keyOrUrl || '';
  if (/^(https?:)?\/\//.test(v) || /^(\.|\/|assets)/.test(v)) return v;
  return 'https://images.unsplash.com/photo-' + v +
    '?auto=format&fit=crop&w=' + (width || 1200) + '&q=' + (quality || 70);
};
