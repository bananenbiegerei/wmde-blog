<div class="bb-gallery-swiper-block" id="<?= $block['id'] ?>">
    <div class="flex items-center">
        <?php if (!is_admin()): ?>
        <div class="bb-gallery-swiper-block" id="<?= $block['id'] ?>">
            <div class="flex items-center">
                <div class="grow">
                    <h2 class="text-primary">
                        <?= esc_html(get_field('headline')) ?>
                    </h2>
                </div>
                <div class="relative flex space-x-2 items-center">
                    <?= bb_icon('chevron-left', 'swiper-button-prev btn  btn-ghost cursor-pointer icon-xxl') ?>
                    <div class="swiper-pagination inline-block text-3xl  align-middle mx-2"></div>
                    <?= bb_icon('chevron-right', 'swiper-button-next btn  btn-ghost cursor-pointer icon-xxl') ?>
                </div>
            </div>
            <div class="swiper-container relative">
                <div class="swiper-wrapper">
                    <?php foreach (get_field('images') as $image): ?>
                    <div class="swiper-slide" style="height:unset;">
                        <?php get_template_part('blocks/image/image', null, ['image' => $image, 'rounded' => true, 'size' => 'medium' ]); ?>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <script>
        SwipersConfig['#<?php echo $block['id']; ?>'] = {
            slidesPerView: 1,
            loop: true,
            autoHeight: true,
            pagination: {
                el: '#<?php echo $block['id']; ?> .swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '#<?php echo $block['id']; ?> .swiper-button-next',
                prevEl: '#<?php echo $block['id']; ?> .swiper-button-prev',
            },
        };
        </script>
        <?php else: ?>
        <div>
            <h2 class="text-primary">
                <?= esc_html(get_field('headline')) ?>
            </h2>
            <div class="grid grid-cols-4 gap-5">
                <?php foreach (get_field('images') as $image): ?>
                <?php get_template_part('blocks/image/image', null, ['image' => $image, 'rounded' => true]); ?>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endif; ?>
    </div>
</div>