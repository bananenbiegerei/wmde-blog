<?php $source = get_field('choose_source'); ?>
<?php if ($source == 'iframe'): ?>
<div class="aspect-w-16 aspect-h-9">
  <?php echo get_field('iframe_for_livestream'); ?>
</div>
<?php elseif ($source == 'youtube'): ?>
<?php // echo get_field('youtube_livestream');?>
<h1>Youtube embed not working yet. Please contact is@bananenbiegerei.de</h1>
<?php endif; ?>