const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
  // admin email address
  email: {
    type: String,
    required: true
  },

  name: {
      type: String,
      required: true
  },

  //gift suggestions
  suggestions: {
      type: Text,
      required: false
  }
});

module.exports = Participant = mongoose.model("participants", ParticipantSchema);
