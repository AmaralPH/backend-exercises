const readline = require('readline-sync');
const fs = require('fs/promises');

function getFile() {
  const fileName = readline.question('Qual o nome do arquivo a ser lido? ');
  fs.readFile(fileName, 'utf8')
    .then((data) => console.log(data))
    .catch(() => console.error('Arquivo inexistente'));
}

getFile();