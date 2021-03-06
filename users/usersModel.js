const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user).returning('id');
  console.log('the id returned from inserting the users', id);
  return findById(id);
}

function findById(id) {
  console.log('finding by id');
  return db('users')
    .where({ id })
    .first();
}