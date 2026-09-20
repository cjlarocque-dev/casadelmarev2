<?php
/**
 * Casa Del Mare Theme - Header Template
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    
    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Open Graph Tags -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php wp_title(); ?>">
    <meta property="og:description" content="<?php bloginfo( 'description' ); ?>">
    <meta property="og:image" content="<?php echo esc_url( get_site_icon_url() ); ?>">
    <meta property="og:url" content="<?php echo esc_url( home_url( $_SERVER['REQUEST_URI'] ) ); ?>">
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php wp_title(); ?>">
    <meta name="twitter:description" content="<?php bloginfo( 'description' ); ?>">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <header class="site-header" role="banner">
        <div class="site-branding">
            <?php
            if ( has_custom_logo() ) {
                the_custom_logo();
            } else {
                echo '<a href="' . esc_url( home_url( '/' ) ) . '" class="site-title">' . esc_html( get_bloginfo( 'name' ) ) . '</a>';
            }
            ?>
        </div>
        
        <nav class="site-navigation" role="navigation" aria-label="Main Navigation">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'fallback_cb'    => 'wp_page_menu',
                'depth'          => 2,
            ) );
            ?>
        </nav>
    </header>
    
    <main class="site-content" role="main">
