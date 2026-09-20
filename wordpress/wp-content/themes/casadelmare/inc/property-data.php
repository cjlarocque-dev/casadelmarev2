<?php
/**
 * Casa Del Mare Property Data
 * 
 * All property information centralized for easy updates
 */

// Property Information
define( 'CASADELMARE_NAME', 'Casa Del Mare' );
define( 'CASADELMARE_TAGLINE', 'A Raised Beach House Getaway on Intercoastal Waters' );
define( 'CASADELMARE_BEDROOMS', 5 );
define( 'CASADELMARE_BATHROOMS', 2 );
define( 'CASADELMARE_MAX_GUESTS', 16 );

// Address
define( 'CASADELMARE_ADDRESS', '325 52nd Ave North' );
define( 'CASADELMARE_CITY', 'North Myrtle Beach' );
define( 'CASADELMARE_STATE', 'SC' );
define( 'CASADELMARE_ZIP', '29582' );

// Contact
define( 'CASADELMARE_PHONE', get_theme_mod( 'casadelmare_phone', '' ) );
define( 'CASADELMARE_EMAIL', get_theme_mod( 'casadelmare_email', '' ) );

// OwnerRez Integration (Update with your actual values)
define( 'CASADELMARE_OWNERREZ_ID', '' ); // Your OwnerRez property ID
define( 'CASADELMARE_BOOKING_URL', '' ); // Your OwnerRez booking link

// Description
$casadelmare_description = 'Casa Del Mare is your ultimate beach escape, perfectly positioned less than a 5-minute walk from the pristine sands of Cherry Grove Beach in North Myrtle Beach. This spacious 5-bedroom, 2-bathroom home comfortably sleeps 16 guests, making it ideal for large families and groups seeking a relaxing, quiet getaway. Designed with family fun in mind, the property features a game room for indoor entertainment, a soothing hot tub perfect for unwinding after beach days, and expansive outdoor living spaces including a large back deck with a gas grill for unforgettable meals with waterfront channel views. An outdoor seating area complete with TV allows you to enjoy entertainment with gentle breezes, while every corner of the home encourages connection and relaxation.';

// Amenities
$casadelmare_amenities = array(
    array(
        'icon' => '🛏️',
        'title' => 'Sleeping',
        'description' => '5 Bedrooms, 2 Bathrooms. Sleeps 16 guests comfortably.',
    ),
    array(
        'icon' => '🎮',
        'title' => 'Entertainment',
        'description' => 'Game room for indoor fun and family activities.',
    ),
    array(
        'icon' => '🧖',
        'title' => 'Relaxation',
        'description' => 'Hot tub for unwinding and soaking under the stars.',
    ),
    array(
        'icon' => '🏖️',
        'title' => 'Beach Access',
        'description' => 'Less than 5 minutes walk to Cherry Grove Beach in North Myrtle Beach.',
    ),
    array(
        'icon' => '🍖',
        'title' => 'Outdoor Dining',
        'description' => 'Large back deck with gas grill for memorable meals overlooking the intercoastal channel.',
    ),
    array(
        'icon' => '📺',
        'title' => 'Outdoor Living',
        'description' => 'Outdoor seating area with TV and scenic water views.',
    ),
    array(
        'icon' => '🌊',
        'title' => 'Waterfront',
        'description' => 'Direct intercoastal water access with dock.',
    ),
    array(
        'icon' => '🍳',
        'title' => 'Full Kitchen',
        'description' => 'Fully equipped kitchen for family meals and entertaining.',
    ),
);

// Host Story
$casadelmare_host_story = array(
    'Welcome to Casa del Mare — "House by the Sea." Inspired by our Italian heritage and love for the ocean, our home reflects what matters most to us: family, connection, and time spent together.',
    'We grew up surrounded by shared meals, laughter, and strong family values, and those traditions continue to shape who we are today. Family vacations have always been a special time for us to slow down, reconnect, and enjoy life\'s simple moments.',
    'Casa del Mare is our way of sharing that experience — a place to relax, unwind, and create lasting memories in North Myrtle Beach.',
    'While professionally managed by Vacasa for a seamless stay, the heart of this home comes from our family.',
    'We\'re so glad you\'re here and hope your time at Casa del Mare is truly special.',
);

