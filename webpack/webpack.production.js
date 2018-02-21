const webpack = require("webpack");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { apps } = require('../ecosystem.config')

var deployPath = apps[0].env_production.SURA_LEADS_DEPLOY_PATH
console.log("deployPath", deployPath)
const config = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SURA_LEADS_DEPLOY_PATH: JSON.stringify(deployPath)
      },
    }),
    new UglifyJSPlugin()
    //new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
