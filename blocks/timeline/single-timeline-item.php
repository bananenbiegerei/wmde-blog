<?php get_header(); ?>
<?php while (have_posts()): ?>
<?php the_post(); ?>
<?php
$date = get_field('date');
$color = get_field('custom_color');

// Get page ID for timeline
$timeline_page_id = null;
foreach (get_pages() as $p) {
    if (has_block('acf/timeline', $p)) {
        $timeline_page_id = $p->ID;
        break;
    }
}

// Get list of timeline items pages
$blocks = parse_blocks(get_post($timeline_page_id)->post_content);
$timeline_items = [];
foreach ($blocks as $b) {
    if ($b['blockName'] == 'acf/timeline') {
        foreach ($b['attrs']['data'] as $k => $v) {
            if (str_ends_with($k, '_pick_pages') && gettype($v) == 'array') {
                $timeline_items = array_merge($timeline_items, $v);
            }
        }
        break;
    }
}

// Get URLs for timeline, prev, and next timeline items
$idx = array_search(get_the_ID(), $timeline_items);
$timeline_url = get_page_link($timeline_page_id);
$prev_url = isset($timeline_items[$idx-1]) ? get_page_link($timeline_items[$idx-1]) : $timeline_url;
$next_url = isset($timeline_items[$idx+1]) ? get_page_link($timeline_items[$idx+1]) : $timeline_url;
?>
<div class="bg-wmde20">
    <div class="container relative h-full p-5 pb-0 md:p-10">
        <div class="border-t-4 border-black text-white text-wmde20-<?= $color ?> flex items-center justify-between w-full bg-wmde20-<?= $color ?>">
            <a href="#" class="back-button bg-black hover:bg-gray-800 flex justify-center items-center h-10 px-2" data-parent-url="<?php echo esc_url($timeline_url); ?>"><?php _e('Zurück zu den Meilensteinen', BB_TEXT_DOMAIN); ?></a>
            <div class="flex">
                <a href="<?= $prev_url ?>" class="bg-black hover:bg-gray-800 flex justify-center items-center h-10 w-10"><?= bb_icon('arrow-left', 'icon-s') ?></a>
                <a href="<?= $next_url ?>" class="bg-black hover:bg-gray-800 flex justify-center items-center h-10 w-10"><?= bb_icon('arrow-right', 'icon-s') ?></a>
            </div>
        </div>
        <div class="relative border-x-4 border-b-4 border-black p-6 bg-wmde20-<?= $color ?>">
            <?php if ($date): ?>
            <time><?= $date ?></time>
            <?php endif; ?>
            <h1><?php the_title(); ?></h1>
            <div class="no-container-styles">
                <div class="md:flex gap-4 ">
                    <div class="no-container-styles basis-2/3 mb-10 md:mb-0">
                        <?php the_content(); ?>
                    </div>
                    <div class="basis-1/3 flex flex-col space-y-8">
                        <?php include locate_template('template-parts/timeline-media-video.php'); ?>
                        <?php include locate_template('template-parts/timeline-media-audio.php'); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endwhile; ?>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Handle back button click on child pages
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', function(e) {
                e.preventDefault();
                const parentPageUrl = backButton.getAttribute('data-parent-url');
                window.location.href = parentPageUrl;
            });
        }
    });
    // Keyboard navigation
    document.addEventListener("keydown", function(event) {
        if (event.code == 'ArrowRight') {
            window.location.href = "<?= $next_url ?>";
        } else if (event.code == 'ArrowLeft') {
            window.location.href = "<?= $prev_url ?>";
        } else if (event.code == 'Escape') {
            window.location.href = "<?= $timeline_url ?>";
        }
    });
</script>
<?php get_footer(); ?>
