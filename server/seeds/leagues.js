const leaguesSeeds = [
  {
    name: 'Liga Portuguesa',
    description: 'Liga Portuguesa de Futebol',
    code: 'PT',
    division: '1',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Liga_NOS_logo.png'
  },
  {
    name: 'Liga Espanhola',
    description: 'Liga Espanhola de Futebol',
    code: 'ES',
    division: '1',
    emblem:
      'https://www.zerozero.pt/img/logos/competicoes/5_imgbank_d1_20150421164611.png'
  },
  {
    name: 'Brasileirão',
    description: 'Liga Brasileira de Futebol',
    code: 'BR',
    division: '1',
    emblem:
      'https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png'
  }
];

const League = require('./../models/league');

require('dotenv').config();

const mongoose = require('mongoose');
const databaseURI = process.env.MONGODB_URI;

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongoose connection established.');
    return League.insertMany(leaguesSeeds);
  })
  .then(leagues => {
    console.log('Leagues seeds planted!');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error connecting to mongo', error);
  });
