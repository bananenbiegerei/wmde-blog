<?php
/*
Template Name: Archives
*/
get_header(); ?>
<?php if ( have_posts() ) : ?>
	<div class="mt-20 container flex flex-col space-y-20">
		<h1><?php printf( __( 'Kategorie: %s', BB_TEXT_DOMAIN ), single_cat_title( '', false ) ); ?></h1>
		<div class="grid grid-cols-4 gap-10">
		<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part("template-parts/content"); ?>
		<?php endwhile; ?>
		</div>
		<?php get_template_part( 'template-parts/pagination' ); ?>
	</div>
<?php endif; ?>

<?php get_footer(); ?>