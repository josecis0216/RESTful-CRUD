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
    image: {
      type: String,
      required: true
    },
    creator: {
      type: Object,
      required: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Team', teamSchema);