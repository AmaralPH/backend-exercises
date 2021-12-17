module.exports = (io) => {
  io.on('connection', (socket) => {
    // console.log(socket.id);

    socket.on('makeBid', (price) => {
      socket.emit('bidMaked', price + 5);
    })
  });
}