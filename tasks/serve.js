const browserSync = require('browser-sync');

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './dist/',
    },
    port: '8080',
  });
  done();
}

module.exports = serve
