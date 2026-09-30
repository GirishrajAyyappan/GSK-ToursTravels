/* Tour packages — priced per vehicle (sedan) unless noted. Indicative only. */
window.GSK = window.GSK || {};

/* stop kinds: temple | sight | food | stay | drive */
GSK.tours = [
  {
    id: 'chennai-kanyakumari',
    title: 'Chennai to Kanyakumari: The Temple Coast',
    from: 'Chennai', to: 'Kanyakumari', regionFilter: 'Tamil Nadu',
    days: 5, nights: 4, type: 'Temple & heritage', audience: ['Family', 'Pilgrim'], tier: 'Premium',
    price: 24900, priceUnit: 'per vehicle (sedan)', featured: true,
    image: 'temple', gallery: ['temple', 'sunrise', 'beach', 'road', 'hotel', 'coast'],
    destinationIds: ['chennai', 'madurai', 'kanyakumari'],
    summary: 'The classic south-Tamil-Nadu road trip. Temple towns, coastal highways and sunrise at the country’s southern tip — with one driver who knows every turn.',
    overview: 'This is the route our drivers love most. From Chennai’s early coast road to Thanjavur’s Brihadeeswarar, Madurai’s Meenakshi and the three-sea sunrise at Kanyakumari, it is a journey you feel as much as see. Your driver times every stop around darshan hours, meals and the best light.',
    highlights: ['Brihadeeswarar Temple, Thanjavur', 'Meenakshi Amman Temple, Madurai', 'Ramanathaswamy Temple, Rameswaram', 'Sunrise at Kanyakumari', 'Padmanabhapuram Palace'],
    itinerary: [
      { day: 1, title: 'Chennai → Thanjavur', drive: '6.5 h · 350 km', summary: 'Out before dawn, down the coast and inland to the Chola heartland.', stops: [
        { kind: 'drive', text: 'Depart Chennai at 6:00 am via ECR' },
        { kind: 'sight', text: 'Mahabalipuram shore temple (45 min)' },
        { kind: 'food', text: 'Breakfast at a roadside tiffin house near Pondicherry' },
        { kind: 'temple', text: 'Evening darshan at Brihadeeswarar Temple' },
        { kind: 'stay', text: 'Check-in at a 4-star heritage hotel, Thanjavur' } ] },
      { day: 2, title: 'Thanjavur → Madurai', drive: '4 h · 190 km', summary: 'Palaces in the morning, the Meenakshi aarti in the evening.', stops: [
        { kind: 'sight', text: 'Thanjavur Palace & Art Gallery' },
        { kind: 'food', text: 'Lunch: banana-leaf meals at a Trichy favourite' },
        { kind: 'temple', text: 'Srirangam Ranganathaswamy Temple (en route)' },
        { kind: 'temple', text: 'Evening rituals at Meenakshi Amman Temple' },
        { kind: 'stay', text: 'Overnight in Madurai, walking distance from the temple' } ] },
      { day: 3, title: 'Madurai → Rameswaram → Madurai', drive: '7 h · 340 km', summary: 'Across the Pamban bridge to the island of pilgrims.', stops: [
        { kind: 'temple', text: 'Ramanathaswamy Temple & 22 theerthams' },
        { kind: 'sight', text: 'Pamban bridge and Dhanushkodi' },
        { kind: 'food', text: 'Fresh seafood lunch on the island' },
        { kind: 'stay', text: 'Return to Madurai for the night' } ] },
      { day: 4, title: 'Madurai → Kanyakumari', drive: '4.5 h · 240 km', summary: 'South to land’s end for sunset on the water.', stops: [
        { kind: 'sight', text: 'Thirumalai Nayakkar Mahal before departure' },
        { kind: 'temple', text: 'Suchindram Thanumalayan Temple' },
        { kind: 'sight', text: 'Sunset at Kanyakumari beach' },
        { kind: 'stay', text: 'Seafront hotel with sunrise-facing rooms' } ] },
      { day: 5, title: 'Sunrise & Return', drive: '—', summary: 'Sunrise at the tip, then the long road home.', stops: [
        { kind: 'sight', text: 'Sunrise viewing and Vivekananda Rock ferry' },
        { kind: 'sight', text: 'Thiruvalluvar Statue' },
        { kind: 'drive', text: 'Drop at Kanyakumari Junction / airport / return to Chennai (+1 day)' } ] }
    ],
    inclusions: ['AC sedan or SUV with experienced route driver', 'Fuel, driver allowance, tolls and parking', '4 nights in hand-picked hotels (twin sharing)', 'Daily breakfast', 'Darshan and entry timing support'],
    exclusions: ['Meals other than breakfast', 'Temple and monument entry fees', 'Special darshan tickets and camera charges', 'Personal expenses and tips'],
    hotels: [['Thanjavur', 'Heritage hotel near the palace', '4★'], ['Madurai', 'Temple-view boutique hotel', '4★'], ['Kanyakumari', 'Seafront resort', '3★/4★']],
    transport: 'AC Toyota Etios / Innova Crysta depending on group size. Child seats on request.',
    important: ['Dress code applies at most temples — traditional attire recommended', 'Mobile phones and cameras may be restricted at some temples', 'Darshan timings can change during festivals; we re-plan the day if needed'],
    faqIds: ['f-tour-custom', 'f-tour-hotel', 'f-tour-group', 'f-cancel']
  },
  {
    id: 'kerala-backwaters-hills',
    title: 'Kerala: Backwaters, Tea Hills & Beaches',
    from: 'Kochi', to: 'Trivandrum', regionFilter: 'Kerala',
    days: 6, nights: 5, type: 'Couples & honeymoon', audience: ['Couple', 'Family'], tier: 'Premium',
    price: 32900, priceUnit: 'per vehicle (sedan)', featured: true,
    image: 'keralaBoat', gallery: ['keralaBoat', 'keralaWater', 'keralaCanal', 'green', 'hotel', 'beach'],
    destinationIds: ['kerala'],
    summary: 'Kochi’s history, Munnar’s tea hills, a houseboat night on the Alleppey backwaters and a soft landing on Kovalam beach.',
    overview: 'Kerala is best experienced slowly — and this package is built for exactly that. Short drive days, a full night on the water, tea-estate mornings and a beachside finish. Your driver doubles as a gentle local guide.',
    highlights: ['Fort Kochi heritage walk', 'Munnar tea estates & Eravikulam', 'Private houseboat, Alleppey', 'Kovalam beach sunset'],
    itinerary: [
      { day: 1, title: 'Arrive Kochi', drive: '1 h', summary: 'Airport pickup and an easy heritage evening.', stops: [
        { kind: 'drive', text: 'Airport pickup by your chauffeur' },
        { kind: 'sight', text: 'Fort Kochi, Chinese fishing nets and Jew Town' },
        { kind: 'food', text: 'Dinner at a seafront restaurant' },
        { kind: 'stay', text: 'Boutique heritage stay in Fort Kochi' } ] },
      { day: 2, title: 'Kochi → Munnar', drive: '4 h · 130 km', summary: 'Waterfalls on the way up into the clouds.', stops: [
        { kind: 'sight', text: 'Cheeyappara & Valara waterfalls' },
        { kind: 'sight', text: 'Tea-estate viewpoints at Kannan Devan hills' },
        { kind: 'stay', text: 'Plantation resort, Munnar' } ] },
      { day: 3, title: 'Munnar', drive: 'Local', summary: 'A slow hill day.', stops: [
        { kind: 'sight', text: 'Eravikulam National Park (Nilgiri tahr)' },
        { kind: 'sight', text: 'Mattupetty Dam & Echo Point' },
        { kind: 'food', text: 'Tea factory visit & tasting' } ] },
      { day: 4, title: 'Munnar → Alleppey', drive: '4 h · 160 km', summary: 'Down to the water for a night on a houseboat.', stops: [
        { kind: 'stay', text: 'Private air-conditioned houseboat' },
        { kind: 'food', text: 'Kerala meals cooked on board' },
        { kind: 'sight', text: 'Sunset cruise through the canals' } ] },
      { day: 5, title: 'Alleppey → Kovalam', drive: '4 h · 160 km', summary: 'Down the coast to the beach.', stops: [
        { kind: 'sight', text: 'Marari or Varkala cliff stop' },
        { kind: 'stay', text: 'Sea-facing resort, Kovalam' },
        { kind: 'sight', text: 'Lighthouse beach at sunset' } ] },
      { day: 6, title: 'Departure', drive: '1 h', summary: 'Breakfast by the sea, then a smooth airport transfer.', stops: [
        { kind: 'temple', text: 'Optional: Sree Padmanabhaswamy Temple' },
        { kind: 'drive', text: 'Drop at Trivandrum airport / station' } ] }
    ],
    inclusions: ['AC sedan or SUV with driver for 6 days', 'Fuel, tolls, parking and inter-state permits', '5 nights: hotels, plantation resort and 1 private houseboat', 'Daily breakfast; houseboat meals', 'Airport transfers'],
    exclusions: ['Lunches and dinners (except houseboat)', 'Entry fees and activities', 'Ayurveda or spa treatments', 'Personal expenses'],
    hotels: [['Fort Kochi', 'Heritage boutique stay', '4★'], ['Munnar', 'Plantation resort', '4★'], ['Alleppey', 'Private houseboat', 'Premium'], ['Kovalam', 'Sea-facing resort', '4★']],
    transport: 'AC Innova or sedan. Comfortable for four adults with luggage.',
    important: ['Hill roads can be misty — plan departures in daylight', 'Houseboats operate on fixed check-in/out times', 'Best booked 3–4 weeks ahead in peak season'],
    faqIds: ['f-tour-custom', 'f-tour-hotel', 'f-cancel', 'f-advance']
  },
  {
    id: 'chennai-pondicherry-weekend',
    title: 'Chennai to Pondicherry: The Weekend Coast',
    from: 'Chennai', to: 'Pondicherry', regionFilter: 'Tamil Nadu',
    days: 2, nights: 1, type: 'Weekend getaway', audience: ['Couple', 'Friends'], tier: 'Comfort',
    price: 10900, priceUnit: 'per vehicle (sedan)', featured: false,
    image: 'coast', gallery: ['coast', 'beach', 'hotel', 'sunrise'],
    destinationIds: ['chennai', 'pondicherry'],
    summary: 'Mahabalipuram’s shore temple, a French-Quarter stay and a quiet evening on the promenade.',
    overview: 'A compact escape designed for a Friday night start or a Saturday morning departure. Easy distance, unhurried stops and a heritage-stay in White Town.',
    highlights: ['Mahabalipuram shore temple & Pancha Rathas', 'Muttukadu backwater stop', 'French Quarter stay', 'Auroville & Matrimandir'],
    itinerary: [
      { day: 1, title: 'Chennai → Pondicherry', drive: '3.5 h', summary: 'The scenic ECR drive with two good stops.', stops: [
        { kind: 'sight', text: 'Mahabalipuram Shore Temple and Five Rathas' },
        { kind: 'food', text: 'Seafood lunch at Mamallapuram' },
        { kind: 'sight', text: 'Promenade sunset walk' },
        { kind: 'stay', text: 'Heritage guesthouse in White Town' } ] },
      { day: 2, title: 'Pondicherry → Chennai', drive: '3.5 h', summary: 'Slow morning, spiritual stop, easy return.', stops: [
        { kind: 'food', text: 'Breakfast at a French-quarter café' },
        { kind: 'sight', text: 'Auroville & Matrimandir viewing point' },
        { kind: 'drive', text: 'Return drive via ECR' } ] }
    ],
    inclusions: ['AC sedan with driver', 'Fuel, tolls and parking', '1 night heritage stay', 'Breakfast'],
    exclusions: ['Lunch and dinner', 'Entry fees', 'Personal expenses'],
    hotels: [['Pondicherry', 'White Town heritage stay', '3★/4★']],
    transport: 'AC sedan, extra luggage space.',
    important: ['Book a stay 2 weeks ahead for long weekends', 'Alcohol and beach-side rules vary by zone'],
    faqIds: ['f-tour-custom', 'f-cancel', 'f-tolls', 'f-advance']
  },
  {
    id: 'chennai-tirupati-darshan',
    title: 'Chennai to Tirupati: Comfortable Darshan',
    from: 'Chennai', to: 'Tirupati', regionFilter: 'Andhra Pradesh',
    days: 2, nights: 1, type: 'Temple & heritage', audience: ['Family', 'Senior'], tier: 'Comfort',
    price: 11500, priceUnit: 'per vehicle (sedan)', featured: false,
    image: 'temple', gallery: ['temple', 'sunrise', 'road', 'hotelLodge'],
    destinationIds: ['tirupati', 'chennai'],
    summary: 'A planned darshan weekend with timed slots, elder-friendly logistics and Kalahasti on the way.',
    overview: 'Tirupati works best with preparation. We plan the drive and the day around darshan timings, rest breaks and the needs of older family members.',
    highlights: ['Sri Venkateswara Temple', 'Sri Padmavathi Temple', 'Sri Kalahasti Temple', 'Kapila Theertham'],
    itinerary: [
      { day: 1, title: 'Chennai → Tirupati', drive: '3.5 h', summary: 'Early start, arrive by lunch, rest and prepare.', stops: [
        { kind: 'temple', text: 'Sri Kalahasti Temple on the way' },
        { kind: 'stay', text: 'Check-in near the Alipiri base' },
        { kind: 'temple', text: 'Padmavathi Temple evening darshan' } ] },
      { day: 2, title: 'Tirumala darshan & return', drive: '4 h', summary: 'Early hill climb, darshan and a relaxed return.', stops: [
        { kind: 'temple', text: 'Sri Venkateswara Temple darshan (slot assistance)' },
        { kind: 'food', text: 'Prasadam and a simple vegetarian lunch' },
        { kind: 'drive', text: 'Return drive to Chennai' } ] }
    ],
    inclusions: ['AC sedan with driver', 'Fuel, tolls, parking, inter-state permit', '1 night stay', 'Darshan slot guidance'],
    exclusions: ['Darshan tickets', 'Meals', 'Personal expenses'],
    hotels: [['Tirupati', 'Comfort hotel near the temple road', '3★']],
    transport: 'AC sedan or Innova for elders and luggage.',
    important: ['Carry original ID for darshan', 'Dress code is enforced at the temple', 'Slots are subject to TTD availability'],
    faqIds: ['f-tour-custom', 'f-cancel', 'f-advance', 'f-senior-driver']
  },
  {
    id: 'bangalore-coorg-mysuru',
    title: 'Bangalore: Mysuru Palaces & Coorg Coffee Hills',
    from: 'Bangalore', to: 'Coorg', regionFilter: 'Karnataka',
    days: 4, nights: 3, type: 'Family & friends', audience: ['Family', 'Couple', 'Friends'], tier: 'Premium',
    price: 21900, priceUnit: 'per vehicle (SUV)', featured: true,
    image: 'forest', gallery: ['forest', 'green', 'hills', 'hotelLodge'],
    destinationIds: ['bangalore', 'coorg'],
    summary: 'Mysuru’s royal evenings, a plantation stay in Coorg and waterfalls between the mist.',
    overview: 'A gentle four-day loop from Bangalore. Palace lights in Mysuru, a coffee-estate stay in Coorg and unhurried drives in between — with a driver who knows where the road is best.',
    highlights: ['Mysuru Palace illumination', 'Chamundi Hills', 'Abbey Falls & Raja’s Seat', 'Dubare elephant camp', 'Plantation stay'],
    itinerary: [
      { day: 1, title: 'Bangalore → Mysuru', drive: '3.5 h', summary: 'Out before the traffic, in time for the palace lights.', stops: [
        { kind: 'sight', text: 'Srirangapatna & Tipu Sultan’s Summer Palace' },
        { kind: 'sight', text: 'Mysuru Palace illumination (Sun / holidays)' },
        { kind: 'stay', text: 'Mysuru heritage hotel' } ] },
      { day: 2, title: 'Mysuru → Coorg', drive: '3 h', summary: 'Into the hills and onto the estate.', stops: [
        { kind: 'temple', text: 'Chamundi Hills and Nandi' },
        { kind: 'sight', text: 'Golden Temple, Bylakuppe (Tibetan settlement)' },
        { kind: 'stay', text: 'Coffee-plantation homestay' } ] },
      { day: 3, title: 'Coorg', drive: 'Local', summary: 'Falls, viewpoints and a quiet evening.', stops: [
        { kind: 'sight', text: 'Abbey Falls and Raja’s Seat' },
        { kind: 'sight', text: 'Dubare elephant camp' },
        { kind: 'food', text: 'Pandi curry dinner at the homestay' } ] },
      { day: 4, title: 'Coorg → Bangalore', drive: '5.5 h', summary: 'A long, scenic drive home.', stops: [
        { kind: 'sight', text: 'Coffee-curing tour and tasting' },
        { kind: 'drive', text: 'Return to Bangalore by evening' } ] }
    ],
    inclusions: ['AC SUV with driver', 'Fuel, tolls and parking', '3 nights stay with breakfast', 'Plantation experience'],
    exclusions: ['Lunches and dinners', 'Entry fees', 'Elephant camp activity charges'],
    hotels: [['Mysuru', 'Heritage hotel', '4★'], ['Coorg', 'Plantation homestay', 'Premium']],
    transport: 'AC Innova or Ertiga, well suited to hill roads.',
    important: ['Ghat sections are slippery in monsoon', 'Coorg homestays have limited rooms — book early'],
    faqIds: ['f-tour-custom', 'f-tour-hotel', 'f-tour-group', 'f-cancel']
  },
  {
    id: 'hyderabad-srisailam',
    title: 'Hyderabad: Old City, Golconda & Srisailam',
    from: 'Hyderabad', to: 'Srisailam', regionFilter: 'Telangana',
    days: 3, nights: 2, type: 'Heritage & temples', audience: ['Family', 'Friends'], tier: 'Comfort',
    price: 15900, priceUnit: 'per vehicle (sedan)', featured: false,
    image: 'cityNight', gallery: ['cityNight', 'hotelLodge', 'sunrise', 'road'],
    destinationIds: ['hyderabad'],
    summary: 'Charminar and Golconda on day one; forest road and Mallikarjuna Jyotirlinga on day two.',
    overview: 'A three-day loop that mixes Hyderabad’s food and heritage with the forested road to Srisailam and Nagarjuna Sagar.',
    highlights: ['Charminar & Laad Bazaar', 'Golconda Fort', 'Srisailam Temple', 'Nagarjuna Sagar Dam'],
    itinerary: [
      { day: 1, title: 'Old City & Golconda', drive: 'Local', summary: 'The best of Hyderabad in one day.', stops: [
        { kind: 'sight', text: 'Charminar, Laad Bazaar, Mecca Masjid' },
        { kind: 'food', text: 'Hyderabadi biryani lunch at a local institution' },
        { kind: 'sight', text: 'Golconda Fort at sunset' },
        { kind: 'stay', text: 'Hotel in Banjara Hills' } ] },
      { day: 2, title: 'Hyderabad → Srisailam', drive: '4 h', summary: 'Forest road, dam views and temple.', stops: [
        { kind: 'temple', text: 'Mallikarjuna Jyotirlinga Temple' },
        { kind: 'sight', text: 'Srisailam Dam viewpoint' },
        { kind: 'stay', text: 'Stay at Srisailam' } ] },
      { day: 3, title: 'Srisailam → Hyderabad', drive: '4 h', summary: 'An easy return with a stop at the dam.', stops: [
        { kind: 'sight', text: 'Nagarjuna Sagar dam viewpoint' },
        { kind: 'drive', text: 'Drop in Hyderabad' } ] }
    ],
    inclusions: ['AC sedan with driver', 'Fuel, tolls, parking', '2 nights stay with breakfast'],
    exclusions: ['Meals', 'Entry fees', 'Darshan tickets'],
    hotels: [['Hyderabad', 'Comfort hotel', '4★'], ['Srisailam', 'Temple guest house', '3★']],
    transport: 'AC sedan or Innova.',
    important: ['Forest-road movement may be restricted at night', 'Temple dress code applies'],
    faqIds: ['f-tour-custom', 'f-tour-hotel', 'f-cancel', 'f-advance']
  },
  {
    id: 'ooty-student-iv',
    title: 'Ooty & Coonoor: Student IV Package',
    from: 'Coimbatore', to: 'Ooty', regionFilter: 'Tamil Nadu',
    days: 3, nights: 2, type: 'Student IV', audience: ['Student'], tier: 'Comfort',
    price: 3850, priceUnit: 'per student (groups of 30+)', featured: false,
    image: 'hills', gallery: ['hills', 'forest', 'green', 'students'],
    destinationIds: ['ooty'],
    summary: 'Hill-station sightseeing with an industrial or institutional visit, safe coach travel and a teacher-coordinator.',
    overview: 'A structured, teacher-friendly IV on the Nilgiris: coach travel, tea-factory and botanical garden visits, safe stays and a coordinator from our team.',
    highlights: ['Tea-factory visit & tasting', 'Botanical gardens', 'Nilgiri toy train', 'Doddabetta peak'],
    itinerary: [
      { day: 1, title: 'Coimbatore → Ooty', drive: '3.5 h', summary: 'Coach pickup, hill climb and first sights.', stops: [
        { kind: 'drive', text: 'Pickup from campus and coach briefing' },
        { kind: 'sight', text: 'Botanical gardens and Rose Garden' },
        { kind: 'stay', text: 'Group stay at a student-friendly hotel' } ] },
      { day: 2, title: 'Coonoor & tea estates', drive: 'Local', summary: 'Institutional visit plus the best of the hills.', stops: [
        { kind: 'sight', text: 'Tea factory visit & tasting' },
        { kind: 'sight', text: 'Sim’s Park and Dolphin’s Nose' },
        { kind: 'food', text: 'Packed lunch / group meal' } ] },
      { day: 3, title: 'Doddabetta & return', drive: '3.5 h', summary: 'Sunrise viewpoint and return journey.', stops: [
        { kind: 'sight', text: 'Doddabetta peak' },
        { kind: 'drive', text: 'Return to campus' } ] }
    ],
    inclusions: ['Coach with experienced hill driver', 'Fuel, tolls, parking, driver allowance', '2 nights student stay (triple/quad sharing)', 'Breakfast and dinner', 'Coordinator and first-aid kit'],
    exclusions: ['Entry fees', 'Personal shopping', 'Lunch'],
    hotels: [['Ooty', 'Group-friendly hotel', '3★']],
    transport: '35–50 seat AC coach or tempo travellers, speed-limited.',
    important: ['Consent forms and contact lists required from the institution', 'Group rates apply for 30+ students', 'Teacher-student ratio recommended 1:15'],
    faqIds: ['f-student-safety', 'f-student-group', 'f-tour-hotel', 'f-advance']
  }
];

GSK.tourFilters = {
  durations: ['Any', '1–2 days', '3–4 days', '5+ days'],
  budgets:   ['Any', 'Under ₹15,000', '₹15,000 – ₹25,000', 'Above ₹25,000'],
  types:     ['All', 'Temple & heritage', 'Couples & honeymoon', 'Weekend getaway', 'Family & friends', 'Heritage & temples', 'Student IV']
};

GSK.getTour = function (id) {
  return GSK.tours.find(function (t) { return t.id === id; });
};
