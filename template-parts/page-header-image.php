<?php
$img_vertical_position = get_field('header_image_position_vertical');
$img_horizontal_position = get_field('header_image_position_horizontal');
$img_position = 'object-' . $img_horizontal_position . '-' . $img_vertical_position;
?>
<div
    class="nohover:mt-12 rounded-bl-xl rounded-br-xl bg-gray-light mb-10 h-auto lg:h-[30rem] rounded-bl-xl rounded-br-xl overflow-hidden relative text-white">
    <div class="container py-5 lg:py-10 grid grid-cols-1 content-between h-full">
        <div class="mb-10">
            <?php $page_logo = get_field('page_logo'); ?>
            <?php $size = 'full'; ?>
            <?php if ($page_logo): ?>
            <?php echo wp_get_attachment_image($page_logo, $size, false, ['class' => 'max-w-[160px] lg:max-w-xs h-auto max-h-[80px] lg:max-h-44 w-auto']); ?>
            <?php endif; ?>
        </div>
        <div class="">
            <h1 class="z-10 relative"><?php the_title(); ?></h1>
            <?php if (has_excerpt()): ?>
            <div class="font-alt text-xl lg:text-2xl font-normal mb-5">
                <?php the_excerpt(); ?>
            </div>
            <?php endif; ?>
            <?php get_template_part('template-parts/cta-buttons-page-header'); ?>
        </div>
    </div>
    <?php if (has_post_thumbnail()) { ?>
    <div class="absolute top-0 left-0 w-full h-full -z-10 bg-red-500">
        <?php the_post_thumbnail('full', ['class' => 'object-cover bg-yellow-300 w-full h-full ' . $img_position]); ?>
    </div>
    <?php } ?>
</div>
<?php get_template_part('template-parts/anchor-nav'); ?>
