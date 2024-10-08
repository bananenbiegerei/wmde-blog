<?php if (have_rows('header')): ?>
<div class="text-white orga-scheme space-y-20 sm:space-y-5">
	<div class="grid grid-cols-12 gap-5 space-y-5 sm:space-y-0">
		<?php while (have_rows('header')): ?>
  	<?php the_row(); ?>
		<div class="col-span-6 order-2 lg:order-3 lg:col-span-3 lg:col-span-2 mt-5 lg:mt-10">
			<p class="text-right text-black text-sm">
				<?= get_sub_field('date') ?>
			</p>
		</div>
		<?php if (have_rows('legend_left')): ?>
		<div class="text-black order-1 col-span-6 lg:col-span-3 lg:col-span-2">
			<ul class="text-sm lg:text-md space-y-2 mt-5 lg:mt-10">
				<?php while (have_rows('legend_left')): ?>
    	  <?php the_row(); ?>
				<li class="flex items-center gap-2">
					<span class="w-3 h-3 bg-<?= get_sub_field('color'); ?>-500 rounded-full inline-block"></span>
					<?= get_sub_field('label') ?>
				</li>
				<?php endwhile; ?>
			</ul>
		</div>
		<?php endif; ?>
		<?php if (have_rows('texts_in_half_circle')): ?>
		<div class="col-span-12 lg:col-span-6 text-center relative overflow-hidden space-y-5 lg:space-y-10 pt-5 pb-10 px-5 order-3 lg:order-2">
			<?php while (have_rows('texts_in_half_circle')): ?>
    	<?php the_row(); ?>
			<h2 class="z-20 relative sm:text-xl lg:text-3xl"><?= get_sub_field('text'); ?></h2>
			<?php endwhile; ?>
			<div class="absolute bottom-0 left-0 w-full h-full z-10 aspect-h-1 aspect-w-1">
				<div class="h-full w-full bg-red rounded-full"></div>
			</div>
		</div>
		<?php endif; ?>
		<?php endwhile; ?>
	</div>
</div>
<?php endif; ?>
