const { ObjectId } = require('mongodb');

const connection = require('./connection');

const formatUsers = (userData) => {
  const { _id, ...user } = userData;
  return ({ id: _id, ...user });
}

const create = (firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then(result => ({ id: result.insertedId, firstName, lastName, email }));
};

const getUsers = () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((results) => results.map(formatUsers));
}

const findById = (id) => {
  return connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)))
    .then(result => formatUsers(result));
}

const updateUser = async (firstName, lastName, email, password, id) => {
  const userId = ObjectId(id);
  const newData = { firstName, lastName, email, password }
  const updatedUser = await connection()
    .then((db) => db.collection('users').findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false }))
    .then(result => result.value);
  
  if (!updatedUser) return null;

  return formatUsers(updatedUser);
}

module.exports = {
  create,
  getUsers,
  findById,
  updateUser,
}
