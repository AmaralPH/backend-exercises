const models = require('../models/auction');

const saveProduct = async (req, res) => {
  const { name, currentPrice, image, user } = req.body;

  const newProduct = await models.saveProduct(name, currentPrice, image, user);

  res.status(201).json(newProduct);
};

const getAll = async (_req, res) => {
  const products = await models.getAll();

  res.status(200).json(products);
}

module.exports = {
  saveProduct,
  getAll,
};
