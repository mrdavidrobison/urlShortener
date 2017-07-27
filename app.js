const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortUrl = require('.models/shorturl');
app.use(bodyParser.json());
app.use(cors());

// connect to database
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/shortUrls');



app.use(express.static(__dirname +'/public'));

// create database entry
app.get('/new/:urlToShorten(*)', (req, res, next)=>{
  var { urlToShorten } = req.params;
  return res.json({urlToShorten});
});

app.listen(process.env.PORT || 3000, ()=>{
console.log('working');
});
