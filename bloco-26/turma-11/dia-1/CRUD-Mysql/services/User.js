const User = require('../models/User');

const create = async (firstName, lastName, email, password) => {
  if (!firstName) return { error: true, message: "O campo 'firstName' deve ser informado" };
  if (!lastName) return { error: true, message: "O campo 'lastName' deve ser informado" };
  if (!email) return { error: true, message: "O campo 'email' deve ser informado" };
  if (!password) return { error: true, message: "O campo 'password' deve ser informado" };
  if (password.length < 6) return { error: true, message: "O campo 'password' deve ter pelo menos 6 caracteres" };

  const newUser = await User.create(firstName, lastName, email, password);

  return newUser;
};

const getAll = async () => {
  return User.getAll();
}

const getById = async (id) => {
  const user = await User.getById(id);

  if (!user) {
    return { error: true, message: 'Usuário não encontrado' };
  };

  return user;
}

const update = async (id, firstName, lastName, email, password) => {
  if (!firstName) return { code: 400, message: "O campo 'firstName' deve ser informado" };
  if (!lastName) return { code: 400, message: "O campo 'lastName' deve ser informado" };
  if (!email) return { code: 400, message: "O campo 'email' deve ser informado" };
  if (!password) return { code: 400, message: "O campo 'password' deve ser informado" };
  if (password.length < 6) return { code: 400, message: "O campo 'password' deve ter pelo menos 6 caracteres" }

  const newUser = await User.update(id, firstName, lastName, email, password);

  if (!newUser) return { error:true, code: 404, message: 'Usuário não encontrado' };

  return newUser;
}

module.exports = {
  create,
  getAll,
  getById,
  update,
}