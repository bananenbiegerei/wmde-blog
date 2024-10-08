<?php $pid = isset($project) ? $project->ID : null; ?>

<a class="flex flex-col gap-5 h-full text-hover-effect p-5 image-hover-effect grayscale hover:grayscale-0 "
    href="<?php echo get_post_permalink($pid); ?>">

    <?php if (has_post_thumbnail($pid)): ?>
    <div class="basis-1/2">
        <div class="aspect-h-1 aspect-w-1">
            <div class="w-full h-full flex justify-center items-center">
				<img class="max-h-[160px] object-contain mx-auto my-5 mix-blend-multiply "
                src="<?= get_the_post_thumbnail_url($pid, 'medium') ?>"
                alt="<?= esc_attr(get_post_meta(get_post_thumbnail_id($pid), '_wp_attachment_image_alt', true)) ?>"
                aria-hidden="true" role="presentation">
			</div>
        </div>
    </div>
    <?php endif; ?>

    <div class="space-y-2 px-2 pb-2 basis-1/2 flex flex-col justify-end">
        <h2 class="text-2xl font-sans font-medium">
            <?= get_the_title($pid) ?>
        </h2>
        <?php if (get_field('hide_button_to_all_projects') != 1): ?>
        <div class="text-xl font-normal text-inherit">
            <p class="line-clamp-5">
                <?= strip_tags(get_the_excerpt($pid)) ?>
            </p>
        </div>
        <?php endif; ?>
    </div>
</a>
