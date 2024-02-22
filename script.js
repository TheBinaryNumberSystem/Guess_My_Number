'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '13';

// document.querySelector('.score').textContent = '10';
// // console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value = 56;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '⛔ Please enter a number first';
    displayMessage('⛔ Please enter a number first ...');

    //When player wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Congratulations 🎉';
    displayMessage('Congratulations 🎉');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? '📈 Too high' : '📉 Too low';
      displayMessage(guess > number ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😿 You lost';
      displayMessage('😿 You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Making 'Again' button functioning
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
