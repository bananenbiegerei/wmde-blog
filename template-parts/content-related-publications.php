<div class="flex flex-col space-y-3 @container/eventscard text-center">
    <?php if (has_post_thumbnail()) { ?>
    <a href="<?php the_permalink(); ?>">
        <div class="aspect-w-4 aspect-h-3">
            <div class="flex justify-center items-center">
                <?php the_post_thumbnail('medium', ['class' => 'object-contain max-h-[140px] max-w-[140px] w-full h-full rounded-xl']); ?>
            </div>
        </div>
    </a>
    <?php } ?>
    <div>
        <div class="topline">
            <?php the_title(); ?>
        </div>
    </div>
    <?php if ($pdf = get_field('pdf')): ?>
    <div>
        <a href=" <?= $pdf ?>" class="btn btn-xs btn-outline ">
            <?= bb_icon('arrow-down', 'icon-xs') ?> <?php _e('Download', BB_TEXT_DOMAIN); ?>
        </a>
    </div>
    <?php endif; ?>
</div>