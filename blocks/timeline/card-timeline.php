<a data-cardindex="<?= $i++ ?>" class="child-page-link p-4 block border-[4px] border-black text-black hover:shadow-hard transition-shadow bg-wmde20-<?php echo $color; ?> relative"
    href="<?php echo $permalink; ?>">
    <?php if (!empty($thumb)): ?>
    <div class="sm:flex items-stretch h-full w-full gap-4">
        <div class="basis-1/2 order-2 mb-5 md:mb-0">
            <?php include locate_template('blocks/timeline/timeline-header.php'); ?>
            <?php include locate_template('blocks/timeline/timeline-media.php'); ?>
        </div>
        <div class="basis-1/2 order-1">
            <div class="aspect-h-1 aspect-w-1">
                <?php echo $thumb; ?>
            </div>
        </div>
    </div>
    <?php else: ?>
    <?php include locate_template('blocks/timeline/timeline-header.php'); ?>
    <?php include locate_template('blocks/timeline/timeline-media.php'); ?>
    <?php endif ?>
</a>
