<?php if (have_rows('social_media_links', 'option')): ?>
<ul class="list-none flex items-center -mx-3 lg:mx-0">
    <?php while (have_rows('social_media_links', 'option')):
    	the_row(); ?>
    <?php
    $link = get_sub_field('link', 'option');
    if ($link):

    	$link_url = $link['url'];
    	$link_title = $link['title'];
    	$link_target = $link['target'] ? $link['target'] : '_self';
    	?>
    <li>
        <a class="btn btn-ghost btn-sm" href="<?php echo esc_url($link_url); ?>"
            target="<?php echo esc_attr($link_target); ?>" rel="me">

            <?php
            $image = get_sub_field('icon', 'option');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            $attr = [
            	'class' => 'h-8 w-auto text-current'
            ];
            if ($image) {
            	echo wp_get_attachment_image($image, $size, false, $attr);
            }
            ?>

            <span class="sr-only"><?php echo esc_html($link_title); ?></span>
        </a>
    </li>
    <?php
    endif;
    ?>
    <?php
    endwhile; ?>
</ul>
<?php endif; ?>
