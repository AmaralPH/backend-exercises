const readline = require('readline-sync');

const distancia = readline.questionInt('Qual é a distancia em metros? ');
const tempo = readline.questionInt('Qual o tempo em segundos? ');

function velocidade(distancia, tempo) {
  return distancia / tempo;
}

module.exports = console.log(velocidade(distancia, tempo));
