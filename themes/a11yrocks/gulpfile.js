const gulp = require('gulp')
const cssnano = require('cssnano')
const mqpacker = require('css-mqpacker')
const scss = require('postcss-scss')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const postcss = require('gulp-postcss')

gulp.task('css', () => {
  var processors = [
    atImport,
    cssnext({ browsers: ['last 2 version'] }),
    nested,
    mqpacker,
    cssnano()
  ]
  return gulp.src('assets/styles/main.css')
    .pipe(postcss(processors, { syntax: scss }))
    .pipe(gulp.dest('build/css'))
})

gulp.task('default', ['css'])
