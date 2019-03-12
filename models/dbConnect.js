var mongoose = require("mongoose");
mongoose.set("debug",true);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

module.exports.Schema = require("./schema");