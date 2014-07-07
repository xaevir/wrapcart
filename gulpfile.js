'use strict';

var gulp = require('gulp')
  , less = require('gulp-less')
  , rimraf = require('gulp-rimraf')
  , livereload = require('gulp-livereload')
  , util = require('gulp-util')
  , log = util.log
  , templateCache = require('gulp-angular-templatecache')
  , changed = require('gulp-changed')
  , jade = require('gulp-jade');

var SRC = 'app/';
var DEST = 'dist/';


gulp.task('css', function () {
  gulp.src(SRC+'css/main.less')
    .pipe(less())
    .pipe(gulp.dest(DEST+'css/'))
    .pipe(gulp.dest(SRC+'css/'));
});

gulp.task('jadeToHtml', function() {
  var DEST = 'dist/partials';

  gulp.src(['app/partials/**/*.jade', '!app/partials/layout.jade'])
    .pipe(changed(DEST))
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(DEST));
});

gulp.task('htmlToNg', ['jadeToHtml'], function () {
  gulp.src('dist/partials/**/*.html')
    .pipe(templateCache({module: 'wrapApp', root: '/partials'}))
    .pipe(gulp.dest('dist/partials'))
    .pipe(gulp.dest('app/partials'));
});

gulp.task('template', ['jadeToHtml', 'htmlToNg']);

gulp.task('build', function() {
  /* use rimraf to clean directory*/ 
  /* http://stackoverflow.com/questions/21546931/use-gulp-to-select-and-move-directories-and-their-files */
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/css/**/*.less', ['css']).on('change', livereload.changed);
  gulp.watch('app/partials/**/*.jade', ['template']).on('change', livereload.changed);
});

// Default Task
gulp.task('default', ['watch']);

