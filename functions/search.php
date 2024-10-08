<?php

// Alter search count of posts per page for search
// This overrides the value in "Settings/Reading/Blog pages show at most"
add_filter('pre_get_posts', function ($query) {
  if ($query->is_search && empty($query->query['posts_per_page'])) {
    $query->set('posts_per_page', '-1');
  }
  return $query;
});

// Find the main site search url
// Used as the action for search forms
function bb_search_url()
{
  if (is_multisite() && get_current_blog_id() != 1) {
    return get_site_url(1);
  } else {
    return home_url('/');
  }
}

// Get the ID of the Wikimedia DE blog using the domain and path
function bb_get_id_of_blog()
{
  foreach(get_sites() as $site) {
    if (explode('.', $site->domain)[0] === 'blog' || $site->path === '/blog/') {
      return intval($site->blog_id);
    }
  }
}
