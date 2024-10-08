<?php
if (post_password_required()) {
	return;
} ?>

<div id="comments" class="comments-area">

    <?php if (have_comments()): ?>
    <h2 class="comments-title">
        <?php _e('Kommentare'); ?>
    </h2>

    <ol class="comment-list flex flex-col gap-4 mb-12">
        <?php wp_list_comments([
        	'style' => 'ol',
        	'short_ping' => true,
        	'callback' => function ($comment, $args, $depth) {
        		?>
        <li <?php comment_class('border rounded p-4'); ?> id="li-comment-<?php comment_ID(); ?>">
            <div id="comment-<?php comment_ID(); ?>">
                <?php if ($comment->comment_approved == '0'): ?>
                <em
                    class="block bg-warning-300 p-4 rounded"><?php _e('Your comment is awaiting moderation.', BB_TEXT_DOMAIN); ?></em>
                <br />
                <?php endif; ?>
                <div class="comment-author flex gap-4 mb-4">
                    <?php printf(__('<cite class="font-bold">%s</cite>'), get_comment_author_link()); ?>
                    <div class="comment-meta text-gray-500">
                        <?php
                        printf(__('%1$s at %2$s'), get_comment_date(), get_comment_time());
                        edit_comment_link(__('(Edit)'), '  ', '');
                        ?>
                    </div>
                </div>

                <?php comment_text(); ?>

                <div class="reply mb-4">
                    <?php comment_reply_link(array_merge($args, ['depth' => $depth, 'max_depth' => $args['max_depth']])); ?>
                </div>
            </div>
        </li>
        <?php
        	}
        ]); ?>
    </ol>

    <?php if (get_comment_pages_count() > 1 && get_option('page_comments')): ?>
    <nav id="comment-nav-below" class="navigation comment-navigation" role="navigation">
        <div class="nav-previous"><?php previous_comments_link(__('&larr; Older Comments', BB_TEXT_DOMAIN)); ?></div>
        <div class="nav-next"><?php next_comments_link(__('Newer Comments &rarr;', BB_TEXT_DOMAIN)); ?></div>
    </nav>
    <?php endif; ?>

    <?php endif; ?>

    <?php // If comments are closed and there are comments, let's leave a little note

if (!comments_open() && '0' != get_comments_number() && post_type_supports(get_post_type(), 'comments')): ?>
    <p class="no-comments"><?php _e('Comments are closed.', BB_TEXT_DOMAIN); ?></p>
    <?php endif; ?>

    <?php comment_form(); ?>

</div>