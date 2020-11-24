const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema(
  {
    job: {
      type: String,
      required: true
    },
    position: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    }, 
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
    }, 
    creator: {
      type: Object,
      required: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Resume', resumeSchema);
