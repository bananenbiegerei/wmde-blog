<?php

// Create id attribute allowing for custom "anchor" value.
$id = 'bb-wissens-bonbons-' . $block['id'];
if (! empty($block['anchor'])) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$classes = 'bb-block-wissens-bonbons';
if (! empty($block['className'])) {
    $classes .= ' ' . $block['className'];
}
if (! empty($block['align'])) {
    $classes .= ' align' . $block['align'];
}

// Card counter
$i = 0;

// Get Bonbons data
$bonbons = get_field('bonbon');
$bonbons_data = [];
foreach ($bonbons as $bonbon) {
    $bonbons_data[] = [
        'title' => get_the_title($bonbon),
        'content' => apply_filters('the_content', get_post($bonbon)->post_content),
        'color' => get_field('color_scheme', $bonbon),
        'author' => get_field('custom_author', $bonbon),
        'author_role' => get_field('custom_author_role', $bonbon),
        'author_text' => get_field('custom_author_text', $bonbon),
        'number' => get_field('bonbon_number', $bonbon),
        'image_id' =>get_field('custom_author_image', $bonbon),
        'image' => wp_get_attachment_image(get_field('custom_author_image', $bonbon), 'medium', false, ['class' => 'relative z-20 rounded-full bg-white/40 w-full h-auto']),
    ];
}
$j_bonbons_data = json_encode($bonbons_data);

// Get URLs of illustrations
$illus = json_encode(array_map(function ($f) {
    return get_stylesheet_directory_uri() . '/blocks/wissens-bonbons/illus/'. basename($f);
}, glob(__DIR__ . '/illus/wissens-bonbon-000*')));

// Import data to JS for Alpine
echo <<<EOF
<script>
    let bonbonsData = {};
    bonbonsData.bonbons = {$j_bonbons_data};
    bonbonsData.illus = {$illus};
</script>
EOF;
?>

<?php if ($bonbons) : ?>

<div id="<?php echo esc_attr($id); ?>" x-data="data">
    <div class="<?php echo esc_attr($classes); ?>">
        <!-- Headline and Navigation -->
        <div class="md:flex gap-4 lg:mb-5 items-center">
            <div class="flex-1 md:flex gap-4">
                <div>
                    <img class="" src="<?php echo get_stylesheet_directory_uri() . '/blocks/wissens-bonbons/bonbons-01.svg'; ?>" alt="plus to open dialog">
                </div>
                <div class="flex-1">
                    <h2><?php _e('Wissensbonbons', BB_TEXT_DOMAIN); ?></h2>
                    <p><?php _e('Mitarbeiter*innen und Ehrenamtliche präsentieren ihre Lieblingsprojekte', BB_TEXT_DOMAIN); ?></p>
                </div>
            </div>
            <div class="relative flex space-x-2 items-center">
                <?= bb_icon('chevron-left', 'swiper-button-prev btn btn-outline cursor-pointer icon-xxl') ?>
                <?= bb_icon('chevron-right', 'swiper-button-next btn btn-outline cursor-pointer icon-xxl') ?>
            </div>
        </div>
        <?php if (!is_admin()): ?>
        <!-- Swiper -->
        <div class="-mx-4">
            <div class="swiper relative lg:mb-10 !py-4">
                <!-- Slides -->
                <div class="swiper-wrapper" style="height: unset;">
                    <?php foreach ($bonbons as $bonbon) : ?>
                    <?php $post = is_object($bonbon) ? $bonbon : get_post($bonbon); ?>
                    <?php setup_postdata($post); ?>
                    <div class="swiper-slide px-4">
                        <!-- Width set in block scss -->
                        <div class="relative w-full block h-full transition hyphens-auto group cursor-pointer" @click.stop="open(<?= $i ?>)">
                            <?php include locate_template('blocks/wissens-bonbons/card-bonbon.php'); ?>
                        </div>
                    </div>
                    <?php $i++; ?>
                    <?php endforeach; ?>
                    <?php wp_reset_postdata(); ?>
                </div>
            </div>
        </div>
        <?php else: ?>
            <!-- Swiper -->
        <div class="-mx-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    <?php foreach ($bonbons as $bonbon) : ?>
                    <?php $post = is_object($bonbon) ? $bonbon : get_post($bonbon); ?>
                    <?php setup_postdata($post); ?>
                    <div class="px-4">
                        <!-- Width set in block scss -->
                        <div class="relative w-full block h-full transition hyphens-auto group cursor-pointer" @click.stop="open(<?= $i ?>)">
                            <?php include locate_template('blocks/wissens-bonbons/card-bonbon.php'); ?>
                        </div>
                    </div>
                    <?php $i++; ?>
                    <?php endforeach; ?>
                    <?php wp_reset_postdata(); ?>
            </div>
        </div>
        <?php endif; ?>
    </div>

    <template x-if="bonbon">
        <!-- Blurry backdrop -->
        <div class="h-screen fixed top-0 left-0 w-full bg-black/30 backdrop-blur z-[51] flex justify-center overflow-scroll">
            <div class="relative z-[52]" @click.away="close()">
                <?php include locate_template('blocks/wissens-bonbons/modal-bonbon.php'); ?>
            </div>
        </div>
    </template>
</div>

<script>
    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Prepare x-data for 'navMenuMobile' component
    document.addEventListener('alpine:init', () => {
        Alpine.data('data', () => ({
            data: bonbonsData,
            bonbon: null,
            idx: null,
            illus: [],
            init() {
                document.addEventListener('keydown', event => {
                    if (this.bonbon) {
                        if (event.code == 'ArrowRight') {
                            this.next();
                        } else if (event.code == 'ArrowLeft') {
                            this.prev();
                        } else if (event.code == 'Escape') {
                            this.close();
                        }
                    }
                });
            },
            open(id) {
                this.idx = id;
                this.bonbon = this.data.bonbons[id];
                // Stop page scrolling
                document.querySelector('body').style.overflow = 'hidden';
                // Pick 3 random illustrations
                illus = [...this.data.illus];
                shuffleArray(illus);
                this.illus[0] = illus.pop();
                this.illus[1] = illus.pop()
                this.illus[2] = illus.pop()
            },
            prev() {
                this.idx--;
                if (this.idx < 0) {
                    this.idx = this.data.bonbons.length - 1;
                }
                this.open(this.idx);
            },
            next() {
                this.idx++;
                if (this.idx >= this.data.bonbons.length) {
                    this.idx = 0;
                }
                this.open(this.idx);
            },
            close() {
                this.idx = null;
                this.bonbon = null;
                this.illus = [];
                // Restore page scrolling
                document.querySelector('body').style.overflow = 'unset'
            }
        }));
    });

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
        }
    };
</script>

<?php endif; ?>
