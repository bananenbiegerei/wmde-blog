import * as TW from './tailwindhelpers';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import Swiper, { Navigation, Autoplay, Pagination, Mousewheel } from 'swiper';
import JSConfetti from 'js-confetti';
//import Swup from 'swup';

const canvas = document.getElementById('confetti-canvas');
const button = document.getElementById('confetti-button');

if (canvas || button) {
	const jsConfetti = new JSConfetti({ canvas: canvas || document.createElement('canvas') });

	setTimeout(() => {
		jsConfetti.addConfetti({
			confettiColors: ['#7A75DF', '#F3BD2C', '#5FA87D', '#BCDEC6', '#F9E48E', '#CED3F7', '#3E3877', '#743713', '#1A3A2B'],
		});
	}, 1500);

	if (button) {
		button.addEventListener('click', () => {
			jsConfetti.addConfetti({
				confettiColors: ['#7A75DF', '#F3BD2C', '#5FA87D', '#BCDEC6', '#F9E48E', '#CED3F7', '#3E3877', '#743713', '#1A3A2B'],
			});
		});
	}
}

// Init Alpine
window.Alpine = Alpine;
Alpine.plugin(focus);
Alpine.start();

// Make Tailwind config available outside of package
window.TW = TW;

// Initialize all swipers
// 'SwipersConfig' is defined in 'head.php', every swiper block adds its config in it.
var Swipers = {};
for (sel in SwipersConfig) {
	document.querySelectorAll(`${sel} .swiper-container, ${sel} .swiper`).forEach(container => {
		Swipers[container] = new Swiper(container, {
			// include modules
			modules: [Navigation, Autoplay, Pagination, Mousewheel],
			// enable mouse-wheel by default
			mousewheel: { forceToAxis: true },
			// include swiper-specific config
			...SwipersConfig[sel],
		});
	});
}
window.Swipers = Swipers;

// const swup = new Swup({
// 	containers: ['#main-content']
// });
