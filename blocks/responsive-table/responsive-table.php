<div class="bb-responsive-table-block">
	<table class="divide-y divide-gray-300 w-full border-collapse">
		<?php while (have_rows('rows')): ?>
  	  <?php the_row(); ?>
			<?php if (get_sub_field('is_table_head')): ?>
				<?php if (have_rows('columns')): ?>
					<thead>
						<tr class="flex-col lg:flex-row flex justify-between border-b border-gray-300 bg-gray">
							<?php while (have_rows('columns')): ?>
       	        <?php the_row(); ?>
								<th scope="col" class="flex-1 px-3 py-1 lg:py-3 text-left">
									<?= get_sub_field('column') ?>
								</th>
							<?php endwhile; ?>
						</tr>
					</thead>
				<?php endif; ?>
			<?php else: ?>
				<?php if (have_rows('columns')): ?>
					<tbody>
						<tr class="bg-white even:bg-gray flex-col lg:flex-row flex justify-between">
							<?php while (have_rows('columns')): ?>
                <?php the_row(); ?>
								<td class="flex-1 px-3 py-1 lg:py-3">
									<?= get_sub_field('column') ?>
								</td>
							<?php endwhile; ?>
						</tr>
					</tbody>
				<?php endif; ?>
			<?php endif; ?>
		<?php endwhile; ?>
	</table>
</div>
