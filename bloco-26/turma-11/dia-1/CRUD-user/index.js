const express = require('express');
const User = require('./controllers/User');

const app = express();

app.use(express.json());

app.post('/user', User.create);
app.get('/user', User.getAll);
app.get('/user/:id', User.getById);
app.put('/user/:id', User.update);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
