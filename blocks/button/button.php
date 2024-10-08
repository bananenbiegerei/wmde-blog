<?php
$link = get_field('link') ? get_field('link') : ['title' => 'Missing Link!', 'url' => '#', 'target' => '_self'];
$size = get_field('display')['size'];
$position = get_field('display')['position'];
$icon = get_field('display')['icon'];
$icon_size = 'icon-' . preg_replace('/^.*-/', '', $size);
$color = get_field('display')['color'] ?? 'primary';
if ($color == 'default') {
	$color = 'primary';
}
$style = get_field('display')['style'];
?>
<div id="<?= $block['id'] ?>" class="bb-button-block flex lg:<?= $position ?>">
  <a class="btn btn-<?= $size ?> btn-<?= $style ?> btn-<?= $color ?> <?= $icon ?>" href="<?= esc_url($link['url']) ?>" target="<?= esc_attr($link['target']) ?>">
  <?= bb_icon($icon, $icon_size) ?>
  <?= esc_html($link['title']) ?>
  </a>
</div>
