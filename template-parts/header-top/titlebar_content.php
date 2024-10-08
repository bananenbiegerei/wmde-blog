<?php
$home_url = is_home() ? 'https://www.wikimedia.de/' : get_home_url();
$logo_big = esc_attr(get_field('logo_big', 'options') ?: get_stylesheet_directory_uri() . '/img/wikimedia-logo.svg');
$logo_small = esc_attr(get_field('logo_small', 'options') ?: get_stylesheet_directory_uri() . '/img/wikimedia-logo-mini.svg');
?>


<div class="flex w-full items-center">
    <div>
        <a href="<?= $home_url ?>" class="hidden md:block">
            <img class="logo" style="max-height: 41px" src="<?= $logo_big ?>" alt="Wikimedia Logo">
        </a>
        <a href="<?= $home_url ?>" class="block md:hidden">
            <img style="max-height: 41px" src="<?= $logo_small ?>" alt="Wikimedia Logo">
        </a>
    </div>

    <div class="flex justify-end grow gap-5">
        <ul class="flex items-center space-x-2 md:space-x-5 mb-0">
            <?php if (get_field('link_fur_spenden', 'options')): ?>
            <li>
                <a class="btn btn-error btn-outline"
                    href="<?php echo esc_url(get_field('link_fur_spenden', 'option')); ?>">
                    <?= bb_icon('heart', 'heartbeat icon-sm') ?>
                    <?php _e('donate', BB_TEXT_DOMAIN); ?>
                </a>
            </li>
            <?php endif; ?>
            <?php if (get_field('link_fur_mitmachen', 'options')): ?>
            <li class="hidden md:block">
                <a class="btn btn-ghost" href="<?php echo esc_url(get_field('link_fur_mitmachen', 'option')); ?>">
                    <?php _e('Mitmachen', BB_TEXT_DOMAIN); ?>
                </a>
            </li>
            <?php endif; ?>
            <?php
            $current_domain = $_SERVER['HTTP_HOST'];
            $excluded_domain = 'www.wikimedia.de'; // Replace with the domain where you want to hide the language switcher

            if ($current_domain !== $excluded_domain) {
                $languages = pll_the_languages(array(
                    'raw' => 1,
                    'hide_if_empty' => 1,
                    'hide_current' => 1,
                    'hide_if_no_translation' => 1,
                    'show_flags' => 0,
                ));
                if (!empty($languages)): ?>
                    <?php foreach ($languages as $lang): ?>
                        <li>
                            <a class="btn btn-ghost uppercase" href="<?php echo esc_url($lang['url']); ?>">
                                <?php echo esc_html($lang['slug']); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                <?php endif;
            }
            ?>
        </ul>
    </div>
</div>