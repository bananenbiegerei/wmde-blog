<?php
$color = get_field('color_scheme', $post->ID);
if (is_null($color)) {
    $color = 'primary';
}
$author = get_field('custom_author', $post->ID);
$author_role = get_field('custom_author_role', $post->ID);
$number = get_field('bonbon_number', $post->ID);
$image= get_field('custom_author_image', $post->ID);
$permalink = get_permalink($post->ID) . '?b=' . get_the_ID();
$background_image_url = get_stylesheet_directory_uri() . '/blocks/wissens-bonbons/bonbon-quote.svg';
?>
<div class="duration-500 overflow-hidden relative rounded-2xl bg-bonbon-<?php echo $color; ?> h-full">
    <div class="text-primary bg-no-repeat bg-[left_1rem_top_1rem] flex flex-col h-full " style="background-image: url('<?php echo $background_image_url; ?>');">
        <div class="p-6 pb-0 flex-1">
            <h2 class="font-bold mb-2 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-2"><?php echo get_the_title($post->ID); ?></h2>
            <h3 class="h5 font-bold mb-0"><?= $author; ?></h3>
            <p class="text-base mb-0"><?= $author_role; ?></p>
        </div>
        <?php if ($image): ?>
        <div class="w-full h-auto">
            <?php echo wp_get_attachment_image($image, 'medium', false, array( 'class' => 'object-contain w-full h-full relative z-20' )); ?>
        </div>
        <?php endif; ?>
    </div>
    <button>
        <img class="absolute bottom-5 right-5 z-20 group-hover:rotate-90 transition" src="<?php echo get_stylesheet_directory_uri() . '/blocks/wissens-bonbons/bonbon-plus.svg'; ?>" alt="plus to open dialog">
    </button>
</div>
