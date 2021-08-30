const express = require('express');

const users = require('./users');
const simpson = require('./simpson');
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17) {
    res.status(200).json({ message: `Hello, ${name}!` });
  };

  res.status(401).json({ message: 'Unauthorized' });
})

app.use('/users', users);

app.use('/simpsons', simpson);

app.listen(3001, () => {
  console.log('listening...')
});
