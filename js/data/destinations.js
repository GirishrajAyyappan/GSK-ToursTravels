/* Destinations — data-driven. `tourIds` link to GSK.tours. */
window.GSK = window.GSK || {};

GSK.destinations = [
  {
    id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', region: 'Tamil Nadu', featured: true, primary: true,
    tag: 'Coast & culture', image: 'beach', gallery: ['beach', 'temple', 'coast', 'cityNight'],
    short: 'Temples, beaches and the gateway to the whole south.',
    intro: 'Chennai is where most of our journeys begin — from Marina mornings and Kapaleeshwarar temple to the road that runs down the coast through Mahabalipuram and Pondicherry. Start here and the south opens up.',
    bestTime: 'November – February', duration: '1–3 days', from: 'From ₹1,800 city day package',
    highlights: ['Marina Beach at sunrise', 'Kapaleeshwarar & Parthasarathy temples', 'Mahabalipuram shore temple', 'Pondicherry’s French Quarter'],
    driverNote: 'Leave before 6 am for ECR. The coast road is quietest at dawn and the light over the shore temple is worth the early start.',
    info: [['Airport', 'Chennai International (MAA)'], ['Rail', 'Central & Egmore'], ['Language', 'Tamil, English'], ['Drive', 'Mahabalipuram 1.5 h · Pondicherry 3 h']],
    tourIds: ['chennai-pondicherry-weekend', 'chennai-kanyakumari', 'chennai-tirupati-darshan']
  },
  {
    id: 'kerala', name: 'Kerala', state: 'Kerala', region: 'Kerala', featured: true, primary: true,
    tag: 'Backwaters & hills', image: 'keralaWater', gallery: ['keralaWater', 'keralaBoat', 'keralaCanal', 'green'],
    short: 'Backwater mornings, tea-hill drives and unhurried coastal towns.',
    intro: 'Slow green canals, houseboats drifting at dawn, tea estates above the clouds. Kerala rewards the traveller who is not in a hurry — and a driver who knows exactly where the road gets beautiful.',
    bestTime: 'September – March', duration: '4–6 days', from: 'From ₹24,500 per vehicle',
    highlights: ['Alleppey backwater houseboat', 'Munnar tea estates', 'Fort Kochi heritage walk', 'Kovalam & Varkala beaches'],
    driverNote: 'Plan Munnar ghat stretches in daylight. Our drivers time each climb so the view is yours and the road is calm.',
    info: [['Airport', 'Kochi (COK) · Trivandrum (TRV)'], ['Language', 'Malayalam, English'], ['Drive', 'Kochi → Munnar 4 h · Munnar → Alleppey 4 h'], ['Permits', 'Tamil Nadu–Kerala handled by us']],
    tourIds: ['kerala-backwaters-hills']
  },
  {
    id: 'bangalore', name: 'Bangalore', state: 'Karnataka', region: 'Karnataka', featured: true, primary: true,
    tag: 'City & escapes', image: 'green', gallery: ['green', 'cityNight', 'forest', 'hotel'],
    short: 'A garden city with some of the south’s best weekend escapes within reach.',
    intro: 'Bangalore is the launchpad: Mysuru palaces, Coorg coffee hills and Nandi Hills sunrise are all a comfortable drive away. Our Bangalore chauffeurs know the traffic windows as well as the routes.',
    bestTime: 'October – March', duration: '2–4 days', from: 'From ₹14,900 per vehicle',
    highlights: ['Mysuru Palace', 'Coorg coffee estates', 'Nandi Hills sunrise', 'Hampi heritage (extended)'],
    driverNote: 'Leave Bangalore before 6:30 am on Fridays — the Mysuru road fills up quickly after that.',
    info: [['Airport', 'Kempegowda (BLR)'], ['Language', 'Kannada, English, Hindi'], ['Drive', 'Mysuru 3.5 h · Coorg 5.5 h'], ['Best for', 'Weekend getaways']],
    tourIds: ['bangalore-coorg-mysuru']
  },
  {
    id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', region: 'Telangana', featured: true, primary: true,
    tag: 'Heritage & food', image: 'cityNight', gallery: ['cityNight', 'hotelLodge', 'sunrise', 'road'],
    short: 'Charminar lanes, Nizami food and forest-edge getaways.',
    intro: 'Old city bazaars, Golconda at sunset and a biryani argument that has lasted centuries. Our Hyderabad drivers know where to park, where to eat and how to make a city day feel effortless.',
    bestTime: 'October – February', duration: '2–3 days', from: 'From ₹12,900 per vehicle',
    highlights: ['Charminar and Laad Bazaar', 'Golconda Fort light & sound', 'Ramoji Film City', 'Nagarjuna Sagar & Srisailam'],
    driverNote: 'Golconda is best around 4 pm. You see the fort in gold light and leave before the evening rush.',
    info: [['Airport', 'Rajiv Gandhi (HYD)'], ['Language', 'Telugu, Urdu, Hindi, English'], ['Drive', 'Srisailam 4 h · Nagarjuna Sagar 3 h'], ['Best for', 'Heritage and food']],
    tourIds: ['hyderabad-srisailam']
  },
  {
    id: 'kanyakumari', name: 'Kanyakumari', state: 'Tamil Nadu', region: 'Tamil Nadu', featured: true, tag: 'Land’s end',
    image: 'sunrise', gallery: ['sunrise', 'beach', 'temple', 'coast'],
    short: 'Where three seas meet and the day begins over the water.',
    intro: 'The southern tip of India, famed for its sunrise over the Vivekananda Rock. The drive from Chennai passes some of Tamil Nadu’s greatest temple towns — the real reason to go by road.',
    bestTime: 'October – March', duration: '3–4 days', from: 'From ₹21,500 per vehicle',
    highlights: ['Sunrise at the confluence of three seas', 'Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Padmanabhapuram Palace nearby'],
    driverNote: 'Sunrise viewing starts around 5:45 am. We book a stay within walking distance so you don’t fight traffic.',
    info: [['Rail', 'Kanyakumari Junction'], ['Language', 'Tamil, Malayalam'], ['Drive', 'Madurai 4.5 h · Trivandrum 2 h'], ['Best for', 'Pilgrim and sunrise travellers']],
    tourIds: ['chennai-kanyakumari']
  },
  {
    id: 'madurai', name: 'Madurai & Rameswaram', state: 'Tamil Nadu', region: 'Tamil Nadu', tag: 'Temple towns',
    image: 'temple', gallery: ['temple', 'sunrise', 'beach', 'road'],
    short: 'Meenakshi Amman, the Pamban bridge and the sacred shores.',
    intro: 'Madurai never sleeps, and its temple is the reason why. Rameswaram is quieter, brighter and deeply spiritual. A driver who knows the darshan timings saves half a day.',
    bestTime: 'October – March', duration: '2–3 days', from: 'From ₹16,900 per vehicle',
    highlights: ['Meenakshi Amman Temple', 'Ramanathaswamy Temple', 'Pamban bridge', 'Dhanushkodi'],
    driverNote: 'Go to Meenakshi after 4 pm for the evening rituals. Crowds are lighter and the gopuram is lit.',
    info: [['Airport', 'Madurai (IXM)'], ['Language', 'Tamil'], ['Drive', 'Madurai → Rameswaram 3 h'], ['Best for', 'Temple circuits']],
    tourIds: ['chennai-kanyakumari']
  },
  {
    id: 'ooty', name: 'Ooty & Coonoor', state: 'Tamil Nadu', region: 'Tamil Nadu', tag: 'Hill station',
    image: 'hills', gallery: ['hills', 'forest', 'green', 'hotelLodge'],
    short: 'Tea slopes, toy-train lines and cool, misty mornings.',
    intro: 'The Nilgiris are best enjoyed slowly. A driver familiar with the 36 hairpin bends makes the climb calm for everyone — including those who usually feel the turns.',
    bestTime: 'March – June, September – November', duration: '2–3 days', from: 'From ₹13,500 per vehicle',
    highlights: ['Coonoor tea estates', 'Doddabetta peak', 'Botanical gardens', 'Nilgiri mountain railway'],
    driverNote: 'Start the ghat climb mid-morning when mist lifts. We stop at the best viewpoints so nobody has to ask.',
    info: [['Rail', 'Mettupalayam (toy train link)'], ['Language', 'Tamil, English, Badaga'], ['Drive', 'Coimbatore 3.5 h · Mysuru 4 h'], ['Best for', 'Student IV & families']],
    tourIds: ['ooty-student-iv']
  },
  {
    id: 'coorg', name: 'Coorg', state: 'Karnataka', region: 'Karnataka', tag: 'Coffee hills',
    image: 'forest', gallery: ['forest', 'green', 'hills', 'hotelLodge'],
    short: 'Coffee plantations, waterfalls and rain-washed viewpoints.',
    intro: 'Green in every direction. Coorg is for people who want to put the phone away, sit on a verandah with filter coffee and watch clouds move through the valley.',
    bestTime: 'October – March', duration: '2–3 days', from: 'From ₹15,900 per vehicle',
    highlights: ['Abbey Falls', 'Raja’s Seat', 'Dubare elephant camp', 'Plantation homestays'],
    driverNote: 'Ghat roads near Madikeri can be slippery in monsoon. We drive slowly and only in daylight.',
    info: [['Drive', 'Bangalore 5.5 h · Mysuru 2.5 h'], ['Language', 'Kodava, Kannada, English'], ['Stay', 'Homestays & estate bungalows'], ['Best for', 'Couples and families']],
    tourIds: ['bangalore-coorg-mysuru']
  },
  {
    id: 'pondicherry', name: 'Pondicherry', state: 'Puducherry', region: 'Tamil Nadu', tag: 'French quarter',
    image: 'coast', gallery: ['coast', 'beach', 'hotel', 'sunrise'],
    short: 'Pastel streets, café mornings and quiet coastal roads.',
    intro: 'Three hours from Chennai and a world apart. Wander the French Quarter, visit Auroville’s Matrimandir and finish with a seafront dinner while your driver waits close by.',
    bestTime: 'October – March', duration: '1–2 days', from: 'From ₹8,900 per vehicle',
    highlights: ['French Quarter walk', 'Auroville & Matrimandir', 'Promenade Beach', 'Paradise Beach boat ride'],
    driverNote: 'Parking in White Town is tight. We drop you at the lane and hold a nearby spot so you never circle.',
    info: [['Drive', 'Chennai 3 h via ECR'], ['Language', 'Tamil, French, English'], ['Stay', 'Heritage guesthouses'], ['Best for', 'Weekend trips']],
    tourIds: ['chennai-pondicherry-weekend']
  },
  {
    id: 'tirupati', name: 'Tirupati', state: 'Andhra Pradesh', region: 'Andhra Pradesh', tag: 'Pilgrimage',
    image: 'temple', gallery: ['temple', 'sunrise', 'road', 'hotelLodge'],
    short: 'Sri Venkateswara darshan planned around queues, timings and comfort.',
    intro: 'A well-planned Tirupati trip is about timing. We work around darshan slots, hill-ghat traffic and the needs of elders in your group so the visit is about devotion, not logistics.',
    bestTime: 'September – February', duration: '1–2 days', from: 'From ₹9,500 per vehicle',
    highlights: ['Sri Venkateswara Temple, Tirumala', 'Sri Padmavathi Temple, Tiruchanoor', 'Kapila Theertham', 'Sri Kalahasti'],
    driverNote: 'We book darshan slots on your behalf where possible and keep wheelchair assistance information ready for elders.',
    info: [['Rail', 'Tirupati Junction'], ['Language', 'Telugu, Tamil, English'], ['Drive', 'Chennai 3.5 h · Bangalore 4.5 h'], ['Best for', 'Families with elders']],
    tourIds: ['chennai-tirupati-darshan']
  }
];

GSK.regions = ['All', 'Tamil Nadu', 'Kerala', 'Karnataka', 'Telangana', 'Andhra Pradesh'];

GSK.getDestination = function (id) {
  return GSK.destinations.find(function (d) { return d.id === id; });
};
