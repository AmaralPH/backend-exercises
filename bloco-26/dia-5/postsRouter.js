const express = require('express');

const router = express.Router();

// const posts = [{ id: 1, text: 'bla bla bla' }, { id: 2, text: 'nhe nhe ne' }];

// const 

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) {
    res.status(404).json({ message: 'post not found' });
  };

  res.status(200).json(post);
});

router.get('/', (req, res) => {
  if (posts === undefined) {
    res.status(200).json({ posts: [] });
  }
  res.status(200).json(posts);
});

router.all('*', (req, res) => {
  return res.status(404).json({ message: 'Opsss, route not found!' })
})

module.exports = router;