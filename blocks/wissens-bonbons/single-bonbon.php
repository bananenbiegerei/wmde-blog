<?php get_header(); ?>
<?php while (have_posts()): ?>
<?php the_post(); ?>
<?php
$color = get_field('color_scheme');
$author = get_field('custom_author');
$author_role = get_field('custom_author_role');
$author_text = get_field('custom_author_text');
$number = get_field('bonbon_number');
$image= get_field('custom_author_image');
$background_image_url = get_stylesheet_directory_uri() . '/blocks/wissens-bonbons/bonbon-quote.svg';


// Get page ID for bonbons-swiper
$bonbon_page_id = null;
foreach (get_pages() as $p) {
    if (has_block('acf/wissens-bonbons', $p)) {
        $bonbon_page_id = $p->ID;
        break;
    }
}

// Get list of bonbon items
$blocks = parse_blocks(get_post($bonbon_page_id)->post_content);
$bonbon_items = [];
foreach ($blocks as $b) {
    if ($b['blockName'] == 'acf/wissens-bonbons') {
        $bonbon_items = $b['attrs']['data']['bonbon'];
        if (is_array($bonbon_items)) {
            break;
        }
    }
}

// Get URLs for bonbons-swiper, prev, and next items
$idx = array_search(get_the_ID(), $bonbon_items);
$bonbon_url = get_page_link($bonbon_page_id);
$prev_url = isset($bonbon_items[$idx-1]) ? get_page_link($bonbon_items[$idx-1]) : $bonbon_url;
$next_url = isset($bonbon_items[$idx+1]) ? get_page_link($bonbon_items[$idx+1]) : $bonbon_url;
?>
<div class="relative z-[52]">
    <div
        class="mx-6 bg-bonbon-<?= $color ?> text-primary max-w-5xl lg:mx-auto relative h-full p-5 pb-0 md:px-10 border-2 border-black rounded-3xl">
        <div class="relative pb-10 bg-bonbon-<?= $color ?> bg-no-repeat bg-left-top" style="background-image: url('<?php echo $background_image_url; ?>');">
            <div class="relative flex justify-between gap-10 mb-5">
                <h1 class="font-bold flex-1 text-3xl lg:text-4xl">
                    <?php the_title(); ?>
                </h1>
                <a href="<?php echo esc_url($bonbon_url); ?>" class="flex-shrink back-button z-20 w-max">
                    <span class="sr-only"><?php _e('Zurück zu den Meilensteinen', BB_TEXT_DOMAIN); ?></span>
                    <img class="w-12 h-12"
                        src="<?php echo get_stylesheet_directory_uri() . '/blocks/wissens-bonbons/bonbon-x.svg'; ?>"
                        alt="x to close dialog">
                </a>
            </div>
            <div class="flex flex-col md:flex-row gap-4 items-stretch">
                <div class="basis-3/4">
                    <div class="max-w-2xl">
                        <div class="no-container-styles mb-12">
                            <div class="md:flex gap-4 ">
                                <div class="no-container-styles mb-10 md:mb-0">
                                    <?php the_content(); ?>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex gap-4">
                            <?php if ($image): ?>
                            <div class="md:flex items-center min-w-[200px] mb-4 md:mb-0 max-w-[200px]">
                                <?php echo wp_get_attachment_image($image, 'medium', false, array( 'class' => 'relative z-20 rounded-full bg-white/40 w-full h-auto' )); ?>
                            </div>
                            <?php endif; ?>
                            <div class="">
                                <h3 class="h5 font-bold mb-0"><?= $author; ?></h3>
                                <p class="mb-2"><?= $author_role; ?></p>
                                <p class="text-base mb-0"><?= $author_text; ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-between basis-1/4 text-black">
                    <div class="flex-1 hidden md:flex justify-center items-center">
                        <div>
                        <?php $bonbon_illu = get_field( 'bonbon_illu' ); ?>
                        <?php $size = 'full'; ?>
                        <?php if ( $bonbon_illu ) : ?>
                        <?php echo wp_get_attachment_image( $bonbon_illu, $size, false, array( 'class' => 'w-full h-auto' ) ); ?>
                        <?php endif; ?>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-end">
                        <a href="<?= $prev_url ?>"
                            class="flex justify-center items-center h-10 w-10 border border-black rounded transition hover:bg-white"><?= bb_icon('arrow-left', 'icon-s') ?></a>
                        <a href="<?= $next_url ?>"
                            class="flex justify-center items-center h-10 w-10 border border-black rounded transition hover:bg-white"><?= bb_icon('arrow-right', 'icon-s') ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="h-screen fixed top-0 left-0 w-full bg-black/30 backdrop-blur z-[51]">
</div>
<?php endwhile; ?>
<script>
// Keyboard navigation
document.addEventListener("keydown", function(event) {
    if (event.code == 'ArrowRight') {
        window.location.href = "<?= $next_url ?>";
    } else if (event.code == 'ArrowLeft') {
        window.location.href = "<?= $prev_url ?>";
    } else if (event.code == 'Escape') {
        window.location.href = "<?= $bonbon_url ?>";
    }
});
</script>
<?php get_footer(); ?>