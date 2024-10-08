<?php $logo_small = esc_attr(get_field('logo_small', 'options') ?: get_stylesheet_directory_uri() . '/img/wikimedia-logo-mini.svg'); ?>
<script>
const pw = 20; // pointer width
const pyoff = -19; // pointer v offset

// Prepare x-data for 'navMenu' component
document.addEventListener('alpine:init', () => {
    Alpine.data('navMenu', () => ({
        nav: WPNav,
        isOpen: new Array(WPNav.length).fill(false),
        idx: -1,
        items: null,
        itemIdx: -1,
        showPointer: false,
        isScrolled: false,
        init() {
            // Slide-in logo when sticky navbar
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
                const threshold = document.getElementById('titlebar_desktop')
                    .getBoundingClientRect().height;
                if (scrollPosition >= threshold) {
                    this.isScrolled = true;
                } else {
                    this.isScrolled = false;
                }
            });
            // Keyboard navigation (tab to switch domain, up/down to select sub items)
            document.getElementById('navmenu_desktop').addEventListener('keydown', e => {
                const keyUP = e.keyCode === 38;
                const keyDOWN = e.keyCode === 40;
                const keyTAB = (e.keyCode === 9) && !e.shiftKey;;
                const keySHIFT_TAB = (e.keyCode === 9) && e.shiftKey;
                const domainOpen = this.idx != -1;
                const firstDomain = this.idx == 0;
                const lastDomain = this.idx == (this.nav.length - 1);
                if (keyDOWN) {
                    e.preventDefault();
                    this.focusNextItem();
                    return false;
                }
                if (keyUP) {
                    e.preventDefault();
                    this.focusPrevItem();
                    return false;
                }
                if (keyTAB && domainOpen && !lastDomain) {
                    e.preventDefault();
                    const n = this.idx + 1;
                    this.openNav(n);
                    document.getElementById(`domain_${n}`).focus();
                    this.movePointer();
                    return false;
                }
                if (keySHIFT_TAB && domainOpen && !firstDomain) {
                    e.preventDefault();
                    const n = this.idx - 1;
                    this.openNav(n);
                    document.getElementById(`domain_${n}`).focus();
                    this.movePointer();
                    return false;
                }
                if (domainOpen && (keySHIFT_TAB && firstDomain) || (keyTAB && lastDomain)) {
                    this.closeNav();
                    return false;
                }
                // Prevent scrolling with arrow keys when a domain dropdown is open
                if ((keyUP || keyDOWN) && domainOpen) {
                    e.preventDefault();
                    return false;
                }
            });
        },
        openNav(n) {
            this.isOpen.fill(false);
            this.idx = n;
            this.itemIdx = -1;
            if ((this.nav[n].featured.length + this.nav[n].pages.length + this.nav[n].sections
                    .length) > 0) {
                this.isOpen[n] = true;
                this.items = document.querySelectorAll(`#menu_${n} li a`);
            }
        },
        closeNav() {
            this.isOpen.fill(false);
            this.idx = -1;
            this.itemIdx = -1;
            this.showPointer = false;
        },
        focusPrevItem() {
            if (this.itemIdx <= 0) {
                return;
            }
            this.itemIdx = this.itemIdx - 1;
            const item = this.items[this.itemIdx];
            item.focus();
        },
        focusNextItem() {
            if (this.itemIdx == this.items.length - 1) {
                return;
            }
            this.itemIdx = this.itemIdx + 1;
            const item = this.items[this.itemIdx];
            item.focus();
        },
        movePointer() {
            if (this.nav[this.idx].pages.length + this.nav[this.idx].sections.length == 0) {
                this.showPointer = false;
                return;
            }
            this.showPointer = true;
            let bx = document.getElementById('domain_' + this.idx).getBoundingClientRect()
                .left; // button x
            let bw = document.getElementById('domain_' + this.idx).offsetWidth; // button width
            let dxoff = this.getNavDropdownOffset(); // dropdown h offset
            // let pw = 32; // pointer width
            // let pyoff = -31; // pointer v offset
            let ddw = document.getElementById('menu_' + this.idx).offsetWidth;
            let voff = parseInt(window.getComputedStyle(document.querySelector(
                    '#navmenu_desktop .container')).getPropertyValue("margin-left").match(/\d+/)
                .pop());
            let ddx = Math.max(dxoff, bx + bw / 2 - ddw / 2) - voff;
            document.getElementById('menu_' + this.idx).style.left = ddx + 'px';
            document.getElementById('pointer').style.left = bx - dxoff + bw / 2 - pw / 2 + 'px';
            document.getElementById('pointer').style.top = pyoff + 'px';
        },
        getNavDropdownOffset() {
            let box = document.getElementById('navmenu_desktop_dropdown').getBoundingClientRect();
            let body = document.body;
            let docEl = document.documentElement;
            let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
            let clientLeft = docEl.clientLeft || body.clientLeft || 0;
            let left = box.left + scrollLeft - clientLeft;
            return Math.round(left);
        }
    }));
});
</script>

