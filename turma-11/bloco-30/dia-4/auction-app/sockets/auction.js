module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('lanceOnProduct', ({ _id, currentPrice }) => {
      console.log(_id, currentPrice)
    })
  });
}