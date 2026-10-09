/* Services — the six GSK categories. Single source of truth. */
window.GSK = window.GSK || {};

GSK.services = [
  {
    id: 'acting-driver',
    no: '01',
    title: 'Acting Drivers',
    short: 'Hire a vetted driver for your own car, by the hour.',
    tagline: 'Your car. Our trusted hands.',
    icon: 'fa-id-card',
    image: 'hero',
    tripTypes: ['Single trip', 'Round trip'],
    priceNote: '3-hour minimum. Waiting charged per hour.',
    overview: 'After a late dinner, a wedding, a long airport run or a day of meetings, you should not have to drive. Book a verified acting driver who arrives in uniform, drives your car as carefully as their own and gets you — and the car — home safely.',
    who: ['Car owners heading to weddings, parties or dinners', 'Airport drop and pick-up runs', 'Long-distance drives where you want to rest', 'Anyone new to a city’s traffic'],
    features: [
      ['fa-shield-halved', 'Police-verified drivers', 'ID, licence and address checked before every onboarding.'],
      ['fa-clock', 'Hourly or trip-based', 'Pay for the hours you use. Single or round trip, waiting time included in the quote.'],
      ['fa-car-side', 'Every car handled', 'Hatchbacks to SUVs, manual or automatic, petrol, diesel or EV.'],
      ['fa-location-dot', 'Live trip updates', 'Driver details shared before pick-up and trip updates on WhatsApp.']
    ],
    steps: [
      ['Tell us the trip', 'Pickup, drop, time and whether it is one-way or a round trip.'],
      ['Get a fixed quote', 'We reply on WhatsApp with a clear price — no surge, no surprises.'],
      ['Meet your driver', 'Name, photo and number shared before the driver arrives.'],
      ['Ride and relax', 'Your driver returns the car exactly where you want it.']
    ],
    faqIds: ['f-driver-verify', 'f-hours', 'f-waiting', 'f-advance']
  },
  {
    id: 'cab-with-driver',
    no: '02',
    title: 'Taxi',
    short: 'Clean, well-kept cars with courteous chauffeurs — point to point or by the hour.',
    tagline: 'A proper car, a proper driver.',
    icon: 'fa-car-side',
    image: 'cab',
    tripTypes: ['Single trip', 'Round trip', 'Hourly rental'],
    priceNote: 'Sedan rate. SUV and premium MPV on request. Tolls and parking extra.',
    overview: 'Think of the convenience of an app cab, with the accountability of a company that knows your driver by name. Sedans, SUVs and MPVs for airport transfers, city hops, hourly rentals and outstation trips.',
    who: ['Airport and railway transfers', 'Family outstation trips', 'Hourly city use for errands and meetings', 'Visitors who want one driver for the whole stay'],
    features: [
      ['fa-car', 'Fleet for every group', 'Sedan, SUV and 7-seater MPV — all air-conditioned, cleaned before every trip.'],
      ['fa-indian-rupee-sign', 'Transparent pricing', 'Per-km, hourly or fixed trip price. Tolls and permits listed upfront.'],
      ['fa-suitcase-rolling', 'Door-to-door', 'Luggage help, child seats on request, and flight-tracked airport pick-ups.'],
      ['fa-headset', 'Real humans on call', 'One number for changes, delays and extensions — answered, not auto-routed.']
    ],
    steps: [
      ['Choose your car', 'Sedan, SUV or MPV based on people and luggage.'],
      ['Share the route', 'Single trip, round trip or hourly — we calculate everything.'],
      ['Confirm on WhatsApp', 'Pay a small advance to lock the car and driver.'],
      ['Travel', 'Driver reaches 10 minutes early. Every time.']
    ],
    faqIds: ['f-tolls', 'f-vehicle', 'f-advance', 'f-cancel']
  },
  {
    id: 'senior-care-rides',
    no: '03',
    title: 'Senior Care Rides',
    short: 'Patient, regular rides for parents — hospital visits, check-ups and errands.',
    tagline: 'For parents whose children are far away.',
    icon: 'fa-heart-pulse',
    image: 'senior',
    tripTypes: ['Single trip', 'Round trip', 'Monthly package'],
    priceNote: 'Indicative monthly package (driver alone, up to 8 hospital trips). Car + driver packages on request.',
    overview: 'When you live abroad or in another city, one worry stays with you: “Who will take Amma and Appa to the hospital?” Our senior care packages pair your parents with the same patient, trained driver every time — on a schedule you set, with updates sent straight to you.',
    who: ['Families with parents living alone in Tamil Nadu, Kerala, Karnataka, AP or Telangana', 'Regular dialysis, physiotherapy or check-up visits', 'Temple visits, banking and family errands', 'NRI children who want peace of mind'],
    features: [
      ['fa-user-nurse', 'The same driver, always', 'One trained driver per family so your parents are never with a stranger.'],
      ['fa-hand-holding-heart', 'Patient and respectful', 'Drivers help with the door, steps and walker. No hurrying, no horns.'],
      ['fa-bell', 'Updates for the family', 'You receive a WhatsApp message when pickup starts and when they are safely home.'],
      ['fa-calendar-check', 'Fixed schedule packages', 'Weekly or monthly hospital runs, pre-booked and billed to you — even from abroad.']
    ],
    steps: [
      ['Share the routine', 'Hospital, days, timing and any mobility needs.'],
      ['Meet the driver', 'A video intro so your parents know who to expect.'],
      ['Start the package', 'Weekly or monthly, with pickups confirmed the evening before.'],
      ['Stay informed', 'Trip updates to you, wherever you are in the world.']
    ],
    faqIds: ['f-senior-driver', 'f-senior-pay', 'f-senior-wait', 'f-advance']
  },
  {
    id: 'tour-packages',
    no: '04',
    title: 'Tour Packages',
    short: 'Route-expert drivers, sightseeing, temples, stays and meals — all planned.',
    tagline: 'One driver who knows every turn.',
    icon: 'fa-route',
    image: 'temple',
    tripTypes: ['Round trip', 'One-way circuit'],
    priceNote: 'Indicative, for a sedan on a 2-night package. Hotels and meals itemised per package.',
    overview: 'Planning a trip from Chennai to Kanyakumari? Kerala backwaters? Coorg from Bangalore? We send a chauffeur who has driven the route dozens of times — and who knows which temple to visit before noon, which restaurant serves the best meal and which hotel is actually worth the money.',
    who: ['Families and multi-generation groups', 'Couples and honeymooners', 'Temple and pilgrimage circuits', 'Small groups up to 12 travelling together'],
    features: [
      ['fa-map-location-dot', 'Route-expert drivers', 'Chauffeurs who know the road, the stops and the timing.'],
      ['fa-hotel', 'Hand-picked stays', 'Clean, well-reviewed hotels and homestays chosen for each stop.'],
      ['fa-utensils', 'Meals worth stopping for', 'Local restaurants our drivers actually eat at.'],
      ['fa-place-of-worship', 'Temples and sights planned', 'Darshan timings and entry windows built into the day.']
    ],
    steps: [
      ['Pick a route', 'Choose a ready package or describe your own.'],
      ['Customise', 'Add a night, swap a hotel, add a temple — we adjust the plan.'],
      ['Confirm', 'Pay an advance. Receive driver, hotel and itinerary details.'],
      ['Travel', 'Your driver doubles as your local guide.']
    ],
    faqIds: ['f-tour-custom', 'f-tour-hotel', 'f-tour-group', 'f-cancel']
  },
  {
    id: 'student-tours',
    no: '05',
    title: 'Student IV Packages',
    short: 'Safe, well-planned industrial visits and educational trips for schools and colleges.',
    tagline: 'Trips teachers can trust.',
    icon: 'fa-graduation-cap',
    image: 'students',
    tripTypes: ['Single trip', 'Round trip'],
    priceNote: 'Indicative, for groups of 30+ on a day trip with coach. Stay packages priced per itinerary.',
    overview: 'A good industrial visit is organised, safe and memorable. We work with schools and colleges to plan coach travel, nearby sightseeing, food and stays — with experienced drivers, first-aid kits and a coordinator on every trip.',
    who: ['Schools and colleges planning IVs and study tours', 'Department-wise engineering and management trips', 'Sports teams and cultural groups', 'Clubs and youth organisations'],
    features: [
      ['fa-bus', 'Coach and tempo traveller', 'From 12-seaters to 50-seat coaches with experienced hill-route drivers.'],
      ['fa-shield-heart', 'Safety first', 'Speed-limited vehicles, first-aid kits, teacher-coordinator briefing.'],
      ['fa-landmark', 'IV + sightseeing', 'Industrial or institutional visit with nearby attractions built in.'],
      ['fa-file-invoice', 'Paperwork handled', 'Quotations, invoices and permits formatted for institutional approval.']
    ],
    steps: [
      ['Send the brief', 'Group size, dates, destination and budget per student.'],
      ['Receive the plan', 'Itinerary, vehicles and a formal quotation.'],
      ['Approve and confirm', 'Advance to block vehicles and stays.'],
      ['Travel with a coordinator', 'A GSK coordinator stays in touch through the trip.']
    ],
    faqIds: ['f-student-safety', 'f-student-group', 'f-tour-hotel', 'f-advance']
  },
  {
    id: 'corporate-pickups',
    no: '06',
    title: 'Corporate Pickups',
    short: 'Dependable daily employee transport, single or round trip, on contract.',
    tagline: 'On time, every shift.',
    icon: 'fa-building',
    image: 'corporate',
    tripTypes: ['Single trip', 'Round trip', 'Monthly contract'],
    priceNote: 'Priced per route, vehicle type and shift pattern. Request a proposal.',
    overview: 'Reliable office commutes are a quiet productivity advantage. We run fixed-route and shift-based pickups for teams and leadership, with dedicated drivers, back-up vehicles and monthly invoicing.',
    who: ['IT parks and offices with shift timings', 'Leadership and guest transport', 'Night-shift drops with safety protocols', 'Company events and offsites'],
    features: [
      ['fa-clock-rotate-left', 'Punctuality tracking', 'Route and timing reports shared with your admin team.'],
      ['fa-car-burst', 'Back-up vehicles', 'A spare car ready if a vehicle or driver is unavailable.'],
      ['fa-moon', 'Night-shift safety', 'Verified drivers, GPS-tracked routes and escort-aware rosters.'],
      ['fa-file-contract', 'Monthly invoicing', 'One consolidated invoice with GST, trip log and route breakup.']
    ],
    steps: [
      ['Share your roster', 'Locations, timings and headcount.'],
      ['Approve the proposal', 'Routes, vehicles and monthly pricing.'],
      ['Pilot week', 'We run a trial week and tune the routes.'],
      ['Go live', 'Dedicated drivers and a point of contact for your admin.']
    ],
    faqIds: ['f-corp-contract', 'f-corp-backup', 'f-vehicle', 'f-advance']
  },
  {
    id: 'valet-parking',
    no: '07',
    title: 'Valet Parking',
    short: 'Trained valet teams for hotels, malls, weddings and events — and for private homes and gatherings.',
    tagline: 'Arrive. Step out. We park.',
    icon: 'fa-square-parking',
    image: 'hotel',
    tripTypes: ['Event', 'Daily contract'],
    priceNote: 'B2B: priced per site, shift and headcount. B2C: priced per event and number of cars.',
    overview: 'Whether it is a hotel porch, a restaurant, a mall, a corporate event or a family wedding at home, our uniformed valet staff handle arrival, parking and return with care. Businesses (B2B) get dependable daily or event teams; individuals (B2C) get a smooth guest experience for functions and parties.',
    who: ['Hotels, restaurants, malls and hospitals (B2B)', 'Corporate events and conferences (B2B)', 'Weddings, receptions and house functions (B2C)', 'Residential communities hosting gatherings (B2C)'],
    features: [
      ['fa-user-tie', 'Uniformed, trained staff', 'Verified valets trained in careful car handling and guest etiquette.'],
      ['fa-ticket', 'Token and key control', 'Numbered tokens, key boxes and a handover log for every car.'],
      ['fa-shield-halved', 'Insured handling', 'Careful parking, photo check-in on request and clear responsibility.'],
      ['fa-people-group', 'Scales to your crowd', 'From 2 valets at a house function to full teams for large events.']
    ],
    steps: [
      ['Share the venue', 'Location, date, timings and expected number of cars.'],
      ['Get a proposal', 'Team size, pricing and parking plan on WhatsApp.'],
      ['Site check', 'For larger events we visit and plan the flow beforehand.'],
      ['Event day', 'A supervisor and valet team on site, on time.']
    ],
    faqIds: ['f-corp-contract', 'f-corp-backup', 'f-advance', 'f-cancel']
  },
  {
    id: 'airport-transfers',
    no: '08',
    title: 'Airport Pickup & Drop',
    short: 'On-time airport transfers with flight tracking, luggage help and a fixed fare.',
    tagline: 'Never miss a flight. Never wait at arrivals.',
    icon: 'fa-plane-departure',
    image: 'traveller',
    tripTypes: ['Pickup', 'Drop', 'Round trip'],
    priceNote: 'Fixed fare by pickup area and vehicle. Waiting charges listed upfront.',
    overview: 'Early flights, late landings, heavy luggage — we make the airport run simple. Your driver tracks the flight, waits at arrivals with a name board and gets you to your door, or gets you to the terminal with time to spare.',
    who: ['Families and seniors with luggage', 'Business travellers on tight schedules', 'Early-morning and late-night flights', 'Visitors arriving in a new city'],
    features: [
      ['fa-plane-arrival', 'Flight tracking', 'Pick-ups adjust automatically if your flight is early or late.'],
      ['fa-suitcase-rolling', 'Luggage help', 'Sedans, SUVs and MPVs sized for your bags and group.'],
      ['fa-indian-rupee-sign', 'Fixed fare', 'The fare is agreed upfront. No surge at midnight.'],
      ['fa-clock', 'Always early', 'Driver reaches 10 minutes before your pick-up time.']
    ],
    steps: [
      ['Share flight and address', 'Flight number, terminal and your pickup or drop address.'],
      ['Get a fixed fare', 'Confirmed on WhatsApp with driver details.'],
      ['Meet your driver', 'Name board at arrivals, or at your door for drops.'],
      ['Travel at ease', 'Direct, comfortable, on time.']
    ],
    faqIds: ['f-tolls', 'f-vehicle', 'f-advance', 'f-cancel']
  },
  {
    id: 'driving-class',
    no: '09',
    title: 'Driving Class for Beginners',
    short: 'Patient one-to-one car driving lessons, on your car or ours.',
    tagline: 'Learn to drive without the fear.',
    icon: 'fa-chalkboard-user',
    image: 'cab',
    tripTypes: ['Beginner', 'Refresher'],
    priceNote: 'Course fee depends on number of sessions and whether you use your car or ours.',
    overview: 'Nervous about city traffic? Our experienced instructors teach from the very basics — controls, clutch and gears, parking, turns and traffic sense — one-to-one at a pace that suits you, in manual or automatic cars.',
    who: ['First-time learners and adults who never learned', 'Licence holders who have lost confidence', 'Women and seniors who prefer a patient instructor', 'Families who want a trained instructor for a new car'],
    features: [
      ['fa-user-graduate', 'Experienced instructors', 'Patient, polite instructors with years of driving experience.'],
      ['fa-car-side', 'Manual or automatic', 'Learn in our dual-control car or in your own.'],
      ['fa-road', 'Real-road practice', 'Start in quiet areas and move to city traffic when ready.'],
      ['fa-id-card', 'Licence guidance', 'Help with learner’s licence and test preparation.']
    ],
    steps: [
      ['Tell us your level', 'Complete beginner or just need a confidence boost.'],
      ['Pick a schedule', 'Morning, evening or weekend slots.'],
      ['Start with basics', 'Controls, clutch, steering and parking in a safe area.'],
      ['Hit the road', 'Gradual city and highway practice with your instructor.']
    ],
    faqIds: ['f-advance', 'f-cancel', 'f-vehicle', 'f-hours']
  }
];

/* Display order on the home page, services page and footer; numbering follows it. */
GSK.services = ['acting-driver', 'cab-with-driver', 'driving-class', 'valet-parking', 'senior-care-rides', 'airport-transfers', 'corporate-pickups', 'tour-packages', 'student-tours']
  .map(function (id, i) {
    var s = GSK.services.find(function (x) { return x.id === id; });
    s.no = String(i + 1).padStart(2, '0');
    return s;
  });

GSK.getService = function (id) {
  return GSK.services.find(function (s) { return s.id === id; });
};
