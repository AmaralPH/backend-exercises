const M = require('minimatch');
const Model = require('../models/Plant');

const initPlant = (breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = async () => {
  const plants = await Model.getPlants();

  return plants;
};

const createPlant = async (breed, needsSun, origin, specialCare, size) => {
  const plant = initPlant(breed, needsSun, origin, specialCare, size)

  const { insertedId } = await Model.createPlant(plant);

  return { id: insertedId, breed, needsSun, origin, specialCare, size };
}

const getPlantById = async (id) => {
  const plant = await Model.getPlantById(id);

  return plant;
}

const removePlantById = async (id) => {
  const removed = await Model.removePlantById(id);

  return removed;
}

const editPlant = async (id, breed, needsSun, origin, specialCare, size) => {
  const newPlant = await Model.editPlant(id, breed, needsSun, origin, specialCare, size);

  return newPlant;
}

const getPlantsThatNeedsSunWithId = async (id) => {
  const plants = await Model.getPlantsThatNeedsSunWithId(id);

  return plants;
}

module.exports = {
  getPlants,
  createPlant,
  getPlantById,
  removePlantById,
  editPlant,
  getPlantsThatNeedsSunWithId,
};
