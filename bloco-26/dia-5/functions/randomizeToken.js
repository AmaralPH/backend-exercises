function randomizeToken(length) {
  let token = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i += 1) {
    token += caracteres[Math.floor(Math.random() * caracteres.length)];
  };

  return token;
}

module.exports = randomizeToken;
