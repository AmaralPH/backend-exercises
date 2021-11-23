const isValid = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName) {
    return res.status(400).json({ error: true, message: 'O campo \'firstName\' deve ser informado' });
  }
  if (!lastName) {
    return res.status(400).json({ error: true, message: 'O campo \'lastName\' deve ser informado' });
  }
  if (!email) {
    return res.status(400).json({ error: true, message: 'O campo \'email\' deve ser informado' });
  }
  if (!password) {
    return res.status(400).json({ error: true, message: 'O campo \'password\' deve ser informado' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: true, message: 'O campo \'password\' deve ter pelo menos 6 caracteres' });
  }

  next()
}

module.exports = isValid;