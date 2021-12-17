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

const controllers = require('./controllers/Products.js');

// app.get('/', (_req, res) => {
//   res.(`${__dirname}/views/src/index.js`);
// });

app.post('/', controllers.saveProduct);
app.get('/products', controllers.getAll);

require(`./sockets/auction.js`)(io);

http.listen(3000, () => console.log('Ouvindo na porta 3000'));
