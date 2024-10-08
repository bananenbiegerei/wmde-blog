<?php $publications = get_posts(['post_type' => 'publications', 'numberposts' => get_field('count')]); ?>

<div class="bb-latest-publications-block mb-10 lg:mb-20">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 justify-center">
  <?php foreach ($publications as $p): ?>

  <div class="flex flex-col">
    <div class="rounded-3xl py-10">
    <?php if ($thumb_id = get_post_thumbnail_id($p->ID)): ?>
    <?php $meta = wp_get_attachment_metadata($thumb_id); ?>
    <?php $size = $meta['width'] > $meta['height'] ? 'w-40 h-auto' : 'h-40 w-auto'; ?>
    <div class="flex flex-col items-center justify-center h-40">
      <?= get_the_post_thumbnail($p->ID, 'medium', ['class' => "{$size} drop-shadow-xl mt-auto"]) ?>
    </div>
    <?php endif; ?>
    </div>
    <div class="text-center">
    <h2 class="font-bold  text-sm text-primary"><?php echo $p->post_title; ?></h2>
    <?php if ($subtitle = get_field('subtitle', $p->ID)): ?>
    <h3 class=" text-sm text-primary">
      <?php echo $subtitle; ?>
    </h3>
    <?php endif; ?>

    <?php if ($pdf = get_field('pdf', $p->ID)): ?>
    <div>
      <a href=" <?= $pdf ?>" class="btn btn-xs btn-outline">
      <?= bb_icon('arrow-down', 'icon-xs') ?> <?php _e('Download', BB_TEXT_DOMAIN); ?>
      </a>
    </div>
    <?php endif; ?>
    </div>
  </div>
  <?php endforeach; ?>
  </div>
</div>