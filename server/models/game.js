'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  league: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League'
  },
  round: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Round'
  },
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  away: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  homeScore: {
    type: Number,
    min: 0
  },
  awayScore: {
    type: Number,
    min: 0
  },
  homeShots: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Action'
    }
  ],
  awayShots: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Action'
    }
  ],
  homeStops: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Action'
    }
  ],
  awayStops: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Action'
    }
  ],
  homeMomentum: {
    type: Number,
    min: -100,
    max: 100
  },
  awayMomentum: {
    type: Number,
    min: -100,
    max: 100
  },
  momentumActions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Action'
    }
  ]
});

module.exports = mongoose.model('Game', schema);
