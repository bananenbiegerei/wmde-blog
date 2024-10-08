
<div x-bind:class="'bg-bonbon-' + bonbon['color']"
    class="text-primary max-w-5xl min-w-2xl lg:mx-auto relative p-6 pb-0 m-2 md:m-6 md:px-10 border-2 border-black rounded-3xl">
    <div x-bind:class="'bg-bonbon-' + bonbon['color']" class="relative pb-10 bg-no-repeat bg-left-top"
        style="background-image: url('<?= get_stylesheet_directory_uri() . '/blocks/wissens-bonbons/bonbon-quote.svg'; ?>');">
        <div class="relative flex justify-between  items-start gap-10 mb-5">
            <h1 class="font-bold flex-1 text-2xl sm:text-3xl lg:text-4xl hyphens-auto" x-text="bonbon['title']"> </h1>
            <button @click="close()" class="flex-shrink back-button z-20 w-max">
                <span class="sr-only"><?php _e('Zurück zu den Meilensteinen', BB_TEXT_DOMAIN); ?></span>
                <img class="w-12 h-12"
                    src="<?php echo get_stylesheet_directory_uri() . '/blocks/wissens-bonbons/bonbon-x.svg'; ?>"
                    alt="x to close dialog">
            </button>
        </div>
        <div class="flex flex-col md:flex-row gap-4 items-stretch">
            <div class="basis-3/4">
                <div class="max-w-2xl">
                    <div class="no-container-styles mb-12">
                        <div class="md:flex gap-4 ">
                            <div class="no-container-styles mb-10 md:mb-0" x-html="bonbon['content']">
                            </div>
                        </div>
                    </div>
                    <div class="md:flex gap-4">
                        <div class="md:flex items-center min-w-[200px] mb-4 md:mb-0 max-w-[200px]"
                            x-html="bonbon['image']">
                        </div>
                        <div class="space-y-2">
                            <h3 class="h5 font-bold mb-0" x-text="bonbon['author']"></h3>
                            <p class="mb-0" x-text="bonbon['author_role']"></p>
                            <p class="text-base mb-0" x-text="bonbon['author_text']"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-between basis-1/4 text-black">
                <div class="flex-1 hidden md:flex flex-col gap-24 items-end">
                    <img class="max-w-[100px] first:animate-float last:animate-floatfast animate-floatslow first:self-start last:self-start"
                        x-bind:src="illus[0]" alt="Random Image">
                    <img class="max-w-[100px] first:animate-float last:animate-floatfast animate-floatslow first:self-start last:self-start"
                        x-bind:src="illus[1]" alt="Random Image">
                    <img class="max-w-[100px] first:animate-float last:animate-floatfast animate-floatslow first:self-start last:self-start"
                        x-bind:src="illus[2]" alt="Random Image">
                </div>
                <div class="flex gap-2 justify-end">
                    <button @click="prev"
                        class="flex justify-center items-center h-10 w-10 border border-black rounded transition hover:bg-white"><?= bb_icon('arrow-left', 'icon-s') ?></button>
                    <button @click="next"
                        class="flex justify-center items-center h-10 w-10 border border-black rounded transition hover:bg-white"><?= bb_icon('arrow-right', 'icon-s') ?></button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="h-6 md:h-12"></div>