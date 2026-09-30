# GSK Tour & Travels — Website

Premium, multi-page website for **GSK Tour & Travels** (acting drivers, cab + driver, senior care rides,
tour packages, student IV trips, corporate pickups across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana).

Plain HTML + CSS + vanilla JavaScript. **No build step, no dependencies to install.**

## Run it

Double-click `index.html`, or serve the folder (recommended):

```bash
npx serve .            # or: python -m http.server 8080
```

Fonts (Google Fonts), icons (Font Awesome) and photos (Unsplash) load from CDNs, so an internet connection is needed for the full look. Broken photo URLs fall back to a branded placeholder automatically.

## Structure

```
index.html                 Home
views/                     services, service-detail, tours, tour-detail, destinations,
                           destination-detail, about, contact, stories, story-detail
styles/
  styles.css               MAIN file — @imports everything below
  tokens.css               ★ palette, type, spacing, radius, shadows (edit brand colours here)
  base.css  layout.css  components.css
  home.css services.css tours.css destinations.css about.css contact.css stories.css
js/
  boot.js                  loads everything in order, runs the page controller
  config.js                ★ phone, WhatsApp, email, address, hours, stats, per-page SEO
  data/                    ★ images, services, tours, destinations, testimonials, stories, faqs
  lib/utils.js             routing, images (+fallback), reveal, counters, SEO helpers
  components/              layout (navbar/footer), cards, widgets (FAQ, itinerary, gallery, slider)
  pages/                   one controller per page
```

Detail pages are templates driven by the URL: `views/tour-detail.html?id=chennai-kanyakumari`,
`views/service-detail.html?id=senior-care-rides`, `views/destination-detail.html?id=kerala`,
`views/story-detail.html?id=<story-id>`.

## Customise

| I want to…                         | Edit                                             |
|------------------------------------|--------------------------------------------------|
| Change the colour scheme           | the four `--brand-*` variables in `styles/tokens.css` |
| Change phone / WhatsApp / email    | `js/config.js`                                   |
| Add or edit a tour / destination   | `js/data/tours.js`, `js/data/destinations.js`    |
| Swap a photo                       | `js/data/images.js` (id, URL or `assets/…` path) |
| Change page titles / descriptions  | `js/config.js` → `GSK.seo` (and the `<head>` of each page) |
| Connect a backend                  | `js/config.js` → `api.enquiryEndpoint` / `newsletterEndpoint` (JSON POST) |

## Before going live — replace sample content

- Phone, email, address, hours, `siteUrl` (`js/config.js`) are placeholders.
- Stats (years, trips, rating), testimonials, team members and blog authors are **sample content**.
- Prices are **indicative** (`js/data/*.js`); the "GST registered / insured / police-verified" badges
  on the About page must reflect reality.
- Unsplash photos are stand-ins; use GSK's own photography (drivers, vehicles) for best trust signal.
- Enquiry & newsletter forms run in demo mode: data is saved to `localStorage` and the enquiry
  hands off to WhatsApp. Set the endpoints in `config.js` to POST to a real API.

## Notes

- Accessibility: skip link, semantic landmarks, labelled forms, visible focus, keyboard-operable
  menu/accordions/lightbox, `prefers-reduced-motion` respected.
- SEO: unique title + description per page, canonical, Open Graph, JSON-LD (TravelAgency, TouristTrip, Article).
  Because content is rendered by JavaScript, for production SEO consider static pre-rendering of detail pages.
