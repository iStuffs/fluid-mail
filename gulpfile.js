const gulp = require('gulp');
const mjml = require('gulp-mjml');
const mjmlEngine = require('mjml');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');

const CONFIG = require('./config.json');

function htmlTask () {
    return gulp.src('./src/**/*.mjml')
    .pipe(mjml(mjmlEngine, CONFIG.mjml))
    .pipe(gulp.dest('./dist'));
}

function imgTask() {
    return gulp.src('./src/assets/imgages/**/*.{gif,jpg,png,svg,jpeg}')
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(gulp.dest('dist/assets/imgages'));
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
    gulp.watch('./dist/**/*.html', gulp.series(imgTask));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('watch'));