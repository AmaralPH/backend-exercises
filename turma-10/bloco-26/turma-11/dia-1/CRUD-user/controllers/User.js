const User = require('../services/User');

const create = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await User.create(firstName, lastName, email, password);

  if (newUser.error) {
    return res.status(400).json(newUser);
  };

  res.status(201).json(newUser);
};

const getAll = async (_req, res) => {
  const users = await User.getAll();

  res.status(200).json(users);
}

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await User.getById(id);

  if (user.error) {
    return res.status(404).json(user);
  };

  res.status(200).json(user);
} 

const update = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const newUser = await User.update(id, firstName, lastName, email, password);

  if (newUser.error) {
    return res.status(newUser.code).json({ error: true, message: newUser.message });
  };

  res.status(200).json(newUser);
}

module.exports = {
  create,
  getAll,
  getById,
  update,
};
