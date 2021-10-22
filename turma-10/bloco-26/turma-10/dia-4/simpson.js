const express = require('express');
const simpsons = require('./simpsons.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(simpsons);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const simp = simpsons.find((character) => character.id == id);
  if (!simp) {
    res.status(404).json({ message: 'simpson not found' });
  };

  res.send(simp);
});

router.post('/', (req, res) => {
  const { id, name } = req.body;
  const simpExists = simpsons.find((char) => char.id == id) ? true : false;
  if (simpExists) {
    res.status(409).json({ message: 'id already exists' });
  };

  simpsons.push({ id, name });
  res.status(204).end();
})

module.exports = router;
