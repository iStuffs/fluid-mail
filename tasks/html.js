const { src, dest } = require('gulp');
const mjml = require('gulp-mjml');
const mjmlEngine = require('mjml');

const CONFIG = require('./config.json');

function html() {
  return src('./src/**/*.mjml')
    .pipe(mjml(mjmlEngine, CONFIG.mjml))
    .pipe(dest('./dist'));
}

module.exports = html;