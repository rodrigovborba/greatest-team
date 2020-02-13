const teamsSeeds = [
  {
    name: 'Sport Lisboa e Benfica',
    description: 'Liga Portuguesa de Futebol',
    code: 'PT',
    division: '1',
    emblem:
      'https://upload.wikimedia.org/wikipedia/pt/f/f0/500px-SL_Benfica_logo_svg.png'
  },
  {
    name: 'Futebol Clube do Porto',
    description: 'Liga Portuguesa de Futebol',
    code: 'PT',
    division: '1',
    emblem:
      'https://www.zerozero.pt/img/logos/competicoes/5_imgbank_d1_20150421164611.png'
  },
  {
    name: 'Sport Club do Recife',
    description: 'Liga Brasileira de Futebol',
    code: 'BR',
    division: '1',
    emblem:
      'https://banner2.cleanpng.com/20180531/kpr/kisspng-sport-club-do-recife-campeonato-brasileiro-srie-5b10a7b6c0db24.12836435152781816679.jpg'
  }
];

const Team = require('./../models/team');
const League = require('./../models/league');

require('dotenv').config();

const mongoose = require('mongoose');
const databaseURI = 'mongodb://127.0.0.1:27017/greatest-team-database';

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongoose connection established.');
    return Team.insertMany(teamsSeeds);
  })
  .then(teams => {
    console.log('Team seeds planted!', teams);
    // Only returns when all the promises are resolved
    return Promise.all(
      teams.map(team => {
        return League.pushTeamToLeague(team.code, team.division, team._id);
      })
    );
  })
  .then(promises => {
    console.log('promises', promises);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error connecting to mongo', error);
  });
