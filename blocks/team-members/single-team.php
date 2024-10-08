<?php get_header(); ?>
<?php while (have_posts()): ?>
<?php the_post(); ?>

<div class="pb-10 bg-gray rounded-b-3xl">
    <div class="container grid grid-cols-12">
        <div class="col-span-12 pt-5">
            <?php get_template_part('template-parts/breadcrumbs'); ?>
            <h1><?php the_title(); ?></h1>
            <?php if (has_excerpt()): ?>
            <div class="font-alt text-2xl font-normal mb-5">
                <?php the_excerpt(); ?>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>

<div class="content pt-10">
    <div class="grid grid-cols-2 gap-10 container">
        <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl">
            <figure class="w-full w-full">
                <?php the_post_thumbnail('large', ['class' => 'rounded-xl object-cover w-full h-full overflow-hidden']); ?>
                <?php if (bbWikimediaCommonsMedia::has_post_thumbnail_caption()): ?>
                <figcaption class="invisible flex absolute left-0 bottom-0 right-0 text-white bg-gray-900 w-auto h-auto z-20 p-2 text-sm flex items-start gap-4 break-all">
                    <?= bb_icon('info', 'flex-shrink-0') ?> <div class="self-center"><?php the_post_thumbnail_caption(); ?></div>
                </figcaption>
                <?php endif; ?>
            </figure>
        </div>

        <div class="flex flex-col divide-y divide-gray-300">
            <?php if (get_field('email')): ?>
            <div class="py-2">
                <a class="link" href="mailto:<?php echo esc_attr(get_field('email')); ?>"><?php echo esc_attr(get_field('email')); ?></a>
            </div>
            <?php endif; ?>
            <?php if (get_field('phone')): ?>
            <div class="py-2">
                <a class="link" href="tel:<?php echo esc_attr(get_field('phone')); ?>"><?php echo esc_attr(get_field('phone')); ?></a>
            </div>
            <?php endif; ?>
            <?php if (get_field('details')): ?>
            <div class="py-2">
                <?php echo get_field('details'); ?>
            </div>
            <?php endif; ?>
            <?php $related_project = get_field('related_project'); ?>
            <?php if ($related_project) : ?>
            <div class="py-2">
                <?php if (get_field('label_for_related_project')): ?>
                <div>
                    <?php echo get_field('label_for_related_project'); ?>
                </div>
                <?php endif; ?>
                <?php foreach ($related_project as $post) : ?>
                <?php setup_postdata($post); ?>
                <a class="link" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                <?php endforeach; ?>
                <?php wp_reset_postdata(); ?>
            </div>
            <?php endif; ?>

        </div>
    </div>
    <?php the_content(); ?>
</div>
<?php endwhile; ?>
<?php get_footer(); ?>