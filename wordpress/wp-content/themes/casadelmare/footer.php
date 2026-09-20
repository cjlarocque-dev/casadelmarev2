<?php
/**
 * Casa Del Mare Theme - Footer Template
 */
?>
    </main><!-- .site-content -->
    
    <footer class="site-footer" role="contentinfo">
        <div class="site-footer-content">
            <nav class="footer-navigation" role="navigation" aria-label="Footer Navigation">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'footer',
                    'fallback_cb'    => false,
                    'depth'          => 1,
                ) );
                ?>
            </nav>
            
            <div class="footer-info">
                <p>&copy; <?php echo esc_html( get_bloginfo( 'name' ) ); ?> <?php echo esc_html( date( 'Y' ) ); ?>. All rights reserved.</p>
                <p><?php bloginfo( 'description' ); ?></p>
            </div>
            
            <div class="footer-contact">
                <?php
                $phone = get_theme_mod( 'casadelmare_phone' );
                $email = get_theme_mod( 'casadelmare_email' );
                if ( $phone ) {
                    echo '<p><a href="tel:' . esc_attr( $phone ) . '">' . esc_html( $phone ) . '</a></p>';
                }
                if ( $email ) {
                    echo '<p><a href="mailto:' . esc_attr( $email ) . '">' . esc_html( $email ) . '</a></p>';
                }
                ?>
            </div>
        </div>
    </footer><!-- .site-footer -->
    
    <?php wp_footer(); ?>
</body>
</html>
