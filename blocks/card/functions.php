<?php

/* Notes:
 * - Lookup of URL to post data is cached to reduce load. Cache is cleared when editing page in Gutenberg editor
 *   (see `get_post_data_from_url()`).
 * - `url_to_postid()` has a bug that will mess up rewrite rules on multisite instances if for some reason the rules
 *   are empty. This is prevented with a little workaround (see below).
 */

define('BB_CARD_URL_TO_ID_PREFIX', 'bb_card_');
define('BB_CARD_URL_TO_ID_TIMEOUT', 72 * HOUR_IN_SECONDS);

class bbCard
{
    // List of all detected custom post types on network
    public static $custom_post_types = null;
    // List of all sites of network
    public static $sites = null;

    // Get list of sites of network
    public static function get_sites()
    {
        global $wpdb;

        // Return a default single site for single site instances
        if (!is_multisite()) {
            bbCard::$sites = [
                '1' => [
                    'blog_id' => '1',
                    'title' => get_bloginfo('name'),
                    'domain' => parse_url(get_site_url(), PHP_URL_HOST),
                    'path' => '' // FIXME: should not be empty...
                ]
            ];
            return bbCard::$sites;
        }

        // Cached values
        if (bbCard::$sites) {
            return bbCard::$sites;
        }

        $sites = [];
        $sites[get_current_blog_id()] = null; // FIXME: why?
        foreach ($wpdb->get_results("SELECT blog_id,domain,path FROM {$wpdb->base_prefix}blogs;", ARRAY_A) as $site) {
            if ($site['blog_id'] == '1') {
                $table = "{$wpdb->base_prefix}options";
            } else {
                $table = "{$wpdb->base_prefix}{$site['blog_id']}_options";
            }

            $site['title'] = $wpdb->get_var("SELECT option_value FROM {$table} WHERE option_name='blogname';");

            $sites[$site['blog_id'] . ''] = $site;
        }
        bbCard::$sites = $sites;
        return $sites;
    }

    // Get list of custom post types of network
    public static function get_all_custom_post_types()
    {
        // Cached values
        // FIXME: use WP transients
        if (bbCard::$custom_post_types) {
            return bbCard::$custom_post_types;
        }
        $themes_dir = dirname(get_stylesheet_directory());
        $cpt = [];
        // Scan all theme directories for register_post_type()
        // NOTE: we're pretty restrictive here in which files we search
        foreach (glob($themes_dir . '/*/functions/custom-post*.php') as $filename) {
            preg_match_all("#register_post_type\('(.*?)'#", file_get_contents($filename), $matches);
            $cpt = array_merge($cpt, $matches[1]);
        }
        bbCard::$custom_post_types = array_unique($cpt);
        return bbCard::$custom_post_types;
    }

    // Find a matching post in any of the network sites from its URL
    public static function get_post_data_from_url($url)
    {
        if (filter_var($url, FILTER_VALIDATE_URL) === false) {
            error_log("BB_CARD_WARNING: incorrect url (\"{$url}\")");
        }

        $md5 = md5($url);
        $cached = get_transient(BB_CARD_URL_TO_ID_PREFIX . $md5);
        // Cache is only used for end users
        if ($cached !== false && !current_user_can('edit_posts')) {
            return $cached;
        }

        if (!is_multisite()) {
            $post_data = bbCard::get_post_data_from_url_for_blog($url);
            if (!$post_data) {
                return false;
            }
            $post_data['blog_id'] = 1;
            set_transient(BB_CARD_URL_TO_ID_PREFIX . $md5, $post_data, BB_CARD_URL_TO_ID_TIMEOUT);
            return $post_data;
        }

        $post_data = null;
        // Look in all subsites and find the first post that matches the URL
        foreach (bbCard::get_sites() as $blog_id => $site) {
            switch_to_blog($blog_id);
            if ($post_data = bbCard::get_post_data_from_url_for_blog($url)) {
                $post_data['blog_id'] = $blog_id;
                restore_current_blog();
                break;
            } else {
                restore_current_blog();
            }
        }

        set_transient(BB_CARD_URL_TO_ID_PREFIX . $md5, $post_data, BB_CARD_URL_TO_ID_TIMEOUT);
        return $post_data;
    }

    // Get the matching post in a subsite from its URL
    public static function get_post_data_from_url_for_blog($url)
    {
        // NOTE: If the rewrite rules for that blog are empty the wrong rewrite rules will be created when bbCard::url_to_postid() is called. We prevent that by asking the user to click on the link themselves which will create the right rules...
        if (bbCard::checkRW() == 0) {
            error_log("BB_CARD_ERROR: rewrite rules empty ({$url})");
            return [
                'post_id' => -1,
                'title' => 'Permalink Error',
                'excerpt' => 'Please first access the URL',
                'post_type' => 'post',
                'thumbnail_id' => null,
                'format' => [],
                'theme' => [],
                'topline' => null
            ];
        }

        if ($post_id = bbCard::url_to_postid($url)) {
            $post = get_post($post_id);
            $theme = [];
            $format = [];

            foreach (wp_get_post_terms($post_id, ['format', 'theme']) as $term) {
                if ($term->taxonomy == 'format') {
                    $format[] = $term->name;
                }
                if ($term->taxonomy == 'theme') {
                    $theme[] = $term->name;
                }
            }
            return [
                'post_id' => $post_id,
                'title' => $post->post_title,
                'excerpt' => $post->post_excerpt,
                'post_type' => get_post_type($post_id),
                'thumbnail_id' => get_post_thumbnail_id($post_id),
                'format' => $format,
                'theme' => $theme,
                'topline' => get_field('topline', $post_id)
            ];
        }
        return null;
    }

