'use strict';

var gulp = require('gulp'),
    sync = require('browser-sync'),
    sass = require('gulp-ruby-sass');

gulp.task('browser-sync', function(){
    sync.init(['*.html'], {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('sass', function () {
    gulp.src('./assets/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['browser-sync', 'sass'], function(){
    gulp.watch('./assets/sass/*.sass', ['sass']);
});
