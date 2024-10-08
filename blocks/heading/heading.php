<?php

$bgcolor = get_field('style_bg_color_color_light');
$bgcolor = $bgcolor == 'default' ? '' : $bgcolor;
if ($bgcolor) {
    $bgcolor = "bg-{$bgcolor}";
}

$color = get_field('style_text_color_color_dark');
$color = $color == 'default' ? '' : $color;
if ($color) {
    $color = "text-{$color}";
}
$title = get_field('anchor_title');
// Replace German umlauts with their respective replacements
$umlaut_replacements = [
    'ä' => 'ae',
    'ö' => 'oe',
    'ü' => 'ue',
    'Ä' => 'Ae',
    'Ö' => 'Oe',
    'Ü' => 'Ue',
    'ß' => 'ss'
];
$title_converted = strtr($title, $umlaut_replacements);
$id = preg_replace('/[^a-zA-Z0-9_]/', '', str_replace(' ', '_', strtolower(esc_attr($title_converted))));
$headline_link = get_field('headline_link');
$hide_heading = get_field('hide');
$hide_class = "";
if ($hide_heading) {
    $hide_class = "h-[0px] overflow-hidden";
}
$style = get_field('style');
$uppercase = $style['uppercase'] ?? false;
?>


<div data-anchor-title="<?= $title ?>" class="relative bb-headline-block <?= $hide_class; ?>">
    <div class="anchor-offset" id="<?= $id ?>"></div>
    <?php if ($headline_link): ?>
    <a class="hover:underline transition underline-offset-2 decoration-1 transition" href="<?php echo $headline_link; ?>">
        <<?= get_field('level') ?> class="<?= get_field('style')['headline_size'] ?? '' ?> <?= $color ?>">
            <span class="<?= $bgcolor ?> <?= $uppercase ? 'uppercase font-bold' : '' ?>">
                <?= get_field('headline') ?>
            </span>
        </<?= get_field('level') ?>>
    </a>
    <?php else: ?>
    <<?= get_field('level') ?> class="<?= get_field('style')['headline_size'] ?? '' ?> <?= $color ?>">
        <span class="<?= $bgcolor ?> <?= $uppercase ? 'uppercase font-bold' : '' ?>">
            <?= get_field('headline') ?>
        </span>
    </<?= get_field('level') ?>>
    <?php endif; ?>
</div>
