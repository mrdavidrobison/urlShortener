const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortUrl = require('.models/shorturl');
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname +'/public'));

app.get('/new/:urlToShorten(*)', (req, res, next)=>{
  var { urlToShorten } = req.params;
  return res.json({urlToShorten});
});

app.listen(process.env.PORT || 3000, ()=>{
console.log('working');
});
