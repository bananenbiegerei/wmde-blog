<?php

// Polyfills (provides a few functions not yet in PHP7)
require_once get_template_directory() . '/functions/polyfills.php';

// Load localization functions
// Usage: `__('my example text', BB_TEXT_DOMAIN)`
// String translations can be edited with [Poedit](https://poedit.net)
require_once get_template_directory() . '/functions/localization.php';

// Special features of theme
require_once get_template_directory() . '/functions/features.php';

// Load ACF blocks
require_once get_template_directory() . '/functions/acf-blocks.php';

// Wrap blocks with containers for page layout
require_once get_template_directory() . '/functions/containers.php';

// Load styles & scripts
require_once get_template_directory() . '/functions/enqueue-scripts.php';

// Define menu locations and menu getter
require_once get_template_directory() . '/functions/menu.php';

// Icon dispenser
require_once get_template_directory() . '/functions/icons.php';

// Excerpts
require_once get_template_directory() . '/functions/excerpts.php';

// Block converter and unsupported blocks
//require_once get_template_directory() . '/functions/block-converter.php';

// Search
require_once get_template_directory() . '/functions/search.php';

// Fixes
require_once get_template_directory() . '/functions/fixes.php';

// Blog related
require_once get_template_directory() . '/functions/comments-functions.php';
