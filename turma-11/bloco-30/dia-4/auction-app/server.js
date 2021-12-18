const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);

app.use(cors());
app.use(express.json());

const io = require('socket.io')(http, {
  cors: {
    local: 'http://localhost:3000/',
    methods: ['GET', 'POST'],
  },
});

require(`./sockets/auction.js`)(io);

const controllers = require('./controllers/Products.js');

app.post('/', controllers.saveProduct);
app.get('/products', controllers.getAll);

http.listen(3000, () => console.log('Ouvindo na porta 3000'));
