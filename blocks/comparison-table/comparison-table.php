<?php
/**
 * Block template file: comparison-table.php
 *
 * Comparison Table Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'comparison-table-' . $block['id'];
if (!empty($block['anchor'])) {
	$id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$classes = 'block-comparison-table';
if (!empty($block['className'])) {
	$classes .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$classes .= ' align' . $block['align'];
}
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($classes); ?> bg-primary-50 py-16 mb-16">
    <div class="container">
        <?php if (get_field('headline')): ?>
        <h2 class="h1 mb-8"><?php echo get_field('headline'); ?></h2>
        <?php endif; ?>
        <div class="flex gap-5 overflow-x-auto">
            <?php if (have_rows('column')): ?>
            <?php while (have_rows('column')):
            	the_row(); ?>
            <div
                class="bg-white rounded-2xl shadow-2xl flex flex-col first:shadow-none first:border-none first:bg-transparent overflow-hidden min-w-[220px] lg:min-w-[320px] first:text-right mb-16 divide-y">
                <?php if (have_rows('row')): ?>
                <?php while (have_rows('row')):
                	the_row(); ?>
                <?php if (have_rows('content')): ?>
                <div>
                    <?php while (have_rows('content')):
                    	the_row(); ?>
                    <div>
                        <?php if (get_row_layout() == 'text'): ?>
                        <div class="h-12 lg:h-24 flex items-center overflow-x-auto font-bold mx-4">
                            <span class="w-full">
                                <?= get_sub_field('text'); ?>
                            </span>
                        </div>

                        <?php elseif (get_row_layout() == 'subline_text'): ?>
                        <?= get_sub_field('subline_text'); ?>
                        <?php elseif (get_row_layout() == 'image'): ?>
                        <?php $image = get_sub_field('image'); ?>
                        <?php $size = 'full'; ?>
                        <?php if ($image): ?>
                        <div class="h-12 lg:h-24 px-2 lg:px-5 flex items-center justify-center bg-gray py-2 lg:py-3">
                            <?= wp_get_attachment_image($image, $size, false, ['class' => 'w-full h-full object-contain max-h-auto lg:max-h-[44px]']) ?>
                        </div>
                        <?php endif; ?>
                        <?php elseif (get_row_layout() == 'spacer'): ?>
                        <!-- Spacer layout -->
                        <?php elseif (get_row_layout() == 'button'): ?>
                        <?php $button = get_sub_field('button'); ?>
                        <?php if ($button): ?>
                        <div class="h-12 lg:h-24 px-2 lg:px-5 flex items-center justify-center bg-gray p-1 lg:p-3">
                            <a class="btn btn-outline" href="<?php echo esc_url($button['url']); ?>"
                                target="<?php echo esc_attr($button['target']); ?>"><?php echo esc_html($button['title']); ?></a>
                        </div>
                        <?php endif; ?>
                        <?php endif; ?>
                    </div>
                    <?php
                    endwhile; ?>
                </div>
                <?php else: ?>
                <!-- No layouts found -->
                <?php endif; ?>
                <?php
                endwhile; ?>
                <?php else: ?>
                <!-- No rows found -->
                <?php endif; ?>
            </div>
            <?php
            endwhile; ?>
            <?php else: ?>
            <!-- No rows found -->
            <?php endif; ?>
        </div>
    </div>
</div>