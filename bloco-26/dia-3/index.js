function avaliaNumero(n) {
  if (n < 0) {
    return 'negativo';
  } else if (n === 0) {
    return 'neutro';
  } else if (n > 0) {
    return 'positivo';
  } else if (isNaN(n)) {
    return "o valor deve ser um número";
  };
};

module.exports = avaliaNumero;
