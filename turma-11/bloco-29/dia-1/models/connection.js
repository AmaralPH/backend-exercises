const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost';
const DB_NAME = 'exerciciosTrybe'

const OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_URL, OPTIONS)
      .then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      });
};

module.exports = connection;