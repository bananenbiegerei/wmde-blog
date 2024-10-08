<div class="bb-logo-graveyard-block @container/logos" id="<?= $block['id'] ?>">
    <div class="grid grid-cols-1
    @lg/logos:grid-cols-3
    @xl/logos:grid-cols-4
    @3xl/logos:grid-cols-4
    @4xl/logos:grid-cols-5
    gap-5 mb-10 lg:mb-20">
        <?php if (have_rows('logo_gallery')): ?>
            <?php while (have_rows('logo_gallery')): ?>
            <?php the_row(); ?>
            <div class="logo-item">
                <?php if ($link = get_sub_field('link')): ?>
                <a class="" href="<?= esc_url($link['url']) ?>" target="<?= esc_attr($link['target']) ?>">
                    <div class="p-3 bg-gray rounded-xl overflow-hidden">
                        <div class="aspect-w-4 aspect-h-3">
                            <?= wp_get_attachment_image(get_sub_field('logo'), 'full', '', ['class' => 'object-contain w-full h-full']) ?>
                        </div>
                    </div>
                </a>
                <?php else: ?>
                <div class="p-3 bg-gray rounded-xl overflow-hidden">
                    <div class="aspect-w-4 aspect-h-3">
                        <?= wp_get_attachment_image(get_sub_field('logo'), 'full', '', ['class' => 'object-contain w-full h-full']) ?>
                    </div>
                </div>
                <?php endif; ?>
            </div>
            <?php endwhile; ?>
        <?php else: ?>
            <?php if (is_admin()): ?>
                <div class="border rounded p-5 col-span-full">
                    <p>
                    <?php _e('No logos found in the logo gallery. Please add some logos.', 'text-domain'); ?>
                    </p>
                </div>
            <?php endif; ?>
        <?php endif; ?>
    </div>
</div>