"""Builds every GSK Tour & Travels logo SVG. Text is converted to outlines (Inter, SIL OFL),
so the files need no installed fonts. Usage: python build_logos.py <dir with inter-600.woff, inter-700.woff>"""
import sys, os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

FONTS = sys.argv[1] if len(sys.argv) > 1 else '.'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
INK, ORANGE, GREEN, PAPER = '#0b0d0c', '#ff6a00', '#0f3d2e', '#f6f3ec'
f700 = TTFont(os.path.join(FONTS, 'inter-700.woff'))

def text_path(text, font, size, x, baseline, tracking=0.0, fit=None):
    """Outline `text`. If fit is given, tracking is solved so the text spans exactly `fit` units."""
    upm = font['head'].unitsPerEm; s = size / upm
    gs = font.getGlyphSet(); cmap = font.getBestCmap(); hmtx = font['hmtx']
    names = [cmap[ord(c)] for c in text]
    adv = [hmtx[n][0] * s for n in names]
    if fit is not None:
        tracking = (fit - sum(adv)) / (len(names) - 1)
    d, cx = [], x
    for n, a in zip(names, adv):
        pen = SVGPathPen(gs, ntos=lambda v: ('%.2f' % v).rstrip('0').rstrip('.'))
        gs[n].draw(TransformPen(pen, (s, 0, 0, -s, cx, baseline)))
        d.append(pen.getCommands()); cx += a + tracking
    return ' '.join(d), cx - tracking - x

# ---- geometry (units: wordmark is 106 tall, stroke 14) -------------------------------------
SW = 14
def wordmark(ink, accent, uid):
    """G = steering wheel, S + K = matching monoline letters."""
    return f'''
  <defs>
    <mask id="cut{uid}" maskUnits="userSpaceOnUse" x="0" y="0" width="130" height="120">
      <rect width="130" height="120" fill="#fff"/><circle cx="60" cy="60" r="15.5" fill="#000"/>
    </mask>
    <clipPath id="k{uid}"><rect x="200" y="7" width="76" height="106"/></clipPath>
  </defs>
  <g fill="none" stroke="{ink}" stroke-width="{SW}">
    <g mask="url(#cut{uid})">
      <path d="M92.52 27.48 A46 46 0 1 0 106 60"/>
      <path d="M60 60 H113"/>
    </g>
    <path d="M177 37 A23 23 0 1 0 154 60 A23 23 0 1 1 131 83"/>
    <g clip-path="url(#k{uid})"><path d="M207 0 V120 M208 60 L267 -3 M208 60 L267 123"/></g>
  </g>
  <circle cx="60" cy="60" r="10" fill="{accent}"/>
  <path d="M100.3 19.7 L103.8 38.8 L84.7 35.3 Z" fill="{accent}"/>'''

def mark_only(ink, accent, uid):
    return wordmark(ink, accent, uid).split('<path d="M177')[0].split('<g fill')[0] + f'''
  <g fill="none" stroke="{ink}" stroke-width="{SW}"><g mask="url(#cut{uid})">
      <path d="M92.52 27.48 A46 46 0 1 0 106 60"/><path d="M60 60 H113"/></g></g>
  <circle cx="60" cy="60" r="10" fill="{accent}"/>
  <path d="M100.3 19.7 L103.8 38.8 L84.7 35.3 Z" fill="{accent}"/>'''

def icon_route(x, y, c, s=1.0):
    return (f'<g transform="translate({x} {y}) scale({s})" fill="none" stroke="{c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'
            '<path d="M12 21s-6.5-5.4-6.5-10.3a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z"/><circle cx="12" cy="10.7" r="2.3"/>'
            '<path d="M3 21.5h4M17 21.5h4" stroke-dasharray="0.1 3.2"/></g>')

def icon_wheel(x, y, c, s=1.0):
    return (f'<g transform="translate({x} {y}) scale({s})" fill="none" stroke="{c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'
            '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="2.2"/><path d="M2.6 11.2l7.3.4M21.4 11.2l-7.3.4M12 14.3V21.5"/></g>')

W = 274  # canvas width; wordmark spans x=7..267
def svg(w, h, body, title, bg=None):
    bgr = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-labelledby="t">'
            f'<title id="t">{title.replace("&","&amp;")}</title>{bgr}{body}</svg>\n')