// Gallery Images (from your pictures folder)
$casadelmare_gallery = array(
    // Exterior & Aerial Views
    array(
        'url' => 'pictures/cdm-front.jpg',
        'alt' => 'Front of house',
        'category' => 'Exterior',
    ),
    array(
        'url' => 'pictures/cdm-front-porch.jpg',
        'alt' => 'Front porch',
        'category' => 'Exterior',
    ),
    array(
        'url' => 'pictures/dock-canal.jpg',
        'alt' => 'Dock and canal view',
        'category' => 'Waterfront',
    ),
    array(
        'url' => 'pictures/hottub.jpg',
        'alt' => 'Hot tub',
        'category' => 'Amenities',
    ),
    // Living Spaces
    array(
        'url' => 'pictures/cdm-living-room.jpg',
        'alt' => 'Living room',
        'category' => 'Interior',
    ),
    array(
        'url' => 'pictures/cdm-kitchen.jpg',
        'alt' => 'Kitchen',
        'category' => 'Interior',
    ),
    array(
        'url' => 'pictures/cdm-dining.jpg',
        'alt' => 'Dining area',
        'category' => 'Interior',
    ),
    // Bedrooms
    array(
        'url' => 'pictures/cdm-mbr.jpg',
        'alt' => 'Master bedroom',
        'category' => 'Bedrooms',
    ),
    array(
        'url' => 'pictures/cdm-bunkroom.jpg',
        'alt' => 'Bunk room',
        'category' => 'Bedrooms',
    ),
    // Game Room
    array(
        'url' => 'pictures/cdm-gameroom.jpg',
        'alt' => 'Game room',
        'category' => 'Entertainment',
    ),
    // Outdoor Spaces
    array(
        'url' => 'pictures/cdm-deck.jpg',
        'alt' => 'Main deck',
        'category' => 'Outdoor',
    ),
    array(
        'url' => 'pictures/cdm-back-patio.jpg',
        'alt' => 'Back patio',
        'category' => 'Outdoor',
    ),
);

// Local Attractions & Dining
$casadelmare_restaurants = array(
    array(
        'name' => 'Crooked Oak Tavern',
        'description' => 'Seafood & dry-aged beef served in a gracious Southern setting within North Beach Plantation resort.',
    ),
    array(
        'name' => 'Burger Depot',
        'description' => 'Down-to-earth outpost serving hamburgers & other classic diner fare with homemade sauces.',
    ),
    array(
        'name' => 'Coastal Tides',
        'description' => 'Oceanfront dining featuring fresh seafood and coastal cuisine with stunning ocean views.',
    ),
    array(
        'name' => 'Sea Captain\'s House Restaurant',
        'description' => 'Fine dining offering innovative American cuisine and an extensive wine selection in an elegant atmosphere.',
    ),
    array(
        'name' => 'Bacchanalia',
        'description' => 'French-inspired bistro serving fresh seafood, steaks, and seasonal dishes with European flair.',
    ),
    array(
        'name' => 'Waterway Cafe',
        'description' => 'Lively venue featuring seafood fare, burgers and cocktails, plus seating with waterway views.',
    ),
    array(
        'name' => 'Barefoot Landing Restaurants',
        'description' => 'Multiple dining venues featuring seafood, live music daily, ribs, sushi & Happy Hour options.',
    ),
    array(
        'name' => 'Greg Norman\'s Australian Grille',
        'description' => 'Clubby spot for steak & Australian plates (owned by the famed golfer) in a roomy, waterfront space.',
    ),
);

$casadelmare_beach_activities = array(
    array(
        'name' => 'Cherry Grove Kayaking',
        'description' => 'Guided tours and rentals through salt marshes and out to Waties Island with delivery to your location.',
    ),
    array(
        'name' => 'North Myrtle Beach Fishing Charters',
        'description' => 'Inshore, nearshore, and deep-sea fishing with experienced local guides and 40+ years of expertise.',
    ),
    array(
        'name' => 'Action Water Sportz',
        'description' => 'Half-hour to 2-hour jet ski rentals on the Intracoastal Waterway with well-maintained equipment.',
    ),
    array(
        'name' => 'North Beach Pier',
        'description' => 'Public areas for beach volleyball, horseshoes, and other recreational activities along the sandy shoreline.',
    ),
    array(
        'name' => 'Southern Shores Cruises',
        'description' => 'Catamaran dolphin tours with island exploration and educational marine experiences for all ages.',
    ),
);

