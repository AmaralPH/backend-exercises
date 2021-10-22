const connection = require('./connection');

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  return {
      id,
      firstName,
      lastName,
      email,
  };
}

const serialize = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
  password: userData.password,
});


const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)'
  return connection.execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }))
};

const getUsers = () => {
  return connection.execute('SELECT * FROM users')
    .then(([results]) => results.map(formatUser));
}

const findById = async (id) => {
  const user = await connection.execute('SELECT * FROM users WHERE id = ?',[id])
    .then(([results]) => (results.length ? results[0] : null))

  if (!user) {
    return null;
  }

  return formatUser(user);
};

const updateUser = async (firstName, lastName, email, password, id) => {
  await connection.execute(
    'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  )
}

module.exports = {
  create,
  getUsers,
  findById,
  updateUser,
}
