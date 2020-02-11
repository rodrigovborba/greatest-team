"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  league: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "League"
  },
  round: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Round"
  },
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  },
  away: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  },
  homeScore: {
    type: Number
  },
  awayScore: {
    type: Number
  },
  homeShoots: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Action"
    }
  ],
  awayShoots: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Action"
    }
  ],
  homeStops: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Action"
    }
  ],
  awayStops: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Action"
    }
  ],
  homeMomentum: {
    type: Number
  },
  awayMomentum: {
    type: Number
  },
  momentumActions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Action"
    }
  ]
});

module.exports = mongoose.model("Game", schema);
