<?php
$theme = get_field('theme');

if (!$theme) {
	echo '<p>Missing Theme</p>';
	return;
}

$color = get_field('color_for_theme', $theme->ID);
$secondary_color = get_field('secondary_color', $theme->ID);
$color_contrast = get_field('has_dark_background_color', $theme->ID);
$related = get_field('related_links');
$thumbnail_id = get_post_thumbnail_id($theme);
$thumbnail_url = get_the_post_thumbnail_url($theme, 'medium');
$thumbnail_alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
$theme_url = get_the_permalink($theme);
?>

<div class="bb-theme-block mb-10 md:mb-20">
	<div class="rounded-3xl md:px-10 md:grid md:grid-cols-12 overflow-hidden <?= $color_contrast ? 'white-scheme' : '' ?>" style="background-color: <?= $color ?>;">
		<!-- Image -->
			<div class="md:col-span-6 lg:col-span-4">
				<div class="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 relative md:-translate-x-10 rounded-tl-3xl rounded-br-3xl overflow-hidden">
					<a href="<?= $theme_url ?>">
					<img class="w-full h-full object-cover" src="<?= $thumbnail_url ?>" alt="<?= $thumbnail_alt ?>" aria-hidden="true" role="presentation">
					<figcaption class="sr-only">
						<?php _e('Bild für das Thema', BB_TEXT_DOMAIN); ?>
					</figcaption>
					</a>
				</div>
			</div>
			<div class="md:col-span-6 lg:col-span-8 flex flex-col p-5 md:p-0">
				<div class="pt-8">
					<!-- Theme or format -->
					<?php if ($secondary_color): ?>
					<div class="topline">
						<span style="color:<?= $secondary_color ?>;">
							<?= __('Theme', BB_TEXT_DOMAIN) ?>
						</span>
					</div>
					<?php else: ?>
					<div class="topline">
						<?= __('Theme', BB_TEXT_DOMAIN) ?>
					</div>
					<?php endif; ?>
					<!-- Title -->
					<a href="<?php echo $theme_url; ?>">
					<h2 class="text-2xl md:text-3xl text-black"><?= esc_html($theme->post_title) ?></h2>
					</a>
				</div>

				<!-- Text -->
				<p class="font-normal flex-grow pr-5 pb-5 text-xl text-bg-related text-black">
					<?= $theme->post_excerpt ?>
				</p>

				<!-- Button and extra info -->
				<div class="flex-1 flex items-end md:pb-8 default-scheme">
					<a href="<?= $theme_url ?>" class="rounded-md inline-flex items-center text-xl leading-none border px-2.5 py-1.5 gap-2"
					 style="color:<?= $secondary_color ?>; border-color:<?= $secondary_color ?>;"
					>
						<?= bb_icon('arrow-right', '') ?>
						<?= __('Zum Thema', BB_TEXT_DOMAIN) ?>
					</a>
				</div>

			</div>

			<!-- Related -->
			<?php $secondary_color = get_field('secondary_color', $theme->ID); ?>
			<?php if (have_rows('related_links')): ?>
				<div class="col-span-12 my-10">
				<div class="md:grid md:grid-cols-3 px-5 md:px-0">

				<?php while (have_rows('related_links')): ?>
					<?php the_row(); ?>

					<?php if ($link = get_sub_field('link')): ?>

						<?php if ($secondary_color): ?>
							<a class="pr-5" href="<?= esc_url($link['url']) ?>" target="<?= esc_attr($link['target']) ?>">
								<?php if (get_sub_field('alt_meta_info')): ?>
									<p class="topline mb-0" style="color:<?= $secondary_color ?>;"><?= get_sub_field('alt_meta_info'); ?></p>
									<h3 class="text-base md:text-xl text-black hover:underline transition underline-offset-2 decoration-1 decoration-black transition">
										<?= esc_html($link['title']) ?>
									</h3>
								<?php else: ?>
									<h3 class="text-base md:text-xl text-black mt-5 hover:underline transition underline-offset-2 decoration-1 decoration-black transition"><?= esc_html($link['title']) ?></h3>
								<?php endif; ?>
							</a>

						<?php else: ?>
							<a href="<?= esc_url($link['url']) ?>" target="<?= esc_attr($link['target']) ?>">
								<?php if (get_sub_field('alt_meta_info')): ?>
									<p class="topline mb-0"><?= get_sub_field('alt_meta_info'); ?></p>
									<h3 class="text-base md:text-xl text-black hover:underline transition underline-offset-2 decoration-1 decoration-black transition">
										<?= esc_html($link['title']) ?>
									</h3>
								<?php else: ?>
									<h3 class="text-base md:text-xl text-black mt-5 hover:underline transition underline-offset-2 decoration-1 decoration-black transition">
										<?= esc_html($link['title']) ?>
									</h3>
								<?php endif; ?>
							</a>
						<?php endif; ?>

					<?php endif; ?>
				<?php endwhile; ?>
				</div>
				</div>
			<?php endif; ?>
	</div>
</div>
