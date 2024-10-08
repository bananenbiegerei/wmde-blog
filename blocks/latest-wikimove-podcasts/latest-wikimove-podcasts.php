<?php
$button_group_value = get_field('amount');
if ($button_group_value == 'all') {
	$numberpost = '-1';
} elseif ($button_group_value == 'specific number') {
	$specific_post_number = get_field('specific_amount');
	$numberpost = $specific_post_number;
}
$podcasts = get_posts(['post_type' => 'podcast', 'numberposts' => $numberpost, 'orderby' => 'date', 'order' => 'DESC']);
?>
<div class="bb-latest-wikimove-podcasts-block mb-10 lg:mb-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-10">
        <?php foreach ($podcasts as $p): ?>
        <a href="<?= get_the_permalink($p->ID) ?>">
            <div class="flex flex-col rounded-3xl mb-5 -mx-2 p-2 bg-white z-10 hover:z-20">
                <div class="rounded-xl basis-2/3 mb-4 overflow-hidden">
                    <?php if ($post_thumbnail = get_the_post_thumbnail($p->ID, 'medium', ['class' => 'w-full h-auto rounded-xl w-auto drop-shadow-xl'])): ?>
                    <div class="aspect-w-1 aspect-h-1 overflow-hidden">
                        <div class="flex flex-col items-center justify-center">
                            <?= $post_thumbnail ?>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
                <div class="text-left">
                    <h2 class="topline"><?= $p->post_title ?></h2>
                    <p class="text-xl  font-normal text-inherit line-clamp-3">
                        <?= wp_trim_words(get_the_excerpt($p->ID), 99, '...') ?>
                    </p>
                </div>
            </div>
        </a>
        <?php endforeach; ?>
    </div>
</div>