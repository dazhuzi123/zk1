var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('copy', function() {
    gulp.src('./index.html')
        .pipe(gulp.dest('./app'));
})
gulp.task('uglify', function(){
    gulp.src('./js/scripts/script1.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/dist/script1.js'))
})
gulp.task('minCss', function(){
	gulp.src('./*.css')
	.pipe(mincss())
	.pipe(gulp.dest('./css/'))
});

gulp.task('minJs',function(){
	gulp.src('./*.js')
	.pipe(mincss())
	.pipe(gulp.dest('./js/'));
});
// gulp.task("concat", function(){
//     gulp.src([".js/srcipts/norepeat1.js", ".js/srcipts/norepeat2.js"]).pipe(concat("script.js")).pipe(gulp.dest("./js/dist"))
// })

gulp.task('default', ['minCss', 'minJs']);
https://github.com/dazhuzi123?tab=repositories