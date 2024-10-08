// import * as TW from './tailwindhelpers';
// window.TwConfig = TW.fullConfig;
//
// const themeColors = ['red-50', 'primary-50', 'white', 'gray'];
//
// jQuery(document).ready(function ($) {
// 	// Set color picker palette to TW theme
// 	acf.add_filter('color_picker_args', function (args, field) {
// 		var h = (x) =>
// 			'#' +
// 			x
// 				.match(/\d+/g)
// 				.map((y = (z) => (+z < 16 ? '0' : '') + (+z).toString(16)))
// 				.join('');
// 		args.palettes = [];
// 		for (var color of themeColors) {
// 			var colorValue = getComputedStyle(document.body).getPropertyValue(`--colors-${color}`);
// 			if (colorValue === '') {
// 				var index;
// 				[color, index] = color.split('-');
// 				if (typeof index === 'undefined') {
// 					index = 'DEFAULT';
// 				}
// 				colorValue = TwConfig.theme.colors[color][index];
// 			} else {
// 				colorValue = h(colorValue);
// 			}
// 			args.palettes.push(colorValue);
// 		}
// 		return args;
// 	});
// });
