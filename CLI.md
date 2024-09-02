# CLI Commands
## Sass
```
sass ./public/src/scss/styles.scss ./public/dist/css/styles.min.css --style compressed --no-source-map
sass ./public/src/scss/styles.scss ./public/dist/css/styles.css -w
```

## TS
```
tsc ./public/src/ts/scripts.ts ./public/dist/js/sripts.min.js
tsc ./public/src/ts/scripts.ts ./public/dist/js/sripts.js -w
```

## Webpack
```
webpack,
webpack --config webpack.config.dev.js
```

## npm
```
npm install         // Install all packages
npm run server      // Run server
npm run css         // Build CSS library (minified)
npm run css-dev     // Build CSS library
npm run js          // Build JS library (minified)
npm run js-dev      // Build JS library
```