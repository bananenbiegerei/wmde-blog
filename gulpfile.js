require('dotenv').config();
const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack-stream');
const gulpEsbuild = require('gulp-esbuild');
const { createGulpEsbuild } = require('gulp-esbuild');
const gulpEsbuildIncremental = createGulpEsbuild({ incremental: true });
const browserSync = require('browser-sync').create();
const run = require('gulp-run');

function stylesDev() {
	return src('./src/scss/*.scss')
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				includePaths: ['node_modules'],
			}).on('error', sass.logError)
		)
		.pipe(postcss([tailwindcss('./tailwind.config.js')]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./css'))
		.pipe(browserSync.stream());
}

function stylesProd() {
	return src('./src/scss/*.scss')
		.pipe(sassGlob())
		.pipe(
			sass({
				includePaths: ['node_modules'],
			}).on('error', sass.logError)
		)
		.pipe(postcss([tailwindcss('./tailwind.config.js'), autoprefixer(), cssnano()]))
		.pipe(dest('./css'));
}

function esbuildDev() {
	return src(['./src/js/site.js', './src/js/editor.js'])
		.pipe(
			gulpEsbuildIncremental({
				bundle: true,
				sourcemap: true,
			})
		)
		.pipe(dest('./js'));
}

function esbuildProd() {
	return src('./src/js/site.js')
		.pipe(
			gulpEsbuild({
				outfile: 'site.js',
				sourcemap: false,
				bundle: true,
				minify: true,
				minifyWhitespace: true,
				minifyIdentifiers: true,
			})
		)
		.pipe(dest('./js'));
}

function packageTheme() {
	return run('./mktheme.sh', { verbosity: 0 }).exec();
}

function dev() {
	browserSync.init({
		proxy: process.env.BROWSERSYNC_PROXY_URL,
		open: process.env.BROWSERSYNC_OPEN_BROWSER == 'true',
		notify: false,
	});
	watch(['./src/scss/**/*.scss', './*blocks/**/*.scss'], stylesDev).on('change', browserSync.reload);
	watch('./src/js/**/*.js', esbuildDev).on('change', browserSync.reload);
	watch('./**/*.php', stylesDev).on('change', browserSync.reload);
	watch(['./img/**/*.*', './fonts/**/*.*']).on('change', browserSync.reload);
}

exports.default = series(parallel(stylesDev, esbuildDev), dev);
exports.build = series(stylesProd, esbuildProd);
exports.package = series(stylesProd, esbuildProd, packageTheme);
