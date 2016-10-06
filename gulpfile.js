var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
        livereload: {
            enable: true,
            filter: function(fileName) {
                if (fileName.match(/.map$/)) {
                    return true;
                } else {
                    return true;
                }
            }
        },
        open: true,
        fallback: 'index.html',
        port: 9000
    }));
});

gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('default', ['set-prod-node-env']);

gulp.task('dev', ['set-dev-node-env', 'webserver']);
