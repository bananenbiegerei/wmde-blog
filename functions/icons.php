<?php

// FIXME: should be moved to blocks submodule?
function bb_icon($name, $classes = '')
{
	if ($name == 'none') {
		return;
	}
	$filename = get_stylesheet_directory() . "/img/icons/{$name}.svg";
	if (!file_exists($filename)) {
		return esc_html("{$name} not found");
	}

	// Read the SVG content from the file
	$svgContent = file_get_contents($filename);

	// Add role="presentation" and aria-hidden="true" attributes to the root <svg> element
	$svgContent = preg_replace('/<svg(.*?)>/i', '<svg$1 role="presentation" aria-hidden="true">', $svgContent);

	// Return the modified SVG within the <span> element
	return "<span class='bb-icon {$classes}'>{$svgContent}</span>";
}
