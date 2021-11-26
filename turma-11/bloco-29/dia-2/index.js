const express = require('express');
const app = express();

const controller = require('./controllers/Book');
const { Book } = require('./models');

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/books', async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' })
  }
});

app.use('/book', controller);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`))