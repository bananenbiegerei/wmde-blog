<a class="text-hover-effect image-hover-effect overflow-hidden @container/content" href="<?php the_permalink(); ?>">

  <?php if (has_post_thumbnail()):  ?>
  <div class="aspect-w-16 aspect-h-9 mb-4">
  <?php the_post_thumbnail('medium', array('class' => 'object-cover h-full w-full rounded-xl')); ?>
  </div>
  <?php endif; ?>

  <div class="basis-full lg:basis-2/3 space-y-2 px-2 pb-2 card-content ">
  <?php if ($topline = get_field('topline')): ?>
  <div class="topline"><?= $topline ?></div>
  <?php endif; ?>

  <h2 class="text-base @xs/content:text-xl @sm/content:text-2xl @md/content:text-3xl font-alt"><?php the_title(); ?></h2>
  </div>
</a>