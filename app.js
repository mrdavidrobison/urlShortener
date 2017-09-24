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
    var short = math.floor(Math.random()*100000).toString();
    var data = new shortUrl(
      {
        originalUrl: urlToShorten,
        shorterUrl: short
      }
    )

    data.save(err=> {
      if(err) {
        return res.send('Error saving to the db');
      } else {

      }
    });

    return res.json({data});
  }

  return res.json({urlToShorten: 'failed'});
});

app.listen(process.env.PORT || 3000, ()=>{
console.log('working');
});
