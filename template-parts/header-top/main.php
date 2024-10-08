<?php $search_url = (is_multisite() && get_current_blog_id() !== 1) ? get_site_url(1) : home_url('/'); ?>
<?php $WPNav = json_encode(bb_get_nav_menu()); ?>

<script>
  // Get current page ID (used to set 'current' class to menu item)
  const pageID = <?php echo get_the_ID() ?: 'null' ?>;
  // Get content of top-nav menu
  const WPNav = JSON.parse('<?= $WPNav ?>');
  // Default icon when featured page thumbnail is missing
  const defaultIcon = "<?= get_stylesheet_directory_uri() ?>/img/placeholders/wiki-logo-icon.png";
</script>

<!-- Header for screen readers -->
<header role="banner" aria-label="<?= __('Menü', BB_TEXT_DOMAIN) ?>" class="sr-only">
  <!-- Navigation menu -->
  <?php wp_nav_menu([ 'walker' => new Aria_Walker_Nav_Menu(),'menu' => 'top', 'container' => false, 'items_wrap' => '<ul role="navigation" aria-label="' . __('Navigationsmenü', BB_TEXT_DOMAIN) . '">%3$s</ul>' ]); ?>
  <!-- Search -->
  <form action="<?= $search_url ?>" method="get" aria-label="<?= __('Wikimedia Deutschland suchen', BB_TEXT_DOMAIN)?>">
  <label for="aria_search"><?= __('Suchanfrage', BB_TEXT_DOMAIN)?></label>
  <input id="aria_search" type="text" name="s" value="<?php the_search_query(); ?>" />
  <input type="submit" value="Suchen" />
  </form>
  <!-- Jump to main content -->
  <a href="#main-content"><?= __('Zum Inhalt überspringen', BB_TEXT_DOMAIN) ?></a>
</header>

<!-- Visible navigation -->
<?php get_template_part('template-parts/header-top/mobile/titlebar'); ?>
<?php get_template_part('template-parts/header-top/mobile/navmenu'); ?>
<?php get_template_part('template-parts/header-top/desktop/titlebar'); ?>
<?php get_template_part('template-parts/header-top/desktop/navmenu'); ?>