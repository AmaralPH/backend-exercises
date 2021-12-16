const socket = window.io();

const likeIcon = document.querySelector('#likeIcon');

likeIcon.addEventListener('click', (e) => {
  socket.emit('likePost');
});

const starIcon = document.querySelector('#starIcon');

starIcon.addEventListener('click', (e) => {
  socket.emit('starPost');
  const currentStars = document.querySelector('#currentStars');
  let starsNumber = Number(currentStars.innerHTML);
  currentStars.innerHTML = starsNumber + 1;
})

socket.on('updateLikes', (likes) => {
  const currentLikes = document.querySelector('#currentLikes');
  currentLikes.innerHTML = likes;
  return false;
})

socket.on('updateStars', (stars) => {
  const currentStars = document.querySelector('#currentStars');
  currentStars.innerHTML = stars;
  return false;
})