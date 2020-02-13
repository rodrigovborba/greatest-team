'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  singles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SingleClassification'
    }
  ],
  league: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'League'
  },
  season: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Season'
  }
});

module.exports = mongoose.model('Classification', schema);
