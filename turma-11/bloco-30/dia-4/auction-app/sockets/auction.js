module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('makeBid', ({ price, _id }) => {
      console.log(price)
      io.emit('bidMaked', { newPrice: price, _id });
    })
  });
}