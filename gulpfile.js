var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var path = {
  HTML: 'src/index.html',
  MainCSS: 'src/css/main.css',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: './src/js/App.js'
};

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('copycss', function() {
  gulp.src(path.MainCSS)
    .pipe(gulp.dest(path.DEST));  
});

gulp.task('replaceHTML', function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'build/' + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
    gulp.watch(path.MainCSS, ['copycss']);
    gulp.watch(path.HTML, ['copy']);

    var watcher  = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, 
        packageCache: {}, 
        fullPaths: true
    }));
    
    return watcher.on('update', function () {
        watcher.bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC))
        console.log('Updated');
    })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('build', function(){
    browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify]
    })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('production', ['copycss','replaceHTML', 'build']);
gulp.task('default', ['watch']);


// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var react = require('gulp-react');
// var htmlreplace = require('gulp-html-replace');

// var path = {
//   HTML: 'src/index.html',
//   ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
//   JS: ['src/js/*.js', 'src/js/**/*.js'],
//   MINIFIED_OUT: 'build.min.js',
//   DEST_SRC: 'dist/src',
//   DEST_BUILD: 'dist/build',
//   DEST: 'dist'
// };

// gulp.task('transform', function(){
//   gulp.src(path.JS)
//     .pipe(react())
//     .pipe(gulp.dest(path.DEST_SRC));
// });

// gulp.task('copy', function(){
//   gulp.src(path.HTML)
//     .pipe(gulp.dest(path.DEST));
// });

// gulp.task('watch', function(){
//   gulp.watch(path.ALL, ['transform', 'copy']);
// });

// gulp.task('replaceHTML', function(){
//   gulp.src(path.HTML)
//     .pipe(htmlreplace({
//       'js': 'build/' + path.MINIFIED_OUT
//     }))
//     .pipe(gulp.dest(path.DEST));
// });

// gulp.task('build', function(){
//   gulp.src(path.JS)
//     .pipe(react())
//     .pipe(concat(path.MINIFIED_OUT))
//     .pipe(uglify(path.MINIFIED_OUT))
//     .pipe(gulp.dest(path.DEST_BUILD));
// });


// gulp.task('default', ['watch']);
// gulp.task('production', ['replaceHTML', 'build']);

