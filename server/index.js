const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const webpack = require("webpack");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

const webpackConfigurer = require("../webpack/webpack.config");
const routers = require("./routes");

const isProd = process.env.NODE_ENV === "production";
var deployPath = process.env.DEPLOY_PATH || "";
const port = process.env.PORT || 3001;

// Setup mongoDB
mongoose.connect("mongodb://localhost/xs-event-countdown", {
});
mongoose.Promise = global.Promise;

// Setup server
const app = express();

const webpackConfig = webpackConfigurer(process.env.NODE_ENV);
const compiler = webpack(webpackConfig);

if(!isProd) {
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

let sess = {};
if (isProd) {//production
  app.use(
    cookieSession({
      name: "session",
      keys: ["suraneverguess"],
      // Cookie Options
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
  );
} else {
  sess = {
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: "suraneverguess",
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
  };
  app.use(session(sess));
  
}

app.use(bodyParser.json());
// app.use(deployPath,favicon(path.join(__dirname, "public", "", "favicon.ico")));
app.use(deployPath+"/api/events", routers.events);

// All remaining requests return the React app, so it can handle routing.
if (isProd) {
  // Static files
  app.use(deployPath, express.static(path.resolve(__dirname, "../dist")));
  // Serve app
  app.get(deployPath+"/*", function(request, response) {
    response.sendFile(path.resolve(__dirname, "../dist", "index.html"));
  });
} else {
  app.use("*", routers.views(compiler));
}

app.locals.port = port;
app.listen(port);