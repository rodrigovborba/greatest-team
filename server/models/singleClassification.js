"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  points: {
    type: Number,
    default: 0,
    min: 0
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  },
  classification: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classification"
  },
  played: {
    type: Number,
    default: 0,
    min: 0
  },
  won: {
    type: Number,
    default: 0,
    min: 0
  },
  drawn: {
    type: Number,
    default: 0,
    min: 0
  },
  lost: {
    type: Number,
    default: 0,
    min: 0
  },
  goalAgainst: {
    type: Number,
    default: 0,
    min: 0
  },
  goalFor: {
    type: Number,
    default: 0,
    min: 0
  }
});

module.exports = mongoose.model("SingleClassification", schema);
