const fs = require('fs');
const sinon = require('sinon');
const { expect } = require("chai");

const avaliaNumero = require('./index');
const escreveArquivo = require('./escreveArquivo');

const conteudo = 'Eu gosto de mamão';
const nomeDoArquivo = 'arquivoTeste.txt';

describe('Testa função que escreve arquivo', () => {
  describe('A resposta', () => {
    before(() => {
      sinon.stub(fs, 'writeFile');
    })

    after(() => {
      fs.writeFile.restore();
    })

    it('é uma string', () => {
      const resposta = escreveArquivo(nomeDoArquivo, conteudo);

      expect(resposta).to.be.a('string');
    })

    it('é igual a ok', () => {
      const retorno = escreveArquivo(nomeDoArquivo, conteudo);
  
      expect(retorno).to.be.equals('ok');
    });
  })
})


describe('Função testa sinal do numero informado', () => {
  it('Numero é negativo', () => {
    const resultado = avaliaNumero(-1);

    expect(resultado).to.be.equals('negativo');
  });
  
  it('Numero é neutro', () => {
    const resultado = avaliaNumero(0);

    expect(resultado).to.be.equals('neutro');
  });

  it('Numero é positivo', () => {
    const resultado = avaliaNumero(1);

    expect(resultado).to.be.equals('positivo');
  });

  it('É informado um valor NaN', () => {
    const resultado = avaliaNumero('yay');

    expect(resultado).to.be.equals('o valor deve ser um número');
  });
});
