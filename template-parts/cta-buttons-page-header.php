<?php if (have_rows('call_to_actions_in_header')): ?>
<?php while (have_rows('call_to_actions_in_header')):
	the_row(); ?>
<?php $link = get_sub_field('link'); ?>
<?php if ($link): ?>
<a class="btn btn-secondary" href="<?php echo esc_url($link['url']); ?>"
    target="<?php echo esc_attr($link['target']); ?>"><?php echo esc_html($link['title']); ?></a>
<?php endif; ?>
<?php
endwhile; ?>
<?php endif; ?>