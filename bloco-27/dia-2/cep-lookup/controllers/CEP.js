const rescue = require('express-rescue');
const Joi = require('joi');
const CEP = require('../services/CEP');

const findCep = rescue(async (req, res, next) => {
  // Utiliza o Joi para descrever obj da requisição
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).not().empty().required(),
  }).validate(req.params);

  // Verifica de a req tem um erro
  if (error) return next(error);

  // Extrai cep do request
  const { cep } = req.params;

  // Pede ao service para buscar o cep
  const cepSearch = await CEP.findCep(cep);
  console.log(cepSearch)

  // Caso o service retorne erro, interrompre processo e trata erro
  if (cepSearch.error) return next(cepSearch.error);

  // Caso não tenha erro, retorna o cep encontrado
  res.status(200).json(cepSearch);
});

const create = rescue(async (req, res, next) => {
  // Utiliza joi para descrever a requisição
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().regex(/[A-Z]{2}/).not().empty().required(),
  }).validate(req.body);

  // Retorna se houver erro de tipagem
  if (error) return next(error);

  // Extrai dados da requisição;
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  // Solicita a inseção no banco de dados a camada de serviço
  const newAddress = await CEP.create(cep, logradouro, bairro, localidade, uf);

  // Caso receba um erro da requisição, segue pra tratamento de erro
  if (newAddress.error) return next(newAddress.error);

  // Caso de tudo certo, retorna resultado da requisição
  res.status(201).json({ cep, logradouro, bairro, localidade, uf });
})

module.exports = {
  findCep,
  create,
};
