<?php
/**
 * Block template file: livestream.php
 *
 * Livestream Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'livestream-' . $block['id'];
if (!empty($block['anchor'])) {
  $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$classes = 'block-livestream';
if (!empty($block['className'])) {
  $classes .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
  $classes .= ' align' . $block['align'];
}
?>

<div id="<?php echo esc_attr($id); ?>"
  class="<?php echo esc_attr($classes); ?> fullwidth bg-gray rounded-2xl p-5 mb-10">
  <?php if (get_field('has_slido')): ?>
  <div class="md:flex gap-5">
  <div class="md:w-1/2 lg:w-2/3 mb-10 md:mb-0">
  <?php get_template_part(WMDE_BB_BLOCKS_DIR . '/livestream/video-source');?>
  </div>
  <div class="md:w-1/2 lg:w-1/3">
  <?= get_field('slido_iframe'); ?>
  </div>
  </div>
  <?php else: ?>
  <div class="max-w-4xl mx-auto h-auto">
  <?php get_template_part(WMDE_BB_BLOCKS_DIR . '/livestream/video-source');?>
  </div>
  <?php endif; ?>
</div>

