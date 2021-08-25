const fs = require('fs');

function escreveArquivo(nomeDoArquivo, texto) {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, texto);

  return "ok";
};

console.log(escreveArquivo('teste.txt', 'aaaaaaaaa'))

module.exports = escreveArquivo;
