var path = require('path');

module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
      path: __dirname,
      filename: "bundle.js",
  },
  module: {
    loaders: [
        {
            test:   /\.js/,
            loader: "babel?presets[]=es2015",
        }
    ],
    query: {
      plugins: ['transform-runtime'],
      presets: ['es2015', 'stage-2'],
    }
  }
}


