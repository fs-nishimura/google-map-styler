'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var Notifier = require('node-notifier');
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',
    'gulp-notify',
    'browser-sync',
    'run-sequence',
    'gulp-plumber'
  ]
});

var config = {
  src: 'src/',
  dist: 'demo/',
  browserSupport: ['last 3 versions', 'ie >= 9', "ios 4", 'android >= 4']
};

gulp.task('js:dev', function() {
  return gulp.src([config.src +'js/config.js',config.src +'js/main.js'])
  .pipe(plumber({
            errorHandler: function(error){
             notify.onError("Error: <%= error.message %>")
             console.log(error.message); 
            }
  }))
  .pipe($.concat('googlemapstyler.js'))
  .pipe(gulp.dest(config.dist + 'js/'))
  .pipe(uglify())
  .pipe($.concat('googlemapstyler.min.js'))
  .pipe(gulp.dest(config.dist + 'js/'))
});


gulp.task('scss:dev', function() {
  return gulp.src(config.src + 'scss/{**/,}*.scss')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe($.sass({
      outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: config.browserSupport
    }))
    .pipe(gulp.dest(config.dist + 'css/'))
    .pipe($.browserSync.stream())
});

gulp.task('watch:dev', function() {
 gulp.watch(
    config.src + 'scss/{**/,}*.scss',
    ['scss:dev']
  );
  gulp.watch(
    config.src + 'js/{**/,}*.js',
    ['js:dev']
  );
  gulp.watch([config.dist + '{**/,}*.html'])
    .on("change", $.browserSync.reload);
});

gulp.task('default', function() {
  $.runSequence(
    'watch:dev'
  );  
});

