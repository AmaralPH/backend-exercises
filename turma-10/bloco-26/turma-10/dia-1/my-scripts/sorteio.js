const readline = require('readline-sync');

function sorteiaNumero() {
  return Math.round(Math.random() * 10);
}

function sorteio(sorteado, palpite) {
  if (sorteado === palpite) {
    console.log('\nParabéns, número correto!\n');
  } else {
    console.log(`\nOpa, não foi dessa vez. O número era ${sorteado}\n`);
  }
  const replay = readline.question('Desaja jogar novamente? s/n:  ');
  if (replay === "s") {
    jogo();
  } else {
    return;
  }
}

function jogo() {
  const sorteado = sorteiaNumero();

  const palpite = readline.questionInt('Informe um numero de 0 a 10: ');

  sorteio(sorteado, palpite)
}

module.exports = jogo();
