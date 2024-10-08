<div class="flex flex-col space-y-3 @container/eventscard">
    <a href="<?php the_permalink(); ?>">
    <div class="aspect-w-4 aspect-h-3">
        <?php the_post_thumbnail('medium', array('class' => 'object-cover w-full h-full rounded-xl'));?>
    </div>
    </a>
    <div>
        <div class="topline">
            <?php echo tribe_get_start_date($event_id, false, 'j. F'); ?>
        </div>
        <div class="text-sm">
            <?php echo $event_time_start; ?> — <?php echo $event_time_end; ?>
        </div>
    </div>
    <h4 class="text-base">
        <a href="<?php the_permalink(); ?>">
            <?php the_title(); ?>
        </a>
    </h4>
</div>