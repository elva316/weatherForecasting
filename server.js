const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000

//parse data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //return json the client

//we make the connection with angular: front-end and back end
app.use(express.static(path.join(__dirname, "./dist")));


app.listen(port, function() {
  console.log("listening on port 8000");
})
