<?php

// Declare Team CPT only on main site
if (!is_multisite() || get_current_blog_id() === 1) {
    register_post_type('team', [
      'labels' => [ 'name' => __('Team Members', BB_TEXT_DOMAIN), 'singular_name' => __('Team Member', BB_TEXT_DOMAIN), ],
      'public' => false,
      'show_ui' => true,
      'has_archive' => false,
      'supports' => ['title', 'thumbnail'],
      'show_in_rest' => true,
      'menu_icon' => 'dashicons-groups',
      'show_in_menu' => false,
    ]);
}

// Declare single template
add_filter('single_template', function ($single_template) {
    if (is_singular('team')) {
        $single_template = __DIR__ . '/single-team.php';
    }
    return $single_template;
});


/*
  class bbTeamMember
  - ID
  - name
  - details
  - photo_url: url of the portrait photo
  - phone
  - email
  - label_for_related_project
  - related_project
  - related_project_ext
*/
class bbTeamMember
{
    // Usage: `new bbTeamMember([ 'id'=> 23132])` or `new bbTeamMember([ 'name'=> 'User Name'])`
    // `id` is not the WP user ID but the ID of the Team Member post for a user
    public function __construct($args)
    {
        $this->default_bg_color = 'default';
        $this->placeholder_url = esc_url(get_template_directory_uri() . '/' . WMDE_BB_BLOCKS_DIR . '/team-members/placeholder.svg');
        $this->photo_size = 'medium';
        $this->bg_color_class = '';

        // If it's a multisite, look for info on the main site
        // NOTE: should be configurable?
        if (is_multisite()) {
            switch_to_blog(1);
        }

        $args['name'] = trim($args['name'] ?? null);
        $args['id'] = intval($args['id'] ?? null);

        if ($args['name'] === '' && $args['id'] === 0) {
            if (is_multisite()) {
                restore_current_blog();
            }
            return false;
        }

        $query_args = [
          'post_type' => 'team',
          'posts_per_page' => 1,
        ];
        if ($args['name'] !== '') {
            $query_args['s'] = $args['name'];
        }
        if ($args['id'] !== 0) {
            $query_args['p'] = $args['id'];
        }

        // Look for team member using id or name
        $query = new WP_Query($query_args);

        if ($query->posts) {
            // If there's a match create an object and give it the details
            $this->ID = $query->posts[0]->ID;
            $this->name = $query->posts[0]->post_title;

            // Keep only an exact match of the name
            if ($args['name'] !== '' && $args['name'] !== $this->name) {
                $this->ID = false;
                if (is_multisite()) {
                    restore_current_blog();
                }
                return false;
            }

            // Photo
            $this->photo_url = get_the_post_thumbnail_url($this->ID, 'full');

            // Team Category Color
            $this->bg_color_class = 'bg-' . $this->default_bg_color;
            if ($terms = get_the_terms($this->ID, 'team_category')) {
                $term_id = $terms[0]->term_id;
                $this->bg_color_class = 'bg-' . (get_field('team_section_color', 'team_category_' . $term_id) ?: $this->default_bg_color);
            }

            // Details
            $this->details = get_field('details', $this->ID);
            $this->email = get_field('email', $this->ID);
            $this->phone = get_field('phone', $this->ID);

            // Projects
            $this->label_for_related_project = get_field('label_for_related_project', $this->ID);
            $this->related_project = get_field('related_project', $this->ID) ? get_field('related_project', $this->ID) : [];
            $this->related_project_ext = [];
            while (have_rows('related_project_ext', $this->ID)) {
                the_row();
                $this->related_project_ext[get_sub_field('title')] = get_sub_field('link');
            }
        } elseif (isset($args['name'])) {
            // Else if we're looking via their name, return a profile with minimal information
            // This is useful for post custom authors
            $this->name = $args['name'];
            $this->ID = null;
            $this->photo_url = $this->placeholder_url;
        }

        wp_reset_postdata();

        if (is_multisite()) {
            restore_current_blog();
        }
    }

    // Get the team member portrait
    public function get_photo($classes = '')
    {
        if (is_multisite()) {
            switch_to_blog(1);
        }

        // Portrait Photo or Placeholder
        $photo = get_the_post_thumbnail($this->ID, $this->photo_size, ['class' => "{$classes} {$this->bg_color_class}"]);
        if (!$this->ID || !$photo) {
            $photo_url = $this->placeholder_url;
            $photo = "<img src='{$photo_url}' class='{$classes} {$this->bg_color_class}'>";
        }

        if (is_multisite()) {
            restore_current_blog();
        }

        return $photo;
    }
}

// Change Team Category checkboxes to radio buttons and remove "Add category" button
add_action('admin_enqueue_scripts', function () {
    wp_add_inline_script(
        'editor-addon',
        "jQuery(document).ready(function($) {
  jQuery(\"#taxonomy-team_category input[type='checkbox']\").each(function(){ this.type = 'radio'; });
  jQuery(\"#team_category-adder\").remove();
  });"
    );
});
