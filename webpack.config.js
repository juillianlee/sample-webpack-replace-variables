const webpack = require("webpack");


const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  mode: "production",
  entry: ["./index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      $_APIURL: JSON.stringify(IS_PROD ? "URL DE PRODUÇÃO AQUI" : "URL DE HML AQUI"),
    }),
  ],
};
