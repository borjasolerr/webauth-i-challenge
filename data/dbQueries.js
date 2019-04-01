const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
  insertUser,
  getUserByName
};

function insertUser(username, email, password) {
  return db('users').insert({ username, email, password });
}

function getUserByName(username) {
  return db('users')
    .where({ username })
    .first();
}
