<?php
/**
 * Casa Del Mare Gallery Page Template
 * 
 * Template Name: Casa Del Mare Gallery
 */

get_header();

// Load property data
require_once CASADELMARE_DIR . '/inc/property-data.php';
?>

<div class="site-content">
    
    <!-- Page Header -->
    <section class="page-header" style="padding: 60px 20px; background: linear-gradient(135deg, #0077be, #00d4ff); color: white; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            <h1 style="font-family: 'Dancing Script', cursive; font-size: 3rem; margin-bottom: 0.5rem;">
                Photo Gallery
            </h1>
            <p style="font-size: 1.1rem; color: rgba(255, 255, 255, 0.95);">
                Explore Casa Del Mare's beautiful spaces and surroundings
            </p>
        </div>
    </section>

    <!-- Full Gallery -->
    <section class="gallery-section" style="padding: 60px 20px; background-color: white;">
        <div class="container" style="max-width: 1400px; margin: 0 auto;">
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <?php foreach ( $casadelmare_gallery as $photo ) : ?>
                    <div class="gallery-item" style="overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;"
                         onclick="openLightbox(this)">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/../../casadelmare/' . $photo['url'] ); ?>" 
                             alt="<?php echo esc_attr( $photo['alt'] ); ?>" 
                             style="width: 100%; height: 300px; object-fit: cover; transition: transform 0.3s;"
                             onmouseover="this.style.transform='scale(1.05)'"
                             onmouseout="this.style.transform='scale(1)'">
                        <div style="padding: 10px; background: #f9f9f9; text-align: center;">
                            <p style="color: #0077be; font-weight: 600; margin: 0;">
                                <?php echo esc_html( $photo['category'] ); ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

        </div>
    </section>

    <!-- Photo Gallery by Category -->
    <section class="gallery-by-category" style="padding: 60px 20px; background-color: #e0f7ff;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
            
            <h2 style="text-align: center; font-family: 'Dancing Script', cursive; font-size: 2.5rem; color: #0077be; margin-bottom: 3rem;">
                Browse by Category
            </h2>

            <?php
            // Group photos by category
            $categories = array();
            foreach ( $casadelmare_gallery as $photo ) {
                $cat = $photo['category'];
                if ( ! isset( $categories[ $cat ] ) ) {
                    $categories[ $cat ] = array();
                }
                $categories[ $cat ][] = $photo;
            }
            
            foreach ( $categories as $category_name => $photos ) :
            ?>
                <div style="margin-bottom: 4rem;">
                    <h3 style="font-family: 'Dancing Script', cursive; font-size: 2rem; color: #0077be; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 3px solid #ff6b35;">
                        <?php echo esc_html( $category_name ); ?>
                    </h3>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <?php foreach ( $photos as $photo ) : ?>
                            <div class="gallery-item" style="overflow: hidden; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                                <img src="<?php echo esc_url( get_template_directory_uri() . '/../../casadelmare/' . $photo['url'] ); ?>" 
                                     alt="<?php echo esc_attr( $photo['alt'] ); ?>" 
                                     style="width: 100%; height: 250px; object-fit: cover;">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>

        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" style="padding: 60px 20px; background: linear-gradient(135deg, #0077be, #00d4ff); color: white; text-align: center;">
        <div class="container" style="max-width: 900px; margin: 0 auto;">
            <h2 style="font-family: 'Dancing Script', cursive; font-size: 3rem; color: white; margin-bottom: 1rem;">
                Ready to Experience Casa Del Mare?
            </h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: rgba(255, 255, 255, 0.95);">
                Book your stay and create your own memories at this beautiful beachfront home.
            </p>
            <?php echo wp_kses_post( casadelmare_ownerrez_booking_link() ); ?>
        </div>
    </section>

</div>

<script>
function openLightbox(element) {
    // Basic lightbox functionality can be enhanced with a library like GLightbox
    const img = element.querySelector('img');
    console.log('Opening: ' + img.alt);
}
</script>

<?php get_footer();
