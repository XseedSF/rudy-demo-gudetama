const mongoose = require("mongoose");
const ConnectMongo = require("connect-mongo")

// Setup mongoDB
mongoose.connect("mongodb://localhost/xs-event-countdown", {});
mongoose.Promise = global.Promise;

module.exports = ConnectMongo;