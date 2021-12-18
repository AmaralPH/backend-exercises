module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('enterGame');

    socket.on('startGame', ({ Y, X }) => {
      io.emit('boxPosition', { Y, X });
    });

    socket.on('restartGame', ({ Y, X }) => {
      io.emit('boxPosition', { Y, X });
    })

    socket.on('play', ({ Y, X }) => {
      io.emit('boxPosition', { Y, X })
    })
  });
};
