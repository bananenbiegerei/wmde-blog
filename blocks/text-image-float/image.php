<?php
/* Fork of Image block to accomodate for specificities of this block... */

// If called from Image block, Gallery Swiper block, or Text-Image-Float block
$image_id = $args['image']['id'] ?? false;

// Setup image parameters
if ($image_id) {
    // If called from Image ACF block or Gallery Swiper block
    $image_caption = strip_tags(wp_get_attachment_caption($image_id), ['a']);
    $image_meta_data = wp_get_attachment_metadata($image_id);
    $rounded = $args['rounded'] ?? false;
} else {
    // Fallback to an error
    $image_caption = 'Missing image!';
    $image_meta_data = ['width' => 180, 'height' => 139];
    $rounded = false;
}

// Get Image Size
$image_size = null;
if (get_field('image_size')) {
    $image_size = get_field('image_size');
}

// Get values for container and image classes
if ($image_meta_data && ($image_meta_data['width'] ?? 2) * 0.74 < ($image_meta_data['height'] ?? 1)) {
    // For portrait
    // SVG image have no size metadata(???) so we force landscape for them..
    $figure_classes = 'portrait flex justify-center max-h-screen relative overflow-hidden bg-gray ' . ($rounded ? 'rounded-2xl ' : '');
    $image_classes = ['class' => 'md:mt-1 ' . ($rounded ? 'rounded-2xl ' : ''), 'style' => $image_size ? 'width: ' . $image_size . 'px;' : ''];
} else {
    // For landscape
    $figure_classes = 'flex flex-col relative ';
    $image_classes = ['class' => 'md:mt-1 ' . ($rounded ? 'rounded-2xl ' : ''), 'style' => $image_size ? 'width: ' . $image_size . 'px;' : ''];
}
// Force unset 'sizes' image attribute to let the browser pick the right image (WP does something weird here...)
$image_classes['sizes'] = ' ';

$figure_classes .= $image_caption ? '' : ' no_caption';
$caption_classes = 'invisible flex absolute left-0 bottom-0 right-0 text-white bg-gray-900 w-auto h-auto z-20 p-2 text-sm flex items-start gap-4 break-all ' . ($rounded ? 'rounded-b-2xl' : '');

// Create image tag
if ($image_id) {
    $image = wp_get_attachment_image($image_id, 'full', '', $image_classes);
} else {
    $placeholder = esc_url(get_template_directory_uri() . '/' . WMDE_BB_BLOCKS_DIR . '/image/placeholder.svg');
    $image = "<img src='{$placeholder}' class='{$image_classes['class']}'>";
}
?>
<div class="bb-image-block">
    <figure class="<?= $figure_classes ?>" role="group">
        <?= $image ?>
        <?php if ($image_caption): ?>
        <figcaption class="<?= $caption_classes ?>">
            <?= bb_icon('info', 'flex-shrink-0') ?> <div class="self-center"><?= $image_caption ?></div>
        </figcaption>
        <?php endif; ?>
    </figure>
</div>