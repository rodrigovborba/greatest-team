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
    default: 1,
    min: 1,
    max: 99
  },
  dribble: {
    type: Number,
    default: 1,
    min: 1,
    max: 99
  },
  tackle: {
    type: Number,
    default: 1,
    min: 1,
    max: 99
  },
  save: {
    type: Number,
    default: 1,
    min: 1,
    max: 99
  },
  xp: {
    type: Number,
    min: 0,
    default: 0
  },
  goals: {
    type: Number,
    min: 0,
    default: 0
  },
  saves: {
    type: Number,
    min: 0,
    default: 0
  }
});

module.exports = mongoose.model('User', schema);
