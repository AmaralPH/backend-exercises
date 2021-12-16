const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.use(express.json());

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.get('/', (_req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.use(express.static(__dirname + '/public'))

require('./sockets/feed')(io);

http.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
