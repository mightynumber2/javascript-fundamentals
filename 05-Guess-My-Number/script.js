'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🍕 Correct Number!'
// manipulating the DOM!
document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 41;

console.log(document.querySelector('.guess').value = 16); */

// const secretNum = Math.ceil(Math.random() * 20 );
let secretNum = Math.ceil(Math.random() * 20 );
let score = 20;
// let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  // const winner = document.querySelector('.message').textContent = '🍕 CORRECT NUMBER!';
  // const tooHigh = document.querySelector('.message').textContent = 'Too high...';
  // const tooLow = document.querySelector('.message').textContent = 'Too low...';

  // When the input is not a number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    // When the player wins
    } else if (guess === secretNum) {
      document.querySelector('.message').textContent = '🍕 CORRECT NUMBER!';
      document.querySelector('.score').textContent = score;
      
      document.querySelector('body').style.background = '#60b347';
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('.number').style.width = '30rem'
      return score++;

    // When the guess is too high
    } else if (guess > secretNum && score > 1) {
      document.querySelector('.message').textContent = '✋ Too high...';
      score--;
      document.querySelector('.score').textContent = score;

    // When the guess is too low
    } else if (guess < secretNum && score > 1) {
      document.querySelector('.message').textContent = '✋ Too low...'
      score--;
      document.querySelector('.score').textContent = score;

    // When the game is over
    } else if (score > 0) {
      document.querySelector('.message').textContent = '❌ Game Over';
      document.querySelector('.score').textContent = 0;
    }
  });
// Coding-challenge
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNum = Math.ceil(Math.random() * 20 );

  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.background = '#222';
});