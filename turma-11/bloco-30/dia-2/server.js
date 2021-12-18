const net = require('net');

const server = net.createServer();

let clients = {};
let clientCount = 0;

server.on('connection', (connection) => {
  let clientname;
  let message = [];

  const broadcast = (msg) => {
    for (let user in clients) {
      if (clients[user] !== connection) {
        clients[user].write(msg)
      }
    }
  }

  connection.write('Por favor informe seu nome:\r\n');
  connection.setEncoding('utf-8');

  connection.on('data', data => {
    message.push(data);

    if (data == '\r\n') {
      let clientInput = message.join('').replace('\r\n', '');

      if (clients[clientInput]) {
        connection.write('Nome ja cadastrado\r\n');

        message = [];
        return
      } else {
        clientname = clientInput;
        clientCount += 1;
        clients[clientInput] = connection;
        connection.write(`Bem vindo ao chat, existem ${clientCount} clientes online`);
        broadcast(`${clientname} entrou na sala\r\n`);
        message = [];
      };
    } else {
      broadcast(`> ${clientname}: ${clientInput}\r\n`);
      message = [];
    };
  });

  connection.on('close', () => {
    delete clients[clientname];
    clientCount -= 1;
    broadcast(`${clientname} saiu da sala\r\n Usuarios ativos: ${clientCount}`);
  });

  connection.on('error', error => {
    connection.write(`Error: ${error}`);
  });
});

server.on('close', () => {
  console.log('Servidor desconectado');
});

server.on('error', () => {
  console.log(`Error: ${error}`);
});

server.on('close', () => {
  console.log('Servidor desconectado');
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
