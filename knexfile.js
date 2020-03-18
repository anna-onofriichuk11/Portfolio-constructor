// Update with your config settings.
require('dotenv').config()

const path = require('path')

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db')

module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://postgres:21101967VfVf@localhost:5432/portfolio-const',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }

}
