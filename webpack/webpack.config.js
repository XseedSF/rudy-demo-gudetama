const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Merge = require("webpack-merge");
const envConfigDev = require(`./webpack.development.js`);
const envConfigProd = require(`./webpack.production.js`);

const { apps } = require('../ecosystem.config')
module.exports = function(env) {
  var deployPath = (env == 'production' ? apps[0].env_production.DEPLOY_PATH : "") + "/";

  const config = {
    entry: ["./app/index.js"],
    output: {
      path: path.join(__dirname, "../dist"),
      publicPath: deployPath,
      filename: "[name].bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            require.resolve("style-loader"),
            {
              loader: require.resolve("css-loader"),
              options: {
                importLoaders: 1
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader",
          options: {
            limit: 25000,
            name: "./app/components/assets/img/[name].[ext]"
          }
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./server/public/index.html",
        favicon: "./server/public/favicon.ico"
      })
    ]
  };
  
  const envConfig = env == 'production' ? envConfigProd : envConfigDev
  return Merge(config, envConfig);
};
