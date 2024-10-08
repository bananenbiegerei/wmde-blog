<?php

// Add parent block to a block (to avoid getting a container during render_block)
add_filter(
    'render_block_data',
    function ($parsed_block, $source_block, $parent_block) {
        $parsed_block['parentBlock'] = $parent_block;
        return $parsed_block;
    },
    10,
    3
);

// Magically wrap blocks with a container to implement page layout
add_filter(
    'render_block',
    function ($block_content, $block) {
        // These blocks always get fullwidth with no container
        $always_fullwidth = ['acf/latest-posts', 'acf/timeline', 'acf/guestbook',  null];

        // These blocks always get a small padding
        $always_fullwidth_with_padding = ['core/xxx', 'acf/xx'];
        $always_fullwidth_with_padding_classes = 'px-5';

        // These blocks get multiple options
        $inner_container_classes_rules = [
            // Default for specific blocks
            //'acf/timeline' => ['default' => 'col-span-12'],
            'acf/livestream' => ['default' => 'col-span-12'],
            'acf/projects-swiper' => ['default' => 'col-span-12'],
            'acf/testimonials-swiper' => ['default' => 'col-span-12'],
            'acf/theme' => ['default' => 'col-span-12'],
            'acf/facts' => ['default' => 'col-span-12'],
            'acf/featured-events' => ['default' => 'col-span-12'],
            'acf/organigramm' => ['default' => 'col-span-12'],
            'acf/latest-wikimove-podcasts' => ['default' => 'col-span-12'],
            'acf/latest-publications' => ['default' => 'col-span-12'],
            'acf/wissens-bonbons' => ['default' => 'col-span-12'],
            // Classes manually added to Column block in Gutenberg editor (could be named differently...)
            'core/columns' => [
                'col-12' => 'col-span-12',
                'col-10' => 'col-span-12 lg:col-span-10 lg:col-start-2',
                'col-8' => 'col-span-12 lg:col-span-8 lg:col-start-3'
            ],
            // Classes manually added to Group block in Gutenberg editor (could be named differently...)
            'core/group' => [
                'full' => '',
                'col-12' => 'col-span-12',
                'col-10' => 'col-span-12 lg:col-span-10 lg:col-start-2',
                'col-8' => 'col-span-12 lg:col-span-8 lg:col-start-3'
            ],
            // For other blocks with or without alignment settings
            'default' => [
                // Options defined in ACF: Clone Library / Alignment
                'default' => 'default',
                'wide' => 'wide',
                'right' => 'right'
            ]
        ];
        $outer_container_classes = 'outer-container';

        // Get alignment values
        if ($block['blockName'] == 'core/columns' || $block['blockName'] == 'core/group') {
            // For columns and group from the classes
            $align = $block['attrs']['className'] ?? 'default';
        } else {
            // For other blocks, from an ACF
            $align = $block['attrs']['data']['style_alignment'] ?? 'default';
        }

        // Full width blocks, columns, or blocks within a block, or null blocks get no containers around them
        if ($align == 'full' || in_array($block['blockName'], $always_fullwidth) || $block['parentBlock']) {
            return $block_content;
        }

        // These blocks will have full width with a small padding
        if (in_array($block['blockName'], $always_fullwidth_with_padding) && $align == 'default') {
            return "<div class='{$always_fullwidth_with_padding_classes}'>" . $block_content . '</div>';
        }

        // For other blocks, depending on the align value and the block name
        $inner_container_classes =
            ($inner_container_classes_rules[$block['blockName']] ?? $inner_container_classes_rules['default'])[$align] ??
            ($inner_container_classes_rules['default'][$align] ?? $inner_container_classes_rules['default']['default']);
        $content = "<div class='{$outer_container_classes}'><div class='{$inner_container_classes}'>" . $block_content . '</div></div>';
        return $content;
    },
    10,
    2
);
