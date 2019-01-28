var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

browserSync.init({
          server: "app",
          injectChanges: true
      });

// Static Server + watching scss/html files
gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
    gulp.watch('app/*.html').on('change', browserSync.reload);
    // gulp.watch("app/*.html", browserSync.reload);
});
