var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var autoPrefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-clean-css');
var server = require('gulp-server-livereload');
var scsslint = require('gulp-scss-lint');
var uglify = require('gulp-uglifyjs');


gulp.task ('sass', function () {
    return sass('src/sass/*styles.scss')
    .pipe(concat('styles.css'))
    .pipe(autoPrefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(minifycss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function() {
    gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
    return gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img/'))
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filePath, cb) {
                    cb( !(/.DS_Store/.test(filePath)) );
                }
            },
            directoryListing: false,
            open: true,
            log: 'info',
            defaultFile: 'index.html'
        }));
});

gulp.task('test', function() {
  return gulp.src('src/sass/styles.scss')
    .pipe(scsslint({'config': 'lint.yml',}));
});

gulp.task('default', function() {
    gulp.start('pages', 'js', 'images', 'sass', 'fonts', 'webserver');
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/sass/*.scss', ['sass']);
});