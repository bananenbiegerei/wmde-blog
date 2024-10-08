<?php

// Fixes for stuff that went wrong during the big block conversion...


function str_replace_first($search, $replace, $subject)
{
  $search = '/'.preg_quote($search, '/').'/';
  return preg_replace($search, $replace, $subject, 1);
}

// Some paragraphs ended up with duplicate content
add_filter('the_content', function ($content) {
  // Break down content in blocks
  $content_a = explode("\n", $content);
  $new_content_a = [];

  foreach ($content_a as $block) {
    if (str_contains($block, "<!-- wp:acf/paragraph")) {
      // Extract the paragraph text from the block
      $txt = preg_replace('/<!-- wp:acf\/paragraph {"name":"acf\/paragraph","data":{"(field_6332e57c9e5c2|paragraph)":"/', '', $block);
      $txt = preg_replace('/","(field|_paragraph).*?\/-->/', '', $txt);
      // Break it down in chunks
      $bb = explode('\n\n', $txt);
      // Check if there are repeating paragraphs
      for ($i = 1; $i < count($bb); $i++) {
        if ($bb[$i-1] == $bb[$i]) {
          $block = str_replace_first($bb[$i], "", $block);
        }
      }
    }
    $new_content_a[] = $block;
  }
  // Repack content
  $new_content = join("\n\n", $new_content_a);
  return $new_content;
}, 1);
