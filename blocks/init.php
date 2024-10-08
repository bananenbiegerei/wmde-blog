<?php

//FIXME: clone library must be by default
// check lines 13 and 43

define('WMDE_BB_BLOCKS_DIR', basename(dirname(__FILE__)));
define('WMDE_BB_BLOCKS_PATH', dirname(__FILE__));

function bb_get_enabled_wmde_blocks()
{
  $blocks = [];
  if (get_field('load_all_wmde_blocks', 'options')) {
    foreach (glob(__DIR__ . '/*') as $dir) {
      $block = basename($dir);
      if (is_dir($dir)) {
        $blocks[] = $block;
      }
    }
  } else {
    $blocks = get_field('wmde_blocks_enabled', 'options');
    if ($blocks === null) {
      $blocks = [];
    }
  }
  return $blocks;
}

// Populate select field `wmde_blocks_enabled`
add_filter('acf/load_field/name=wmde_blocks_enabled', function ($field) {
  foreach (glob(__DIR__ . '/*') as $dir) {
    $block = basename($dir);
    if (is_dir($dir)) {
      $field['choices'][$block] = $block;
    }
  }
  ksort($field['choices']);
  return $field;
});

// Populate select field `wp_blocks_enabled`
add_filter('acf/load_field/name=wp_blocks_enabled', function ($field) {
  $wp_blocks = array_filter(array_keys(WP_Block_Type_Registry::get_instance()->get_all_registered()), function ($b) {
    return str_starts_with($b, 'core/');
  });
  foreach ($wp_blocks as $wp_block) {
    $field['choices'][$wp_block] = $wp_block;
  }
  ksort($field['choices']);
  return $field;
});

// Load ACF groups from the blocks directories...
add_filter('acf/settings/load_json', function ($paths) {
  $paths[] = WMDE_BB_BLOCKS_PATH;
  $paths[] = WMDE_BB_BLOCKS_PATH . '/clone-library';
  foreach (bb_get_enabled_wmde_blocks() as $block) {
    $paths[] = WMDE_BB_BLOCKS_PATH . '/' . $block;
  }
  return $paths;
});

// Register blocks
add_action('init', function () {
  foreach (bb_get_enabled_wmde_blocks() as $block) {
    register_block_type(WMDE_BB_BLOCKS_PATH . '/' . $block); // . '/block.json');
    // Each block can come with its set of functions...
    if (file_exists($function = WMDE_BB_BLOCKS_PATH . '/' . $block . '/functions.php')) {
      include_once $function;
    }
  }
});

// Each block can come with its set of functions...
add_action('init', function () {
  foreach (bb_get_enabled_wmde_blocks() as $block) {
    if (file_exists($function = WMDE_BB_BLOCKS_PATH . '/' . $block . '/functions.php')) {
      include_once $function;
    }
  }
});

// Define list of allowed block types
add_filter('allowed_block_types_all', function ($allowed_blocks) {
  // Get all registered blocks except 'core/*' blocks
  $blocks = array_filter(array_keys(WP_Block_Type_Registry::get_instance()->get_all_registered()), function ($b) {
    return !str_starts_with($b, 'core/');
  });

  if (get_field('load_all_wp_blocks', 'options')) {
    return $blocks;
  }
  $core_blocks = get_field('wp_blocks_enabled', 'options');
  if (empty($core_blocks)) {
    $core_blocks = [];
  }
  return array_merge($blocks, $core_blocks);
});

// Add custom blocks category
add_filter(
  'block_categories',
  function ($categories, $post) {
    return array_merge($categories, [
      [
      'slug' => 'wmde-custom-blocks',
      'title' => __('Custom Blocks', BB_TEXT_DOMAIN)
      ]
    ]);
  },
  10,
  2
);

// Remove fullscreen button in text editor
add_filter('acf/fields/wysiwyg/toolbars', function ($toolbars) {
  // Unset the unwanted toolbar buttons
  unset($toolbars['Basic'][1][13]);
  unset($toolbars['Full'][1][12]);

  // Add a new toolbar option
  $toolbars['WMDE'] = [];
  $toolbars['WMDE'][1] = ['bold', 'underline', 'bullist', 'numlist', 'link', 'unlink', 'removeformat']; // Add the buttons you want

  return $toolbars;
});
