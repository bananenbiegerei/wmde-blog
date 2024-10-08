<?php
$id = $block['id'];
$image = get_field('bild');
$align = get_field('bild_ausrichtung') == 'links' ? 'md:float-left md:mr-5 mb-2 md:mb-0' : 'md:float-right md:ml-5 mb-2 md:mb-0';

// Make sure the alt and captions are sanitized to be passed to AlpineJS
$image_alt = str_replace(PHP_EOL, '', esc_attr(strip_tags($image['alt'] ?? '')));
$image_caption = str_replace(PHP_EOL, '', esc_attr(strip_tags($image['caption'] ?? '')));

$link = false;
$image_zoom = get_field('image_zoom');
if (get_field('link_auf_bild')) {
    $link = get_field('link_auf_bild');
    $link_url = $link['url'];
    $link_title = $link['title'];
    $link_target = $link['target'] ? $link['target'] : '_self';
    $image_zoom = false;
}
?>

<div class="bb-text-image-float-block" id="<?= $id ?>">

  <?php if ($image): ?>

  <div class="clearfix">
    <?php if ($link): ?>
    <a href="<?= esc_url($link_url) ?>" target="<?= esc_attr($link_target) ?>">
      <?php endif; ?>

      <div class="<?= $align ?>">
        <?php if ($image_zoom && !is_admin()): ?>
        <div x-data="{ lightbox: false, imgModalSrc : '', imgModalAlt : '', imgModalCaption : '' }">
          <div class="cursor-zoom-in"
            x-on:click="$dispatch('lightbox', {imgModalSrc: '<?= $image['url'] ?>', imgModalAlt: '<?= $image_alt ?>', imgModalCaption: '<?= $image_caption ?>' })">
            <?php endif; ?>

            <?php get_template_part('blocks/text-image-float/image', null, ['image' => ['id' => $image['ID']], 'rounded' => true]); ?>

            <?php if ($image_zoom && !is_admin()): ?>
          </div>

          <div x-show="lightbox"
            x-on:lightbox.window="lightbox = true; imgModalSrc = $event.detail.imgModalSrc; imgModalCaption = $event.detail.imgModalCaption;"
            class="cursor-zoom-out">
            <div x-transition:enter="transition ease-out duration-500"
              x-transition:enter-start="opacity-0 transform scale-90"
              x-transition:enter-end="opacity-100 transform scale-100"
              x-transition:leave="transition ease-in duration-500"
              x-transition:leave-start="opacity-100 transform scale-100"
              x-transition:leave-end="opacity-0 transform scale-90"
              class="fixed inset-0 z-50 flex items-center justify-center w-full p-2 overflow-hidden bg-gray-900 bg-opacity-75 h-100">
              <div x-on:click.away="lightbox = ''">
                <div class="bb-image-block" x-on:click="lightbox = ''">
                  <figure class="relative _cursor-pointer bg-white">
                    <img class="max-h-[80vh] max-w-[80vw] bg-white rounded-2xl" :src="imgModalSrc"
                      :alt="imgModalAlt">
                    <template x-if="imgModalCaption">
                      <figcaption
                        class="invisible absolute left-0 bottom-0 right-0 flex text-white bg-gray-900 w-auto h-auto z-20 p-2 text-sm flex items-start gap-4 break-all rounded-b-2xl">
                        <?= bb_icon('info', 'flex-shrink-0') ?> <div class="self-center"
                          x-text="imgModalCaption"></div>
                      </figcaption>
                    </template>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <?php endif; ?>

      </div>

      <?php if ($link): ?>
    </a>
    <?php endif; ?>

    <?php echo get_field('text'); ?>
  </div>
  <?php endif; ?>
</div>
