<?php

// Add list of sites to select field
add_filter('acf/load_field/key=field_64183749b83ec', function ($field) {
	$field['choices'] = [];
	foreach (bbCard::get_sites() as $site) {
		$field['choices'][$site['blog_id'] . ''] = "{$site['title']} ({$site['blog_id']})";
	}
	return $field;
});
