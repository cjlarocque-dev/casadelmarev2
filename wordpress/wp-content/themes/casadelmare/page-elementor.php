<?php
/**
 * Casa Del Mare Theme - Elementor Full Width Template
 * 
 * This template is optimized for Elementor page builder
 */
get_header();
?>

<div id="elementor" class="site-content">
    <?php
    while ( have_posts() ) {
        the_post();
        the_content();
    }
    ?>
</div>

<?php get_footer();
