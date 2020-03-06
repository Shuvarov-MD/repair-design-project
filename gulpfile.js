'use strict';

const { src, dest, watch } = require('gulp'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create();


function minCSS() {
  return src('docs/css/style.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('docs/css'))
}

function serveSass() {
  return src('docs/sass/**/*.{scss,sass}')
      .pipe(sass())
      .pipe(autoprefixer({cascade: false}))
      .pipe(dest('docs/css'))
      .pipe(browserSync.stream());
}

function BrowserSync() {
  serveSass();
  browserSync.init({
    server: {
        baseDir: "docs"
    }
  });
  watch('docs/*.html').on('change', browserSync.reload);
  watch('docs/sass/**/*.{scss,sass}', serveSass);
  watch('docs/js/**/*.js').on('change', browserSync.reload);
}


exports.minCSS = minCSS;
exports.serve = BrowserSync;