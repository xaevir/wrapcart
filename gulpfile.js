'use strict';

var gulp = require('gulp')
  , less = require('gulp-less')
  , livereload = require('gulp-livereload')
  , util = require('gulp-util')
  , log = util.log
  , templateCache = require('gulp-angular-templatecache')
  , spritesmith = require('gulp.spritesmith')
  , jade = require('gulp-jade');


// change css to styles becasue have less in there
gulp.task('style', function () {
  log('Generate CSS files ' + (new Date()).toString());
  gulp.src('client/css/main.less')
    .pipe(less())
    .pipe(gulp.dest('./client/css'))
    .pipe(livereload());
});

gulp.task('template', function () {
  log('Generate Angular template files ');
  gulp.src('client/partials/**/*.html')
    .pipe(templateCache({module: 'wrapApp', root: '/partials'}))
    .pipe(gulp.dest('client/partials'));
});

gulp.task('jade', function() {
  gulp.src('client/partials/buy.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('client/partials/'));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('public/img/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    imgPath: '/img/sprite.png',
    engine: 'pngsmith',
    cssOpts: {
      cssClass: function (item) {
        return '.sprite-' + item.name;
      }
    }
  }));
  spriteData.img.pipe(gulp.dest('public/img/'));
  spriteData.css.pipe(gulp.dest('public/css/'));
});


gulp.task('watch', function() {
  gulp.watch('client/css/**/*.less', ['style']);
  gulp.watch('client/partials/**/*.html', ['template']);
  //gulp.watch('public/img/icons/*.png', ['sprite']);
});

// Default Task
gulp.task('default', ['watch']);

