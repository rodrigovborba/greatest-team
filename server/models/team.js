'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  division: {
    type: Number,
    required: true
  },
  emblem: {
    type: String
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  league: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League'
  }
});

module.exports = mongoose.model('Team', schema);
