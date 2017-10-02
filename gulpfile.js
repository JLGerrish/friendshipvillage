var themePath = 'src/wp-content/themes/friendshipvillage/lib';
var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('less', function() {
    gulp.src([themePath+'/less/style.less', themePath+'/less/homepage.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(themePath+'/css'))
});

gulp.task('compress', function () {
    gulp.src([themePath+'/js/*.js', '!'+themePath+'/js/*.min.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(themePath+'/js'))
});

gulp.task('minify-css', function() {
    gulp.src([themePath+'/css/style.css', themePath+'/css/homepage.css'])
        //.pipe(sourcemaps.init())
        .pipe(cleanCSS())
        //.pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(themePath+'/css'));
});

gulp.task('default', ['less', 'minify-css', 'compress'], function() {
    gulp.watch(themePath+'/less/*.less', ['less', 'minify-css']);
    gulp.watch([themePath+'/js/*.js', '!'+themePath+'/js/*.min.js'], ['compress']);
    //gulp.watch([themePath+'/css/*.css', '!'+themePath+'/css/*.min.css'], ['minify-css']);
})