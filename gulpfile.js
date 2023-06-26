const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin');

function cssMinify() {
  return gulp.src('./public/css/*.css')
      .pipe(cssmin())
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('./public/css'))
}


exports.cssMinify = cssMinify