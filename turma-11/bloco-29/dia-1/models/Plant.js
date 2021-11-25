const { ObjectId } = require('mongodb');

const connection = require('./connection');

const getPlants = async () => {
  return connection()
    .then((db) => db.collection('plants').find().toArray());
};

const createPlant = async ({ breed, needsSun, origin, specialCare, size }) => {
  return connection()
    .then((db) => db.collection('plants').insertOne({ breed, needsSun, origin, specialCare, size }))
    .then((result) => result);
}

const getPlantById = async (id) => {
  return connection()
    .then((db) => db.collection('plants').findOne({ _id: ObjectId(id) }))
    .then((result) => result)
}

const removePlantById = async (id) => {
  return connection()
    .then((db) => db.collection('plants').findOneAndDelete({ _id: ObjectId(id) }))
    .then((result) => result.value);
};

const editPlant = async (id, breed, needsSun, origin, specialCare, size) => {
  await connection()
    .then((db) => db.collection('plants').findOneAndUpdate(
      { _id: ObjectId(id) }, { $set: { breed, needsSun, origin, specialCare, size } }));
  
  return getPlantById(id);
}

const getPlantsThatNeedsSunWithId = async (id) => {
  return connection()
    .then((db) => db.collection('plants').findOne({ _id: ObjectId(id), needsSun: true }));
}

module.exports = {
  getPlants,
  createPlant,
  getPlantById,
  removePlantById,
  editPlant,
  getPlantsThatNeedsSunWithId,
};
