const connection = require('./connection');

const padronize = (data) => {
  const { first_name, last_name, ...others } = data;

  return {
    ...others,
    firstName: data.first_name,
    lastName: data.last_name,
  };
};

const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';

  const newUser = await connection.execute(query, [firstName, lastName, email, password]);
  console.log(newUser)

  return {
    id: newUser[0].insertId,
    firstName,
    lastName,
    email,
  };
};

const getAll = async () => {
  const query = 'SELECT * FROM users';

  const [users] = await connection.execute(query);

  return users.map(padronize);
};

const getById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';

  const [user] = await connection.execute(query, [id]);

  return padronize(user[0]);
};

const update = async (id, firstName, lastName, email, password) => {
  const idExist = await getById(id);

  if (!idExist) return null;

  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';

  const updated = await connection.execute(query, [firstName, lastName, email, password, id]);

  return { id, firstName, lastName, email, password };
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
