const gulp = require("gulp");
const less = require("less");
const bs = require("browser-sync").create();
const reload = require("browser-sync").reload;
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;
const { series, on, watch } = require("gulp");

const sync = () => {
  bs.init({
    watch: true,
    server: {
      baseDir: "./",
    },
  });
};

const lessen = () => {
  gulp.src("./css/*.less").pipe(less()).pipe(gulp.dest("./css"));
};

const minify = () => {
  gulp.src("/css/*.css").pipe(cleanCss()).pipe(gulp.dest("./css"));
};

const watchTasks = () => {
  gulp.watch("./").on("change", reload);
  gulp.watch("./css/*.less", series(lessen));
  gulp.watch("./css/*.css", series(minify));
};

exports.default = series(sync, lessen, watchTasks);
