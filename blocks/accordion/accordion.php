<?php $alpine_data = (!$is_preview) ? 'x-data="{open: false}"' : ''; ?>

<div class="bb-accordion-block mb-14 mt-4">
    <ul>
        <?php while (have_rows('acfb_add_accordion')): ?>
        <?php the_row(); ?>
        <li>
            <details>
                <summary class="p-3 lg:p-6 font-alt text-base lg:text-xl cursor-pointer border-b-2 border-black  ">
                    <div <?= $alpine_data; ?> class="flex gap-5 items-center">
                        <div class="flex-1" @click="open = !open"><?php echo esc_html(get_sub_field('acfb_accordion_title')); ?></div>
                        <div class="font-normal text-3xl text-center " x-show="!open">
                            +
                        </div>
                        <div class="font-normal text-3xl" x-show="open">
                            -
                        </div>
                    </div>
                </summary>
                <div class="accordion-content p-6 text-xs lg:text-base">
                    <?php the_sub_field('acfb_accordion_content'); ?>
                </div>
            </details>
        </li>
        <?php endwhile; ?>
    </ul>
</div>