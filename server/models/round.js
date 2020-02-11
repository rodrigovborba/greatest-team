"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  season: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Season"
  },
  games: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game"
    }
  ],
  start: {
    type: Date,
    default: Date.now
  },
  end: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Round", schema);
