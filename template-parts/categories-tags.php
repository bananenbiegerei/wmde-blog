<div class="flex gap-2 mb-10 flex-wrap">
	<?php
 $cats = get_the_category($id);
 foreach ($cats as $cat): ?>
		<a class="btn btn-outline btn-sm" href="<?php echo get_category_link($cat->cat_ID); ?>">
			#<?php echo $cat->name; ?>
		</a>
	<?php endforeach;
 ?>
	<?php
/*
	$tags = get_the_tags($id);
	foreach ( $tags as $tag ): ?>
		<a class="badge-secondary" href="<?php echo get_category_link($tag->tag_ID); ?>">
			<?php echo $tag->name; ?>
		</a>
	<?php endforeach; */
?>
</div>