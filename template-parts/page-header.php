<?php if (has_post_thumbnail()): ?>
<div class="bg-gray min-h-[12rem]">
    <div class="container grid grid-cols-12">
        <div class="col-span-12 lg:col-span-10 lg:col-start-2">
            <?php get_template_part('template-parts/breadcrumbs'); ?>
            <h1 class="text-2xl lg:text-5xl my-5 my-5"><?php the_title(); ?></h1>
            <?php if (has_excerpt()): ?>
            <div class="font-alt text-xl lg:text-2xl font-normal mb-10">
                <?php echo strip_tags(get_the_excerpt()); ?>
            </div>
            <?php endif; ?>
        </div>
        <div class="col-span-12 lg:col-span-8 lg:col-start-3 relative">
            <?php get_template_part('template-parts/featured-image'); ?>
            <div class="absolute -bottom-4 left-6">
                <?php if (have_rows('call_to_actions_in_header')): ?>
                <div class="mb-10">
                    <?php while (have_rows('call_to_actions_in_header')): ?>
                    <?php the_row(); ?>
                    <?php $link = get_sub_field('link') ? get_sub_field('link') : ['title' => 'Missing Link!', 'url' => '#', 'target' => '_self']; ?>
                    <?php $color = get_sub_field('display')['color_dark'] ?? 'primary'; ?>
                    <?php $color = $color == 'default' ? 'primary' : $color; ?>
                    <div class="flex">
                        <a class="btn btn-<?= $color ?>" href="<?= esc_url($link['url']) ?>" target="<?= esc_attr($link['target']) ?>">
                            <?= esc_html($link['title']) ?>
                        </a>
                    </div>
                    <?php endwhile; ?>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
<?php else: ?>
<div class="pb-10 rounded-b-3xl">
    <div class="container grid grid-cols-12">
        <div class="col-span-12 pt-5">
            <?php get_template_part('template-parts/breadcrumbs'); ?>
            <h1><?php the_title(); ?></h1>
            <?php if (has_excerpt()): ?>
            <div class="font-alt text-xl lg:text-2xl font-normal mb-5">
                <?php the_excerpt(); ?>
            </div>
            <?php endif; ?>
            <?php if (have_rows('call_to_actions_in_header')): ?>
            <div class="">
                <?php while (have_rows('call_to_actions_in_header')): ?>
                <?php the_row(); ?>
                <?php $cta_link = get_sub_field('cta_link'); ?>
                <?php if ($cta_link): ?>
                <a class="btn " href="<?php echo esc_url($cta_link['url']); ?>" target="<?php echo esc_attr($cta_link['target']); ?>">
                    <?= bb_icon('arrow-right', 'icon-base') ?>
                    <?php echo esc_html($cta_link['title']); ?></a>
                <?php endif; ?>
                <?php endwhile; ?>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>
<?php endif; ?>
<?php get_template_part('template-parts/anchor-nav'); ?>