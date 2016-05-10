module.exports = {
  context: "/mnt/B/StackZone/js-monads",
  entry: {
    main: [
      'babel-polyfill',
      './app.js'
    ]
  },
  output: {
      path: "/mnt/B/StackZone/js-monads",
      filename: "monad.bundle.js",
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





