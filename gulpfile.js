'use strict';

const { src, dest, watch, series } = require('gulp'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minify = require('gulp-minify'),
  htmlmin = require('gulp-htmlmin'),
  tinypng = require('gulp-tinypng-compress'),
  browserSync = require('browser-sync').create();

/*
function minCSS() {
  return src('docs/css/style.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('docs/css'))
}*/

function serveSass() {
  return src('docs/sass/**/*.{scss,sass}')
      .pipe(sass())
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']}, { cascade: true }))
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

function buildCSS() {
  return src('docs/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/css'));
}

function buildJS(done) {
  src(['docs/js/**/*.js', '!docs/js/**/*.min.js'])
  .pipe(minify({
    ext:{
        min:'.min.js'
    },
  }))
  .pipe(dest('dist/js'));
  src('docs/js/**/*.min.js').pipe(dest('dist/js'));
  done();
}

function htmlBuild() {
  return src('docs/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function phpBuild() {
  return src('docs/php/**/*.php')
    .pipe(dest('dist/php'));
}

function fontBuild() {
  return src('docs/fonts/**/*')
    .pipe(dest('dist/fonts'));
}

function imgBuild(done) {
  src('docs/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: '1g1Zc3fnKhsRRvsPTpmJ0Rb02CFfYhlG',
        }))
        .pipe(dest('dist/img'));
        src('docs/img/**/*.{svg,ico}')
        .pipe(dest('dist/img'));
        done();
}

exports.build = series(buildJS, htmlBuild);
exports.serve = BrowserSync;