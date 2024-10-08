<?php

register_post_type('bonbon', [
    'labels' => [
        'name' => 'Bonbons',
        'singular_name' => 'Bonbon',
        'menu_name' => 'Bonbons',
        'all_items' => 'All Bonbons',
        'edit_item' => 'Edit Bonbon',
        'view_item' => 'View Bonbon',
        'view_items' => 'View Bonbons',
        'add_new_item' => 'Add New Bonbon',
        'new_item' => 'New Bonbon',
        'parent_item_colon' => 'Parent Bonbon:',
        'search_items' => 'Search Bonbons',
        'not_found' => 'No bonbons found',
        'not_found_in_trash' => 'No bonbons found in Trash',
        'archives' => 'Bonbon Archives',
        'attributes' => 'Bonbon Attributes',
        'insert_into_item' => 'Insert into bonbon',
        'uploaded_to_this_item' => 'Uploaded to this bonbon',
        'filter_items_list' => 'Filter bonbons list',
        'filter_by_date' => 'Filter bonbons by date',
        'items_list_navigation' => 'Bonbons list navigation',
        'items_list' => 'Bonbons list',
        'item_published' => 'Bonbon published.',
        'item_published_privately' => 'Bonbon published privately.',
        'item_reverted_to_draft' => 'Bonbon reverted to draft.',
        'item_scheduled' => 'Bonbon scheduled.',
        'item_updated' => 'Bonbon updated.',
        'item_link' => 'Bonbon Link',
        'item_link_description' => 'A link to a bonbon.'
    ],
    'public' => false,
    'show_ui' => true,
    'exclude_from_search' => true,
    'show_in_rest' => true,
    'supports' => ['title', 'editor', 'thumbnail'],
    'delete_with_user' => false,
    'show_in_menu' => false,
]);
