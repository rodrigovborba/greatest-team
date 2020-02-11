'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  seasons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Season'
    }
  ],
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    }
  ],
  classifications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Classification'
    }
  ],
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  },
  continent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Continent'
  }
});

module.exports = mongoose.model('League', schema);
