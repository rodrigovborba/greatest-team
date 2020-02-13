'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  type: {
    enum: ['Shot', 'Dribble', 'Tackle', 'Stop']
  },
  result: {
    type: Boolean
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  opponent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }
});

module.exports = mongoose.model('Action', schema);
