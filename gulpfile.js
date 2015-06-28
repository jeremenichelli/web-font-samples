(function() {
    'use strict';

    var gulp = require('gulp'),
        less = require('gulp-less'),
        minifyCSS = require('gulp-minify-css'),
        rename = require('gulp-rename'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat-util');

    // pages slug
    var pages = [ 'fontfaceobserver', 'fontfaceonload', 'webfontloader' ];

    // paths
    var paths = {
        scripts: './src/scripts/',
        styles: './src/styles/site.less',
        includes: './_includes/'
    };

    // critical CSS task
    gulp.task('styles', function() {
        return gulp.src(paths.styles)
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(concat.header('<style>'))
            .pipe(concat.footer('</style>'))
            .pipe(rename({
                basename: 'criticalCSS',
                extname: '.html'
            }))
            .pipe(gulp.dest(paths.includes));
    });

    // fontfaceobserver task
    gulp.task(pages[0], function() {
        return gulp.src(paths.scripts + pages[0] + '/*.js')
            .pipe(concat('script.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./' + pages[0]));
    });

    // fontfaceonload task
    gulp.task(pages[1], function() {
        return gulp.src(paths.scripts + pages[1] + '/*.js')
            .pipe(concat('script.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./' + pages[1]));
    });

    // webfontloader task
    gulp.task(pages[2], function() {
        return gulp.src(paths.scripts + pages[2] + '/*.js')
            .pipe(concat('script.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./' + pages[2]));
    });

    gulp.task('scripts', pages);

    gulp.task('default', [ 'scripts', 'styles' ]);

    gulp.task('watch', function() {
        gulp.watch('src/**/*.less', [ 'styles' ]);
    });

})();