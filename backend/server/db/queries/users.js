'use strinct';

const knex = require('../connection');

const bcrypt = require('bcryptjs');

async function addUser (user) {
  console.log('addUser');
  console.log('user: ', user);
  const salt = await bcrypt.genSaltSync();
  const hash = await bcrypt.hashSync(user.password, salt);
  return knex('users')
    .insert({
      name: user.name,
      email: user.email,
      password: hash
    }).returning('*');
}

async function getUser (user) {
  const email = user.email;
  console.log('Get user');
  console.log('user: ', user);
  console.log('email: ', email);
  return knex('users').where({ email }).first();
}

async function updateUser (user) {
  console.log('update', user);
  const email = user.email;
  const updateU = knex('users').where({ email }).first();
  if (updateU) {
    return knex('users').where({ email }).update(user);
  } else {
    console.log('error with updating process');
    return null;
  }
}

module.exports = {
  addUser,
  getUser,
  updateUser
};
