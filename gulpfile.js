const gulp         = require('gulp'),
      mjml         = require('gulp-mjml'),
      browserSync  = require('browser-sync');


gulp.task('htmlTask', function () {
    return gulp.src('./src/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./dist'))
})

gulp.task('refresh', function() {
    browserSync.init({
      server: {
        baseDir: "./dist/"
      },
      port: '8080'
    });
  });

  gulp.task('watch', ['htmlTask', 'refresh'], function () {
    gulp.watch('./src/*.mjml', ['htmlTask']);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
  });
  
  gulp.task('default', ['watch']);