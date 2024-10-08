<div x-data="{ open: false }" class="flex justify-center hidden md:block lg:hidden">
  <!-- Trigger -->
  <span x-on:click="open = true">
  <button type="button" class="btn btn-primary btn-ghost btn-icon-only !text-black">
    <?php echo bb_icon('search', 'icon-sm'); ?>
  </button>
  </span>
  <!-- Modal -->
  <div x-show="open" style="display: none" x-on:keydown.escape.prevent.stop="open = false" x-id="['modal-title']" class="fixed inset-0 z-10 overflow-y-auto">
  <!-- Overlay -->
  <div x-show="open" x-transition.opacity class="fixed inset-0 backdrop-blur-md bg-white/30">
  </div>
  <!-- Panel -->
  <div x-show="open" x-transition x-on:click="open = false" class="relative flex min-h-screen items-center justify-center p-4">
    <div x-on:click.stop x-trap.noscroll.inert="open" class="relative w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-10">
    <!-- Content -->
    <form class="flex gap-5 form-sm w-full" action="<?= bb_search_url() ?>" method="get">
      <input class="!mb-0" type="text" name="s" id="search-form" x-ref="searchInput" value="<?php the_search_query(); ?>" />
      <input type="submit" value="Suchen" class="btn btn-sm mb-0" />
    </form>
    <!-- Buttons -->
    <div class="">
      <button type="button" x-on:click="open = false" class="btn btn-base btn-primary btn-ghost absolute top-2 right-2">
      <?= bb_icon('x', 'icon-xs'); ?>
      </button>
    </div>
    </div>
  </div>
  </div>
</div>
