<?php

// Automatically define text domain for theme from entry in `style.css`
// And then use: `__('my example text', BB_TEXT_DOMAIN)`
define('BB_TEXT_DOMAIN', wp_get_theme()->get('TextDomain'));

// Load languages
add_action('after_setup_theme', function () {
	load_theme_textdomain(BB_TEXT_DOMAIN, get_template_directory() . '/languages');
});
