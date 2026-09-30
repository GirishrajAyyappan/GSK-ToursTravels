/* FAQs — referenced by id from services and tours. */
window.GSK = window.GSK || {};

GSK.faqs = [
  { id: 'f-driver-verify', q: 'How are your drivers verified?', a: 'Every driver submits ID, driving licence and address proof, clears a background check and completes a driving assessment before joining. We re-verify licences annually.' },
  { id: 'f-hours', q: 'Can I book an acting driver for just one or two hours?', a: 'Our minimum booking is three hours. After that, time is charged hourly so you only pay for what you use.' },
  { id: 'f-waiting', q: 'What happens if my event runs late?', a: 'Waiting is charged at a fixed hourly rate that we confirm in your quote. Extensions can be added on WhatsApp during the trip.' },
  { id: 'f-advance', q: 'Do I need to pay an advance?', a: 'A small advance confirms your booking. The balance is paid at the end of the trip by UPI, cash or bank transfer. Corporate clients are invoiced monthly.' },
  { id: 'f-tolls', q: 'Are tolls and parking included?', a: 'Tolls, parking and inter-state permits are listed separately in your quote so you can see exactly what you pay.' },
  { id: 'f-vehicle', q: 'Which vehicles do you offer?', a: 'Sedans, SUVs, 7-seater MPVs and tempo travellers. Premium cars are available for weddings and executive use on request.' },
  { id: 'f-cancel', q: 'What is your cancellation policy?', a: 'Free cancellation up to 24 hours before pick-up. Within 24 hours, the advance is adjusted against a future booking.' },
  { id: 'f-senior-driver', q: 'Will my parents have the same driver each time?', a: 'Yes. We assign a dedicated driver to each senior care family and keep a named back-up for emergencies, introduced in advance.' },
  { id: 'f-senior-pay', q: 'I live abroad. Can I arrange and pay from there?', a: 'Absolutely. You can book on WhatsApp, pay by UPI or bank transfer, and receive trip updates by message.' },
  { id: 'f-senior-wait', q: 'Will the driver wait during the hospital visit?', a: 'Yes. Waiting time at the hospital is part of the package plan and the driver can assist with the wheelchair, the entry and the return home.' },
  { id: 'f-tour-custom', q: 'Can I customise a tour package?', a: 'Every package is a starting point. Add nights, swap hotels, include temples or remove stops — we rebuild the itinerary around you.' },
  { id: 'f-tour-hotel', q: 'What kind of hotels do you use?', a: 'Clean, well-reviewed 3- and 4-star hotels and quality homestays. Budget or premium stays can be requested for any package.' },
  { id: 'f-tour-group', q: 'How many people can travel in one vehicle?', a: 'Sedans carry up to 4 guests, SUVs and MPVs up to 6–7 and tempo travellers up to 12. Larger groups travel in a convoy with one coordinator.' },
  { id: 'f-student-safety', q: 'What safety measures are in place for student trips?', a: 'Vehicles are inspected before each trip, drivers are experienced on hill roads, and every trip carries a first-aid kit, emergency contacts and a briefed coordinator.' },
  { id: 'f-student-group', q: 'Do you provide quotations for institutions?', a: 'Yes. We send itemised quotations on letterhead with vehicle, stay, meals and entry fees for principal and management approval.' },
  { id: 'f-corp-contract', q: 'What contract terms do corporate clients get?', a: 'Flexible monthly contracts with a pilot week, route review every quarter and no long lock-in.' },
  { id: 'f-corp-backup', q: 'What if a driver or car is unavailable?', a: 'We keep back-up vehicles and drivers on standby for corporate routes and replace within 30 minutes wherever possible.' }
];

GSK.getFaqs = function (ids) {
  return (ids || []).map(function (id) {
    return GSK.faqs.find(function (f) { return f.id === id; });
  }).filter(Boolean);
};
