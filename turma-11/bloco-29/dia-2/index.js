const express = require('express');
const app = express();

const { Book } = require('./controllers/Book');

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

app.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    res.status(200).json(book);
  } catch (e) {
    console.log(e.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/book', () => {

})

app.post('/book/:id', () => {

})

app.delete('/book/:id', () => {
  
})

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`))