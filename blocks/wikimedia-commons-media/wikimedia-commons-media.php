<?php

// FIXME: requires Image block
$placeholder = esc_url(get_template_directory_uri() . '/' . WMDE_BB_BLOCKS_DIR . '/wikimedia-commons-media/placeholder.svg');
$media_url = (explode('?', get_field('media_url')))[0];
$image_data = bbWikimediaCommonsMedia::get_media($media_url);

if (is_string($description = get_field('description')) && !empty($description)) {
    $image_data['desc'] = $description;
}

if ($image_data && $image_data['type'] == 'image') {
    get_template_part('blocks/image/image', null, [
    'wmc_data' => $image_data,
    'wide' => get_field('style')['wide'] ?? false,
    'rounded' => get_field('style')['rounded'] ?? false,
    'image_link' => get_field('image_link'),
  ]);
} elseif ($image_data && $image_data['type'] == 'video') {
    // FIXME: set correct container for video..
    echo '<figure>';
    echo '<video preload="none" poster="' . $image_data['image'] . '" controls><source src="' . $image_data['media_url'] . '" type="' . $image_data['mime_type'] . '"></video>';
    echo '</figure>';
} else {
    echo '<figure>';
    echo "<img src='{$placeholder}'>";
    echo '<figcaption>' . __('Error: Unsupported or missing media', BB_TEXT_DOMAIN) . '</figcaption>';
    echo '</figure>';
}
