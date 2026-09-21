// Casa Del Mare Property Data - Updated from original site
export const property = {
  name: 'Casa Del Mare',
  tagline: 'A Raised Beach House Getaway on Intercoastal Waters',
  description: 'Casa Del Mare is your ultimate beach escape, perfectly positioned less than a 5-minute walk from the pristine sands of Cherry Grove Beach in North Myrtle Beach. This spacious 5-bedroom, 2-bathroom home comfortably sleeps 16 guests, making it ideal for large families and groups seeking a relaxing, quiet getaway. Designed with family fun in mind, the property features a game room for indoor entertainment, a soothing hot tub perfect for unwinding after beach days, and expansive outdoor living spaces including a large back deck with a gas grill for unforgettable meals with waterfront channel views. An outdoor seating area complete with TV allows you to enjoy entertainment with gentle breezes, while every corner of the home encourages connection and relaxation.',
  bedrooms: 5,
  bathrooms: 2,
  maxGuests: 16,
  beachDistance: '< 5 min walk',
  address: '325 52nd Ave North, North Myrtle Beach, SC 29582',
  latitude: 33.8261,
  longitude: -78.6711,
  email: 'familybeachtripsusa@gmail.com',
  
  // OwnerRez Integration
  ownerrez: {
    propertyId: '934d8c678417484ea626901fabf33f9a',
    bookingUrl: 'https://app.ownerrez.com/widgets/7e3b809403d14958a4be387802aabe0f?view=form&propertyKey=934d8c678417484ea626901fabf33f9a',
  },
};

export const amenities = [
  {
    icon: '🛏️',
    title: 'Sleeping',
    description: '5 Bedrooms, 2 Bathrooms. Sleeps 16 guests comfortably.',
  },
  {
    icon: '🎮',
    title: 'Entertainment',
    description: 'Game room for indoor fun and family activities.',
  },
  {
    icon: '🧖',
    title: 'Relaxation',
    description: 'Hot tub for unwinding and soaking under the stars.',
  },
  {
    icon: '🏖️',
    title: 'Beach Access',
    description: 'Less than 5 minutes walk to Cherry Grove Beach in North Myrtle Beach.',
  },
  {
    icon: '🍖',
    title: 'Outdoor Dining',
    description: 'Large back deck with gas grill for memorable meals overlooking the intercoastal channel.',
  },
  {
    icon: '📺',
    title: 'Outdoor Living',
    description: 'Outdoor seating area with TV and scenic water views.',
  },
  {
    icon: '🚤',
    title: 'Water Access',
    description: 'Direct access to intercoastal waterway with dock for boats and water activities.',
  },
  {
    icon: '✨',
    title: 'Modern Amenities',
    description: 'Fully equipped kitchen, laundry facilities, and high-speed WiFi throughout.',
  },
];

export const hostStory = [
  'Welcome to Casa del Mare — "House by the Sea." Inspired by our Italian heritage and love for the ocean, our home reflects what matters most to us: family, connection, and time spent together.',
  'We grew up surrounded by shared meals, laughter, and strong family values, and those traditions continue to shape who we are today. Family vacations have always been a special time for us to slow down, reconnect, and enjoy life\'s simple moments.',
  'Casa del Mare is our way of sharing that experience — a place to relax, unwind, and create lasting memories in North Myrtle Beach.',
  'While professionally managed by Vacasa for a seamless stay, the heart of this home comes from our family.',
  'We\'re so glad you\'re here and hope your time at Casa del Mare is truly special.',
];

