<a class="lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center" href="<?php the_permalink(); ?>">
<?php
if ( has_post_thumbnail() ) { ?>
	<div>
		<div class="aspect-w-16 aspect-h-9 mb-5 lg:mb-0">
			<?php the_post_thumbnail('medium', array('class' => 'object-cover h-full w-full rounded-xl')); ?>
		</div>
	</div>
<?php } ?>
<div>
	<h2><?php the_title(); ?></h2>
	<div class="mb-2">
		<?php the_excerpt(); ?>
	</div>
</div>
</a>