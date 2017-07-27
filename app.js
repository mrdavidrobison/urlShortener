const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname +'/public'));

app.get('/new/:urlToShorten(*)', (req, res, next)=>{
  var { urlToShorten } = req.params;
  console.log(urlToShorten);
});

//Listen to see if working
// (ES5) function(){}
// process.env.PORT is for Heroku
app.listen(process.env.PORT || 3000, ()=>{
console.log('working');
});
