/* Call-driver tariffs — single source for the hero booking form and the Call Drivers page. */
window.GSK = window.GSK || {};

GSK.tariffs = [
  {
    id: 'oneway', tab: 'One Way', icon: 'fa-arrow-right-long', title: 'One Way',
    headline: '75 mins', headlineNote: 'approximate drive time',
    lines: ['Pick-up and drop within the city', 'Fare confirmed on WhatsApp before you travel'],
    base: null
  },
  {
    id: 'round', tab: 'Round Trip', icon: 'fa-rotate', title: 'Round Trip',
    headline: '₹550', headlineNote: 'for 4 hours',
    lines: ['Additional hours: ₹100 per hour', 'Driver stays with you for the whole trip'],
    base: 550, baseHours: 4, extraPerHour: 100
  },
  {
    id: 'sameday', tab: 'Outstation – Same Day', icon: 'fa-road', title: 'Outstation – Same Day Return',
    headline: '₹1,550', headlineNote: 'for 12 hours',
    lines: ['Night travel (10 PM – 6 AM): ₹100 extra', 'Leave and return on the same day'],
    base: 1550, night: 100
  },
  {
    id: 'days', tab: 'Outstation – Days', icon: 'fa-calendar-days', title: 'Outstation – Days Hire',
    headline: '₹1,500', headlineNote: 'per day, fixed',
    lines: ['Fixed per-day rate for multi-day trips', 'Stay and food arrangements for the driver as agreed'],
    base: 1500, perDay: 1500
  }
];

GSK.getTariff = function (id) {
  return GSK.tariffs.find(function (t) { return t.id === id; }) || GSK.tariffs[0];
};
