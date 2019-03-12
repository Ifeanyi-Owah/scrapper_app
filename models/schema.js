var mongoose = require("mongoose");
var scrapperSchema = new mongoose.Schema({
    headline: {
        type:"String",
        require:"Headline cannot be blank"
    },

    summary: {
        type:"String",
        require:"summary cannot be blank"
    },

    url: {
        type:"String",
        require:"URL cannot be blank"
    },
});

var Schema = mongoose.model("Schema", scrapperSchema);
module.exports = Schema;