    // Get the matching post in a site from its blog_id and post_id
    // For use with get_template_part('blocks/card/card', ...)
    public static function get_post_data_from_args($args)
    {
        $blog_id = $args['blog_id'] ?? get_current_blog_id();
        $post_id = $args['post_id'];

        if (is_multisite()) {
            switch_to_blog($blog_id);
        }

        $post = get_post($post_id);
        $theme = [];
        $format = [];
        foreach (wp_get_post_terms($post_id, ['format', 'theme']) as $term) {
            if ($term->taxonomy == 'format') {
                $format[] = $term->name;
            } elseif ($term->taxonomy == 'theme') {
                $theme[] = $term->name;
            }
        }
        $post_type = get_post_type($post_id);
        $url = get_post_permalink($post_id);
        $thumbnail_id = get_post_thumbnail_id($post_id);
        $topline = get_field('topline', $post_id);

        if (is_multisite()) {
            restore_current_blog();
        }

        return [
            'blog_id' => $blog_id,
            'post_id' => $post_id,
            'title' => $post->post_title,
            'url' => $url,
            'excerpt' => $post->post_excerpt,
            'post_type' => $post_type,
            'format' => $format,
            'theme' => $theme,
            'topline' => $topline,
            'thumbnail_id' => $thumbnail_id
        ];
    }

    // Get featured image from any network site (also supports image from  Wikimedia Commons)
    public static function get_multisite_featured_image($blog_id, $post_id, $size, $attr, $placeholder = false)
    {
        if (is_multisite()) {
            switch_to_blog($blog_id);
        }

        $img = false;
        $wkc_image_url = get_field('wkc_featured_image_url', $post_id);

        if ($wkc_image_url && class_exists('bbWikimediaCommonsMedia') && ($data = bbWikimediaCommonsMedia::get_media($wkc_image_url))) {
            $img = "<img src=\"{$data['media_url']}\" alt=\"{$data['desc']}\" class=\" {$attr['class']}\" decoding=\"async\" srcset=\"{$data['srcset']}\">";
        } else {
            $image_id = get_post_thumbnail_id($post_id);
            $img = wp_get_attachment_image($image_id, $size, false, $attr);
        }

        if (!$img && $placeholder) {
            $img = '<img src="' . get_template_directory_uri() . '/' . $placeholder . '" class="' . $attr['class'] . '">';
        }

        if (is_multisite()) {
            restore_current_blog();
        }

        return $img;
    }

    public static function checkRW()
    {
        // Notes: this will return 0 for a new site for which no permalinks structure has been set!
        global $wpdb;
        $table = $wpdb->prefix . 'options';
        $rw = $wpdb->get_var("SELECT `option_value` FROM {$table} WHERE `option_name` = 'rewrite_rules'");

        // Check if $rw is not null before calling strlen
        return $rw !== null ? strlen($rw) : 0;
    }

