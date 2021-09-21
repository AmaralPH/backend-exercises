module.exports = (err, _req, res, _next) => {
  // Todo erro será tratado por esse middleware, precisamos identificar o erro

  // Se o erro foi Joi, é necessáriamente um erro de validação
  if (err.isJoi) {
    return res.status(400).json({ error: { code: "invalidData", message: "CEP inválido" } });
  };
  // console.log(err.code);

  // Caso não seja um erro Joi, pode ser de outros tipos, vamos fazer um mapa que conecta
  // o tipo de erro ao status HTTP.
  const statusByErrorCode = {
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  };

  // Buscamos o status correto, se for desconhecido retorna 500 (Internal Server Error)
  const status = statusByErrorCode[err.code] || 500;

  // Retornamos o status e a mensagem de erro
  res.status(status).json({ error: { code: err.code, message: err.message } });
};
