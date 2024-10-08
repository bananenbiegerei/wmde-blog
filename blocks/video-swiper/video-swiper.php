<div id="<?= $block['id'] ?>">
    <div class="flex items-center">
        <?php if (!is_admin()): ?>
        <div class="bb-video-swiper-block w-full">
            <div class="flex items-center w-full">
                <div class="relative flex space-x-2 items-center mb-5">
                    <?= bb_icon('chevron-left', 'swiper-button-prev btn btn-neutral btn-outline btn-circle cursor-pointer icon-xxl') ?>
                    <div class="swiper-pagination inline-block text-3xl font-alt align-middle mx-2"></div>
                    <?= bb_icon('chevron-right', 'swiper-button-next btn btn-neutral btn-outline btn-circle cursor-pointer icon-xxl') ?>
                </div>
            </div>
            <div class="swiper-container relative">
                <div class="swiper-wrapper">
                    <?php if (have_rows('video_swiper')) : ?>
                    <?php $index = 0; ?>
                    <?php while (have_rows('video_swiper')) : the_row(); ?>
                    <div class="swiper-slide !w-full !h-auto md:!w-auto md:!h-[480px]">
                        <?php include locate_template('blocks/video-swiper/video-content.php'); ?>
                    </div>
                    <?php $index++; // Increment the counter?>
                    <?php endwhile; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <script>
        SwipersConfig['#<?php echo $block['id']; ?>'] = {
            pagination: {
                el: '#<?php echo $block['id']; ?> .swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '#<?php echo $block['id']; ?> .swiper-button-next',
                prevEl: '#<?php echo $block['id']; ?> .swiper-button-prev',
            },
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 30,
            freeMode: true,
            simulateTouch: false,
            touchMoveStopPropagation: false,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 'auto',
                    spaceBetween: 40,
                    freeMode: true
                }
            },
            on: {
                init: function() {
                    initializePlyr(this);
                }
                // slideChange: function() {
                //     pauseAllVideos();
                // },
                // slideNextTransitionStart: function() {
                //     pauseAllVideos();
                // },
                // slidePrevTransitionStart: function() {
                //     pauseAllVideos();
                // }
            }
        };

        let players = [];
        let currentlyPlaying = null;

        function initializePlyr(swiper) {
            // Select all video elements within the swiper slides
            const videos = swiper.slides.map(slide => slide.querySelector('video'));
            // Initialize Plyr for each video element
            players = Array.from(videos).map(video => new Plyr(video, {
                captions: {
                    active: false
                },
                controls: ['play', 'progress', 'volume']
            }));

            // Add event listeners to each player
            players.forEach((player, index) => {
                player.on('play', () => {
                    // Pause the currently playing video, if it's different from the one being played
                    if (currentlyPlaying && currentlyPlaying !== player) {
                        currentlyPlaying.pause();
                    }
                    // Update the currently playing video
                    currentlyPlaying = player;
                });


                // Get the custom play button for this player
                const button = document.querySelector(`.custom-play-button[data-video-id="video-${index}"]`);
                const video = document.querySelector(`#video-${index}`);
                const img = document.querySelector(`#img-${index}`);
                const plyrContainer = document.querySelector(`.video-container-${index}`);
                plyrContainer.style.display = 'none';

                // Add an event listener to the button
                button.addEventListener('click', (e) => {
                    // Fix for Safari to set the right size of the container
                    const img = document.querySelector(`#img-${index}`);
                    const plyrContainer = document.querySelector(`.video-container-${index}`);
                    plyrContainer.style.width = img.getBoundingClientRect().width + 'px';

                    // Play the video when the button is clicked
                    player.play().catch(error => {
                        // Handle the error
                        console.error('Failed to play the video:', error);
                    });

                    // Hide the button, the img, and the plyr container, show the video
                    button.style.display = 'none';
                    img.style.display = 'none';
                    video.style.display = 'block';
                    plyrContainer.style.display = 'block';
                });

                let isMouseDown = false;

                // Listen for mousedown and mouseup events on the document
                document.addEventListener('mousedown', () => {
                    isMouseDown = true;
                });

                document.addEventListener('mouseup', () => {
                    isMouseDown = false;
                });

                player.on('pause', () => {
                    // Check if the video is still seeking or the mouse button is still pressed
                    if (!player.media.seeking && !isMouseDown) {
                        button.style.display = 'block';
                        img.style.display = 'block';
                        video.style.display = 'none';
                        plyrContainer.style.display = 'none';
                    }
                });
            });

            // Expose players for debugging purposes
            window.players = players;
        }

        function pauseAllVideos() {
            players.forEach(player => {
                player.pause();
            });
            currentlyPlaying = null;
        }
        </script>
        <?php else: ?>
        <div>
            <h2><?php _e('Edit video swiper here'); ?></h2>
            <?php if (have_rows('video_swiper')) : ?>
            <div class="grid grid-cols-6 gap-5">
                <?php while (have_rows('video_swiper')) : the_row(); ?>
                <div class="rounded-xl border p-2">
                    <?php $file = get_sub_field('file'); ?>
                    <?php if ($file) : ?>
                    <?php echo esc_html($file['filename']); ?>
                    <?php endif; ?>
                    <?php $poster_image = get_sub_field('poster_image'); ?>
                    <?php if ($poster_image) : ?>
                    <img src="<?php echo esc_url($poster_image['url']); ?>" alt="<?php echo esc_attr($poster_image['alt']); ?>" />
                    <?php endif; ?>
                    <div class="text-xs">
                        <h3 class="text-xs">
                            <?php the_sub_field('title'); ?>
                        </h3>
                        <?php the_sub_field('description'); ?>
                    </div>
                </div>
                <?php endwhile; ?>
            </div>
            <?php endif; ?>
        </div>
        <?php endif; ?>
    </div>
</div>