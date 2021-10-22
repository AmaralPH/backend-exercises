const express = require('express');
const randomizeToken = require('./functions/randomizeToken');

const router = express.Router();

function validateRegister(req, res, next) {
  const { username, email, password } = req.body;
  const regex = /[a-z]+@[a-z]+\.com/i;
  if (username.length < 3 || !regex.test(email)) {
    return res.status(400).json({ message: 'Invalid data' });
  } else if (isNaN(Number(password)) || String(password).length > 8 || String(password).length < 4) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  next();
}

function validateLogin(req, res, next) {
  const { email, password } = req.body;
  const regex = /[a-z]+@[a-z]+\.com/i;
  if (!regex.test(email)) {
    return res.status(400).json({ message: 'email or password is incorrect' });
  } else if (isNaN(Number(password)) || String(password).length > 8 || String(password).length < 4) {
    return res.status(400).json({ message: 'email or password is incorrect' });
  }

  next();
}

router.post('/register', validateRegister, (req, res) => {
  res.status(201).json({ message: 'User created' });
});

router.post('/login', validateLogin, (req, res) => {
  res.status(200).json({ token: randomizeToken(12) });
});

module.exports = router;