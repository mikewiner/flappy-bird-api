const mongoose = require('mongoose')

 
const Schema = mongoose.Schema;
 
const ScoreSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  score : {
    type: Number,
    default: 0
  }
});
 
const ScoreModel = mongoose.model('scores', ScoreSchema);
 
module.exports = ScoreModel;