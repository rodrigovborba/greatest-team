'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  league: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  emblem: {
    type: String
  }
});

module.exports = mongoose.model('Team', schema);
