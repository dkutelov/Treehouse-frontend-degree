//  Load gulp and modules
var gulp = require('gulp');
// Concat and minify
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
// Image optimization
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var livereload = require('gulp-livereload');

//  Paths
var DIST_PATH = 'public/dist';
var IMAGES_PATH = 'public/img/**/*.{png,jpeg,jpg,svg,gif}';
var SCRIPTS_PATH = [ 'public/js/jquery.js',
					'public/js/fastclick.js',  
					'public/js/foundation.js',
					'public/js/foundation.equalizer.js',
					'public/js/foundation.reveal.js',
					'public/js/scripts.js'];
var CSS_PATH 	= [ 'public/css/normalize.css',
					'public/css/foundation.css',  
					'public/css/basics.css',
					'public/css/menu.css',
					'public/css/hero.css',
					'public/css/photo-grid.css',
					'public/css/modals.css',
					'public/css/footer.css',
					'public/css/sprites.css'
					];

// Tasks

// CSS concat and minify
gulp.task('styles', function(){
	return gulp.src(CSS_PATH)
	.pipe(concat('styles.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest(DIST_PATH))
	.pipe(livereload());
});


// Scripts
gulp.task('scripts', function(){
	return gulp.src(SCRIPTS_PATH)
	.pipe(uglify())
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest(DIST_PATH))
	.pipe(livereload());
});


// Images
gulp.task('images', function(){
	return gulp.src(IMAGES_PATH)
	.pipe(imagemin([
		imagemin.gifsicle(),
		imagemin.jpegtran(),
		imagemin.optipng(),
		imagemin.svgo(),
		imageminPngquant(),
		imageminJpegRecompress()
	]))
	.pipe(gulp.dest(DIST_PATH + '/img'))
	.pipe(livereload());
});

// Default task
gulp.task('default', ['images', 'styles', 'scripts'], function () {
	console.log('Starting default task');
});

// Watch task
gulp.task('watch', ['default'], function () {
	console.log('Starting watch task');
	require('./server.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch(CSS_PATH, ['styles']);
	gulp.watch(IMAGES_PATH, ['images']);
});