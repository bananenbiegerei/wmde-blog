<?php if (have_rows('chapters_bottom')): ?>
	<div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-20 sm:gap-y-10">

	<?php while (have_rows('chapters_bottom')): ?>
 	<?php the_row(); ?>
		<div class="space-y-3 w-full sm:w-full mx-auto sm:mx-0">
		<div class="bg-blue aspect-h-1 aspect-w-1 rounded-full text-white">
		<div class="flex justify-center items-center flex-col h-full w-full p-5">
			<h4 class="text-center text-sm lg:text-base">
			<?= get_sub_field('name') ?>
			</h4>
			<?php if (have_rows('sub_chapter')): ?>
				<ul class="text-sm lg:text-md flex gap-2">
				<?php while (have_rows('sub_chapter')): ?>
          <?php the_row(); ?>
					<li class="w-3 h-3 bg-cyan rounded-full"></li>
				<?php endwhile; ?>
				</ul>
			<?php endif; ?>

		</div>
		</div>
		<?php if (have_rows('sub_chapter')): ?>
			<ul class="text-sm lg:text-md bg-cyan divide-y divide-white">
			<?php while (have_rows('sub_chapter')): ?>
        <?php the_row(); ?>
				<li class="p-2">
				<?= get_sub_field('name') ?>
				</li>
			<?php endwhile; ?>
			</ul>
		<?php endif; ?>
		</div>
	<?php endwhile; ?>

	</div>
<?php endif; ?>
