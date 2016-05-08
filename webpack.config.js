module.exports = {
  context: "/mnt/B/StackZone/js-monads",
  entry: "./app.js",
  output: {
      path: "/mnt/B/StackZone/js-monads",
      filename: "monad.bundle.js"
  },
  module: {
    loaders: [
        {
            test:   /\.js/,
            loader: 'babel',
            include: "/mnt/B/StackZone/js-monads",
        }
    ],
    query: {
      plugins: ['transform-runtime'],
      presets: ['es2015'],
    }
  }
}






