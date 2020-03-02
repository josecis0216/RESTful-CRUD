const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }, 
    team: {
      type: String,
      required: true
    },
    jersey: {
      type: String,
    }, 
    creator: {
      type: Object,
      required: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
