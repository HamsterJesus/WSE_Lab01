var path = require('path');
var express = require('express');
var app = express();

//mongo set up
const{MongoClient} = require("mongodb");
const uri = "mongodb://127.0.0.1:27017"

var options = {
    index: "index.html"
  };

var dir = path.join(__dirname, '../frontend');

app.get('/api', function(req, res){
  res.send("Yes we have an API now");
});


app.get('/api/getPrice', function(req, res){
  // Copied from front end
  var n = req.query.quoteName;
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

//further database set up
const client = new MongoClient(uri);
async function run(){
  try{
    await client.connect(); //connect to server

    //verify connection
    await client.db("admin").command({ping: 1});
    console.log("So connected to server actually");
    console.log("starting db stuff")

    //test querys in theory
    var dbo = client.db("mydb");
    var myobj = {quoteName: n, salary: s, days: d};
    await dbo.collection("quotes").insertOne(myobj, function(err, res){
      if(err){
        console.log(err);
        throw err;
      }
      console.log("1 quote inserted")
    })
    console.log("in theory db query!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);


app.listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});

