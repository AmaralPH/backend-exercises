module.exports = (io) => {
  io.on('connection', (socket) => {
    let likes = 0;
    let stars = 0;

    socket.on('likePost', () => {
      likes += 1
      io.emit('updateLikes', likes);
    });

    socket.on('starPost', () => {
      stars += 1;
      socket.broadcast.emit('updateStars', stars);
    })
  });
};
