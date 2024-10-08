<?php if (!is_admin()): ?>
	<div class="bb-testimonials-swiper-block mb-10 lg:mb-20" id="<?= $block['id'] ?>">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<?php foreach (get_field('testimonials') as $testimonial): ?>
					<div class="swiper-slide rounded-xl bg-gray p-5 !h-auto">
							<blockquote class="text-2xl flex gap-4">
								<div class="flex-shrink-0"><?= bb_icon('quote', 'bg-red-100 text-primary rounded-full p-2 w-10 h-10 grid place-items-center') ?></div>
								<p class="text-primary"><?= $testimonial->post_title ?></p>
								<?php /* cite>Spendenkommentar <?php echo get_the_date('Y', $testimonial->ID); ?> */?>
							</blockquote>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
	<script>
		SwipersConfig['#<?php echo $block['id']; ?>'] = {
			loop: true,
			centeredSlides: false,
			spaceBetween: 30,
			speed: 1400,
			autoplay: {
				delay: 4000,
				disableOnInteraction: true,
			},
			grabCursor: true,
			draggable: true,
			slidesPerView: 1,
			spaceBetween: 40,
			// init: false,
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 40,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
		};
	</script>
<?php else: ?>
	<div class="">
	<b><?= __('Testimonials Swiper', BB_TEXT_DOMAIN) ?></b>
		<blockquote class="text-sm flex">
			<div class="flex-shrink-0"><?= bb_icon('chat', 'bg-red-100 rounded-full p-3 w-14 h-14 grid place-items-center') ?></div>
			<ul>
				<?php foreach (get_field('testimonials') as $testimonial): ?>
					<li><?= $testimonial->post_title ?></li>
				<?php endforeach; ?>
			</ul>
		</blockquote>
	</div>
<?php endif; ?>
