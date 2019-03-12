const express = require("express");
const cheerio = require("cheerio");
const PORT = process.env.PORT || 3000;
const expressHbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const scrapperRoutes = require("./routes/scrapper_routes");

// app.engine('handlebars',expressHbs(
//     {layoutsDir:'views/layouts/',
//     defaultLayout:'main',
//     extname:"handlebars"}));
// app.set("view engine","handlebars");
// app.set("views","views");

router.get("/scrap",function(req, res){
   res.sendFile('./views/index.html');
});

router.get("*", function(req, res){
res.send("<h1>Cannot find page..</h1>")
});


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, function(){
    console.log("listening on port..." + PORT);
});