const { Module } = require('module');
const Service = require('../services/Plant');

const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

const getPlants = async (req, res) => {
  try {
    const plants = await Service.getPlants();

    res.status(200).json(plants);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado!' });
  };
};

const createPlant = async (req, res) => {
  const { breed, needsSun, origin, specialCare, size } = req.body;
  try {
    const newPlant = await Service.createPlant(breed, needsSun, origin, specialCare, size);
    
    res.status(200).json(newPlant)
  } catch (e) {
    console.log(e.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
};

const getPlantById = async (req, res) => {
  const { id } = req.params;

  try {
    const plant = await Service.getPlantById(id);

    res.status(200).json(plant);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const removePlantById = async (req, res) => {
  const { id } = req.params;

  try {
    const removed = await Service.removePlantById(id);

    res.status(200).json(removed);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const editPlant = async (req, res) => {
  const { id } = req.params;
  const { breed, needsSun, origin, specialCare, size } = req.body;

  try {
    const newPlant = await Service.editPlant(id, breed, needsSun, origin, specialCare, size);

    res.status(200).json(newPlant);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getPlantsThatNeedsSunWithId = async (req, res) => {
  const { id } = req.params;

  try {
    const plants = await Service.getPlantsThatNeedsSunWithId(id);

    res.status(200).json(plants);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getPlants,
  createPlant,
  getPlantById,
  removePlantById,
  editPlant,
  getPlantsThatNeedsSunWithId,
};
