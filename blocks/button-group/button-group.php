<?php
/**
 * Block template file: button-group.php
 *
 * Button Group Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'button-group-' . $block['id'];
if (!empty($block['anchor'])) {
	$id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$classes = 'block-button-group';
if (!empty($block['className'])) {
	$classes .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$classes .= ' align' . $block['align'];
}
?>

<style type="text/css">
<?php echo '#'. $id;

?> {
    /* Add styles that use ACF values here */
}
</style>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($classes); ?> btn-group">
    <?php if (have_rows('buttons')): ?>
    <?php while (have_rows('buttons')):
    	the_row(); ?>
    <?php
    $link = get_sub_field('link') ? get_sub_field('link') : ['title' => 'Missing Link!', 'url' => '#', 'target' => '_self'];
    $size = get_sub_field('display')['size'];
    $position = get_sub_field('display')['position'];
    $icon = get_sub_field('display')['icon'];
    $icon_size = 'icon-' . preg_replace('/^.*-/', '', $size);
    $color = get_sub_field('display')['color'] ?? 'primary';
    if ($color == 'default') {
    	$color = 'primary';
    }
    $style = get_sub_field('display')['style'];
    ?>
    <div class="lg:<?= $position ?>">
        <a class="btn btn-<?= $size ?> btn-<?= $style ?> btn-<?= $color ?> <?= $icon ?>"
            href="<?= esc_url($link['url']) ?>" target="<?= esc_attr($link['target']) ?>">
            <?= bb_icon($icon, $icon_size) ?>
            <?= esc_html($link['title']) ?>
        </a>
    </div>

    <?php
    endwhile; ?>
    <?php else: ?>
    <?php  ?>
    <?php endif; ?>
</div>