const connection = require('./connection');
const axios = require('axios');

const findCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const cepFinded = await connection.execute(query, [cep]);

  if (!cepFinded) return null;

  return cepFinded;
};

const fetchCep = async (cep) => {
  const serchedCep = axios(`https://viacep.com.br/ws/${cep}/json/`);

  if (serchedCep.error) return null;

  return serchedCep;
}

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)';
  const values = [cep, logradouro, bairro, localidade, uf];
  connection.execute(query, values);
}

module.exports = {
  findCep,
  create,
  fetchCep,
};
