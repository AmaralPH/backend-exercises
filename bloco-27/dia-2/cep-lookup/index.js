require('dotenv').config();
const express = require('express');

const CEP = require('./controllers/CEP');
const errorMiddleware = require('./controllers/ErrorController');

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: "pong!" });
});

app.get('/cep/:cep', CEP.findCep);

app.post('/cep', CEP.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
