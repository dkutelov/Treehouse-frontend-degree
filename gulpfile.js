var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

// Image compression
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

// File paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = ['public/js/jquery-3.1.1.min.js', 'public/js/skills.js', 'public/js/projects.js', 'public/js/script.js'];
var SCSS_PATH = 'public/scss/application.scss';
var IMAGES_PATH = 'public/img/**/*.{png,jpeg,jpg,svg,gif}';
// var IMAGES_PATH = 'public/images/**/*.{png,jpeg,jpg,svg,gif}';


// Sass task
gulp.task('styles', function () {
	console.log('Starting styles task');
	return gulp.src(SCSS_PATH)
		.pipe(plumber(function (err) {
			console.log('Styles Task Error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(autoprefixer())
		.pipe(livereload());
});


// JavaScript task
gulp.task('scripts', function(){
	return gulp.src(SCRIPTS_PATH)
		.pipe(plumber(function(err){
			console.log('Scripts Task Error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('scripts.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});


// Images compression task
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

gulp.task('default', ['images', 'styles', 'scripts'], function () {
	console.log('Starting default task');
});

// Watch task
gulp.task('watch', ['default'], function () {
	console.log('Starting watch task');
	require('./server.js');
	livereload.listen();
	gulp.watch('public/scss/**/*.scss', ['styles']);
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch(IMAGES_PATH, ['images']);
});



