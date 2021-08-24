const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? ');
const altura = readline.questionFloat('Qual a sua altura em metros? ');

function imc(peso, altura) {
  return (peso / altura ** 2);
}

function categoriaImc(imc) {
  if (imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');
  }  else if (imc >= 25.0 && imc <= 29.9 ) {
    console.log('Acima do peso (sobrepeso)');
  } else if (imc >= 30 && imc <= 34.9){
    console.log('Obesidade grau I');
  } else if (imc >= 35 && imc <= 39.9) {
    console.log('Obesidade grau II');
  } else if (imc > 40){
    console.log('Obesidade graus III e IV');
  }
}

module.exports = categoriaImc(imc(peso, altura));
