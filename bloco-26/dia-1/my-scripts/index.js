const readline = require('readline-sync');

function selecionaScript() {
  const script = readline.questionInt(
    'Qual Script deseja executar?\n1 - IMC\n2 - Velocidade\n3 - Sorteio\n4 - Fatorial\n'
  );
  if (script === 1) {
    return require('./imc');
  } else if (script === 2) {
    return require('./velocidade');
  } else if (script === 3) {
    return require('./sorteio');
  } else if (script === 4) {
    return require('./fatorial');
  }
}

module.exports = selecionaScript();