def lockup(ink, accent, uid, services=False, sub=None):
    sub = sub or ink
    tag, _ = text_path('TOUR & TRAVELS', f700, 20, 7, 146, fit=260)
    body = wordmark(ink, accent, uid) + f'\n  <path d="{tag}" fill="{sub}"/>'
    h = 154
    if services:
        y = 181
        t1, w1 = text_path('TOUR PACKAGES', f700, 9.2, 0, 0, tracking=.9)
        t2, w2 = text_path('ACTING DRIVERS', f700, 9.2, 0, 0, tracking=.9)
        isz = 0.95; iw = 24 * isz
        g1 = iw + 7 + w1; g2 = iw + 7 + w2
        x2 = 7; x1 = 267 - g1   # Acting Drivers first (left), Tour Packages second (right)
        print('services widths', round(g1), round(g2), 'free gap', round(260 - g1 - g2))
        assert 260 - g1 - g2 > 14
        body += f'\n  <rect x="7" y="164" width="260" height="1" fill="{sub}" opacity=".35"/>'
        body += '\n  ' + icon_route(x1, y - 14, accent, isz) + f'<path transform="translate({x1+iw+7:.1f} {y+1.5})" d="{t1}" fill="{sub}"/>'
        body += '\n  ' + icon_wheel(x2, y - 14, accent, isz) + f'<path transform="translate({x2+iw+7:.1f} {y+1.5})" d="{t2}" fill="{sub}"/>'
        h = 198
    return svg(W, h, body, 'GSK Tour & Travels' + (' — Acting Drivers and Tour Packages' if services else ''))

def write(name, content):
    with open(os.path.join(OUT, name), 'w', encoding='utf-8') as f: f.write(content)
    print('wrote', name)

write('logo-primary.svg',      lockup(INK, ORANGE, 'a'))
write('logo-full.svg',         lockup(INK, ORANGE, 'b', services=True))
write('logo-primary-dark.svg', lockup(PAPER, ORANGE, 'c'))
write('logo-full-dark.svg',    lockup(PAPER, ORANGE, 'd', services=True))
write('logo-mono-black.svg',   lockup(INK, INK, 'e', services=True))
write('logo-mono-white.svg',   lockup('#ffffff', '#ffffff', 'f', services=True))

# Emblem only (G-wheel)
def emblem(ink, accent, uid, pad=7):
    body = mark_only(ink, accent, uid)
    return svg(120, 120, body, 'GSK emblem')
write('logo-mark.svg', emblem(INK, ORANGE, 'g'))
write('logo-mark-dark.svg', emblem(PAPER, ORANGE, 'h'))

# Favicon / app icon: simplified, high-contrast, reads at 16px
def favicon(bg, ink, accent, uid, rx=26, scale=.84):
    t = (120 - 120 * scale) / 2
    body = f'<g transform="translate({t:.2f} {t:.2f}) scale({scale})">{mark_only(ink, accent, uid)}</g>'
    return svg(120, 120, f'<rect width="120" height="120" rx="{rx}" fill="{bg}"/>' + body, 'GSK Tour & Travels icon')
write('favicon.svg', favicon(INK, PAPER, ORANGE, 'i'))
write('app-icon-orange.svg', favicon(ORANGE, INK, INK, 'j'))
write('app-icon-green.svg', favicon(GREEN, PAPER, ORANGE, 'k'))

# Horizontal lockup for headers / email signatures / wide spaces
def horizontal(ink, accent, uid):
    t1, w1 = text_path('TOUR &', f700, 33, 0, 0, tracking=3.5)
    t2, w2 = text_path('TRAVELS', f700, 33, 0, 0, tracking=3.5)
    tx = 298; width = int(tx + max(w1, w2) + 7)
    body = wordmark(ink, accent, uid)
    body += f'\n  <rect x="283" y="7" width="3" height="106" fill="{accent}"/>'
    body += f'\n  <path transform="translate({tx} 53)" d="{t1}" fill="{ink}"/><path transform="translate({tx} 101)" d="{t2}" fill="{ink}"/>'
    return svg(width, 120, body, 'GSK Tour & Travels')
write('logo-horizontal.svg', horizontal(INK, ORANGE, 'l'))
write('logo-horizontal-dark.svg', horizontal(PAPER, ORANGE, 'm'))
