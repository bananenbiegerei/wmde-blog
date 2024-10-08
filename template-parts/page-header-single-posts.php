<div class="bg-gray min-h-[12rem] py-10 mb-10">
  <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
  <!-- Back, Post Title & Top Line -->
  <div class="lg:col-span-10 lg:col-start-2">
    <a class="flex items-center gap-2" href="https://blog.wikimedia.de"><?= bb_icon('arrow-left', 'icon-xs') ?>
    <?php _e('zur Artikelübersicht'); ?></a>
    <?php if (get_field('topline')): ?>
    <h2 class="topline mb-0 mt-5"><?php echo get_field('topline'); ?></h2>
    <?php endif; ?>
    <h1 class="lg:mb-0"><?php the_title(); ?></h1>
  </div>

  <?php if (has_post_thumbnail()): ?>

  <!-- Excerpt -->
  <?php if (has_excerpt()): ?>
  <div class="lg:text-2xl text-xl lg:col-span-5 lg:col-start-2">
    <?php echo strip_tags(get_the_excerpt()); ?>
  </div>
  <?php endif; ?>

  <!-- Featured Image -->
  <div class="lg:col-span-5 my-5 lg:my-0">
    <div class="bb-image-block aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
    <figure class="w-full w-full">
      <?php the_post_thumbnail('large', [
            'class' => 'object-cover w-full h-full overflow-hidden'
          ]); ?>
      <?php if (bbWikimediaCommonsMedia::has_post_thumbnail_caption()): ?>
      <figcaption class="invisible flex absolute left-0 bottom-0 right-0 text-white bg-gray-900 w-auto h-auto z-20 p-2 text-sm flex items-start gap-4 break-all">
      <?= bb_icon('info', 'flex-shrink-0') ?> <div class="self-center">
        <?php the_post_thumbnail_caption(); ?></div>
      </figcaption>
      <?php endif; ?>
    </figure>
    </div>
  </div>

  <?php endif; ?>

  <!-- Authors -->
  <div class="col-span-8 lg:col-span-10 lg:col-start-2">

    <div class="flex gap-10 mb-2">
    <?php if (get_field('custom_authors')): ?>
    <!-- If Custom Authors -->
    <?php while (have_rows('custom_authors')): ?>
    <?php the_row(); ?>
    <?php get_template_part('template-parts/post-author', null, ['name' => get_sub_field('author')]); ?>
    <?php endwhile; ?>
    <?php else: ?>
    <!-- Otherwise use Post Author -->
    <?php get_template_part('template-parts/post-author', null, ['name' => get_the_author()]); ?>
    <?php endif; ?>
    </div>

    <!-- Date -->
    <p class="text-base">
    <?php echo get_the_date(); ?>
    </p>

  </div>

  </div>
</div>