<?php
/**
 * Casa Del Mare Theme - Main Index Template
 */
get_header();
?>

<div class="page-content">
    <?php
    if ( have_posts() ) {
        while ( have_posts() ) {
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>
                
                <?php
                if ( has_post_thumbnail() ) {
                    echo '<figure class="entry-thumbnail">';
                    the_post_thumbnail( 'casadelmare-hero' );
                    echo '</figure>';
                }
                ?>
                
                <div class="entry-content">
                    <?php
                    the_content(
                        sprintf(
                            wp_kses_post( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'casadelmare' ) ),
                            the_title( '<span class="screen-reader-text">', '</span>', false )
                        )
                    );
                    wp_link_pages( array(
                        'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'casadelmare' ) . '</span>',
                        'after'       => '</div>',
                        'link_before' => '<span>',
                        'link_after'  => '</span>',
                    ) );
                    ?>
                </div>
                
                <?php if ( is_singular() ) : ?>
                    <footer class="entry-footer">
                        <?php
                        $categories = get_the_category();
                        if ( ! empty( $categories ) ) {
                            echo '<p class="entry-categories">';
                            foreach ( $categories as $category ) {
                                echo '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '">' . esc_html( $category->name ) . '</a> ';
                            }
                            echo '</p>';
                        }
                        ?>
                    </footer>
                <?php endif; ?>
            </article>
            <?php
        }
    } else {
        echo '<p>' . esc_html__( 'No content found.', 'casadelmare' ) . '</p>';
    }
    ?>
</div>

<?php get_footer();
