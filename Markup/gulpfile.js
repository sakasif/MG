var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    bower = require('gulp-bower');

var config = {
     sassPath: './resources/sass',
     bowerDir: './bower_components' 
}

gulp.task('bower', function() { 
    return bower().pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('sass', function() {
    return sass(config.sassPath + '/uicreep.scss', { style: 'compressed',   // expanded, compressed
    		loadPath: [
                 './resources/sass',
                 config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                 config.bowerDir + '/font-awesome/scss',
             ] })
        .pipe(gulp.dest('./public/ui/stylesheet'));
        //gulp.src(['./bower_components/font-awesome/fonts/**/*']).pipe(gulp.dest('./public/ui'));
});


// Minifying the js
var uglify = require('gulp-uglify');
gulp.task('compress', function() {
  return gulp.src('./resources/jquery/*.js')
    //  .pipe(uglify())
    .pipe(gulp.dest('./public/ui/js'));
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/*.scss', ['sass']); 
	gulp.watch('./resources/jquery/*.js', ['compress']); 
});

  gulp.task('default', ['bower', 'sass', 'compress', 'watch']);
