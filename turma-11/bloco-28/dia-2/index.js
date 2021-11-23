const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(process.env.mensagem);
});

app.get('/bug', (req, res) => {
  res.send('O aplicativo quebrou');
  process.exit(process.id);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
