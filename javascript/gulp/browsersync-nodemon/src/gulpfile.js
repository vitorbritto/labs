var gulp   = require('./gulp'),
    jshint = require('gulp-jshint'),
    client = require('browser-sync'),
    server = require('gulp-nodemon');

gulp.task('lint', function () {
    gulp.src('./**/*.js')
        .pipe(jshint());
})

gulp.task('browser-sync', function(){
    client.init(['*.html'], {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('nodemon', function () {
    server({
        script: 'server.js',
        ext: 'html js'
    })
    .on('change', ['lint'])
    .on('restart', function () {
        console.log('restarted!');
    });
});


gulp.task('default', ['nodemon', 'browser-sync', 'watch']);