$casadelmare_attractions = array(
    array(
        'name' => 'Barefoot Landing',
        'description' => 'Entertainment complex with shopping, dining, live music venues, and fun attractions on the waterfront.',
    ),
    array(
        'name' => 'North Myrtle Beach Pier',
        'description' => 'Scenic oceanfront pier perfect for fishing, walking, and enjoying stunning views of the Atlantic Ocean.',
    ),
    array(
        'name' => 'Alligator Farm Zoo',
        'description' => 'Educational wildlife facility featuring alligators, exotic animals, and interactive experiences for all ages.',
    ),
    array(
        'name' => 'Barefoot Landing & Shops',
        'description' => 'Outdoor shopping and dining destination with boutique stores, restaurants, and entertainment venues.',
    ),
    array(
        'name' => 'Huntington Beach State Park',
        'description' => 'Beautiful state park with pristine beaches, nature trails, and picnic areas for outdoor recreation.',
    ),
);

$casadelmare_nature_wildlife = array(
    array(
        'name' => 'Coastal Nature Trails',
        'description' => 'Scenic nature trails through pristine coastal ecosystems perfect for bird watching and wildlife observation.',
    ),
    array(
        'name' => 'Bird Watching',
        'description' => 'Prime locations along the coast for spotting osprey, herons, egrets, and other migratory birds year-round.',
    ),
    array(
        'name' => 'Salt Marsh Paddling',
        'description' => 'Paddling through pristine salt marshes to observe fiddler crabs, fish, and native wetland vegetation.',
    ),
    array(
        'name' => 'Waccamaw River Preserve',
        'description' => 'Protected estuarine reserve offering opportunities to explore marine habitats and observe diverse wildlife.',
    ),
    array(
        'name' => 'Dolphin Encounters',
        'description' => 'Natural dolphin encounters throughout the intracoastal waterways and ocean, often visible from docks and piers.',
    ),
);

/**
 * Helper function to get all property data
 */
function casadelmare_get_property_data() {
    return array(
        'name' => CASADELMARE_NAME,
        'tagline' => CASADELMARE_TAGLINE,
        'bedrooms' => CASADELMARE_BEDROOMS,
        'bathrooms' => CASADELMARE_BATHROOMS,
        'max_guests' => CASADELMARE_MAX_GUESTS,
        'address' => CASADELMARE_ADDRESS,
        'city' => CASADELMARE_CITY,
        'state' => CASADELMARE_STATE,
        'zip' => CASADELMARE_ZIP,
        'phone' => CASADELMARE_PHONE,
        'email' => CASADELMARE_EMAIL,
    );
}

/**
 * OwnerRez Integration - Get Availability Calendar
 * 
 * @return string HTML for OwnerRez calendar widget
 */
function casadelmare_ownerrez_calendar() {
    if ( ! defined( 'CASADELMARE_OWNERREZ_ID' ) || empty( CASADELMARE_OWNERREZ_ID ) ) {
        return '';
    }
    
    // OwnerRez calendar embed code (update with your property ID)
    $ownerrez_id = CASADELMARE_OWNERREZ_ID;
    
    $html = '<div class="ownerrez-calendar-wrapper">';
    $html .= '<script type="text/javascript" src="https://www.ownerrez.com/Scripts/Embed.js?propertyid=' . esc_attr( $ownerrez_id ) . '"></script>';
    $html .= '<noscript>Please enable JavaScript to view calendar</noscript>';
    $html .= '</div>';
    
    return $html;
}

/**
 * OwnerRez Integration - Get Booking Button/Link
 * 
 * @return string HTML for booking button
 */
function casadelmare_ownerrez_booking_link() {
    if ( ! defined( 'CASADELMARE_BOOKING_URL' ) || empty( CASADELMARE_BOOKING_URL ) ) {
        return '';
    }
    
    $booking_url = CASADELMARE_BOOKING_URL;
    
    $html = '<a href="' . esc_url( $booking_url ) . '" target="_blank" rel="noopener noreferrer" class="btn btn-primary cta-button">';
    $html .= 'Book Now';
    $html .= '</a>';
    
    return $html;
}
