'use strict'

var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('build api.md', buildFile)

gulp.task('build', ['build api.md'])

gulp.watch('./components/*.md', buildFile)

function buildFile () {
  return gulp.src('./components/*.md')
  .pipe(concat('api.md'))
  .pipe(gulp.dest('./'))
}
