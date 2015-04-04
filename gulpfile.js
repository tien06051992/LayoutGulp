var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var changed = require('gulp-changed');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
   var files = [
      'app/*.html',
      'app/css/*.css',
      'app/img/*.png',
      'app/js/*.js',
      'app/less/*.less'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});

gulp.task('less', function () {
  return gulp.src('app/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('app/less/*.less', ['less']);
})


// gulp.task('clean', function() {
//     return gulp.src('build', {
//             read: false
//         })
//         .pipe(clean());
// });

gulp.task('default', ['browser-sync']
//    , function() {
//     gulp.watch('app/js/**/*.js', function(event) {
//         console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//         gulp.src('app/js/**/*.js')
//             .pipe(uglify())
//             .pipe(concat('all.min.js'))
//             .pipe(gulp.dest('build'));

//         gulp.src('app/css/**/*.css')
//             .pipe(uglify())
//             .pipe(concat('all.min.css'))
//             .pipe(gulp.dest('build'));
//         console.log('Done');
//     });
// }
);
