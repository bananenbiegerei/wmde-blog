<!DOCTYPE html>
<html <?php language_attributes(); ?> class="h-full no-js" data-theme="wmde">
<?php get_template_part('head'); ?>

<body <?php body_class('flex flex-col min-h-screen'); ?>>
    <!--header role="banner"-->
    <?php get_template_part('template-parts/header-top/main'); ?>
    <!--/header-->

    <main class="main-content flex-grow pt-14 nohover:pt-14 md:pt-0 transition-fade" id="main-content" role="main">
        <?php if (is_front_page()): ?>
        <h1 class="sr-only">
            <?= get_bloginfo('name') ?>
        </h1>
        <?php endif; ?>
