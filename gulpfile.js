'use strict';

const { src, dest, watch } = require('gulp'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create();


function minCSS() {
  return src('src/css/style.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('src/css'))
}

function serveSass() {
  return src('src/sass/**/*.{scss,sass}')
      .pipe(sass())
      .pipe(autoprefixer({cascade: false}))
      .pipe(dest('src/css'))
      .pipe(browserSync.stream());
}

function BrowserSync() {
  serveSass();
  browserSync.init({
    server: {
        baseDir: "src"
    }
  });
  watch('src/*.html').on('change', browserSync.reload);
  watch('src/sass/**/*.{scss,sass}', serveSass);
  watch('src/js/**/*.js').on('change', browserSync.reload);
}


exports.minCSS = minCSS;
exports.serve = BrowserSync;