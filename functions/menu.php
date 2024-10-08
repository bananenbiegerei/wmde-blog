<?php

/* Menus
  In this theme the content main menu will always be fetched from the main site.

  FIXME: Add an option to disable defaulting to menu from main site? ($use_main is confusing too...)
*/

define('BB_NAV_MENU_FEATURED', 'Featured');
define('BB_NAV_MENU_CACHE', 'bb_nav_menu_');
define('BB_NAV_MENU_CACHE_TIMEOUT', 72 * HOUR_IN_SECONDS);

// Register navigation menus
add_action('init', function () {
    $locations = [
      'nav' => 'Top Navigation Menu',
      'footer' => __('Footer', BB_TEXT_DOMAIN)
    ];
    register_nav_menus($locations);
});


// Replace menu editor with notice to edit menu on the main site
add_action(
    'admin_enqueue_scripts',
    function () {
        if (is_multisite() && get_current_blog_id() != 1 && get_field('sync_menus', 'options')) {
            wp_register_script('bb-admin', false, false, false, true);
            wp_enqueue_script('bb-admin');
            $script = "jQuery('.wp-admin.nav-menus-php .wrap').html('<div class=\"wrap\"><h2>Menus</h2><p>" . __('Please edit the menus on the <a href="' . network_site_url() . 'wp-admin/nav-menus.php">main site</a>.', BB_TEXT_DOMAIN)   .   "</p></div>');";
            wp_add_inline_script('bb-admin', $script);
        }
    }
);


// Get the menus from the main site (used for the footer menu)
function bb_wp_nav_menu($args)
{
    if (is_multisite() && get_current_blog_id() != 1 && get_field('sync_menus', 'options')) {
        switch_to_blog(1);
    }

    wp_nav_menu($args);

    if (is_multisite() && get_current_blog_id() != 1 && get_field('sync_menus', 'options')) {
        restore_current_blog();
    }
}

// Get menu data in a JSON structure for the nav top dropdown menu
function bb_get_nav_menu($location = 'nav')
{

    // Return cached value, except for editors (Polylang pro makes a lot of DB queries!)
    $cached = get_transient(BB_NAV_MENU_CACHE . $location);
    if ($cached && !current_user_can('edit_posts')) {
        return $cached;
    }

    $switched = false;
    if (is_multisite() && get_current_blog_id() != 1 && get_field('sync_menus', 'options')) {
        switch_to_blog(1);
        $switched = true;
    }

    $menu = wp_get_nav_menu_name($location);

    if ($menu === '') {
        if ($switched) {
            restore_current_blog();
        }
        return [];
    }

    $nav = [];
    $featured_id = null;
    $section_title_id = ['title' => null, 'id' => null];
    $menu_array = wp_get_nav_menu_items($menu);
    $menu_item_IDs = array_map(function ($a) {
        return $a->ID;
    }, $menu_array);

    foreach ($menu_array as $m) {
        if (empty($m->menu_item_parent) || !in_array($m->menu_item_parent, $menu_item_IDs)) {
            // If item has no parent, then it's a domain (top-level)
            $domain = new stdClass();
            $domain->ID = intval($m->object_id);
            $domain->title = $m->title;
            $domain->url = $m->url;
            $domain->excerpt = wp_strip_all_tags(get_the_excerpt($m->object_id), true);
            $domain->featured = [];
            $domain->pages = [];
            $domain->t_sections = [];
            $domain->children = [];
            $nav[] = $domain;
        } elseif ($m->title == BB_NAV_MENU_FEATURED) {
            // If the title is BB_NAV_MENU_FEATURED, the next items will be featured pages
            $featured_id = $m->ID;
        } elseif ($m->url == '#') {
            // If the url is '#' it's a section title
            $section_title_id = ['title' => $m->title, 'id' => $m->ID];
            $domain->t_sections["{$m->title}***{$m->ID}"] = [];
        } else {
            // Otherwise it's a normal page
            $page = new stdClass();
            $page->ID = intval($m->object_id);
            $page->title = $m->title;
            $page->url = $m->url;
            $page->domain_id = $domain->ID;
            $domain->children[] = $page->ID;
            if ($m->menu_item_parent == $featured_id) {
                // If it's a featured page, add it to the domain's featured pages
                $page->excerpt = wp_strip_all_tags(get_the_excerpt($m->object_id), true);
                $page->thumbnail = get_the_post_thumbnail_url($m->object_id, 'medium');
                // Projects can have a logo ACF (logo w/o logotype)
                if ($logo = get_field('logo', $page->ID)) {
                    $page->logo = wp_get_attachment_url($logo);
                }
                $domain->featured[] = $page;
            } elseif ($m->menu_item_parent == $section_title_id['id']) {
                // If it's part of a section, add it to the current section
                $domain->t_sections["{$section_title_id['title']}***{$section_title_id['id']}"][] = $page;
            } else {
                // Otherwise it's a normal page of that domain
                $domain->pages[] = $page;
            }
        }
    }
    foreach ($nav as $domain) {
        $domain->sections = [];
        foreach ($domain->t_sections as $title => $section) {
            $s = new stdClass();
            $s->title = explode('***', $title)[0];
            $s->pages = $section;
            $domain->sections[] = $s;
        }
        unset($domain->t_sections);
    }

    if ($switched) {
        restore_current_blog();
    }

    set_transient(BB_NAV_MENU_CACHE . $location, $nav, BB_NAV_MENU_CACHE_TIMEOUT);
    return $nav;
}

