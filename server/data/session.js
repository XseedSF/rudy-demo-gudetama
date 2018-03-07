const session = require("express-session");
const cookieSession = require("cookie-session");

const mongoose = require("mongoose");
const MongoStoreConstructor = require("connect-mongo");

const isProd = process.env.NODE_ENV === "production";

let sess = {};
const sessionSecret = 'shhdontsayitoutloud'
if (isProd) {//production
  app.use(
    cookieSession({
      name: "session",
      keys: [sessionSecret],
      // Cookie Options
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
  );
} else {
  const MongoStore = MongoStoreConstructor(session);
  sess = {
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
  };
  app.use(session(sess));
}