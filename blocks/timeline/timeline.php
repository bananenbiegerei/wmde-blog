<?php

$id = '20jahre-meilensteine-' . $block['id'];
if (!empty($block['anchor'])) {
    $id = $block['anchor'];
}
$i = 0;
?>
<canvas class="fixed top-0 left-0 w-full h-screen z-30 pointer-events-none" id="confetti-canvas"></canvas>
<div id="<?php echo esc_attr($id); ?>" class="bg-wmde20 relative pt-10">
    <?php if (have_rows('years')): ?>
    <div class="flex flex-col items-center mx-4 container">
        <?php while (have_rows('years')):?>
        <?php the_row(); ?>
        <div class="lg:sticky lg:top-20 z-30 flex flex-col items-center after:w-[4px]">
            <div class="bg-white border-[4px] border-black w-28 h-14 flex items-center justify-center">
                <h3 class="mb-0"><?= get_sub_field('year') ?></h3>
            </div>
        </div>
        <div class="bg-black w-[4px] h-10">
        </div>
        <?php $pick_pages = get_sub_field('pick_pages'); ?>
        <?php if ($pick_pages): ?>
        <div class="lg:grid lg:grid-cols-2 gap-y-4 relative w-full">
            <?php foreach ($pick_pages as $post): ?>
            <?php
            setup_postdata($post);
            $title = get_the_title($post->ID);
            $thumb = get_the_post_thumbnail($post->ID, 'medium', ['class' => 'h-full w-full object-cover']);
            $excerpt = strip_tags(get_the_excerpt($post->ID));
            $date = get_field('date', $post->ID);
            $headline = get_field('headline', $post->ID);
            $color = get_field('custom_color', $post->ID);
            $audio_group = get_field('audio_posts', $post->ID);
            $video = get_field('video_posts', $post->ID);
            $permalink = get_permalink($post->ID);
            $youtube = has_block('acf/youtube-light-embed', $post->ID);
            ?>
            <div class="relative lg:min-h-[220px] mb-5 lg:mb-0 lg:even:translate-y-24 lg:even:-translate-x-[2px] lg:even:after:-left-[17px] lg:pr-16 lg:even:pl-16 lg:even:pr-0 lg:even:border-l-[4px] lg:even:border-black lg:odd:border-r-[4px] lg:odd:border-black lg:odd:translate-x-[2px] lg:before:absolute lg:before:w-16 lg:before:h-[4px] before:bg-black before:top-1/2 even:before:left-0 lg:odd:before:left-auto lg:odd:before:right-0">
                <?php include locate_template('blocks/timeline/card-timeline.php'); ?>
                <div class="h-5 w-[4px] -ml-[2px] absolute -bottom-5 left-1/2 bg-black lg:hidden"></div>
            </div>
            <?php endforeach; ?>
            <?php wp_reset_postdata(); ?>
        </div>
        <?php endif; ?>
        <div class="h-10 lg:h-40 flex justify-center relative">
            <div class="h-full w-[4px] bg-black"></div>
            <div class="h-14 absolute -bottom-14 w-[4px] bg-black last:hidden"></div>
        </div>
        <?php endwhile; ?>
    </div>
    <?php endif; ?>
</div>
<script>
document.addEventListener("DOMContentLoaded", function() {
    // Save scroll position when a child page link is clicked
    const links = document.querySelectorAll('a.child-page-link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            sessionStorage.setItem('scrollPosition', window.scrollY);
            sessionStorage.setItem('parentPage', window.location.pathname);
            console.log('Saved scroll position:', window.scrollY); // Debugging line
            console.log('Saved parent page:', window.location.pathname); // Debugging line
        });
    });

    // Retrieve and set scroll position when the parent page is loaded
    console.log('Current page:', window.location.pathname); // Debugging line
    console.log('Stored parent page:', sessionStorage.getItem('parentPage')); // Debugging line
    if (sessionStorage.getItem('scrollPosition') !== null && window.location.pathname === sessionStorage.getItem('parentPage')) {
        console.log('Restoring scroll position:', sessionStorage.getItem('scrollPosition')); // Debugging line
        window.scrollTo(0, parseInt(sessionStorage.getItem('scrollPosition')));
        sessionStorage.removeItem('scrollPosition');
        sessionStorage.removeItem('parentPage');
    }
});
</script>