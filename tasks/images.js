const { src, dest, lastRun } = require('gulp');
const imagemin = require('gulp-imagemin');

function images() {
  return src('./src/assets/images/**/*.{gif,jpg,png,svg,jpeg}', { since: lastRun(images) })
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(dest('dist/assets/images'));
}

module.exports = images;