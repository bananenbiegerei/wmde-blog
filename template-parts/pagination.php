<div class="flex items-center justify-between border-t border-gray-200 bg-white py-3">
        <div class="flex flex-1 justify-between sm:hidden">
            <?php previous_posts_link('Previous'); ?>
            <?php next_posts_link('Next'); ?>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between sm:items-center">
            <div>
                <p class="text-sm text-primary">
                    <?php _e('Zeigt', BB_TEXT_DOMAIN); ?>
                    <span
                        class="font-medium"><?php echo (($wp_query->query['paged'] ?? 1) - 1) * $wp_query->post_count + 1; ?></span>
                    <?php _e('bis', BB_TEXT_DOMAIN); ?>
                    <span
                        class="font-medium"><?php echo (($wp_query->query['paged'] ?? 1) - 1) * $wp_query->post_count + $wp_query->post_count; ?></span>
                    <?php _e('von', BB_TEXT_DOMAIN); ?>
                    <span class="font-medium"><?php echo $wp_query->found_posts; ?></span>
                    <?php _e('Artikeln', BB_TEXT_DOMAIN); ?>
                </p>
            </div>
            <div>
                <?php
                $big = 999999999;
                $args = [
                	'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                	'format' => '?paged=%#%',
                	'current' => max(1, get_query_var('paged')),
                	'total' => $wp_query->max_num_pages,
                	'type' => 'array',
                	'prev_text' =>
                		'<span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"/></svg>',
                	'next_text' =>
                		'<span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"/></svg>',
                	'prev_next' => true,
                	'show_all' => false,
                	'end_size' => 1,
                	'mid_size' => 2
                ];

                $links = paginate_links($args);

                if (!empty($links)) {
                	echo '<ul class="pagination">';
                	foreach ($links as $link) {
                		echo '<li class="">' . $link . '</li>';
                	}
                	echo '</ul>';
                }
                ?>
            </div>
        </div>
    </div>