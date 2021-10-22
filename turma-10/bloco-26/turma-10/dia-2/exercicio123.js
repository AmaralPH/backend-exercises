// const readline = require('readline-sync')

function equacao(a, b, c) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      reject(Error('Informe apenas números'));
    };
    
    const resultado = (a + b) * c;

    if (resultado < 50) {
      reject(Error('Valor muito baixo'));
    }

    resolve(resultado);
  });
}

// function recebeNumeros() {
//   const a = readline.questionInt('Informe "a": ');
//   const b = readline.questionInt('Informe "b": ');
//   const c = readline.questionInt('Informe "c": ');

//   equacao(a, b, c)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err.message));
// }

// recebeNumeros();


              // EXERCICIO 2 //

function calculaAleat() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  equacao(a, b, c)
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message))
}

// calculaAleat()

            // EXERCICIO 3 //

async function calculaAsync() {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  const c = Math.floor(Math.random() * 10 + 1);

  try {
    const result = await equacao(a, b, c);
    console.log(result);
  } catch(err) {
    console.error(err.message)
  }
}

calculaAsync()