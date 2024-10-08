<?php

$shape_img = get_stylesheet_directory_uri() . '/' . WMDE_BB_BLOCKS_DIR . '/facts/img/%.svg';
$aspect_ratios = [
	'1' => '410/260',
	'2' => '410/260',
	'3' => '410/260',
	'4' => '410/260',
	'5' => '1/1',
	'6' => '1/1',
];
?>

<div class="bb-facts-block flex flex-row flex-wrap mb-10 lg:mb-20" id="<?= $block['id'] ?>">
	<?php while (have_rows('facts')): ?>
    <?php the_row(); ?>
		<?php $img = str_replace('%', get_sub_field('shape'), $shape_img); ?>
		<?php $aspect_ratio = $aspect_ratios[get_sub_field('shape')]; ?>
		<div
			class="h-64 bg-contain bg-no-repeat text-primary flex justify-center items-center "
			style="background-image: url(<?= $img ?>); aspect-ratio: <?= $aspect_ratio ?>">
				<div class="w-4/5 text-center leading-none">
					<div class="mb-0" style="font-size: 3vw;">
						<?= get_sub_field('value') ?>
					</div>
					<div class="text-base"><?= get_sub_field('details') ?></div>
			</div>
		</div>
	<?php endwhile; ?>
</div>
