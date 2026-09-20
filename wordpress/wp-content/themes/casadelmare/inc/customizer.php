<?php
/**
 * Casa Del Mare Theme Customizer
 * 
 * Registers custom color schemes and font settings
 * for use with Elementor and WordPress admin
 */

function casadelmare_customize_register( $wp_customize ) {
    
    // Add custom color section
    $wp_customize->add_section( 'casadelmare_colors', array(
        'title'       => __( 'Casa Del Mare Colors', 'casadelmare' ),
        'description' => __( 'Customize Casa Del Mare theme colors', 'casadelmare' ),
        'priority'    => 30,
    ) );

    // Primary Color
    $wp_customize->add_setting( 'casadelmare_primary_color', array(
        'default'           => '#0077be',
        'sanitize_callback' => 'sanitize_hex_color',
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control(
        $wp_customize,
        'casadelmare_primary_color',
        array(
            'label'    => __( 'Primary Color', 'casadelmare' ),
            'section'  => 'casadelmare_colors',
            'settings' => 'casadelmare_primary_color',
        )
    ) );

    // Secondary Color
    $wp_customize->add_setting( 'casadelmare_secondary_color', array(
        'default'           => '#00d4ff',
        'sanitize_callback' => 'sanitize_hex_color',
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control(
        $wp_customize,
        'casadelmare_secondary_color',
        array(
            'label'    => __( 'Secondary Color', 'casadelmare' ),
            'section'  => 'casadelmare_colors',
            'settings' => 'casadelmare_secondary_color',
        )
    ) );

    // Accent Color
    $wp_customize->add_setting( 'casadelmare_accent_color', array(
        'default'           => '#ff6b35',
        'sanitize_callback' => 'sanitize_hex_color',
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control(
        $wp_customize,
        'casadelmare_accent_color',
        array(
            'label'    => __( 'Accent Color (Buttons)', 'casadelmare' ),
            'section'  => 'casadelmare_colors',
            'settings' => 'casadelmare_accent_color',
        )
    ) );

    // Add contact info section
    $wp_customize->add_section( 'casadelmare_contact', array(
        'title'    => __( 'Contact Information', 'casadelmare' ),
        'priority' => 40,
    ) );

    // Phone Number
    $wp_customize->add_setting( 'casadelmare_phone', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'casadelmare_phone', array(
        'label'    => __( 'Phone Number', 'casadelmare' ),
        'section'  => 'casadelmare_contact',
        'type'     => 'text',
    ) );

    // Email Address
    $wp_customize->add_setting( 'casadelmare_email', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_email',
    ) );

    $wp_customize->add_control( 'casadelmare_email', array(
        'label'    => __( 'Email Address', 'casadelmare' ),
        'section'  => 'casadelmare_contact',
        'type'     => 'email',
    ) );

    // Booking URL
    $wp_customize->add_setting( 'casadelmare_booking_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );

    $wp_customize->add_control( 'casadelmare_booking_url', array(
        'label'    => __( 'External Booking URL (Vacasa, Airbnb, etc.)', 'casadelmare' ),
        'section'  => 'casadelmare_contact',
        'type'     => 'url',
    ) );
}
add_action( 'customize_register', 'casadelmare_customize_register' );

/**
 * Output custom colors as CSS variables
 */
function casadelmare_custom_colors() {
    $primary   = get_theme_mod( 'casadelmare_primary_color', '#0077be' );
    $secondary = get_theme_mod( 'casadelmare_secondary_color', '#00d4ff' );
    $accent    = get_theme_mod( 'casadelmare_accent_color', '#ff6b35' );
    
    $css = ':root {
        --primary-color: ' . esc_attr( $primary ) . ';
        --secondary-color: ' . esc_attr( $secondary ) . ';
        --accent-color: ' . esc_attr( $accent ) . ';
    }';
    
    wp_add_inline_style( 'casadelmare-style', $css );
}
add_action( 'wp_enqueue_scripts', 'casadelmare_custom_colors' );

/**
 * Register Elementor Color Scheme
 */
function casadelmare_elementor_colors() {
    if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
        return;
    }

    \Elementor\Core\Settings\Manager::get_settings_managers( 'system' )->get_model()->update_settings(
        [
            'elementor_disable_color_schemes' => 'no',
        ]
    );
}
add_action( 'elementor_init', 'casadelmare_elementor_colors' );
