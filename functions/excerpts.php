<?php
// Length and Read More for pages
function custom_excerpt_length( $length ) {
	global $post;
	if ( 'page' == get_post_type( $post ) ) {
		return 20; // Change this number to set your desired excerpt length for the custom post type
	}
	return $length;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

// Read More
function custom_excerpt_more( $more ) {
	global $post;
	if ( 'page' == get_post_type( $post ) ) {
		return '<a class="link" href="'. get_permalink( $post->ID ) . '">…</a>';
	}
	return $more;
}
add_filter( 'excerpt_more', 'custom_excerpt_more' );
