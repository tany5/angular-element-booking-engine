const path = require("path");
const ASSET_PATH = process.env.ASSET_PATH || '';
module.exports = {
  entry: {
    "bundle.js": [
      path.resolve(
        __dirname,
        "./dist/booking-web-component/browser/polyfills.js"
      ),
      path.resolve(
        __dirname,
        "./dist/booking-web-component/browser/styles.css"
      ),
      path.resolve(__dirname, "./dist/booking-web-component/browser/main.js"),
    ],
  },
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "dist/booking-web-component/browser/"),
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
