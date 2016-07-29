var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync")


gulp.task("sass", function(){
	return gulp.src("scss/*.scss")
	.pipe(sass({
		outputStyle:'extended',
	}))
	.pipe(gulp.dest("css"));
});


gulp.task("watch", function(){
	browserSync.init({
        server: "."
    });
	
	gulp.watch("scss/*.scss", ["sass"]);
	gulp.watch("*.html").on('change', browserSync.reload);
});
