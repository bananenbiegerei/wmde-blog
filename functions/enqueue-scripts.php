<?php

// Site scripts and style
add_action(
    'wp_enqueue_scripts',
    function () {
        // Site javascript, loaded with defer
        wp_enqueue_script('site', get_template_directory_uri() . '/js/site.js', ['jquery'], '', ['in_footer' => true, 'strategy' => 'defer']);
        // Allow easy editing of post with `CTLR-E`
        if (current_user_can('edit_post', get_the_ID())) {
            $post_edit_url = get_edit_post_link(get_the_ID(), '&');
            $script = <<<EOF
			var postEditURL = "$post_edit_url";
			document.addEventListener('keydown', function (event) {
			event = event || window.event;
			if(event.key == 'e' && event.ctrlKey) { window.open(postEditURL, '_blank'); }
			});
			EOF;
            wp_add_inline_script('site', $script);
        }

        // Threaded comment reply styles.
        if (is_singular() && comments_open() && get_option('thread_comments')) {
            wp_enqueue_script('comment-reply');
        }

        // Site style
        $fileDate = filemtime(get_template_directory() . '/css/site.css');
        // wp_enqueue_style('style', get_template_directory_uri() . '/css/site.css', [], '', 'all');
        wp_enqueue_style('style', get_template_directory_uri() . '/css/site.css', array(), $fileDate);
    },
    999
);

// Editor style and script: only enqueue if editing a post
add_action(
    'admin_enqueue_scripts',
    function () {
        global $pagenow;
        if ($pagenow == 'post.php' || $pagenow == 'post-new.php') {
            wp_enqueue_script('editor-addon', get_template_directory_uri() . '/js/editor.js', ['jquery', 'acf-input'], '', false);
            wp_enqueue_style('editor-wmde', get_template_directory_uri() . '/css/editor.css', [], '', 'all');
        }
    },
    999
);