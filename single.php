<?php get_header(); ?>
<?php while (have_posts()): ?>
<?php the_post(); ?>
<?php get_template_part('template-parts/page-header-single-posts'); ?>
<?php if (get_field('article_info_box')): ?>
<div class="grid grid-cols-1 gap-5 md:grid-cols-3 relative container">
  <div class="order-first md:order-last">
  <div class="bg-gray rounded-xl p-5 md:sticky md:top-24 max-h-screen">
    <?php echo get_field('article_info_box'); ?>
  </div>
  </div>
  <div class="no-container-styles col-span-2">
  <?php the_content(); ?>
  </div>
</div>
<?php else: ?>
<div class="content pb-10">
  <?php the_content(); ?>
</div>
<?php endif; ?>

<!-- Categories -->
<div class="container">
  <section class="lg:grid lg:grid-cols-12">
  <div class="lg:col-span-8 lg:col-start-3">
    <?php get_template_part('template-parts/categories-tags'); ?>
    <?php get_template_part('template-parts/related-posts'); ?>
  </div>
  </section>
</div>

<!-- Comments -->
<div class="bg-gray py-5">
  <div class="container">
  <?php if (comments_open() || get_comments_number()): ?>
  <section class="comments-container lg:grid lg:grid-cols-12">
    <div class="lg:col-span-8 lg:col-start-3">
    <?php comments_template(); ?>
    </div>
  </section>
  <?php endif; ?>
  </div>
</div>

<?php endwhile; ?>

<?php get_footer(); ?>