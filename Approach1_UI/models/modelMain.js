module.exports.get_addHotels = function(req, res){

    var jsonData = require('../Hotel.json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbase = db.db("hotelDB");
        dbase.createCollection("hotel", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            dbase.collection("hotel").insertMany(jsonData, function (err, result) {
                if (err) throw err;
                console.log("Hotels Inserted");
            });

        });
    });

    res.send('Successfully inserted hotel data into hotelDB database');
};
module.exports.get_addCombined = function(req, res){

    var jsonData = require('../combined.json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbase = db.db("hotelDB");
        dbase.createCollection("combined", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            dbase.collection("combined").insertMany(jsonData, function (err, result) {
                if (err) throw err;
                console.log("Hotels Inserted");
            });

        });
    });

    res.send('Successfully inserted hotel data into hotelDB database');
};
module.exports.post_recommendation = function(req, res){

  var db = req.db;
  var collection = db.get('combined');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hotelDB");
  dbo.collection("combined").find({}, {}).toArray(function(err, hotels) {
    if (err) throw err;
//    console.log(hotels);
    db.close();

for (var i= 0; i < hotels.length; i++) {

  var count = 0;
  // Create a new column called c_rating
  hotels[i]["c_rating"] = 0;

  //Create a new column that will compare average score of hotel with overall average hotel Score
  //hotels[i]["diff_avg"] = Math.round(hotels[i]["Average_Score"] - 8.4).toFixed(2);
  hotels[i]["diff_avg"] = (hotels[i]["Average_Score"] - 8.4).toFixed(2);
  hotels[i]["diff_pop"] = (hotels[i]["Total_Number_of_Reviews"] - 2748).toFixed(2);
  //var numb = 123.23454;
  //numb = numb.toFixed(2);

  recommendation = "Personnalized Options: ";

  if (req.body.breakfast_good == "1") {
    hotels[i]["c_rating"] += hotels[i]["breakfast_good"];
    recommendation = recommendation + " Great Breakfast; "
    count += 1;
  }

  if (req.body.comfortable_bed == "1") {
    hotels[i]["c_rating"] += hotels[i]["comfortable_bed"];
    recommendation = recommendation + " Comfortable Bed; "
    count += 1;
  }

  if (req.body.great_location == "1") {
    hotels[i]["c_rating"] += hotels[i]["great_location"];
    recommendation = recommendation + " Great Location; "
    count += 1;
  }

  if (req.body.metro_station == "1") {
    hotels[i]["c_rating"] += hotels[i]["metro_station"];
    recommendation = recommendation + " Close to Metro Station; "
    count += 1;
  }

  if (req.body.minute_walk == "1") {
    hotels[i]["c_rating"] += hotels[i]["minute_walk"];
      recommendation = recommendation + " Minute Walk; "
    count += 1;
  }

  if (req.body.room_clean == "1") {
    hotels[i]["c_rating"] += hotels[i]["room_clean"];
      recommendation = recommendation + " Cleanliness of Room; "
    count += 1;
  }

  if (req.body.staff_friendly == "1") {
    hotels[i]["c_rating"] += hotels[i]["staff_friendly"];
      recommendation = recommendation + " Friendly Staff; "
    count += 1;
  }

  if (req.body.tube_station == "1") {
    hotels[i]["c_rating"] += hotels[i]["tube_station"];
    recommendation = recommendation + " Close to tube station; "
    count += 1;
  }

  if (req.body.value_money == "1") {
    hotels[i]["c_rating"] += hotels[i]["value_money"];
      recommendation = recommendation + " Best Value for your money; "
    count += 1;
  }

  if (req.body.walking_distance == "1") {
    hotels[i]["c_rating"] += hotels[i]["walking_distance ;"];
      recommendation = recommendation + " Minute Walk"
    count += 1;
  }

  if (count != 0) {
    hotels[i]["c_rating"] /= count;
  }
}

// racHotels = a new array of reccomended hotels since we are slicing. We want the last 5 in
// descending order because the highest numbers are at the buttom. Therefore -5.

var racHotels = hotels.sort(function(a,b) {return a["c_rating"] - b["c_rating"]}).slice(-5);

racHotels.reverse();

    res.render('displayRecommendations.hbs', {

        pageTitle: "Top 5 recommendations",
        recommendation: recommendation,
        docs: racHotels,
        currentYear: new Date().getFullYear()
    })

  //  console.log(re"Hotel_Name[2] is " + sult[2].address);
  });
});

};
