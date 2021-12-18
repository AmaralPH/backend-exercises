const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);

app.use(express.json());
app.use(cors);

const io = require('socket.io')(http, {
  cors: {
    local: 'http://localhost:3000/',
    methods: ['GET', 'POST'],
  }
});

require('./sockets/Game')(io);

http.listen(3000, () => console.log('Ouvindo na porta 3000'));
