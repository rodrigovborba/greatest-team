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

schema.statics.pushTeamsToLeague = async function(teams) {
  const League = this;
  console.log('TEAM CODE', teams[0].code);
  for (let i = 0; i < teams.length; i++) {
    const league = await League.findOne({
      code: teams[i].code,
      division: teams[i].division
    }).exec();
    console.log('LIGA', league);
    if (league) {
      league.teams.push(teams[i]._id);
      league.save();
    }
  }
  // try {
  //   if (league) {
  //     console.log(league);
  //     // league.teams.push(team_id);
  //     return league;
  //   }
  //   throw error("There's no league with that code and division");
  // } catch (error) {
  //   throw error('Error => [Model: League | Static: pushTeamToLeague]');
  // }
};

module.exports = mongoose.model('League', schema);
