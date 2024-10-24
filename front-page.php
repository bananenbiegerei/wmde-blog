<?php
/*
NOTE: This implements a workaround for the pagination bug with Polylang. 'is_page() == true' checks that we're loading the front-page. If it's false it means we're loading '/page/X'...
*/
?>
<?php if (is_page()): ?>
	<?php get_header(); ?>
	<?php while (have_posts()): ?>
		<?php the_post(); ?>
		<div class="content mt-10">
			<?php the_content(); ?>
		</div>
	<?php endwhile; ?>
	<?php get_footer(); ?>
<?php else: ?>
	 <?php get_template_part('index'); ?>
<?php endif; ?>
