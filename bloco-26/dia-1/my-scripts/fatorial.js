const readline = require('readline-sync');

function fatorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return (n * fatorial(n-1));
  };
}

function calculaFat() {
  const numInformado = readline.questionInt('Informe um numero > 0: ');

  if (numInformado <= 0) {
    console.log('O numero deve ser maior que zero');
    calculaFat();
  } else {
    console.log(fatorial(numInformado));
  };
}

module.exports = calculaFat();
