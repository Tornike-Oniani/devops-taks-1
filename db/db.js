const knex = require('knex');

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'postgres',
    user: 'docker',
    password: '123456',
    database: 'docker',
  },
});
