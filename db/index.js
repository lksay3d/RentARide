const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'RentARide',
  password: 'S_534257',
  port: 3000,
});

module.exports = pool;
