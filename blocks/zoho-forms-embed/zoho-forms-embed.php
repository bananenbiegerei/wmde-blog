<?php
/**
 * Block template file: zoho-forms-embed.php
 *
 * Zoho Forms Embed Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'zoho-forms-embed-' . $block['id'];
if (!empty($block['anchor'])) {
  $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$classes = 'block-zoho-forms-embed';
if (!empty($block['className'])) {
  $classes .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
  $classes .= ' align' . $block['align'];
}
$height = get_field('form_height');
?>

<style type="text/css">
<?php echo '#'. $id . ' ';

?>iframe {
  min-height: <?php echo $height;
?>px !important;
}
</style>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($classes); ?>">
  <?php echo get_field('embed_code'); ?>
</div>
