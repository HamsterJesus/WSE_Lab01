var path = require('path');
var express = require('express');
var app = express();

var options = {
    index: "index.html"
  };

var dir = path.join(__dirname, '../frontend');

app.get('/api', function(req, res){
  res.send("Yes we have an API now");
});


app.get('/api/getPrice', function(req, res){
  // Copied from front end
  var s = req.query.salary;
  var d = req.query.days;
  console.log("Calculating price")
  console.log(s)
  console.log(d)
  let finalPrice = 0;
  dailyRate = s/365;
  finalPrice = Math.round(dailyRate * d);
  
  if (finalPrice>=100){
    finalPrice = Math.floor(finalPrice/100)*100
  } else {
    finalPrice = Math.round(finalPrice)
  }

  res.send(""+finalPrice)
  console.log("API Response:", finalPrice);
});

app.use(express.static(dir, options));

//404
app.use((req, res, next) => { 
  res.status(404).send( 
      "<h1>SCRAM KID!</h1>");
});

app.listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});