'use strict';

let random = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setNumber = function (score) {
  document.querySelector('.number').style.width = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // If there is no number input
  if (!guess) {
    setMessage('Please enter a number first 🙏');

    //When guess is correct
  } else if (guess === random) {
    document.querySelector('.number').textContent = random;
    setMessage('You won! 😃');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== random) {
    if (score > 1) {
      setMessage(
        guess > random
          ? `Please try again, the correct number is lower ⬇️`
          : `Please try again, the correct number is higher ⬆️`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost 😢`;
      document.querySelector('.score').textContent = 0;
    }
  }

  //Reset
  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = 20;
    setMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    random = Math.trunc(Math.random() * 20) + 1;
    score = 20;
  });
});
