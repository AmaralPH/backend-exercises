const CEP = require('../models/CEP');

const fetchCep = async (search) => {
  const fetchedCep = await CEP.fetchCep(search);

  if (fetchedCep.error) return null;

  const { cep, logradouro, bairro, localidade, uf } = fetchedCep.data;

  CEP.create(cep, logradouro, bairro, localidade, uf);

  return { cep, logradouro, bairro, localidade, uf };
} 

const findCep = async (cep) => {
  // Solicita ao model que busque no DB
  const findedCep = await CEP.findCep(cep);

  // Caso não tenha resposta, busca cep na API
  if (!findedCep) {
    // Busca cep na API
    const fetchedCep = await fetchCep(cep);
    // console.log(fetchedCep)

    // Caso não encontre retorna erro
    if (!fetchedCep) {
      return {
        error: {
          code: "notFound",
          message: "CEP não encontrado"
        },
      };
    }

    // Caso encontre, retorna o cep
    return fetchedCep;    
  };

  // Caso não haja erro, retorna o resultado da busca
  return findedCep;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  // Verifica se cep ja foi cadastrado
  const existingCep = await CEP.findCep(cep);

  // Caso cep tenha sido cadastrado retorna erro
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  };

  CEP.create(cep, logradouro, bairro, localidade, uf);

  return {};
};

module.exports = {
  findCep,
  create,
};
