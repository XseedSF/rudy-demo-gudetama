const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const webpack = require("webpack");

const history = require('connect-history-api-fallback');
const webpackConfigurer = require("../webpack/webpack.config");

const isProd = process.env.NODE_ENV === "production";
console.log('isProd=',isProd);
var deployPath = process.env.DEPLOY_PATH || "";
const port = process.env.PORT || 3001;

// Setup server
const app = express();

app.use(bodyParser.json());
// app.use(deployPath,favicon(path.join(__dirname, "public", "", "favicon.ico")));
app.get(`${deployPath}/api/ping`, function(req, res) {
  res.send('ok');
  res.end();
});

// All remaining requests return the React app, so it can handle routing.
if (isProd) {
  // Static files
  app.use(deployPath, express.static(path.resolve(__dirname, "../dist")));
  // Serve app
  app.get(deployPath+"/*", function(request, response) {
    response.sendFile(path.resolve(__dirname, "../dist", "index.html"));
  });
} else {
  const webpackConfig = webpackConfigurer(process.env.NODE_ENV);
  const compiler = webpack(webpackConfig);
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  app.use(history());
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.locals.port = port;
app.listen(port);