const express = require('express');

const isValid = require('./middlewares/validateUser');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.post('/user', isValid, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await User.create(firstName, lastName, email, password);

  res.status(201).json(newUser);
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  };

  res.status(200).json(user);
})

app.get('/user', async (_req, res) => {
  const users = await User.getUsers();
  res.status(200).json(users);
})

app.put('/user/:id', isValid, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const updatedUser = await User.updateUser(firstName, lastName, email, password, id);
  console.log(updatedUser)

  res.status(200).json(updatedUser);
})

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
