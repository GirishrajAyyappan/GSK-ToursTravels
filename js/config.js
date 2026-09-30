/* ==========================================================================
   GSK Tour & Travels — central site configuration
   Edit contact details, stats and SEO copy here. Nothing else needs to change.
   NOTE: phone / email / address / stats below are PLACEHOLDERS — replace them
   with the real business details before going live.
   ========================================================================== */
window.GSK = window.GSK || {};

GSK.config = {
  brand: 'GSK Tour & Travels',
  shortName: 'GSK',
  tagline: 'Every mile, in trusted hands.',
  siteUrl: 'https://www.example.com',          // used for canonical + structured data
  phone: '+91 98400 00000',
  phoneHref: 'tel:+919840000000',
  whatsapp: '919840000000',                    // digits only, with country code
  email: 'hello@gsktravels.example',
  address: ['GSK Tour & Travels', 'Main Road, Chennai', 'Tamil Nadu 600001'],
  hours: [
    ['Monday – Saturday', '6:00 am – 10:00 pm'],
    ['Sunday', '7:00 am – 8:00 pm'],
    ['Emergency line', '24 × 7 for booked trips']
  ],
  markets: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'],
  social: { instagram: '#', facebook: '#', youtube: '#' },

  // Trust numbers shown on the home + about pages (replace with real figures).
  stats: [
    { value: 12,    suffix: '+',  label: 'Years on the road' },
    { value: 40000, suffix: '+',  label: 'Trips completed' },
    { value: 5,     suffix: '',   label: 'States covered' },
    { value: 4.8,   suffix: '/5', label: 'Average trip rating', decimals: 1 }
  ],

  // Backend hook. Leave empty to run in demo mode (stored in localStorage only).
  api: { enquiryEndpoint: '', newsletterEndpoint: '' }
};

/* Per-page SEO. boot.js applies title / description / canonical / Open Graph. */
GSK.seo = {
  home:        { title: 'GSK Tour & Travels — Acting Drivers, Cabs & Tour Packages in South India',
                 description: 'Verified acting drivers, premium cabs with drivers, senior hospital rides, corporate pickups and route-expert tour packages across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana.' },
  services:    { title: 'Our Services — Acting Drivers, Cabs, Senior Rides, Corporate | GSK Tour & Travels',
                 description: 'Six ways to travel with GSK: hourly acting drivers, cab with driver, senior care rides, tour packages, student trips and corporate daily pickups.' },
  service:     { title: 'Service | GSK Tour & Travels', description: 'Service details, pricing and how to book.' },
  tours:       { title: 'Tour Packages from Chennai, Kerala, Bangalore & Hyderabad | GSK Tour & Travels',
                 description: 'Chauffeur-driven tour packages with route-expert drivers, sightseeing, temples, hotels and meals — plus student industrial-visit packages.' },
  tour:        { title: 'Tour Package | GSK Tour & Travels', description: 'Day-by-day itinerary, inclusions and pricing.' },
  destinations:{ title: 'Destinations — Chennai, Kerala, Bangalore, Hyderabad & More | GSK Tour & Travels',
                 description: 'Explore the destinations we know best across South India, with local driver notes, best seasons and ready-made routes.' },
  destination: { title: 'Destination | GSK Tour & Travels', description: 'Destination guide with routes and tour packages.' },
  about:       { title: 'About GSK Tour & Travels — The People Behind the Wheel',
                 description: 'A driver-first travel company built on vetted chauffeurs, honest pricing and route knowledge across South India.' },
  contact:     { title: 'Get My Quote — Contact GSK Tour & Travels',
                 description: 'Tell us where you need to go. Get a clear quote for acting drivers, cabs, senior rides, tours and corporate pickups within hours.' },
  stories:     { title: 'Travel Stories & Road Guides | GSK Tour & Travels',
                 description: 'Road guides, temple trails, family travel tips and driver stories from across South India.' },
  story:       { title: 'Travel Story | GSK Tour & Travels', description: 'Read the full story.' }
};

/* Palette is defined ONCE in styles/tokens.css (--brand-*). To re-skin the
   whole site, change the four --brand-* variables there. */
