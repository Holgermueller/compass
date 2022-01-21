const gulp = require("gulp");
const less = require("less");
const bs = require("browser-sync").create();
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;

gulp.task("browser-sync", () => {
  bs.init({
    server: {
      baseDir: "/",
    },
  });
});

gulp.task("default", ["browser-sync", "watch"]);
