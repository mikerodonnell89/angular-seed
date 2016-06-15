var gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    connect = require('gulp-connect');

gulp.task('build-less', function(){
    return gulp.src('less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function() {
    gulp.watch('./less/*.less', ['build-less']);
});

gulp.task('connect', function() {
    connect.server({
        root: ['app'],
        port: 8000,
        livereload: true
    });
});

gulp.task('default', [
    'build-less',
    'connect',
    'watch'
]);