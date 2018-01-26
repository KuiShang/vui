'use strict'

var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('build api.md', function () {
  return gulp.src('./components/*.md')
    .pipe(concat('api_new.md'))
    .pipe(gulp.dest('../'))
})

gulp.task('build', ['build api.md'])
