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
      type: string,
      required: true
    },
    endDate: {
      type: string,
    }, 
    creator: {
      type: Object,
      required: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Resume', resumeSchema);
