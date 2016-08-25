'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    scripts = require('./gulp/scripts'),
    styles = require('./gulp/styles'),
    exec = require('child_process').exec;
    var sass = require('gulp-sass');

require('require-dir')('./gulp');

// Task to compile sass files into css files
gulp.task('styles', function() {
    gulp.src(['views/**/*.scss', 'views/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/'));
});


gulp.task('serve', ['copyAssetstoSrc', 'styles'], function() {
    gulp.src(['views/**/*.js', 'views/**/*.html'])
        .pipe(gulp.dest('src'))
        .pipe($.uglify())
        .pipe($.notify('Copy of js and html: Done'));

    scripts.getJsFiles({
        dir: 'src',
        fileName: 'libs.min.js',
        files: scripts.bowerFiles
    });

    //gulp/styles
    styles.getCssFiles({
        reloadServer: false
    });

    // Start the $.express at the beginning of the task 
    $.express.run(['bin/www']);
    //live reload
    gulp.watch(['app.js', 'routes/**/*.js', 'views/**/*.jade'], $.express.run);
    gulp.watch(['views/**/*.scss', 'views/*.scss'], ['styles']);
    gulp.watch(['views/**/*.js', 'views/**/*.html'], ['copyFiletoSrc'])
});

gulp.task('copyAssetstoSrc', function() {
    gulp.src('views/assets/**/*')
        .pipe($.changed('src/assets'))
        .pipe(gulp.dest('src/assets'));
});


gulp.task('copyFiletoSrc', function() {
  gulp.src(['views/**/*.js', 'views/**/*.html'])
    .pipe(gulp.dest('src'))
    .pipe($.notify('File js copiati su SRC'));
})