const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    trophies: {
        type: String,
        required: false
    },
    imageUrl: {
      type: String,
      required: true
    }
  } 
);

module.exports = mongoose.model('Team', teamSchema);