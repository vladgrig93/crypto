
//1 file
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
app.use(session({secret: "SuperduperSecret"}));

app.use(bodyParser.json());//bodyparser is now json instead of URL encoded

app.use(express.static(path.join(__dirname, 'public', 'dist')));


require("./server/config/mongoose.js");

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(7000, function() {
    console.log("listening on port 7000");
})
