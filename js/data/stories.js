/* Travel stories — body is an array of blocks: {h}, {p}, {quote}. */
window.GSK = window.GSK || {};

GSK.storyCategories = ['All', 'Road Guides', 'Temple Trails', 'Family Travel', 'Driver Stories', 'Travel Tips'];

GSK.stories = [
  {
    id: 'chennai-to-kanyakumari-road-guide', featured: true,
    title: 'Chennai to Kanyakumari: a road guide from the people who drive it',
    category: 'Road Guides', author: 'Senthil Kumar', role: 'Senior chauffeur, 14 years',
    date: '2026-08-12', readMins: 7, image: 'road',
    excerpt: 'Five days, four temple towns and one very good sunrise. Here is how our drivers plan the route — and where they would stop if it was their own family in the car.',
    destinationIds: ['kanyakumari', 'madurai'], tourId: 'chennai-kanyakumari',
    body: [
      { p: 'Ask any GSK driver about the road to Kanyakumari and watch their face change. It is the route that shows the south at its best: the coastal highway, the Chola temples, the lanes of Madurai and finally the place where three seas meet.' },
      { h: 'Start before sunrise' },
      { p: 'The best hours between Chennai and Mahabalipuram are before 7 am. The road is empty, the light is soft and you reach the Shore Temple before the tour buses do. If you leave at 9, you leave behind half the magic.' },
      { h: 'Spend the second night in Madurai' },
      { p: 'Plan your arrival so you reach Meenakshi Amman Temple by late afternoon. The evening rituals, the lamps and the crowd all arrive together. We suggest a hotel within walking distance so you can return the next morning for a quieter visit.' },
      { quote: 'People ask me for the “best” stop. I tell them: the best stop is the one where you forget to check the time.' },
      { h: 'Don’t skip Rameswaram' },
      { p: 'It adds a day but changes the journey. Crossing the Pamban bridge, bathing at the theerthams and standing at Dhanushkodi gives the trip a sense of pilgrimage even if you did not plan one.' },
      { h: 'Arrive for sunset, stay for sunrise' },
      { p: 'Kanyakumari rewards those who stay overnight. Sunset over the water and sunrise from the same rooftop are two different experiences. Plan for both.' }
    ]
  },
  {
    id: 'kerala-monsoon-drive', featured: false,
    title: 'Why Kerala is best driven slowly (and in the rain)',
    category: 'Road Guides', author: 'Sajeev Menon', role: 'Driver-guide, Kochi',
    date: '2026-07-03', readMins: 5, image: 'keralaCanal',
    excerpt: 'Monsoon Kerala is a different country. Here is how to enjoy the ghat roads, the food and the quiet — safely.',
    destinationIds: ['kerala'], tourId: 'kerala-backwaters-hills',
    body: [
      { p: 'Travellers worry about the rain. Drivers love it. The hills glow, the waterfalls fill, and the tourist crowd thins. With the right driver and a flexible plan, monsoon Kerala is at its best.' },
      { h: 'Plan shorter days' },
      { p: 'Keep driving to three or four hours per day. The roads are slower, and the best parts of Kerala are the stops: a tea stall in Munnar, a chaya and banana fritters at a canal-side shop.' },
      { h: 'Choose the right stay' },
      { p: 'Houseboats operate in light rain. Homestays with covered verandahs are ideal — sit out with a cup of chai and let the weather do the work.' }
    ]
  },
  {
    id: 'parents-back-home', featured: false,
    title: 'When your parents live alone: a practical guide to hospital travel',
    category: 'Family Travel', author: 'Anitha Suresh', role: 'Senior care coordinator',
    date: '2026-06-18', readMins: 6, image: 'senior',
    excerpt: 'Regular hospital visits are easy to plan and hard to worry about from far away. Here is how families are making it work.',
    destinationIds: ['chennai'], tourId: null,
    body: [
      { p: 'If your parents live in a different city — or country — getting to the hospital becomes the biggest logistical worry. Auto-rickshaws are unpredictable. Ride-hailing apps assign different drivers every time. Family friends are busy.' },
      { h: 'Consistency matters more than convenience' },
      { p: 'Older people are more comfortable when the driver knows their home, their gait and their routine. The same driver each time is a safety feature, not a luxury.' },
      { h: 'Set a rhythm' },
      { p: 'Weekly dialysis, monthly check-ups or quarterly scans — group them into a fixed schedule with a pre-arranged driver and a simple payment arrangement.' },
      { quote: 'The hardest part of living abroad is not the distance. It is not knowing whether they reached safely.' },
      { h: 'Ask for updates' },
      { p: 'A short message at pickup and at drop-off gives the family peace of mind — and gives your parents confidence that someone is watching over them.' }
    ]
  },
  {
    id: 'temples-before-noon', featured: false,
    title: 'Five temples to visit before noon (and why the timing matters)',
    category: 'Temple Trails', author: 'Murugan R.', role: 'Route specialist',
    date: '2026-05-22', readMins: 4, image: 'temple',
    excerpt: 'Crowds, heat and closing hours shape every temple trip. A driver’s notes on timing.',
    destinationIds: ['madurai', 'tirupati'], tourId: 'chennai-tirupati-darshan',
    body: [
      { p: 'South India’s great temples keep their own clocks. Morning abhishekam, afternoon closing and evening aarti can all change your plans. Here is how our drivers sequence a temple day.' },
      { h: 'Start with the ones that close early' },
      { p: 'Smaller shrines and hill temples often close by midday. Begin there and leave large, crowded complexes for late afternoon.' },
      { h: 'Dress and carry light' },
      { p: 'Traditional attire is required at many temples. Carry only what you need — phones and cameras are restricted in several.' }
    ]
  },
  {
    id: 'student-trip-checklist', featured: false,
    title: 'The teacher’s checklist for a smooth student trip',
    category: 'Travel Tips', author: 'GSK Team', role: 'Group travel desk',
    date: '2026-04-09', readMins: 4, image: 'students',
    excerpt: 'Consent forms, vehicle checks and the one thing coordinators forget: a wait-time buffer.',
    destinationIds: ['ooty'], tourId: 'ooty-student-iv',
    body: [
      { p: 'Taking 40 students anywhere is an exercise in planning. After years of running institutional trips, these are the lessons we share with every coordinator.' },
      { h: 'Before the trip' },
      { p: 'Collect consent forms and emergency contacts at least a week in advance. Share the itinerary with parents. Confirm vehicle details and driver information.' },
      { h: 'On the day' },
      { p: 'Brief students on the plan. Assign a buddy system. Add a 15-minute buffer between stops — it saves the whole day.' }
    ]
  },
  {
    id: 'a-day-with-ramesh', featured: false,
    title: 'A day with Ramesh: why our drivers know the road like a story',
    category: 'Driver Stories', author: 'GSK Team', role: 'Editorial',
    date: '2026-03-14', readMins: 5, image: 'hero',
    excerpt: 'Twenty-two years, 600 trips to Kanyakumari and a playlist that has calmed hundreds of nervous passengers.',
    destinationIds: ['chennai'], tourId: null,
    body: [
      { p: 'Ramesh has driven the Chennai–Kanyakumari route so many times he can tell the distance by the smell of the sea. “The road talks,” he says. “You just have to listen.”' },
      { h: 'The habit of arriving early' },
      { p: 'Ramesh reaches every pickup ten minutes early and stays in the car until the exact minute. “People are nervous before a trip. An early driver calms everyone,” he says.' },
      { quote: 'Good driving is invisible. You only notice it when it’s missing.' }
    ]
  }
];

GSK.getStory = function (id) {
  return GSK.stories.find(function (s) { return s.id === id; });
};
