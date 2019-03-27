var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var server = require("gulp-server-livereload");
var pug = require("gulp-pug");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var minifycss = require("gulp-minify-css");

var filesass = "src/assets/sass/*.scss";
var filescript = "src/assets/js/*.js";
var filepug = "src/assets/views/*.pug";


gulp.task("server", () => {
    gulp.src("./")
        .pipe(server({
            livereload : true,
            directoryListing : true,
            open : true,
        }));
});


gulp.task("sass", () => {
    gulp.src(filesass)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest("dist/assets/css"));
});

gulp.task("script", () => {
    gulp.src(filescript)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat("app.js"))
        .pipe(uglify())
        .on('error', function (err) { 
            console.log(err);
        })
        .pipe(gulp.dest("dist/assets/js/"));
});

gulp.task("pug", () => {
    gulp.src(filepug)
        .pipe(pug())
        .pipe(gulp.dest("dist/"));
});

gulp.task('default', () => {
    gulp.run("server");
    // Sass
    gulp.watch(filesass, () => {
        gulp.run("sass");
    });
    
    // Javascript
    gulp.watch(filescript, () => {
        gulp.run("script");
    });
    
    // Pug
    gulp.watch(filepug, () => {
        gulp.run("pug");
    });

});
