const mysql = require('mysql2');

const DB_NAME = process.env.DB_NAME;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: DB_NAME,
});

module.exports = connection;
