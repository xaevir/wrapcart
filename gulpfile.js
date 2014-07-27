'use strict';

var gulp = require('gulp')
  , less = require('gulp-less')
//  , rimraf = require('gulp-rimraf')
  , livereload = require('gulp-livereload')
  , gutil = require('gulp-util')
  , rename = require('gulp-rename')
  , preprocess = require('gulp-preprocess')
//  , templateCache = require('gulp-angular-templatecache')
  , changed = require('gulp-changed')
  , jade = require('gulp-jade')
  , concat = require('gulp-concat')
  , filesize = require('gulp-filesize')
  , uglify = require('gulp-uglify')
  , imagemin = require('gulp-imagemin')
  , pngquant = require('imagemin-pngquant')
  , minifyCSS = require('gulp-minify-css')
  , plumber = require('gulp-plumber')
  , notify = require('gulp-notify')
  , ngAnnotate = require('gulp-ng-annotate')
  , sourcemaps = require('gulp-sourcemaps');


gulp.task('copy', function() {
  gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('compress', function() {
  gulp.src([
    'app/bower_components/jquery/jquery.js',
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-animate/angular-animate.js',
    'app/bower_components/angular-messages/angular-messages.js',
    'app/bower_components/angular-route/angular-route.js',
    'app/js/app.js',
    'app/js/controllers/mainController.js',
    'app/js/controllers/buyController.js',
    'app/js/directives.js',
    'app/js/filters.js',
    'app/js/animations.js',
    'app/js/product-browser.js',
    'app/js/submit.js',
    'app/bower_components/owl.carousel/dist/owl.carousel.js',
    'app/bower_components/fancybox/source/jquery.fancybox.js',
    'app/bower_components/fancybox/source/helpers/jquery.fancybox-media.js',
    'app/bower_components/greensock/src/minified/TweenMax.min.js',
    'app/bower_components/angular-strap/dist/angular-strap.js',
    'app/bower_components/stringjs/lib/string.min.js',
    'app/bower_components/snap.svg/dist/snap.svg-min.js',
    'app/bower_components/multiline/browser.js'
  ])
    .pipe(filesize())
    .pipe(ngAnnotate())
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))  
    .pipe(gulp.dest('dist/js'));
});

gulp.task('imageSvg', function() {
  return gulp.src('app/img/buy-title.svg')
    .pipe(imagemin({
        svgoPlugins: [{cleanupIDs: false, removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/svg'));
});



gulp.task('images', function() {
  return gulp.src('app/img/**/*')
    .pipe(changed('dist/img'))
    .pipe(imagemin({
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});


gulp.task('css', function () {
  gulp.src('app/css/main.less')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('app/css'))
    .on('error', gutil.log);
});


gulp.task('jade', function() {
  gulp.src(['views/**/*.jade', '!views/layout.jade'])
    .pipe(changed('dist/partials', {extension: '.html'}))
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('app/partials'))
    .pipe(gulp.dest('dist/partials'));

  // create index production
  gulp.src('views/layout.jade')
    .pipe(rename('index.jade'))
    .pipe(changed('dist/partials', {extension: '.html'}))
    .pipe(jade({pretty: true}))
    .pipe(preprocess({context: { NODE_ENV: 'production'}}))
    .pipe(gulp.dest('dist/'));

  // create index development
  gulp.src('views/layout.jade')
    .pipe(rename('index.jade'))
    .pipe(changed('app/partials', {extension: '.html'}))
    .pipe(jade({pretty: true}))
    .pipe(preprocess({context: { NODE_ENV: 'development'}}))
    .pipe(gulp.dest('app/'));
});


gulp.task('jadeToHtmlTemplate', function() {
  gulp.src('app/js/templates/**/*.jade')
    .pipe(changed('app/js/templates', {extension: '.html'}))
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('app/js/templates'));
});


//  gulp.task('htmlToNg', ['jadeToHtml'], function () {
//    gulp.src('dist/partials/**/*.html')
//      .pipe(templateCache({module: 'wrapApp', root: '/partials'}))
//      .pipe(gulp.dest('dist/partials'))
//      .pipe(gulp.dest('app/partials'));
//  });



gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/css/**/*.less', ['css']).on('change', livereload.changed);
  gulp.watch('views/**/*.jade', ['jade']).on('change', livereload.changed);
  gulp.watch('app/js/templates/**/*.jade', ['jadeToHtmlTemplate']).on('change', livereload.changed);
  gulp.watch('app/js/**/*.js').on('change', livereload.changed);
});

// Default Task
gulp.task('default', ['watch']);

