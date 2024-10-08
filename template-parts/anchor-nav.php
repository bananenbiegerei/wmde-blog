<script>
let anchorNav = () => ({
  anchors: [],
  lastActiveAnchor: null,
  scrollDir: null,
  // Init anchor-nav
  init() {
  // Find all headline blocks that have an anchor title
  for (const h of document.querySelectorAll(".bb-headline-block:not([data-anchor-title=''])")) {
    this.anchors.push({
    'id': h.querySelector('.anchor-offset').id,
    'title': h.getAttribute('data-anchor-title'),
    'visible': false,
    'el': h,
    'offset': h.querySelector('.anchor-offset'),
    'active': false,
    'wasActive': false,
    'prevY': 0, // used to detect scroll direction and update this.scrollDir
    });
  }

  // Don't bother with the rest if there are no anchors...
  if (this.anchors.length == 0) {
    document.getElementById('anchor-nav').style.display = 'none';
    return;
  }

  document.getElementById('anchor-nav').addEventListener('keydown', e => {
    const keyENTER = e.keyCode === 13;
    if (keyENTER) {
    e.preventDefault();
    e.target.click();
    return false;
    }
  });

  // Adjust vertical offset of sticky anchor-nav
  document.getElementById('anchor-nav').style.top = this.calcTopNavOffset() + 'px';

  // Adjust vertical offset of sticky anchor-nav and vertical offset of anchors (during window resize)
  window.addEventListener('resize', (e) => {
    document.getElementById('anchor-nav').style.top = this.calcTopNavOffset() + 'px';
    for (const h of document.querySelectorAll(".bb-headline-block:not([data-anchor-title='']) .anchor-offset")) {
    h.style.transform = 'translateY(-' + this.getAnchorOffset() + 'px)';
    }
  });

  // Intersect observer to highlight active anchor
  var observer = new IntersectionObserver(
    (entries, opts) => {
    // Note: 'entries' refers to all the elements that are being observed by 'observer'
    // Set visible status to intersecting anchor and detect scroll direction
    for (const entry of entries) {
      const id = entry.target.querySelector('.anchor-offset').id;
      let anchor = this.anchors.find((a) => a.id == id);
      anchor.visible = entry.isIntersecting;
      this.scrollDir = entry.boundingClientRect.y < anchor.prevY ? 'down' : 'up';
      anchor.prevY = entry.boundingClientRect.y;
    }

    // Clear active status of anchor links
    for (const i in this.anchors) {
      // Anchors are in the same order in this.anchors and in the swiper
      document.querySelectorAll('#anchor-nav .swiper-wrapper li')[i].classList.remove('active');
    }

    const visibleAnchors = this.anchors.filter((a) => a.visible);
    let activeAnchor = null;
    // If some anchors are visible, pick the first one
    if (visibleAnchors.length > 0) {
      activeAnchor = visibleAnchors.shift();
    }
    // If there are no visible anchors we pick the last active one (scroll down) or the one just before the last active one
    else {
      if (this.scrollDir === 'down') {
      activeAnchor = this.lastActiveAnchor;
      } else {
      if (this.lastActiveAnchor) {
        for (let i in this.anchors) {
        if (i > 0 && this.anchors[i].id === this.lastActiveAnchor.id) {
          activeAnchor = this.anchors[i - 1];
        }
        }
      }
      }
    }
    this.lastActiveAnchor = activeAnchor;
    if (activeAnchor) {
      const anchorLink = document.querySelector(`#anchor-nav .swiper-wrapper li[data-title="${activeAnchor.id}"]`);
      anchorLink.classList.add('active');
    }
    }, {
    root: null,
    threshold: 1
    })
  for (anchor of this.anchors) {
    observer.observe(anchor.el);
  }
  },

  // Calculate vertical offset of anchor
  getAnchorOffset() {
  return this.calcTopNavOffset() + document.getElementById('anchor-nav').getBoundingClientRect().height;
  },

  // Calculate vertical offset of sticky anchor-nav
  calcTopNavOffset() {
  const navmenuDesktop = document.getElementById('navmenu_desktop');
  const titlebarMobile = document.getElementById('titlebar_mobile');
  const navmenuDesktopVisible = navmenuDesktop.offsetWidth > 0 || navmenuDesktop.offsetHeight > 0;
  if (navmenuDesktopVisible) {
    return this.offset = navmenuDesktop.getBoundingClientRect().height;
  } else {
    return this.offset = titlebarMobile.getBoundingClientRect().height;
  }
  },

  // Get top coord of anchor
  getTop(anchor) {
  let box = document.getElementById(anchor.id).getBoundingClientRect();
  let body = document.body;
  let docEl = document.documentElement;
  let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  let clientTop = docEl.clientTop || body.clientTop || 0;
  let top = box.top + scrollTop - clientTop;
  return Math.round(top);
  },

  // Scroll to element on page
  scrollTo(anchor) {
  const pos = this.getTop(anchor);
  window.scrollTo({
    'top': pos,
    'behavior': 'smooth'
  });
  }
});

document.addEventListener('alpine:init', () => {
  Alpine.data('anchorNav', anchorNav);
});

SwipersConfig['#anchor-nav'] = {
  loop: false,
  centeredSlides: false,
  spaceBetween: 16,
  speed: 200,
  grabCursor: true,
  draggable: true,
  slidesPerView: 'auto',
  freeMode: {
  enabled: true,
  sticky: true,
  },
  navigation: {
  nextEl: '#anchor-nav .swiper-button-next',
  prevEl: '#anchor-nav .swiper-button-prev',
  },
  on: {
  init: function() {
    // Adjust vertical offset of anchor
    for (const h of document.querySelectorAll(".bb-headline-block:not([data-anchor-title='']) .anchor-offset")) {
      h.style.transform = 'translateY(-' + (anchorNav().getAnchorOffset() + 15) + 'px)';    }
  }
  }
};
</script>
<div id="anchor-nav" x-data="anchorNav" class="border-b border-gray-200 sticky z-30 bg-white" x-show="anchors.length > 0">
  <div class="flex items-center container overflow-hidden">
  <div class="flex-none md:hidden">
    <?= bb_icon('chevron-left', 'swiper-button-prev btn icon-xl btn-ghost cursor-pointer mt-2') ?>
  </div>
  <div class="flex-1 lg:flex-none overflow-hidden">
    <nav class="swiper-container">
    <ul class="swiper-wrapper" aria-label="Navigation Anchor Menu" role="menu">
      <template x-for="(anchor,i) in anchors">
      <li class="swiper-slide !w-auto py-2 cursor-pointer px-2" x-bind:data-title="anchor.id" role="menuitem"><span x-text="anchor.title" @click="scrollTo(anchor)" tabindex="0"></span></li>
      </template>
    </ul>
    </nav>
  </div>
  <div class="flex-none md:hidden">
    <?= bb_icon('chevron-right', 'swiper-button-next btn icon-xl btn-ghost cursor-pointer mt-2') ?>
  </div>
  </div>
</div>