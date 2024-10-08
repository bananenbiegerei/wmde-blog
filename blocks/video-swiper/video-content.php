<?php $file = get_sub_field('file');
                        $file_url = $file['url'];
                        $poster_image = get_sub_field('poster_image');
                        $poster_image_url = $poster_image['url'];
                        ?>
                        <?php if ($file) : ?>
                        <div class="relative w-full h-full rounded-xl overflow-hidden">
                            <div class="w-full h-full">
                                <div class="video-container-<?php echo $index; ?> h-full w-full flex justify-center items-center">
                                    <video class="" id="video-<?php echo $index; ?>" controls poster="<?= $poster_image_url; ?>" preload="none">
                                        <source src="<?php echo $file_url; ?>" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <img id="img-<?php echo $index; ?>" class="poster-image h-auto md:h-[480px]" src="<?php echo esc_url($poster_image_url); ?>" alt="Poster Image">
                                <button class="custom-play-button bg-gradient-to-t from-black/50 absolute top-0 left-0 w-full h-full z-20 rounded-xl text-white text-left" data-video-id="video-<?php echo $index; ?>">
                                    <span class="sr-only">Play</span>
                                    <div class="absolute bottom-0 left-0 p-4 w-full flex">
                                        <div>
                                            <?= bb_icon('video-play', 'icon-xxl text-white') ?>
                                        </div>
                                        <div class="text-right flex-1">
                                            <h3 class="text-sm mb-1 font-bold"><?php the_sub_field('title'); ?></h3>
                                            <p class="text-sm font-alt mb-0"><?php the_sub_field('description'); ?></p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <?php endif; ?>