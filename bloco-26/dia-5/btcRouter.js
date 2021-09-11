const express = require('express');

const router = express.Router();

router.use(express.json());

router.use((req, res, next) => {
  const { authorization } = req.headers;
  if (authorization.length !== 12) {
    res.status(401).json({ message: 'invalid token' });
  }

  next();
})

const getBtcPrice = require('./functions/getBtcPrice');

router.get('/price', async (req, res) => {
  const btc = await getBtcPrice();
  const price = btc.data.bpi.USD.rate_float;
  res.status(200).json({ price });
})

module.exports = router;
