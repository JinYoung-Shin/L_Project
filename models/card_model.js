var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
   contents: String,
   author: String,
   comment_date: {type: Date, default: Date.now()}
});

var cardSchema = new Schema({
   title: String,
   content: String,
   author: String,
   date: {type: Date, default: Date.now()},
   comment: [commentSchema]
});

module.exports = mongoose.model('card', cardSchema);