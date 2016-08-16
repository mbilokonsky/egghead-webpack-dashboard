module.exports = {
  devtool: "inline-source-map",
  entry: __dirname + "/src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/"
  },
  devServer: {
    contentBase: "public/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + "/src/",
        loader: "babel-loader"
      }
    ]
  }
}
