const readline = require('readline-sync');
const fs = require('fs/promises');

function changeFile() {
  const fileName = readline.question('Qual o nome do arquivo deseja editar? ')
  fs.readFile(fileName, 'utf8')
    .then((data) => {
      const palavra = readline.question('Que palavra deseja substituir? ');
      const nova = readline.question('Por qual palavra deseja substituir? ');
      const newData = data.replace(new RegExp(palavra, 'g'), nova);
      console.log(newData);

      const newArq = readline.question('Onde deseja salvar? ');
      fs.writeFile(newArq, newData);
    })
    .catch((err) => 'Arquivo não existe')
}

changeFile();