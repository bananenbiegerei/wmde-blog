</main>
<?php
$footerSpace = "bg-white text-primary mt-36 ";
if (is_page_template('template-20-wmde.php')) {
    $footerSpace = "mt-0";
}
else {
    $footerSpace = "mt-0";
}
?>
<footer class="bg-white text-primary <?= $footerSpace; ?> site-footer" role="contentinfo" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="border-t-2 border-b border-b-gray-200 py-8 mb-12 lg:mb-0">
  <div class="container grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-wrap gap-6 xl:gap-20">
    <div class="md:flex-none">
    <?php get_template_part('template-parts/social-media-menu'); ?>
    </div>
    <?php if (get_field('kontakt_spendenservice', 'option')): ?>
    <div class="md:flex-none font-alt">
    <h3 class="text-base text-primary"><?= _e('Spendenservice', BB_TEXT_DOMAIN) ?></h3>
    <?php echo get_field('kontakt_spendenservice', 'option'); ?>
    </div>
    <?php endif; ?>
    <?php if (get_field('kontakt', 'option')): ?>
    <div class="md:flex-none font-alt">
    <h3 class="text-base text-primary"><?= _e('Kontakt', BB_TEXT_DOMAIN) ?></h3>
    <?php echo get_field('kontakt', 'option'); ?>
    </div>
    <?php endif; ?>
    <div class="flex-1">
    <?php get_template_part('template-parts/newsletter-signup-form-minimal'); ?>
    </div>
    <div class="md:flex-none flex justify-start xl:justify-end items-start -mx-2 lg:mx-0">
    <a class="cli_settings_button" href="#"><?php _e('Cookie Settings', BB_TEXT_DOMAIN); ?></a>
    </div>
  </div>
  </div>
  <div class="container lg:flex lg:items-center lg:h-24">
  <div class="lg:flex-1">
    <?php bb_wp_nav_menu(['container' => 'nav', 'menu' => 'footer', 'menu_class' => 'flex flex-col md:flex-row gap-5', 'theme_location' => 'footer']); ?>
  </div>
  <div class="lg:flex-none py-12 lg:py-0">
    <h3 class="mb-0 text-base"><?php _e('Wir befreien Wissen', BB_TEXT_DOMAIN); ?></h3>
  </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>