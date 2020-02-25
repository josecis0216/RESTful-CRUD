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
    }
  } 
);

module.exports = mongoose.model('Team', teamSchema);