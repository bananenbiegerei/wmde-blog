<div class="hidden lg:flex justify-end w-full" x-data="{ open: false }"
    @keydown.window.cmd.k="open = !open; $nextTick(() => $refs.searchInput.focus())"
    @keydown.window.ctrl.k="open = !open; $nextTick(() => $refs.searchInput.focus())">
    <div class="w-full" x-show="open" x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 scale-90" x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-90" @click.outside="open = false" @keydown.escape.window="open = false">
        <form class="flex gap-3 form-sm w-full" action="<?= bb_search_url() ?>" method="get">
            <input class="!mb-0" type="text" name="s" id="search-slideout-form" x-ref="searchInput"
                value="<?php the_search_query(); ?>" />
            <input type="submit" alt="Search" value="Suchen" class="btn btn-sm mb-0" />
        </form>
    </div>
    <button class="btn btn-ghost ml-3" x-on:click="open = ! open; $nextTick(() => $refs.searchInput.focus())">
        <span class="sr-only">Toggle Search Input</span><?php echo bb_icon('search', 'icon-sm'); ?>
        <?php
/* <span class="border rounded border-gray-200 text-gray-400 p-1 text-sm flex items-center">
            <?php echo bb_icon('command', 'icon-xs'); ?>
        <span>K</span>
        </span> */
?>
    </button>
</div>