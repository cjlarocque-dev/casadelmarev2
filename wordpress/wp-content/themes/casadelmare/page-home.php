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
    <section class="hero-section elementor-section light-bg-section" style="background: linear-gradient(135deg, rgba(0, 119, 190, 0.7), rgba(0, 212, 255, 0.7)), url('<?php echo esc_url( get_template_directory_uri() . '/../../casadelmare/pictures/dock-canal.jpg' ); ?>'); background-size: cover; background-position: center; padding: 120px 20px; min-height: 500px; display: flex; align-items: center; justify-content: center;">
        <div class="hero-content" style="text-align: center; color: white;">
            <h1 style="font-family: 'Pacifico', cursive; font-size: 4rem; margin-bottom: 1rem; color: #fff8e7;">
                <?php echo esc_html( CASADELMARE_NAME ); ?>
            </h1>
            <p style="font-size: 1.5rem; margin-bottom: 2rem; color: rgba(255, 255, 255, 0.95);">
                <?php echo esc_html( CASADELMARE_TAGLINE ); ?>
            </p>
            <?php echo casadelmare_ownerrez_booking_link(); ?>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section elementor-section" style="padding: 60px 20px; background-color: #e0f7ff;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; font-family: 'Dancing Script', cursive; font-size: 3rem; color: #0077be; margin-bottom: 2rem;">
                About Casa Del Mare
            </h2>
            <div style="max-width: 900px; margin: 0 auto; text-align: center;">
                <p style="font-size: 1.1rem; line-height: 1.8; color: #1a3a3a; margin-bottom: 2rem;">
                    <?php echo wp_kses_post( $casadelmare_description ); ?>
                </p>
                
                <!-- Quick Stats -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 3rem;">
                    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3 style="font-size: 2.5rem; color: #ff6b35; margin-bottom: 0.5rem;">
                            <?php echo esc_html( CASADELMARE_BEDROOMS ); ?>
                        </h3>
                        <p style="color: #555; font-size: 1rem;">Bedrooms</p>
                    </div>
                    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3 style="font-size: 2.5rem; color: #ff6b35; margin-bottom: 0.5rem;">
                            <?php echo esc_html( CASADELMARE_MAX_GUESTS ); ?>
                        </h3>
                        <p style="color: #555; font-size: 1rem;">Max Guests</p>
                    </div>
                    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3 style="font-size: 2.5rem; color: #ff6b35; margin-bottom: 0.5rem;">
                            5 min
                        </h3>
                        <p style="color: #555; font-size: 1rem;">to Beach</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Amenities Section -->
    <section class="amenities-section elementor-section" style="padding: 60px 20px; background-color: white;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; font-family: 'Dancing Script', cursive; font-size: 3rem; color: #0077be; margin-bottom: 3rem;">
                Amenities
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
                <?php foreach ( $casadelmare_amenities as $amenity ) : ?>
                    <div class="amenity-card" style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-top: 4px solid #0077be; transition: transform 0.3s;">
                        <h4 style="font-family: 'Dancing Script', cursive; font-size: 1.5rem; color: #0077be; margin-bottom: 1rem;">
                            <?php echo esc_html( $amenity['icon'] ) . ' ' . esc_html( $amenity['title'] ); ?>
                        </h4>
                        <p style="color: #555; font-size: 0.95rem; line-height: 1.6;">
                            <?php echo esc_html( $amenity['description'] ); ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Photo Gallery Section -->
    <section class="gallery-section elementor-section" style="padding: 60px 20px; background-color: #fff8e7;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; font-family: 'Dancing Script', cursive; font-size: 3rem; color: #0077be; margin-bottom: 3rem;">
                Photo Gallery
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                <?php foreach ( array_slice( $casadelmare_gallery, 0, 12 ) as $photo ) : ?>
                    <div class="gallery-item" style="overflow: hidden; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); transition: transform 0.3s;">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/../../casadelmare/' . $photo['url'] ); ?>" 
                             alt="<?php echo esc_attr( $photo['alt'] ); ?>" 
                             style="width: 100%; height: 250px; object-fit: cover; transition: transform 0.3s;">
                    </div>
                <?php endforeach; ?>
            </div>

            <div style="text-align: center; margin-top: 3rem;">
                <a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Gallery' ) ) ); ?>" class="btn" style="background-color: #ff6b35; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold;">
                    View Full Gallery
                </a>
            </div>
        </div>
    </section>

    <!-- Meet the Hosts Section -->
    <section class="meet-hosts-section elementor-section" style="padding: 60px 20px; background-color: white;">
        <div class="container" style="max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; font-family: 'Dancing Script', cursive; font-size: 3rem; color: #0077be; margin-bottom: 3rem;">
                Meet the Hosts
            </h2>
            
            <div style="text-align: center;">
                <?php foreach ( $casadelmare_host_story as $paragraph ) : ?>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: #1a3a3a; margin-bottom: 1.5rem;">
                        <?php echo esc_html( $paragraph ); ?>
                    </p>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- OwnerRez Calendar Section -->
    <section class="calendar-section elementor-section" style="padding: 60px 20px; background-color: #e0f7ff;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; font-family: 'Dancing Script', cursive; font-size: 3rem; color: #0077be; margin-bottom: 3rem;">
                Availability & Booking
            </h2>
            
            <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <?php 
                $calendar_html = casadelmare_ownerrez_calendar();
                if ( ! empty( $calendar_html ) ) {
                    echo wp_kses_post( $calendar_html );
                } else {
                    echo '<p style="text-align: center; color: #555;">Calendar coming soon. Please check back or contact us for availability.</p>';
                }
                ?>
            </div>

            <div style="text-align: center; margin-top: 2rem;">
                <?php echo wp_kses_post( casadelmare_ownerrez_booking_link() ); ?>
            </div>
        </div>
    </section>

    <!-- Local Favorites Section -->
    <section class="favorites-section elementor-section" style="padding: 60px 20px; background-color: white;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; font-family: 'Dancing Script', cursive; font-size: 3rem; color: #0077be; margin-bottom: 3rem;">
                Explore the Area
            </h2>

            <!-- Restaurants -->
            <div style="margin-bottom: 4rem;">
                <h3 style="font-family: 'Dancing Script', cursive; font-size: 2rem; color: #0077be; margin-bottom: 2rem;">
                    🍽️ Restaurants & Dining
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
                    <?php foreach ( $casadelmare_restaurants as $restaurant ) : ?>
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35;">
                            <h4 style="font-size: 1.2rem; color: #0077be; margin-bottom: 0.5rem;">
                                <?php echo esc_html( $restaurant['name'] ); ?>
                            </h4>
                            <p style="color: #555; font-size: 0.95rem; line-height: 1.6;">
                                <?php echo esc_html( $restaurant['description'] ); ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Beach Activities -->
            <div style="margin-bottom: 4rem;">
                <h3 style="font-family: 'Dancing Script', cursive; font-size: 2rem; color: #0077be; margin-bottom: 2rem;">
                    🏖️ Beach Activities
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
                    <?php foreach ( $casadelmare_beach_activities as $activity ) : ?>
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff;">
                            <h4 style="font-size: 1.2rem; color: #0077be; margin-bottom: 0.5rem;">
                                <?php echo esc_html( $activity['name'] ); ?>
                            </h4>
                            <p style="color: #555; font-size: 0.95rem; line-height: 1.6;">
                                <?php echo esc_html( $activity['description'] ); ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Attractions -->
            <div style="margin-bottom: 4rem;">
                <h3 style="font-family: 'Dancing Script', cursive; font-size: 2rem; color: #0077be; margin-bottom: 2rem;">
                    ⭐ Attractions
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
                    <?php foreach ( $casadelmare_attractions as $attraction ) : ?>
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #0077be;">
                            <h4 style="font-size: 1.2rem; color: #0077be; margin-bottom: 0.5rem;">
                                <?php echo esc_html( $attraction['name'] ); ?>
                            </h4>
                            <p style="color: #555; font-size: 0.95rem; line-height: 1.6;">
                                <?php echo esc_html( $attraction['description'] ); ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Nature & Wildlife -->
            <div>
                <h3 style="font-family: 'Dancing Script', cursive; font-size: 2rem; color: #0077be; margin-bottom: 2rem;">
                    🦅 Nature & Wildlife
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
                    <?php foreach ( $casadelmare_nature_wildlife as $nature ) : ?>
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff;">
                            <h4 style="font-size: 1.2rem; color: #0077be; margin-bottom: 0.5rem;">
                                <?php echo esc_html( $nature['name'] ); ?>
                            </h4>
                            <p style="color: #555; font-size: 0.95rem; line-height: 1.6;">
                                <?php echo esc_html( $nature['description'] ); ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section elementor-section" style="padding: 60px 20px; background: linear-gradient(135deg, #0077be, #00d4ff); color: white; text-align: center;">
        <div class="container" style="max-width: 900px; margin: 0 auto;">
            <h2 style="font-family: 'Dancing Script', cursive; font-size: 3rem; color: white; margin-bottom: 1rem;">
                Ready to Book Your Stay?
            </h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; color: rgba(255, 255, 255, 0.95);">
                Check availability and reserve Casa Del Mare for your perfect beach getaway.
            </p>
            <?php echo wp_kses_post( casadelmare_ownerrez_booking_link() ); ?>
        </div>
    </section>

</div>

<?php get_footer();
