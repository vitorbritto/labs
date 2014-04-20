var gulp = require('./gulp')([
    'jshint',
    'browserify',
    'uglifyjs',
    'stylus',
    'images',
    'browsersync',
    'watch'
]);

gulp.task('build', ['jshint', 'browserify', 'uglifyjs', 'stylus', 'images']);
gulp.task('default', ['build', 'browsersync', 'watch']);
