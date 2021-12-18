const { ObjectId } = require('mongodb');
const connection = require('./connection');

const saveProduct = async (name, currentPrice, image, user) => {
  return connection()
    .then((db) => db.collection('products').insertOne({ name, currentPrice, image, user }));
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('products').find().toArray());
};

const getById = async (id) => {
  return connection()
    .then((db) => db.collection('products').findOne({ _id: new ObjectId(id) }));
};

const updateProductPrice = async (id, price) => {
  return connection()
    .then((db) => db.collection('products')
      .findOneAndUpdate({ _id: new ObjectId(id) }, { currentPrice: price }));
};

module.exports = {
  saveProduct,
  getAll,
  getById,
  updateProductPrice,
};
