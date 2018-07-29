const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for a new action
const ActionSchema = new Schema({
   action: {
      type: String,
      required: true
   },
   user: {
      type: String,
      required: true,
      default: "Anonymous"
   },
   isTruth: {
        type: Boolean,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    reports: {
        type: Number,
        default: 0
    },
    ageRange: {
        type: Number
    }
});

module.exports = Action = mongoose.model('action', ActionSchema);
