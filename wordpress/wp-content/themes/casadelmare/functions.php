<?php
/**
 * Casa Del Mare Theme Functions
 */

// Define theme constants
define( 'CASADELMARE_VERSION', '1.0.0' );
define( 'CASADELMARE_DIR', get_template_directory() );
define( 'CASADELMARE_URI', get_template_directory_uri() );

/**
 * Setup theme features
 */
function casadelmare_setup() {
    // Add theme support
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'html5', array(
        'comment-list',
        'comment-form',
        'search-form',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'casadelmare' ),
        'footer'  => __( 'Footer Menu', 'casadelmare' ),
    ) );

    // Set image sizes
    set_post_thumbnail_size( 800, 600, true );
    add_image_size( 'casadelmare-hero', 1920, 600, true );
    add_image_size( 'casadelmare-gallery', 400, 300, true );
}
add_action( 'after_setup_theme', 'casadelmare_setup' );

/**
 * Enqueue scripts and styles
 */
function casadelmare_scripts() {
    // Main stylesheet
    wp_enqueue_style(
        'casadelmare-style',
        CASADELMARE_URI . '/style.css',
        array(),
        CASADELMARE_VERSION
    );

    // Comment reply script
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'casadelmare_scripts' );

/**
 * Register sidebar/widget areas
 */
function casadelmare_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Primary Sidebar', 'casadelmare' ),
        'id'            => 'primary-sidebar',
        'description'   => __( 'Primary widget area', 'casadelmare' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'casadelmare_widgets_init' );

/**
 * Add custom logo support
 */
function casadelmare_custom_logo() {
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
}
add_action( 'after_setup_theme', 'casadelmare_custom_logo' );

/**
 * Add Elementor support
 */
function casadelmare_elementor_support() {
    add_theme_support( 'elementor' );
}
add_action( 'after_setup_theme', 'casadelmare_elementor_support' );

/**
 * Filter: Add body classes
 */
function casadelmare_body_classes( $classes ) {
    if ( is_front_page() ) {
        $classes[] = 'is-homepage';
    }
    if ( is_singular() ) {
        $classes[] = 'is-singular';
    }
    return $classes;
}
add_filter( 'body_class', 'casadelmare_body_classes' );

/**
 * Load theme customizer
 */
require_once CASADELMARE_DIR . '/inc/customizer.php';

/**
 * Add Gutenberg editor support
 */
function casadelmare_block_editor_styles() {
    wp_enqueue_style(
        'casadelmare-editor-style',
        CASADELMARE_URI . '/style.css',
        array(),
        CASADELMARE_VERSION
    );
}
add_action( 'enqueue_block_editor_assets', 'casadelmare_block_editor_styles' );
