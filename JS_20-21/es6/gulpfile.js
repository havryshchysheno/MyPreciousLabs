var gulp = require('gulp');
var server = require('gulp-server-livereload');
var uglify = require('gulp-uglifyjs');
var concat  = require('gulp-concat');
var babel = require('gulp-babel');
var jasmine = require('gulp-jasmine');

gulp.task ('css', function () {
    return gulp.src('src/css/style.css')
            .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function() {
    gulp.src([
            'src/js/jquery-2.2.4.min.js',
            'src/js/lodash.min.js',
            'src/js/script.js'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
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

gulp.task('default', function() {
    gulp.start('pages', 'js', 'css', 'webserver');
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/css/*.css', ['css']);
});