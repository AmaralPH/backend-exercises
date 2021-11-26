const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    res.status(200).json(book);
  } catch (e) {
    console.log(e.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity })

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    if (!updateBook) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    };

    return res.status(200).json(updateBook);
  } catch (e) {
    console.log(e.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Book.destroy({ where: { id } });

    res.status(200).json(deleted);
  } catch (e) {
    console.log(e.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.get('/author/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const bookByAuthor = await Book.findAll({ where: { author: name } });

    if (!bookByAuthor) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }

    res. status(200).json(bookByAuthor);
  } catch (e) {
    console.log(e.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
});

module.exports = router;