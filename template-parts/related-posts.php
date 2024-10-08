<?php
// Get the category IDs of the current post
$categories = get_the_category();
$category_ids = array();

if ($categories) {
    foreach ($categories as $category) {
        // Replace '123' with the actual category ID of "allgemein"
        if ($category->term_id !== 1) {
            $category_ids[] = $category->term_id;
        }
    }
}

// Query the last three related posts from all the categories of the current post
$related_posts = new WP_Query(array(
    'category__in' => $category_ids, // Specify the array of category IDs
    'posts_per_page' => 4, // Number of posts to retrieve
    'post__not_in' => array(get_the_ID()), // Exclude the current post
    'orderby' => 'date', // Order by date
    'order' => 'DESC' // Descending order
));

if ($related_posts->have_posts()) : ?>
    <h3><?php _e('Related Posts', BB_TEXT_DOMAIN); ?></h3>
    <hr class="mb-5">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
    <?php while ($related_posts->have_posts()) : $related_posts->the_post(); ?>
        <div>
          <?php get_template_part('template-parts/content'); ?>
        </div>
    <?php endwhile; ?>
    </div>
<?php endif;

// Restore the main query loop
wp_reset_postdata();
?>
