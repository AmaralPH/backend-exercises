const readline = require('readline-sync');

function somaFibo(array) {
  return array[array.length-1] + array[array.length-2];
};

function fibonacci(n) {
  const fibo = [];

  for (let i = 1; i <= n; i += 1) {
    if (i === 1) {
      fibo.push(0);
    } else if (i === 2) {
      fibo.push(1);
    } else {
      fibo.push(somaFibo(fibo));
    }
  }

  return fibo;
}


function executaConta() {
  const n = readline.questionInt('Diga um numero: ')
  console.log(fibonacci(n));
}

module.exports = executaConta();
