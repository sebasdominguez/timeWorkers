module.exports = {
  mode: "development",
  entry: __dirname + "/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/env"],
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },

  devtool: "source-map",
};
