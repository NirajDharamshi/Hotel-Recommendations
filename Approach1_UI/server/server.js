const express = require('express');
const hbs = require('hbs');
let cors = require('cors')
let path = require('path');
let bodyParser = require('body-parser');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let lineReader = require('line-reader');
let index = require('../routes/index');

//MongoDB code
let modelMain = require("../models/modelMain");
let mongo = require('mongodb');
let monk = require('monk');
let db = monk('localhost:27017/hotelDB');
let app = express();

app.use(cors());
hbs.registerPartials(__dirname + '../../views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '../../public'));

//MongoDB initialization code
app.use(function(req, res, next)
{
    req.db = db;
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(session( {secret: "String for encrypting cookies." } ));
app.use(cookieParser());

app.use('/',index);

module.exports = app;

app.listen(3000, () => {
  console.log('Server is up on port 3000')
});
