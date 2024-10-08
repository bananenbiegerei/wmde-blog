<?php
$blog_id = get_field('site');
$count = get_field('count');
$sticky_count_max = 12;

if (is_multisite()) {
	$curent_blog_id = get_current_blog_id();
	switch_to_blog($blog_id);
}

$site_url = get_site_url();
$posts = [];
$sticky_posts = [];
$i = 0;
foreach (wp_get_recent_posts(['numberposts' => $count + $sticky_count_max, 'post_status' => 'publish'], OBJECT) as $post) {
	if (is_sticky($post->ID) && $i < $sticky_count_max) {
		$i++;
		$sticky_posts[] = $post;
	} else {
		$posts[] = $post;
	}
}

if (is_multisite()) {
	restore_current_blog();
}
?>

<div class="bb-latest-posts-block mb-10 lg:mb-20">

  <!-- Sticky posts -->
  <div class="container lg:grid lg:grid-cols-<?= min(2, count($sticky_posts)) ?> gap-10 mb-5">
  <?php for ($i = 0; $i < min(2, count($sticky_posts)); $i++): ?>
  <?php $layout = count($sticky_posts) == 1 ? 'hwexl' : 'v'; ?>
  <?php get_template_part('blocks/card/card', null, ['blog_id' => $blog_id, 'post_id' => $sticky_posts[$i]->ID, 'layout' => $layout]); ?>
  <?php endfor; ?>
  </div>

  <!-- Other posts -->
  <div class="container grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-10">
  <?php for ($i = 0; $i < $count; $i++): ?>
  <?php get_template_part('blocks/card/card', null, ['blog_id' => $blog_id, 'post_id' => $posts[$i]->ID, 'layout' => 'vne']); ?>
  <?php endfor; ?>
  </div>

  <div class="container flex justify-end">
  <a href="<?= $site_url ?>" class="btn btn-outline ">
    <?= bb_icon('arrow-right') ?>
    <?php _e('Alle Artikel'); ?>
  </a>
  </div>
</div>

<?php // FIXME: Sometimes restore_current_blog() does not work properly. Maybe because of the cards/functions.php stuff???

if (is_multisite()) {
	switch_to_blog($curent_blog_id);
}
?>
