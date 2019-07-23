const { series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync');


/* Tasks */
const {
  html,
  images,
  serve,
} = require('./tasks');

const watcher = series(parallel(html, images), serve, () => {
    watch('./src/*.mjml', series(html));
    watch('./src/**/*.{gif,jpg,png,svg,jpeg}', series(images));
    watch('./dist/*.html').on('change', browserSync.reload);
});

/* Exports */
module.exports = {
  default: series(watcher),
};