export const gallery = [
  // Exterior & Aerial Views
  { url: 'pictures/cdm-front.jpg', alt: 'Front of house', category: 'Exterior' },
  { url: 'pictures/cdm-front-porch.jpg', alt: 'Front porch', category: 'Exterior' },
  { url: 'pictures/DJI_20260327190330_0155_D.jpg', alt: 'Aerial view of property', category: 'Aerial' },
  { url: 'pictures/DJI_20260327190335_0156_D.jpg', alt: 'Aerial property overview', category: 'Aerial' },
  { url: 'pictures/DJI_20260327192303_0166_D.jpg', alt: 'Aerial waterfront view', category: 'Aerial' },
  { url: 'pictures/DJI_20260327192428_0168_D.jpg', alt: 'Aerial property perspective', category: 'Aerial' },
  
  // Living Spaces
  { url: 'pictures/cdm-living-room.jpg', alt: 'Living room', category: 'Interior' },
  { url: 'pictures/cdm-living-room-2.jpg', alt: 'Living room view', category: 'Interior' },
  { url: 'pictures/living roo.jpeg', alt: 'Living room seating', category: 'Interior' },
  { url: 'pictures/cdm-kitchen.jpg', alt: 'Kitchen', category: 'Interior' },
  { url: 'pictures/cdm-dining.jpg', alt: 'Dining area', category: 'Interior' },
  { url: 'pictures/dining room table-landscape.JPG', alt: 'Dining room table', category: 'Interior' },
  
  // Bedrooms
  { url: 'pictures/cdm-mbr.jpg', alt: 'Master bedroom', category: 'Bedrooms' },
  { url: 'pictures/cdm-mbr-desk.jpg', alt: 'Master bedroom desk area', category: 'Bedrooms' },
  { url: 'pictures/bedroom beige-landscape.JPG', alt: 'Beige bedroom', category: 'Bedrooms' },
  { url: 'pictures/bedroom-sailboat-color-adjusted.jpg', alt: 'Sailboat themed bedroom', category: 'Bedrooms' },
  { url: 'pictures/turtle-bedroom-color-adjusted.jpg', alt: 'Turtle themed bedroom', category: 'Bedrooms' },
  { url: 'pictures/cdm-bunkroom.jpg', alt: 'Bunk room', category: 'Bedrooms' },
  
  // Game Room & Entertainment
  { url: 'pictures/cdm-gameroom.jpg', alt: 'Game room', category: 'Entertainment' },
  { url: 'pictures/games.jpeg', alt: 'Game room games', category: 'Entertainment' },
  
  // Outdoor Spaces
  { url: 'pictures/cdm-deck.jpg', alt: 'Main deck', category: 'Outdoor' },
  { url: 'pictures/deck-overhead.JPG', alt: 'Deck overhead view', category: 'Outdoor' },
  { url: 'pictures/cdm-rear-1.jpeg', alt: 'Rear view', category: 'Outdoor' },
  { url: 'pictures/cdm-rear-2.jpeg', alt: 'Rear exterior view', category: 'Outdoor' },
  { url: 'pictures/cdm-rear-3.jpeg', alt: 'Rear property view', category: 'Outdoor' },
  { url: 'pictures/full backyard.png', alt: 'Full backyard view', category: 'Outdoor' },
  { url: 'pictures/hammock-color-adjusted.jpg', alt: 'Hammock relaxation', category: 'Outdoor' },
  
  // Waterfront & Dock
  { url: 'pictures/dock-canal.jpg', alt: 'Dock with canal view', category: 'Waterfront' },
  { url: 'pictures/dock-color-adjusted-landscape.jpg', alt: 'Dock landscape view', category: 'Waterfront' },
  { url: 'pictures/cdm-cherry-point.JPG', alt: 'Cherry Point waterfront', category: 'Waterfront' },
  { url: 'pictures/house-creek-color-adjusted-landscape.jpg', alt: 'House and creek view', category: 'Waterfront' },
  { url: 'pictures/kayaks-color-adjusted.jpg', alt: 'Kayaks at dock', category: 'Waterfront' },
  
  // Hot Tub & Amenities
  { url: 'pictures/hottub.jpg', alt: 'Hot tub', category: 'Amenities' },
  
  // Sunset & Scenic Views
  { url: 'pictures/cdm-sunset.JPG', alt: 'Sunset view', category: 'Scenic' },
  { url: 'pictures/cdm-sunsetpier.JPG', alt: 'Sunset at pier', category: 'Scenic' },
  
  // Additional Features
  { url: 'pictures/living roomkitchen view-landscape.JPG', alt: 'Living room and kitchen view', category: 'Interior' },
  { url: 'pictures/first picture.jpg', alt: 'Property feature', category: 'Exterior' },
  { url: 'pictures/last pic.jpg', alt: 'Property view', category: 'Exterior' },
];

