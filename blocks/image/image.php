<?php
/* ACF Block: Image
 *	Notes:
 *  - Also used by Gallery Swiper block, Wikimedia Commons Media, and Text Image Float blocks via `get_template_part()`.
 *  -
 */

// If called from Image block, Gallery Swiper block, or Text-Image-Float block
$image_id = get_field('image') ?: $args['image']['id'] ?? false;

// If called from Wikimedia Commons Media block (`wmc_data` contains image meta-data from Wikimedia Commons)
$wmc_image_data = $args['wmc_data'] ?? false;

// Setup image parameters
if ($image_id) {
    // If called from Image ACF block or Gallery Swiper block
    $image_caption = strip_tags(wp_get_attachment_caption($image_id), ['a']);
    $image_meta_data = wp_get_attachment_metadata($image_id);
    $rounded = get_field('style')['rounded'] ?? ($args['rounded'] ?? false);
    $image_link = get_field('image_link');
} elseif ($wmc_image_data) {
    $image_caption = '<a href="' . esc_attr($wmc_image_data['url']) . '">' . ($wmc_image_data['creator'] ?: 'N/A') . ', ' . $wmc_image_data['usageterms'] . '</a>';
    $dim = explode('x', $wmc_image_data['dim']);
    $image_meta_data = ['width' => (int) $dim[0], 'height' => (int) $dim[1]];
    $rounded = $args['rounded'] ?? false;
    $image_link = $args['image_link'] ?? false;
} else {
    // Fallback to an error
    $image_caption = 'Missing image!';
    $image_meta_data = ['width' => 180, 'height' => 139];
    $rounded = false;
    $image_link = false;
}

// Get values for container and image classes
if ($image_meta_data && ($image_meta_data['width'] ?? 2) * 0.74 < ($image_meta_data['height'] ?? 1)) {
    // For portrait
    // SVG image have no size metadata(???) so we force landscape for them..
    $figure_classes = 'portrait flex flex-col justify-center relative overflow-hidden ' . ($rounded ? 'rounded-2xl ' : '');
    $image_attr = ['class' => 'h-full w-auto'];
} else {
    // For landscape
    $figure_classes = 'flex flex-col relative ';
    $image_attr = ['class' => 'w-full h-auto ' . ($rounded ? 'rounded-2xl ' : '')];
}
// Force unset 'sizes' image attribute to let the browser pick the right image (WP does something weird here...)
$image_attr['sizes'] = ' ';

$figure_classes .= $image_caption ? '' : ' no_caption';
$caption_classes = 'invisible flex absolute left-0 bottom-0 right-0 text-white bg-gray-900 w-auto h-auto z-20 p-2 text-sm flex items-start gap-4 break-all ' . ($rounded ? 'rounded-b-2xl' : '');
$description_classes = 'bg-gray p-5 pb-5 pt-6' . ($rounded ? ' rounded-b-2xl -mt-3' : '');


// Create image tag
$description = false;
if ($image_id) {
    $alt = get_post_meta($image_id, '_wp_attachment_image_alt', true);
    $image_attr['alt'] = esc_attr($alt);
    $size = $args['size'] ?? 'full';
    $image = wp_get_attachment_image($image_id, $size, '', $image_attr);
    $attachment = get_post($image_id);
    $description = $attachment ? $attachment->post_content : '';
} elseif ($wmc_image_data) {
    $alt = esc_attr($wmc_image_data['desc']);
    $description = $wmc_image_data['desc'];
    $image = "<img src='{$wmc_image_data['media_url']}' srcset='{$wmc_image_data['srcset']}' alt='{$alt}' loading='lazy' sizes=' ' class='{$image_attr['class']}'>";
} else {
    $placeholder = esc_url(get_template_directory_uri() . '/' . WMDE_BB_BLOCKS_DIR . '/image/placeholder.svg');
    $image = "<img src='{$placeholder}' alt='' class='{$image_attr['class']}'>";
}

// Wrap image in A tag if needed
$link_open = '';
$link_close = '';
if ($image_link) {
    $link_open = '<a href="' . esc_url($image_link) . '">';
    $link_close = '</a>';
}


?>

<div class="bb-image-block">
    <?php $image_link = get_field('image_link'); ?>
    <?= $link_open ?>
    <figure class="<?= $figure_classes ?>" role="group">
        <?= $image ?>
        <?php if (is_string($image_caption) && !empty($image_caption)): ?>
        <figcaption class="<?= $caption_classes ?>">
            <?= bb_icon('info', 'flex-shrink-0') ?> <div class="self-center"><?= $image_caption ?></div>
        </figcaption>
        <?php endif; ?>
    </figure>
    <?= $link_close ?>
    <?php if (is_string($description) && !empty($description)): ?>
    <div class="<?= $description_classes ?>">
        <?= $description ?>
    </div>
    <?php endif; ?>
</div>