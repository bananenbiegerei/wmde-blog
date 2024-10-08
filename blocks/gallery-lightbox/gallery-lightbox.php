<?php if (is_admin()): ?>
<h2>Gallery Lightbox</h2>
<div class="grid grid-cols-5 gap-4">
  <?php foreach (get_field('images') as $image): ?>
  <div class="aspect-w-1 aspect-h-1 bg-red-500">
  <img class="h-full w-full object-cover" src="<?= wp_get_attachment_image_url($image['id'], 'thumbnail') ?>" />
  </div>
  <?php endforeach; ?>
</div>
<?php else: ?>
<div x-data="{ lightbox: false, imgModalSrc : '', imgModalAlt : '', imgModalCaption : '' }">
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 lg:mb-10">
  <?php foreach (get_field('images') as $image): ?>
  <?php $image_alt = str_replace(PHP_EOL, '', esc_attr(strip_tags($image['alt']))); ?>
  <?php $image_caption = str_replace(PHP_EOL, '', esc_attr(strip_tags($image['caption']))); ?>
  <div class="cursor-zoom-in aspect-w-1 aspect-h-1">
    <img class="block rounded-2xl object-cover h-full w-full" x-on:click="$dispatch('lightbox', {imgModalSrc: '<?= $image['url'] ?>', imgModalAlt: '<?= $image_alt ?>', imgModalCaption: '<?= $image_caption ?>' })" src="<?= $image['sizes']['medium'] ?>" alt="<?= $image['alt'] ?>">
    <img style="width: 0; height: 0" src="<?= $image['url'] ?>" alt="<?= $image['alt'] ?>">
  </div>
  <?php endforeach; ?>
  </div>

  <div x-show="lightbox" x-on:lightbox.window="lightbox = true; imgModalSrc = $event.detail.imgModalSrc; imgModalCaption = $event.detail.imgModalCaption;" class="cursor-zoom-out">
  <div x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100" x-transition:leave="transition ease-in duration-500" x-transition:leave-start="opacity-100 transform scale-100" x-transition:leave-end="opacity-0 transform scale-90" class="fixed inset-0 z-50 flex items-center justify-center w-full p-2 overflow-hidden bg-gray-900 bg-opacity-75 h-100">
    <div x-on:click.away="lightbox = ''">
    <div class="bb-image-block" x-on:click="lightbox = ''">
      <figure class="relative">
      <img class="max-h-[80vh] max-w-[80vw] rounded-2xl" :src="imgModalSrc" :alt="imgModalAlt">
      <template x-if="imgModalCaption">
        <figcaption class="invisible absolute left-0 bottom-0 right-0 flex text-white bg-gray-900 w-auto h-auto z-20 p-2 text-sm flex items-start gap-4 break-all rounded-b-2xl">
        <?= bb_icon('info', 'flex-shrink-0') ?> <div class="self-center" x-text="imgModalCaption"></div>
        </figcaption>
      </template>
      </figure>
    </div>
    </div>
  </div>
  </div>
</div>
<?php endif; ?>