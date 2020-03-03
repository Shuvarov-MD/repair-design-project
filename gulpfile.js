'use strict';

const { src, dest, watch } = require('gulp'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  browserSync = require('browser-sync').create();

function miniCSS () {
  return src('src/css/style.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('src/css'))
}

function BrowserSync () {
  browserSync.init({
    server: {
        baseDir: "src"
    }
  });
  watch("src/*.html").on('change', browserSync.reload);
}

exports.miniCSS = miniCSS;
exports.BrowserSync = BrowserSync;