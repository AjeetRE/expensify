const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });

module.exports = (env) => {
  const isProduction = env === "production";
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    mode: "development",
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /.js$/,
          exclude: /node_modules/,
        },
        {
          test: /.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true },
            },
          ],
        },
      ],
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    plugins: [CSSExtract],
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};