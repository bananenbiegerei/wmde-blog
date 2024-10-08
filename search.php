<?php

/*
 * Page for search results
 * - shows results from the main instance and the blog instance
 * - requires `/functions/search.php` (done in `/functions.php`)
 * - redirects the blog search to the main instance search
 * - blog posts are limited to `$max_blog_posts` items
 * - no pagination, it's difficult to do well with multiple sources
 * - post dates are shown only for specific post types (`$show_date_for`)
 */

// Limit the amount of blog posts in results
$max_blog_posts = 100;

// Length of the post excerpt
$excerpt_length = 30;

// Post types for which the date will be shown
$show_date_for = ['post', 'press-releases'];

// Fallback thumbnail
$fallback_thumbnail = wp_get_attachment_image((get_post_thumbnail_id(get_option('page_on_front')) ?: get_post_thumbnail_id(get_option('page_for_posts'))), [400, 0], false, ['class' => 'h-full w-full object-cover']);

// Redirect to main site search page if needed
if (is_multisite() && get_current_blog_id() !== 1) {
  wp_redirect(bb_search_url() . '?s=' . get_search_query());
  exit();
}

// Local function to add search results to an array
function bb_search_get_result_array()
{
  global $show_date_for, $post_types, $count, $excerpt_length, $fallback_thumbnail;
  // Keep track of post types
  $post_type = get_post_type();
  $post_type_label = get_post_type_object($post_type)->label;
  $post_types[$post_type] = $post_type_label;
  $count[$post_type] = ($count[$post_type] ?? 0) + 1;
  // Find a suitable thumbnail ID for the post (post or front page or blog page)
  $thumbnail = has_post_thumbnail() ? get_the_post_thumbnail(null, 'medium', ['class' => 'rounded-t-3xl object-cover w-full h-full overflow-hidden']) : $fallback_thumbnail;
  return [
    'blog_id' => get_current_blog_id(),
    'post_id' => get_the_ID(),
    'title' => get_the_title(),
    'post_type' => $post_type,
    'post_type_label' => get_post_type_object($post_type)->labels->singular_name,
    'excerpt' => wp_trim_words(get_the_excerpt(), $excerpt_length, '...'),
    'permalink' => get_permalink(),
    'date' => in_array(get_post_type(), $show_date_for) ? get_the_date() : null,
    'timestamp' => get_post_timestamp(),
    'thumbnail' => $thumbnail
  ];
}

// Search results data
$post_types = [];
$count = [];
$results = [];

// Search main site
while ($wp_query->have_posts()) {
  $wp_query->the_post();
  $results[] = bb_search_get_result_array();
}

// Search blog
if (is_multisite()) {
  switch_to_blog(bb_get_id_of_blog());
  $blog_search = new WP_Query(['s' => get_query_var('s'), 'posts_per_page' => $max_blog_posts]);
  while ($blog_search->have_posts()) {
    $blog_search->the_post();
    $results[] = bb_search_get_result_array();
  }
  restore_current_blog();
}

// Sort results by timestamp desc.
usort($results, function ($a, $b) {
  return $b['timestamp'] <=> $a['timestamp'];
});

// Sort post types
asort($post_types);
?>
<?php get_header(); ?>
<div class="grid grid-cols-12 container">
    <div class="col-span-12 mb-10 lg:mb-20">
        <?php if (have_posts()): ?>
        <h1 class="mt-6 mb-10 text-xl lg:text-2xl">
            <?php printf(__('Suchergebnisse für: %s', BB_TEXT_DOMAIN), get_search_query()); ?></h1>
        <div x-data="{selectedFilter: ''}">
            <div class="btn-group mb-5">
                <button x-on:click="selectedFilter=''" class="btn"
                    :class="{'btn-outline': selectedFilter != '', 'btn-active': selectedFilter == ''}" type="button">
                    Alle (<?php echo count($results); ?>) </button>
                <?php foreach ($post_types as $term => $label): ?>
                <button x-on:click="selectedFilter='<?php echo $term; ?>'" class="btn"
                    :class="{'btn-outline': selectedFilter != '<?php echo $term; ?>', 'btn-active': selectedFilter == '<?php echo $term; ?>'}"
                    type="button">
                    <?php echo $label; ?> (<?php echo $count[$term]; ?>)
                </button>
                <?php endforeach; ?>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <?php foreach ($results as $result): ?>
                <a href="<?php echo $result['permalink']; ?>"
                    class="bb-card-block text-hover-effect image-hover-effect bg-gray rounded-xl overflow-hidden mb-10 lg:mb-5 z-10 hover:z-20 relative"
                    x-show="!selectedFilter || '<?php echo $result['post_type']; ?>' == selectedFilter">
                    <div class="px-2 rounded-full bg-white text-xs border border-gray-400 absolute top-4 right-4 z-10"
                        x-show="!selectedFilter">
                        <?php echo $result['post_type_label']; ?>
                    </div>
                    <div class="flex flex-col">
                        <div class="">
                            <div class="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                                <?php echo $result['thumbnail']; ?>
                            </div>
                        </div>
                        <div class="space-y-2 p-4">
                            <h2 class="text-xl font-alt"><?php echo $result['title']; ?></h2>
                            <?php if ($result['date']): ?>
                            <div class="text-sm"><?php echo $result['date']; ?></div>
                            <?php endif; ?>
                            <div class="text-sm font-alt font-normal"><?php echo $result['excerpt']; ?></div>
                        </div>
                    </div>
                </a>
                <?php endforeach; ?>
            </div>
        </div>
        <?php else: ?>
        <div class="py-20 flex justify-center items-center">
            <div class="translate-y-5 max-w-4xl">
                <h1><?php _e('Nichts gefunden', BB_TEXT_DOMAIN); ?></h1>
                <p class="mb-5">
                    <?php _e('Es tut uns leid, aber nichts passte zu Ihren Suchbegriffen. Bitte versuchen Sie es noch einmal mit anderen Suchbegriffen.', BB_TEXT_DOMAIN); ?>
                </p>
                <div class="flex gap-5 items-center h-full">
                    <form class="flex gap-5" action="<?php echo bb_search_url(); ?>" method="get">
                        <input class="!mb-0" type="text" name="s" id="search" value="<?php the_search_query(); ?>" />
                        <input type="submit" alt="Search" value="Suchen" class="btn" />
                    </form>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>