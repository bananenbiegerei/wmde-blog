
<?php
$selected_publication = get_field('select_publication');

if (!$selected_publication) {
	return;
}

$post_id = $selected_publication->ID;
$post_title = get_the_title($post_id);
$post_permalink = get_permalink($post_id);
$post_excerpt = get_the_excerpt($post_id);
$post_thumbnail = get_the_post_thumbnail($post_id, 'medium', ['class' => 'h-3/4 w-auto drop-shadow-xl']);
$post_download = get_field('pdf', $post_id);
$subtitle = get_field('subtitle', $post_id);
?>
	<div class="bb-card-publication-block lg:flex gap-5 mb-10 lg:mb-20">
		<div class="rounded-3xl mb-10 basis-2/3">
			<?php if ($post_thumbnail): ?>
				<div class="aspect-w-1 aspect-h-1 bg-gray-100 rounded-xl overflow-hidden">
					<div class="flex flex-col items-center justify-center">
						<?= $post_thumbnail ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
		<div>
			<?php if (get_field('hide_excerpt')): ?>
				<h2><?php echo $post_title; ?></h2>
				<?php if ($subtitle): ?>
					<h3><?php echo $subtitle; ?></h3>
				<?php endif; ?>
			<?php else: ?>
				<h2><?php echo $post_title; ?></h2>
				<?php if ($subtitle): ?>
					<h3><?php echo $subtitle; ?></h3>
				<?php endif; ?>
				<p class="text-sm">
					<?= $post_excerpt ?>
				</p>
			<?php endif; ?>
			<div>
				<a href="<?= $post_download ?>" class="btn btn-xs btn-outline ">
					<?= bb_icon('arrow-down', 'icon-xs') ?> <?php _e('Download', BB_TEXT_DOMAIN); ?>
				</a>
			</div>
		</div>
	</div>

