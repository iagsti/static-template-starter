let mix = require("laravel-mix");

mix.js("./src/js/app.js", "./dist/js/app.js");
mix.sass("./src/sass/app.scss", "./dist/css/app.css");
mix.browserSync({
  proxy: "127.0.0.1:9090",
});
