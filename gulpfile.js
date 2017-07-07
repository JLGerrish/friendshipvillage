var sourcemaps = require('gulp-sourcemaps');

// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('src/wp-content/themes/fv-firebird/lib/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('src/wp-content/themes/fv-firebird/lib/css'))
});

gulp.task('default', ['less'], function() {
    gulp.watch('src/wp-content/themes/fv-firebird/lib/less/*.less', ['less']);
})