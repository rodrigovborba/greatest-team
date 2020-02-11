'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  shoot: {
    type: Number,
    min: 1,
    max: 99
  },
  dribble: {
    type: Number,
    min: 1,
    max: 99
  },
  tackle: {
    type: Number,
    min: 1,
    max: 99
  },
  save: {
    type: Number,
    min: 1,
    max: 99
  },
  xp: {
    type: Number
  },
  goals: {
    type: Number
  },
  saves: {
    type: Number
  }
});

module.exports = mongoose.model('User', schema);
