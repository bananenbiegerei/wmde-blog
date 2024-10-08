<?php
$text_color = false;
if (have_rows('style')) :
    while (have_rows('style')) : the_row();
        $text_color = get_sub_field('text_color');
    endwhile;
endif;
$text_color = $text_color == 'default' ? '' : $text_color;
if ($text_color) {
    $text_color = "text-{$text_color}";
}

//$text_size = get_field('style_text_size');
$text_size_query = get_field('style_text_size');
if ($text_size_query == 'small') {
    $text_size = 'text-base';
} elseif ($text_size_query == 'text-base lg:text-xl') {
    $text_size = 'text-base';
} elseif ($text_size_query == 'large') {
    $text_size = 'text-xl lg:text-2xl';
} else {
    $text_size = 'text-base lg:text-xl';
}
?>
<div class="bb-paragraph-block font-inherit <?= $text_color ?> <?= $text_size ?>">
	<?= get_field('paragraph') ?>
</div>
