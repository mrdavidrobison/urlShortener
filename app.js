const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortUrl = require('.models/shorturl');
app.use(bodyParser.json());
app.use(cors());

// connect to databases
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/shortUrls');



app.use(express.static(__dirname +'/public'));

// create database entry
app.get('/new/:urlToShorten(*)', (req, res, next)=>{
  var { urlToShorten } = req.params;
  // Regex for url
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = expression;
  if(regex.test(urlToShorten) === true) {
    return 'works';
  } else {
    return 'fails';
  }
  return res.json({urlToShorten});
});

app.listen(process.env.PORT || 3000, ()=>{
console.log('working');
});
