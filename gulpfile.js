const gulp = require("gulp");
const less = require("less");
const bs = require("browser-sync").create();
const reload = require("browser-sync").reload;
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;
const { series, on } = require("gulp");

const sync = () => {
  bs.init({
    server: {
      baseDir: "./",
    },
  });
};

const watch = () => {
  gulp.watch("./").on("change", reload);
};

exports.default = series(sync, watch);
