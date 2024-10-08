<script>
// Prepare x-data for 'navMenuMobile' component
document.addEventListener('alpine:init', () => {
  Alpine.data('navMenuMobile', () => ({
  nav: WPNav,
  isOpen: new Array(WPNav.length).fill(false),
  timeOutFunctionId: 0,
  init() {
    // Keyboard navigation
    document.getElementById('navmenu_mobile').addEventListener('keydown', e => {
    const items = document.querySelectorAll('#navmenu_mobile a.btn');
    const keyTAB = (e.keyCode === 9) && !e.shiftKey;
    const isLastItem = e.target == items[items.length - 1];
    // Jump back to menu hamburger button after the last item
    if (isLastItem) {
      e.preventDefault();
      document.querySelector('[x-data="navMenuMobileToggle"] button').focus();
      return false;
    }
    });
  },
  toggleNav(n) {
    var v = this.isOpen[n];
    this.isOpen.fill(false);
    this.isOpen[n] = !v;
  }
  }));
});
</script>

<!-- Container for the whole mobile nav menu -->
<header aria-hidden="true" id="navmenu_mobile" x-data="navMenuMobile" class="z-40 block bg-white fixed left-0 right-0	bottom-0 top-14 block md:hidden nohover:block overflow-scroll" x-show="$store.open_mobile_nav" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100" x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 transform scale-100" x-transition:leave-end="opacity-0 transform scale-90">
  <div class="flex-1 flex justify-end gap-5 items-center p-3 border-b border-gray-200" x-data="{ open: false }">
  <div class="w-full">
    <form class="flex gap-5 form-sm w-full" action="<?= bb_search_url() ?>" method="get">
    <input class="!mb-0" type="text" name="s" id="mobile-search" x-ref="searchInput" value="<?php the_search_query(); ?>" />
    <input type="submit" alt="Search" value="Suchen" class="" />
    </form>
  </div>
  </div>

  <nav>
  <template x-for="(domain,i) in nav">

    <div class="border-b border-gray-200">

    <div class="relative border-l-8 nav_item" x-bind:class="{ 'border-transparent' : !isOpen[i], 'border-primary-600' : isOpen[i] }">

      <!-- Domain title -->
      <div x-bind:class="{'current before:w-2 before:h-16 before:bg-primary-600 before:absolute before:-left-2 before:top-0': pageID == domain.ID }">
      <a x-bind:href="domain.url" @focus="toggleNav(i)" class="btn btn-menu h-16">
        <span class="w-full" x-html="domain.title"></span>
      </a>
      </div>

      <template x-if="domain.pages.length > 0 || domain.featured.length > 0 ||	domain.sections.length > 0">
      <div tabindex='-1' @click="toggleNav(i)" class="absolute top-5 right-5" x-bind:class="{ 'item_closed' : !isOpen[i], 'item_open' : isOpen[i] }">
        <?= bb_icon('menu_open', 'cursor-pointer open') ?>
        <?= bb_icon('menu_close', 'cursor-pointer close') ?>
      </div>
      </template>

      <!-- Wrapper for domain items -->
      <div x-show="isOpen[i]" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100" x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 transform scale-100" x-transition:leave-end="opacity-0 transform scale-90">

      <!-- Featured pages -->
      <template x-if="domain.featured.length >0">
        <ul class="pb-5">
        <template x-for="page in domain.featured">
          <li class="px-5" x-bind:class="{'current': pageID == page.ID }">
          <a x-bind:href="page.url" class="btn btn-menu">
            <div class="w-10 h-10 mr-2 flex justify-center items-center">
            <img class="h-auto w-10" x-bind:src="page.logo || page.thumbnail || defaultIcon" />
            </div>
            <span class="w-full" x-html="page.title"></span>
          </a>
          </li>
        </template>
        </ul>
      </template>

      <!-- Pages -->
      <template x-if="domain.pages.length > 0">
        <ul class="border-t border-gray-200 py-4">
        <template x-for="page in domain.pages">
          <li class="px-5 py-2" x-bind:class="{'current': pageID == page.ID }">
          <a x-bind:href="page.url" class="btn btn-menu">
            <span class="w-full" x-html="page.title"></span>
          </a>
          </li>
        </template>
        </ul>
      </template>

      <!-- Sections -->
      <div class="grid md:grid-cols-2">
        <template x-for="(section,i) in domain.sections">
        <ul class="border-t border-gray-200 py-4 px-2 border-0" x-bind:class="{ 'md:border-r': i % 2 === 0 }">
          <li class="pl-6">
          <span class="btn btn-menu-section" x-html="section.title"></span>
          <ul>
            <template x-for="page in section.pages">
            <li class="py-2" x-bind:class="{'current': pageID == page.ID }">
              <a x-bind:href="page.url" x-html="page.title" class="btn btn-menu"></a>
            </li>
            </template>
          </ul>
          </li>
        </ul>
        </template>
      </div>

      </div>
    </div>
    </div>
  </template>
  </nav>
</header>