const gulp = require('gulp');
const mjml = require('gulp-mjml');
const browserSync = require('browser-sync');


function htmlTask () {
    return gulp.src('./src/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./dist'));
}

function refresh(done) {
    browserSync.init({
        server: {
            baseDir: './dist/',
            },
        port: '8080',
    });
    done();
}

gulp.task('watch', gulp.series(htmlTask, refresh, function() {
    gulp.watch('./src/*.mjml', gulp.series(htmlTask));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('watch'));