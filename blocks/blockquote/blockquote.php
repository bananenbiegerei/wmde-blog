<?php
if ( get_field('image') ) {
    $attachment_id = get_field('image');
    $size = "medium"; // (thumbnail, medium, large, full or custom size)
    $image = wp_get_attachment_image( $attachment_id, $size, false, array('class' => 'bg-blue-100 rounded-2xl') );
  }
?>
<div class="bb-blockquote-block relative gap-5 md:grid md:grid-cols-4 mb-10">
  <?php if ( get_field('image') ) : ?>
    <div>
    <div class="aspect-h-1 aspect-w-1 mb-2">
      <?php echo $image; ?>
    </div>
  </div>
  <?php endif; ?>
  <div class="col-span-3 flex gap-3">
    <div class="w-16">
      <?= bb_icon('quote', 'icon-xxl text-green-800') ?>
    </div>
    <div>
    <blockquote class="text-2xl lg:text-3xl leading-tight font-normal">
    <?= get_field('text') ?>
    </blockquote>
  <?php if (get_field('source')): ?>
  <cite class="mt-5 font-bold block"><?= get_field('source') ?></cite>
  <?php endif; ?>
  <?php if ( get_field('title') ) : ?>
      <?php echo get_field('title'); ?>
  <?php endif; ?>
    </div>
  </div>
</div>