const gulp = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const htmlMin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const pump = require("pump");
const browserSync = require("browser-sync").create();

//TASKS

//Browser Synch
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});

//Minify the html
gulp.task("minifyHtml", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

//Compile SASS and prefix CSS
gulp.task("sass", () => {
  gulp
    .src(["src/scss/**/*.scss"], ["sass"])
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(gulp.dest("src/assets/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

//CSS MINIFY
gulp.task("minify-css", () => {
  return gulp
    .src("src/assets/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/assets/css"));
});

//Javascript minify
gulp.task("compress", function(cb) {
  pump(
    [gulp.src("src/assets/js/*.js"), uglify(), gulp.dest("dist/assets/js")],
    cb
  );
});

//Image Minify
gulp.task("minifyImg", () => {
  gulp
    .src("src/assets/images/*")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("dist/assets/images"));
});

//copy fonts
gulp.task("fonts", function() {
  return gulp.src("src/assets/fonts/**/*").pipe(gulp.dest("dist/assets/fonts"));
});

//Wacth task
gulp.task(
  "serve",
  [
    "sass",
    "minifyHtml",
    "minify-css",
    "minifyImg",
    "compress",
    "fonts",
    "browserSync"
  ],
  () => {
    gulp.watch(["src/scss/**/*.scss"], ["sass"]);
    gulp.watch(["src/assets/css/*.css"], ["minify-css"]);
    gulp.watch(["src/*.html"], ["minifyHtml"]);
    gulp.watch(["src/assets/images/*"], ["minify"]);
    gulp.watch(["src/assets/js/*.js"], ["compress"]);
    gulp.watch(["src/assets/fonts/**/*"], ["fonts"]);
    gulp.watch("src/*.html", browserSync.reload);
    gulp.watch("src/assets/js/**/*.js", browserSync.reload);
  }
);

//Default Task
gulp.task("default", ["serve"]);
