const { ObjectId } = require('mongodb');

const connection = require('./connection');

const padronize = (data) => {
  const { _id, ...others } = data;

  return {
    id: _id,
    ...others,
  };
};

const create = async (firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then(result => ({ id: result.insertedId, firstName, lastName, email }));
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then(result => result.map(padronize));
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)))
    .then(result => padronize(result));
};

const update = async (id, firstName, lastName, email, password) => {
  if (!ObjectId.isValid(id)) return null;

  const newUser = connection()
    .then((db) => db.collection('users').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { firstName, lastName, email, password } },
    ))
    .then(result => padronize(result.value));
  
  if (!newUser) return null;

  return { id, firstName, lastName, email };
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
