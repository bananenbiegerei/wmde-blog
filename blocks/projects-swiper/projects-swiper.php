<?php
/*
  NOTES:
  - This block must not have any horizontal padding/margin. It should be full-width.
  - Padding is added to top-level div. For now: px-10.

*/
?>
<?php $id = $block['id']; ?>
<?php $swiper_bg = get_field('background') == 'white' ? 'bg-white' : 'bg-gray'; ?>
<?php $slide_bg = get_field('background') == 'white' ? 'bg-gray' : ' bg-white'; ?>

<?php if (!is_admin()): ?>
<div class="bb-projects-swiper-block mb-10 lg:mb-20 <?= $swiper_bg ?>" id="<?= $block['id'] ?>">
    <!-- Headline and Navigation -->
    <div class="flex lg:mb-5 items-center">
        <div class="grow">
            <?php if (get_field('hide_button_to_all_projects') != 1): ?>
            <h2 class="text-2xl lg:text-5xl text-primary mb-0"><?= __('Projekte', BB_TEXT_DOMAIN) ?></h2>
            <?php endif; ?>
        </div>
        <div class="relative flex space-x-2 items-center">
            <?= bb_icon('chevron-left', 'swiper-button-prev btn btn-outline cursor-pointer icon-xxl') ?>
            <?= bb_icon('chevron-right', 'swiper-button-next btn btn-outline cursor-pointer icon-xxl') ?>
        </div>
    </div>
    <a href="#after-projects-slideshow" class="sr-only focus:not-sr-only"><?php _e('Skip Project Slideshow', BB_TEXT_DOMAIN); ?></a>
    <!-- Swiper -->
    <div class="swiper-container relative lg:mb-10 -mx-5">
        <!-- Slides -->
        <div class="swiper-wrapper" style="height: unset;">
            <?php foreach (get_field('projects') as $project): ?>
            <div class="swiper-slide flex self-stretch p-5">
                <!-- Slide size defined in block SCSS -->
                <div class="rounded-2xl <?= $slide_bg ?> h-full">
                    <?php include locate_template('blocks/projects-swiper/project-card.php', false, false); ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
    <?php if (get_field('hide_button_to_all_projects') != 1): ?>
    <a id="after-projects-slideshow" class="btn btn-base btn-icon-left" href="<?php the_permalink('23'); ?>">
        <?= bb_icon('arrow-right', 'icon-base') ?>
        <?= __('Alle Projekte', BB_TEXT_DOMAIN) ?>
    </a>
    <?php endif; ?>
</div>
<script>
    // Hide the navigation arrows when not needed
    function hideProjectSwiperNavWhenNeeded() {
        let count = jQuery('#<?= $id ?> .swiper-button-disabled').length;
        if (count === 2) {
            // prettier-ignore
            jQuery('#<?= $id ?> .swiper-button-prev').hide();
            jQuery('#<?= $id ?> .swiper-button-next').hide();
        } else {
            // prettier-ignore
            jQuery('#<?= $id ?> .swiper-button-prev').show();
            jQuery('#<?= $id ?> .swiper-button-next').show();
        }
    }

    SwipersConfig['#<?= $id ?>'] = {
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: true,
        draggable: true,
        navigation: {
            // prettier-ignore
            nextEl: '#<?= $id ?> .swiper-button-next',
            prevEl: '#<?= $id ?> .swiper-button-prev',
        },
        on: {
            'init': hideProjectSwiperNavWhenNeeded
        }
    };

    window.addEventListener('resize', hideProjectSwiperNavWhenNeeded);
</script>
<?php else: ?>
<!-- Skeleton view for editor -->
<div class="<?= $swiper_bg ?>">
    <b><?= __('Projects Swiper', BB_TEXT_DOMAIN) ?></b>

    <div class="grid grid-cols-4 gap-4">
        <?php foreach (get_field('projects') as $project): ?>
        <div class="rounded-3xl p-4 <?= $slide_bg ?>">
            <?php if (has_post_thumbnail($project->ID)): ?>
            <img class="h-32 object-contain" src="<?php echo get_the_post_thumbnail_url($project->ID, 'medium'); ?>">
            <?php endif; ?>
            <p class="text-s"><?php echo $project->post_title; ?></p>
        </div>
        <?php endforeach; ?>
    </div>
    <?php endif; ?>