function is_current_menu($id)
{
    global $post;
    echo $post->ID == get_post_meta(intval($id), '_menu_item_object_id', true) ? 'current' : '';
}

// Delete cache when editing menu
add_action('save_post_nav_menu_item', function ($post_id, $post) {
    foreach (get_nav_menu_locations() as $location => $id) {
        delete_transient(BB_NAV_MENU_CACHE . $location);
    }
}, 10, 2);

// Cleanup output of wp_nav_menu() (used only for screen readers)
add_filter('nav_menu_item_id', '__return_null', 10, 3);
add_filter('nav_menu_css_class', '__return_empty_array', 10, 3);
add_filter('nav_menu_submenu_css_class', '__return_empty_array', 10, 3);

// Accessible menu walker
class Aria_Walker_Nav_Menu extends Walker_Nav_Menu
{
    /**
     * Start the element output.
     *
     * @see Walker_Nav_Menu::start_el() for parameters and longer explanation
     */
    public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
    {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';

        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;

        /**
         * Filter the arguments for a single nav menu item.
         */
        $args = apply_filters('nav_menu_item_args', $args, $item, $depth);

        /**
         * Filter the CSS class(es) applied to a menu item's list item element.
         */
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args, $depth));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';

        /**
         * Filter the ID applied to a menu item's list item element.
         */
        $id = apply_filters('nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args, $depth);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';

        $output .= sprintf(
            '%s<li%s%s%s>',
            $indent,
            $id,
            $class_names,
            ' aria-label="' . esc_attr($item->title) . '"'
        );

        $atts = array();
        $atts['title']  = ! empty($item->attr_title) ? $item->attr_title : '';
        $atts['target'] = ! empty($item->target) ? $item->target : '';
        $atts['rel']    = ! empty($item->xfn) ? $item->xfn : '';
        $atts['href']   = ! empty($item->url) ? $item->url : '';

        /**
         * Filter the HTML attributes applied to a menu item's anchor element.
         */
        $atts = apply_filters('nav_menu_link_attributes', $atts, $item, $args, $depth);

        $attributes = '';
        foreach ($atts as $attr => $value) {
            if (! empty($value)) {
                $value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }

        /** This filter is documented in wp-includes/post-template.php */
        $title = apply_filters('the_title', $item->title, $item->ID);

        /**
         * Filter a menu item's title.
         */
        $title = apply_filters('nav_menu_item_title', $title, $item, $args, $depth);

        $item_output = '<a'. $attributes .'>' . $title . '</a>';

        // $item_output = $args->before;
        // $item_output .= '<a'. $attributes .'>';
        // $item_output .= $args->link_before . $title . $args->link_after;
        // $item_output .= '</a>';
        // $item_output .= $args->after;

        /**
         * Filter a menu item's starting output.
         */
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}
