var path = require('path');
var express = require('express');
var app = express();

var options = {
    index: "index.html"
  };

var dir = path.join(__dirname, '../frontend');


app.use(express.static(dir, options));

//404
app.use((req, res, next) => { 
  res.status(404).send( 
      "<h1>SCRAM KID!</h1>") 
}) 

app.listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});