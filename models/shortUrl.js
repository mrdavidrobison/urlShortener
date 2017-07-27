const mongoose = require('mongoose');
const schema = mongoose.schema;

const urlSchema = new schema({
  origUrl = string,
  shorterUrl = string
}, {timestamps: true});

const modelClass = mongoose.model('shortUrl', urlSchema);

module.exports = modelClass;