<!-- Container for the whole desktop nav menu -->
<header aria-hidden="true" id="navmenu_desktop" x-data="navMenu" class="border-b border-gray-200 sticky top-0 z-40 bg-white py-1 hidden md:block nohover:hidden" @mouseleave="closeNav()">

    <!-- Top bar with logo, domains, and search -->
    <div class="relative z-10 container overflow-hidden">

        <!-- Logo -->
        <div class="absolute left-5 top-2 overflow-hidden" type="logo">
            <div class="transition-all duration-500 ease-in-out opacity-0 -translate-x-10" x-bind:class="{ 'opacity-0 -translate-x-10': !isScrolled, 'opacity-100 translate-x-0': isScrolled }">
                <a tabindex="-1" href="<?php echo get_home_url(); ?>">
                    <img class="mini-logo" style="max-height: 33px" src="<?= $logo_small ?>" alt="Wikimedia Logo">
                </a>
            </div>
        </div>

        <!-- Domains & search -->
        <div class="flex items-center">

            <!-- Domains -->
            <div class="navmenu flex-none flex space-x-1 py-1 transition-all duration-500 ease-in-out ml-10 -translate-x-12" x-bind:class="{ '-translate-x-12': !isScrolled, 'translate-x-10': isScrolled }">
                <!-- Domain items -->
                <nav id="navmenu_desktop_domains">
                    <template x-for="(domain,i) in nav">
                        <a class="btn btn-menu" @focus="openNav(i); movePointer()" @mouseenter="openNav(i); movePointer()" x-bind:id="'domain_' + i" x-bind:class="{'current': pageID == domain.ID || domain.children.includes(pageID) }" x-bind:href="domain.url" x-html="domain.title"></a>
                    </template>
                </nav>
            </div>

            <!-- Search -->
            <div class="flex-1 flex justify-end gap-5 items-center h-full pl-12" x-data="{ open: false }">
                <?php get_template_part('template-parts/header-top/desktop/search-slide-out'); ?>
                <?php get_template_part('template-parts/header-top/desktop/search-modal'); ?>
            </div>
        </div>
    </div>

    <!-- Submenus items go below the navigation bar -->
    <div id="navmenu_desktop_dropdown" class="relative block container">

        <!-- Pointer to domain button -->
        <div class="z-20 absolute pointer-events-none" id="pointer" x-show="showPointer">
            <img class="object-cover h-full w-full drop-shadow-xs" src="<?php echo get_stylesheet_directory_uri(); ?>/img/header-top/pointer-top.svg" alt="Wikimedia Logo">
        </div>

        <!-- For each domain... -->
        <template x-for="(domain,i) in nav">
            <div show="isOpen[i]" x-bind:id="'menu_'+ i" class="absolute inset-x-0 z-10 transform bg-white border border-gray-100 max-h-screen-80 rounded-xl shadow-navbar p-2 overflow-hidden" x-bind:class="{ 'max-w-6xl': domain.featured.length > 0, 'max-w-md': domain.featured.length == 0, 'visible': isOpen[i], 'invisible': !isOpen[i] }">

                <!-- If there are featured pages: 2 columns with featured pages + pages -->
                <div class="relative mx-auto grid" x-bind:class="{ 'grid-cols-2' : domain.featured.length > 0, 'grid-cols-1': domain.featured.length == 0}">

                    <!-- Featured pages -->
                    <template x-if="domain.featured.length > 0">
                        <nav class="border-r border-gray-200 pr-5 mr-5">
                            <ul class="flex flex-col max-h-screen-80 overflow-auto">
                                <template x-for="page in domain.featured">
                                    <li class="p-1" x-bind:class="{'current': pageID == page.ID }">
                                        <a x-bind:href="page.url" class="flex items-center gap-5 transition hover:bg-gray p-1 rounded-xl h-12 p-4 focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-0">
                                            <div class="">
                                                <img class="h-auto w-10 p-1" x-bind:src="page.logo || page.thumbnail || defaultIcon" />
                                            </div>
                                            <div class="">
                                                <h4 class="text-base m-0" x-html="page.title"></h4>
                                            </div>
                                        </a>
                                    </li>
                                </template>
                            </ul>
                        </nav>
                    </template>

                    <!-- Pages & sections -->
                    <nav class="max-h-screen-80 overflow-auto grid" x-bind:class="{ 'grid-cols-2' : domain.pages.length > 0 && domain.sections.length > 0 || domain.sections.length > 1 }">

                        <!-- Pages -->
                        <template x-if="domain.pages.length > 0">
                            <ul class="items-stretch justify-items-stretch py-1">
                                <template x-for="page in domain.pages">
                                    <li class="p-1 bg-white transition rounded-md" x-bind:class="{'current': pageID == page.ID }">
                                        <a tabindex="-1" x-bind:href="page.url" class="btn btn-menu btn-expanded font-normal" x-html="page.title"></a>
                                    </li>
                                </template>
                            </ul>
                        </template>

                        <!-- Sections -->
                        <template x-for="section in domain.sections">
                            <ul class="items-stretch justify-items-stretch">
                                <li class="bg-white transition rounded-md btn btn-menu-section btn-expanded hover:text-black">
                                    <span class="p-1" x-text="section.title"></span>
                                </li>
                                <template x-for="page in section.pages">
                                    <li class="p-1 bg-white transition rounded-md" x-bind:class="{'current': pageID == page.ID }">
                                        <a tabindex="-1" x-bind:href="page.url" class="btn btn-menu btn-expanded font-normal" x-html="page.title"></a>
                                    </li>
                                </template>
                            </ul>
                        </template>

                    </nav>
                </div>
            </div>
        </template>
    </div>
</header>