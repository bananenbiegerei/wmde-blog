<?php
// needed in blog for single authors and team members
register_taxonomy('team_category', 'team', [
	'labels' => [
		'name' => __('Team sections', BB_TEXT_DOMAIN),
		'singular_name' => __('Team section', BB_TEXT_DOMAIN),
	],
	'public' => true,
	'publicly_queryable' => true,
	'hierarchical' => true,
	'show_ui' => true,
	'show_in_menu' => true,
	'show_in_nav_menus' => true,
	'query_var' => true,
	'show_admin_column' => true,
	'show_in_rest' => true,
	'show_in_quick_edit' => false,
]);
