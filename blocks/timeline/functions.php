<?php

register_post_type('timeline-item', [
    'labels' => [
        'name' => 'Timeline Items',
        'singular_name' => 'Timeline Item',
        'menu_name' => 'Timeline Items',
        'all_items' => 'All Timeline Items',
        'edit_item' => 'Edit Timeline Item',
        'view_item' => 'View Timeline Item',
        'view_items' => 'View Timeline Items',
        'add_new_item' => 'Add New Timeline Item',
        'new_item' => 'New Timeline Item',
        'parent_item_colon' => 'Parent Timeline Item:',
        'search_items' => 'Search Timeline Items',
        'not_found' => 'No timeline items found',
        'not_found_in_trash' => 'No timeline items found in Trash',
        'archives' => 'Timeline Item Archives',
        'attributes' => 'Timeline Item Attributes',
        'insert_into_item' => 'Insert into timeline item',
        'uploaded_to_this_item' => 'Uploaded to this timeline item',
        'filter_items_list' => 'Filter timeline items list',
        'filter_by_date' => 'Filter timeline items by date',
        'items_list_navigation' => 'Timeline Items list navigation',
        'items_list' => 'Timeline Items list',
        'item_published' => 'Timeline Item published.',
        'item_published_privately' => 'Timeline Item published privately.',
        'item_reverted_to_draft' => 'Timeline Item reverted to draft.',
        'item_scheduled' => 'Timeline Item scheduled.',
        'item_updated' => 'Timeline Item updated.',
        'item_link' => 'Timeline Item Link',
        'item_link_description' => 'A link to a timeline item.'
    ],
    'public' => true,
    'exclude_from_search' => false,
    'show_in_rest' => true,
    'supports' => ['title', 'editor', 'thumbnail'],
    'delete_with_user' => false,
    'show_in_menu' => false,
]);

// Declare single template for timeline-item
add_filter('single_template', function ($single_template) {
    if (is_singular('timeline-item')) {
        $single_template = __DIR__ . '/single-timeline-item.php';
    }
    return $single_template;
});
