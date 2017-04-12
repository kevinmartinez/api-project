'use strict';

var gulp = require('gulp'); // Require Gulp module
var sass = require('gulp-sass'); // gulp-sass module
var browserSync = require('browser-sync');

// Gulp task, first argument is the task name to be run with the gulp command, second arg is a function that will run our code
gulp.task('compileSass', function() {
    // Get .scsss files from all folders in app/scss with a globbing pattern
    gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css')); // Where our compiled code will go
});
// Run 'gulp compileSass' in terminal

// Run Browsersync with server config
// TODO: put together a function that compiles sass AND reloads with browser-sync
gulp.task('browserSync', function(){
        browserSync({
        server: 'app',
        files: ['app/*.html', 'app/css/*.css', 'app/js/*.js']
    });
});