    // This is a rewrite of url_to_postid with support for custom post types and with a fix/hack for posts with a parent page
    public static function url_to_postid($url)
    {
        global $wp_rewrite;
        $wp_rewrite->init();

        $nurl = apply_filters('url_to_postid', $url);
        // EL: In some cases this returns 0 and the rest of the function aborts...
        // EL: This helped get the featured images from tribe_events.
        if ($nurl !== 0) {
            $url = $nurl;
        }

        $url_host = parse_url($url, PHP_URL_HOST);
        if (is_string($url_host)) {
            $url_host = str_replace('www.', '', $url_host);
        } else {
            $url_host = '';
        }
        $home_url_host = parse_url(home_url(), PHP_URL_HOST);
        if (is_string($home_url_host)) {
            $home_url_host = str_replace('www.', '', $home_url_host);
        } else {
            $home_url_host = '';
        }
        // Bail early if the URL does not belong to this site.
        if ($url_host && $url_host !== $home_url_host) {
            return 0;
        }
        // First, check to see if there is a 'p=N' or 'page_id=N' to match against.
        if (preg_match('#[?&](p|page_id|attachment_id)=(\d+)#', $url, $values)) {
            $id = absint($values[2]);
            if ($id) {
                return $id;
            }
        }

        // Get rid of the #anchor.
        $url_split = explode('#', $url);
        $url = $url_split[0];
        // Get rid of URL ?query=string.
        $url_split = explode('?', $url);
        $url = $url_split[0];
        // Set the correct URL scheme.
        $scheme = parse_url(home_url(), PHP_URL_SCHEME);
        $url = set_url_scheme($url, $scheme);

        // Add 'www.' if it is absent and should be there.
        if (false !== strpos(home_url(), '://www.') && false === strpos($url, '://www.')) {
            $url = str_replace('://', '://www.', $url);
        }
        // Strip 'www.' if it is present and shouldn't be.
        if (false === strpos(home_url(), '://www.')) {
            $url = str_replace('://www.', '://', $url);
        }
        if (trim($url, '/') === home_url() && 'page' === get_option('show_on_front')) {
            $page_on_front = get_option('page_on_front');
            if ($page_on_front && get_post($page_on_front) instanceof WP_Post) {
                return (int) $page_on_front;
            }
        }

        // Check to see if we are using rewrite rules.
        $rewrite = $wp_rewrite->wp_rewrite_rules();
        // Not using rewrite rules, and 'p=N' and 'page_id=N' methods failed, so we're out of options.
        if (empty($rewrite)) {
            return 0;
        }
        // Strip 'index.php/' if we're not using path info permalinks.
        if (!$wp_rewrite->using_index_permalinks()) {
            $url = str_replace($wp_rewrite->index . '/', '', $url);
        }
        if (false !== strpos(trailingslashit($url), home_url('/'))) {
            // Chop off http://domain.com/[path].
            $url = str_replace(home_url(), '', $url);
        } else {
            // Chop off /path/to/blog.
            $home_path = parse_url(home_url('/'));
            $home_path = isset($home_path['path']) ? $home_path['path'] : '';
            $url = preg_replace(sprintf('#^%s#', preg_quote($home_path)), '', trailingslashit($url));
        }
        // Trim leading and lagging slashes.
        $url = trim($url, '/');
        $request = $url;
        $post_type_query_vars = [];
        foreach (get_post_types([], 'objects') as $post_type => $t) {
            if (!empty($t->query_var)) {
                $post_type_query_vars[$t->query_var] = $post_type;
            }
        }

        // EL: Add custom post types
        $post_type_query_vars_cpt = [];
        foreach (bbCard::get_all_custom_post_types() as $cpt) {
            $post_type_query_vars_cpt[$cpt] = $cpt;
        }
        $post_type_query_vars = array_merge($post_type_query_vars, $post_type_query_vars_cpt);

        // Look for matches.
        $request_match = $request;
        foreach ((array) $rewrite as $match => $query) {
            // If the requesting file is the anchor of the match,
            // prepend it to the path info.
            if (!empty($url) && $url != $request && strpos($match, $url) === 0) {
                $request_match = $url . '/' . $request;
            }
            if (preg_match("#^$match#", $request_match, $matches)) {
                if ($wp_rewrite->use_verbose_page_rules && preg_match('/pagename=\$matches\[([0-9]+)\]/', $query, $varmatch)) {
                    // This is a verbose page match, let's check to be sure about it.
                    $page = get_page_by_path($matches[$varmatch[1]]);
                    if (!$page) {
                        continue;
                    }
                    $post_status_obj = get_post_status_object($page->post_status);
                    if (!$post_status_obj->public && !$post_status_obj->protected && !$post_status_obj->private && $post_status_obj->exclude_from_search) {
                        continue;
                    }
                }
                // Got a match.
                // Trim the query of everything up to the '?'.
                $query = preg_replace('!^.+\?!', '', $query);
                // Substitute the substring matches into the query.
                $query = addslashes(WP_MatchesMapRegex::apply($query, $matches));
                // Filter out non-public query vars.
                global $wp;
                parse_str($query, $query_vars);
                $query = [];
                foreach ((array) $query_vars as $key => $value) {
                    if (in_array((string) $key, array_merge($wp->public_query_vars, bbCard::get_all_custom_post_types()), true)) {
                        $query[$key] = $value;
                        if (isset($post_type_query_vars[$key])) {
                            $query['post_type'] = $post_type_query_vars[$key];
                            $query['name'] = $value;
                        }
                    }
                }
                // Resolve conflicts between posts with numeric slugs and date archive queries.
                $query = wp_resolve_numeric_slug_conflicts($query);
                // Do the query.
                $wpquery = new WP_Query($query);
                if (!empty($wpquery->posts) && $wpquery->is_singular) {
                    return $wpquery->post->ID;
                } else {
                    // EL: If the post is still not found, search with the last past of the post path.
                    // EL: Not sure why WP has trouble finding a post that has a parent slug... had the issue with abc_posts.
                    if (isset($query['name'])) {
                        $expl = explode('/', $query['name']);
                        $query['name'] = array_pop($expl);
                        $wpquery = new WP_Query($query);
                        if (!empty($wpquery->posts) && $wpquery->is_singular) {
                            return $wpquery->post->ID;
                        }
                    }
                    return 0;
                }
            }
        }
        return 0;
    }
}