export const restaurants = [
  {
    name: '21 Main Prime Steakhouse',
    description: 'Seafood & dry-aged beef served in a gracious Southern setting within North Beach Plantation resort.',
  },
  {
    name: 'Hamburger Joe\'s',
    description: 'Down-to-earth outpost serving hamburgers & other classic diner fare with homemade sauces.',
  },
  {
    name: 'Sea Captain\'s House',
    description: 'Oceanfront dining featuring fresh seafood and coastal cuisine with stunning ocean views.',
  },
  {
    name: 'Verandas',
    description: 'Fine dining offering innovative American cuisine and an extensive wine selection in an elegant atmosphere.',
  },
  {
    name: 'Croissants Bisté & Café',
    description: 'French-inspired bistro serving fresh seafood, steaks, and seasonal dishes with European flair.',
  },
  {
    name: 'Local On the Water',
    description: 'Lively venue featuring seafood fare, burgers and cocktails, plus seating with waterway views.',
  },
  {
    name: 'Boardwalk Billy\'s NMB',
    description: 'Waterfront restaurant offering live music daily along with ribs, seafood, sushi & Happy Hour.',
  },
];

export const beachActivities = [
  {
    name: 'Kayaking & Paddleboarding',
    description: 'Cherry Grove Kayaking offers guided tours and rentals through salt marshes and out to Waties Island with delivery to your location.',
  },
  {
    name: 'Fishing Charters',
    description: 'North Myrtle Beach Fishing Charters offers inshore, nearshore, and deep-sea fishing with experienced local guides and 40+ years of expertise.',
  },
  {
    name: 'Jet Ski Rentals',
    description: 'Action Water Sportz provides half-hour to 2-hour jet ski rentals on the Intracoastal Waterway with well-maintained equipment.',
  },
  {
    name: 'Beach Sports & Recreation',
    description: 'North Beach Pier offers public areas for beach volleyball, horseshoes, and other recreational activities along the sandy shoreline.',
  },
  {
    name: 'Dolphin & Whale Watching Tours',
    description: 'Southern Shores Cruises provides catamaran dolphin tours with island exploration and educational marine experiences for all ages.',
  },
];

export const attractions = [
  {
    name: 'Barefoot Landing',
    description: 'Entertainment complex with shopping, dining, live music venues, and fun attractions on the waterfront.',
  },
  {
    name: 'North Beach Pier & Boardwalk',
    description: 'Scenic oceanfront pier perfect for fishing, walking, and enjoying stunning views of the Atlantic Ocean.',
  },
  {
    name: 'Alligator Farm Zoo',
    description: 'Educational wildlife facility featuring alligators, exotic animals, and interactive experiences for all ages.',
  },
  {
    name: 'The Market Common',
    description: 'Outdoor shopping and dining destination with boutique stores, restaurants, and entertainment venues.',
  },
  {
    name: 'Huntington Beach State Park',
    description: 'Beautiful state park with pristine beaches, nature trails, and picnic areas for outdoor recreation.',
  },
];

export const natureWildlife = [
  {
    name: 'Huntington Beach State Park Trails',
    description: 'Scenic nature trails through pristine coastal ecosystems perfect for bird watching and wildlife observation.',
  },
  {
    name: 'Osprey & Shorebird Watching',
    description: 'Prime locations along the coast for spotting osprey, herons, egrets, and other migratory birds year-round.',
  },
  {
    name: 'Salt Marsh Kayaking Tours',
    description: 'Paddling through pristine salt marshes to observe fiddler crabs, fish, and native wetland vegetation.',
  },
  {
    name: 'North Inlet-Winyah Bay Reserve',
    description: 'Protected estuarine reserve offering opportunities to explore marine habitats and observe diverse wildlife.',
  },
  {
    name: 'Dolphin & Marine Life Sightings',
    description: 'Natural dolphin encounters throughout the intracoastal waterways and ocean, often visible from docks and piers.',
  },
];
