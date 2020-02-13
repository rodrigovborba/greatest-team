'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  emblem: {
    type: String,
    required: true
  },
  division: {
    type: Number,
    required: true
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
      required: true,
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

schema.statics.pushTeamToLeague = async function(code, division, team_id) {
  const League = this;
  try {
    const league = await League.findOne({
      code: code,
      division: division
    }).exec();
    if (league) {
      await league.teams.push(team_id);
      await league.save();
      return league;
    }
    throw error("There's no league with that search");
  } catch (error) {
    throw error('Error => [Model: League | Static: pushTeamToLeague]');
  }
};

module.exports = mongoose.model('League', schema);
