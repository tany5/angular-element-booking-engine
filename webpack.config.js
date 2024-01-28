const path = require("path");

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
