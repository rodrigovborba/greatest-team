"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  rounds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Round"
    }
  ],
  games: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game"
    }
  ]
});

module.exports = mongoose.model("Season", schema);
