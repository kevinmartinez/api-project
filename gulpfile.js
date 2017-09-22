'use strict';

var gulp = require('gulp'); // Require Gulp module
var sass = require('gulp-sass'); // gulp-sass module
var browserSync = require('browser-sync');// BrowserSync for autorefreshing in browser
var concat = require('gulp-concat'); // Require the gulp concat module

// Gulp task, first argument is the task name to be run with the gulp command, second arg is a function that will run our code
gulp.task('compileSass', function() {
    // Get .scss files from all folders in app/scss with a globbing pattern
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));// Where the compiled code will go
});

// Concat js files
gulp.task('concatJS', function() {
    return gulp.src('./app/js/ajax.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'));
});

//Serve html files to dist
gulp.task('serveHTML', function() {
    return gulp.src('./app/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    // ** is a so called globbing pattern
    gulp.watch('./app/scss/**/*.scss', ['compileSass']);
    gulp.watch('./app/js/**/*.js', ['concatJS']);
    gulp.watch('./app/*.html', ['serveHTML'])
});

// Run Browsersync with server config
// TODO: put together a function that compiles sass AND reloads with browser-sync
gulp.task('browserSync', function(){
    browserSync({
        server: 'app',
        files: ['app/*.html', 'app/css/*.css', 'app/js/*.js']
    });
});

// Our build task
gulp.task('build', ['watch', 'browserSync'], function() {

});

// The dependencies are in the second arg in array form
gulp.task('default', ['build']);
