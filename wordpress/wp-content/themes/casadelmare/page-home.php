<?php
/**
 * Casa Del Mare Home Page Template
 * 
 * Template Name: Casa Del Mare Home
 * 
 * Built with property data from inc/property-data.php
 * Includes OwnerRez PMS integration for calendar & booking
 */

get_header();

// Load property data
require_once CASADELMARE_DIR . '/inc/property-data.php';
?>

<div class="site-content">
    
    <!-- Hero Section -->
    <section class="hero-section" style="background: linear-gradient(135deg, rgba(0, 119, 190, 0.8), rgba(0, 212, 255, 0.8)), url('<?php echo esc_url( get_template_directory_uri() . '/../../casadelmare/pictures/dock-canal.jpg' ); ?>'); background-size: cover; background-position: center; background-attachment: fixed; padding: 140px 20px; min-height: 600px; display: flex; align-items: center; justify-content: center;">
        <div class="hero-content" style="text-align: center; color: white; max-width: 800px; animation: fadeInDown 1s ease;">
            <h1 style="font-family: 'Pacifico', cursive; font-size: 4.5rem; margin-bottom: 1.5rem; color: #fff8e7; text-shadow: 2px 2px 8px rgba(0,0,0,0.3);">
                <?php echo esc_html( CASADELMARE_NAME ); ?>
            </h1>
            <div style="width: 80px; height: 3px; background: linear-gradient(90deg, #fff8e7, #00d4ff); margin: 0 auto 2rem; border-radius: 2px;"></div>
            <p style="font-size: 1.5rem; margin-bottom: 3rem; color: rgba(255, 255, 255, 0.98); line-height: 1.6;">
                <?php echo esc_html( CASADELMARE_TAGLINE ); ?>
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <?php echo casadelmare_ownerrez_booking_link(); ?>
                <a href="#about" class="btn btn-secondary" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 0.85rem 2rem; border: 2px solid white; text-decoration: none; border-radius: 5px; font-weight: 600; transition: all 0.3s;">
                    Learn More
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section light-bg" id="about" style="padding: 80px 20px; background-color: #e0f7ff;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <div class="section-header">
                <h2 style="font-size: 2.8rem; color: #0077be;">About Casa Del Mare</h2>
                <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #0077be, #00d4ff); margin: 1rem auto;"></div>
            </div>
            
            <div style="max-width: 900px; margin: 0 auto;">
                <p style="font-size: 1.1rem; line-height: 2; color: #1a3a3a; margin-bottom: 2rem; text-align: center;">
                    <?php echo wp_kses_post( $casadelmare_description ); ?>
                </p>
                
                <!-- Quick Stats Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 25px; margin-top: 3rem;">
                    <div class="card" style="background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s ease;">
                        <h3 style="font-size: 2.8rem; color: #ff6b35; margin-bottom: 0.5rem; font-weight: bold;">
                            <?php echo esc_html( CASADELMARE_BEDROOMS ); ?>
                        </h3>
                        <p style="color: #555; font-size: 1.05rem; font-weight: 500;">Bedrooms</p>
                    </div>
                    <div class="card" style="background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s ease;">
                        <h3 style="font-size: 2.8rem; color: #ff6b35; margin-bottom: 0.5rem; font-weight: bold;">
                            <?php echo esc_html( CASADELMARE_MAX_GUESTS ); ?>
                        </h3>
                        <p style="color: #555; font-size: 1.05rem; font-weight: 500;">Max Guests</p>
                    </div>
                    <div class="card" style="background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s ease;">
                        <h3 style="font-size: 2.8rem; color: #ff6b35; margin-bottom: 0.5rem; font-weight: bold;">
                            5 min
                        </h3>
                        <p style="color: #555; font-size: 1.05rem; font-weight: 500;">to Beach</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Amenities Section -->
    <section class="section" style="padding: 80px 20px; background-color: white;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <div class="section-header">
                <h2 style="font-size: 2.8rem; color: #0077be;">Amenities & Features</h2>
                <p style="color: #555; font-size: 1.05rem;">Everything you need for a comfortable stay</p>
                <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #0077be, #00d4ff); margin: 1rem auto;"></div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                <?php foreach ( $casadelmare_amenities as $amenity ) : ?>
                    <div class="card" style="background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-top: 4px solid #0077be; transition: all 0.3s ease; text-align: center;">
                        <h3 style="font-family: 'Dancing Script', cursive; font-size: 1.8rem; color: #0077be; margin-bottom: 1rem;">
                            <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;"><?php echo esc_html( $amenity['icon'] ); ?></span>
                            <?php echo esc_html( $amenity['title'] ); ?>
                        </h3>
                        <p style="color: #555; font-size: 0.95rem; line-height: 1.7;">
                            <?php echo esc_html( $amenity['description'] ); ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Photo Gallery Section -->
    <section class="section sand-bg" style="padding: 80px 20px; background-color: #fff8e7;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <div class="section-header">
                <h2 style="font-size: 2.8rem; color: #0077be;">Photo Gallery</h2>
                <p style="color: #555; font-size: 1.05rem;">Explore the beauty of Casa Del Mare</p>
                <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #0077be, #00d4ff); margin: 1rem auto;"></div>
            </div>
            
            <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-bottom: 3rem;">
                <?php foreach ( array_slice( $casadelmare_gallery, 0, 12 ) as $photo ) : ?>
                    <div class="gallery-item" style="overflow: hidden; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease; cursor: pointer; aspect-ratio: 4/3;">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/../../casadelmare/' . $photo['url'] ); ?>" 
                             alt="<?php echo esc_attr( $photo['alt'] ); ?>" 
                             style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; display: block;">
                    </div>
                <?php endforeach; ?>
            </div>

            <div style="text-align: center;">
                <a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Gallery' ) ) ); ?>" class="btn" style="background-color: #ff6b35; color: white; padding: 1rem 2.5rem; border-radius: 5px; text-decoration: none; font-weight: 600; font-size: 1.05rem; transition: all 0.3s;">
                    View Full Gallery
                </a>
            </div>
        </div>
    </section>

    <!-- Meet the Hosts Section -->
    <section class="section" style="padding: 80px 20px; background-color: white;">
        <div class="container" style="max-width: 900px; margin: 0 auto;">
            <div class="section-header">
                <h2 style="font-size: 2.8rem; color: #0077be;">Meet Your Hosts</h2>
                <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #0077be, #00d4ff); margin: 1rem auto;"></div>
            </div>
            
            <div style="background: linear-gradient(135deg, #e0f7ff, #fff8e7); padding: 3rem; border-radius: 12px; border-left: 4px solid #0077be;">
                <?php foreach ( $casadelmare_host_story as $paragraph ) : ?>
                    <p style="font-size: 1.05rem; line-height: 1.9; color: #1a3a3a; margin-bottom: 1.5rem;">
                        <?php echo esc_html( $paragraph ); ?>
                    </p>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- OwnerRez Calendar Section -->
    <section class="section light-bg" style="padding: 80px 20px; background-color: #e0f7ff;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <div class="section-header">
                <h2 style="font-size: 2.8rem; color: #0077be;">Availability & Booking</h2>
                <p style="color: #555; font-size: 1.05rem;">Check dates and reserve your stay</p>
                <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #0077be, #00d4ff); margin: 1rem auto;"></div>
            </div>
            
            <div style="background: white; padding: 3rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                <?php 
                $calendar_html = casadelmare_ownerrez_calendar();
                if ( ! empty( $calendar_html ) ) {
                    echo wp_kses_post( $calendar_html );
                } else {
                    echo '<p style="text-align: center; color: #555; font-size: 1.1rem; padding: 2rem;">Calendar coming soon. Please check back or contact us for availability.</p>';
                }
                ?>
            </div>

            <div style="text-align: center; margin-top: 2.5rem;">
                <?php echo wp_kses_post( casadelmare_ownerrez_booking_link() ); ?>
            </div>
        </div>
    </section>

    <!-- Local Favorites Section -->
    <section class="section" style="padding: 80px 20px; background-color: white;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <div class="section-header">
                <h2 style="font-size: 2.8rem; color: #0077be;">Explore the Area</h2>
                <p style="color: #555; font-size: 1.05rem;">Discover nearby attractions, dining, and activities</p>
                <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #0077be, #00d4ff); margin: 1rem auto;"></div>
            </div>

            <!-- Restaurants -->
            <div style="margin-bottom: 5rem;">
                <h3 style="font-family: 'Dancing Script', cursive; font-size: 2.2rem; color: #0077be; margin-bottom: 2.5rem; text-align: center;">
                    🍽️ Restaurants & Dining
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
                    <?php foreach ( $casadelmare_restaurants as $restaurant ) : ?>
                        <div class="card" style="background: #f9f9f9; padding: 2rem; border-radius: 12px; border-left: 4px solid #ff6b35; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                            <h4 style="font-size: 1.25rem; color: #0077be; margin-bottom: 0.75rem; font-weight: 600;">
                                <?php echo esc_html( $restaurant['name'] ); ?>
                            </h4>
                            <p style="color: #555; font-size: 0.95rem; line-height: 1.7;">
                                <?php echo esc_html( $restaurant['description'] ); ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Beach Activities -->
            <div style="margin-bottom: 5rem;">
                <h3 style="font-family: 'Dancing Script', cursive; font-size: 2.2rem; color: #0077be; margin-bottom: 2.5rem; text-align: center;">
                    🏖️ Beach Activities
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
                    <?php foreach ( $casadelmare_beach_activities as $activity ) : ?>
                        <div class="card" style="background: #f9f9f9; padding: 2rem; border-radius: 12px; border-left: 4px solid #00d4ff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                            <h4 style="font-size: 1.25rem; color: #0077be; margin-bottom: 0.75rem; font-weight: 600;">
                                <?php echo esc_html( $activity['name'] ); ?>
                            </h4>
                            <p style="color: #555; font-size: 0.95rem; line-height: 1.7;">
                                <?php echo esc_html( $activity['description'] ); ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Attractions -->
            <div style="margin-bottom: 5rem;">
                <h3 style="font-family: 'Dancing Script', cursive; font-size: 2.2rem; color: #0077be; margin-bottom: 2.5rem; text-align: center;">
                    ⭐ Attractions
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
                    <?php foreach ( $casadelmare_attractions as $attraction ) : ?>
                        <div class="card" style="background: #f9f9f9; padding: 2rem; border-radius: 12px; border-left: 4px solid #0077be; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                            <h4 style="font-size: 1.25rem; color: #0077be; margin-bottom: 0.75rem; font-weight: 600;">
                                <?php echo esc_html( $attraction['name'] ); ?>
                            </h4>
                            <p style="color: #555; font-size: 0.95rem; line-height: 1.7;">
                                <?php echo esc_html( $attraction['description'] ); ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Nature & Wildlife -->
            <div>
                <h3 style="font-family: 'Dancing Script', cursive; font-size: 2.2rem; color: #0077be; margin-bottom: 2.5rem; text-align: center;">
                    🦅 Nature & Wildlife
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
                    <?php foreach ( $casadelmare_nature_wildlife as $nature ) : ?>
                        <div class="card" style="background: #f9f9f9; padding: 2rem; border-radius: 12px; border-left: 4px solid #00d4ff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                            <h4 style="font-size: 1.25rem; color: #0077be; margin-bottom: 0.75rem; font-weight: 600;">
                                <?php echo esc_html( $nature['name'] ); ?>
                            </h4>
                            <p style="color: #555; font-size: 0.95rem; line-height: 1.7;">
                                <?php echo esc_html( $nature['description'] ); ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" style="padding: 100px 20px; background: linear-gradient(135deg, #0077be 0%, #00d4ff 50%, #0077be 100%); color: white; text-align: center; position: relative; overflow: hidden;">
        <div class="container" style="max-width: 900px; margin: 0 auto; position: relative; z-index: 2;">
            <h2 style="font-family: 'Dancing Script', cursive; font-size: 3.2rem; color: white; margin-bottom: 1.5rem;">
                Ready to Book Your Stay?
            </h2>
            <p style="font-size: 1.2rem; margin-bottom: 3rem; color: rgba(255, 255, 255, 0.95); line-height: 1.8;">
                Experience the beauty and comfort of Casa Del Mare. Check availability and reserve your perfect beach getaway today.
            </p>
            <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                <?php echo wp_kses_post( casadelmare_ownerrez_booking_link() ); ?>
                <a href="#about" class="btn" style="background-color: rgba(255, 255, 255, 0.2); color: white; padding: 0.85rem 2rem; border: 2px solid white; text-decoration: none; border-radius: 5px; font-weight: 600; transition: all 0.3s;">
                    Learn More
                </a>
            </div>
        </div>
    </section>

</div>

<?php get_footer();
