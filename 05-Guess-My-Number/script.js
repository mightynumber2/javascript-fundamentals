'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🍕 Correct Number!'
// manipulating the DOM!
document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 41;

console.log(document.querySelector('.guess').value = 16); */

let secretNum = Math.ceil(Math.random() * 20 );
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNum;
// Using functions to refactor code
const newMessage = message => document.querySelector('.message').textContent = message;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  // When the input is not a number
  if (!guess) {
    newMessage('⛔ No number!');
    // When the player wins
    } else if (guess === secretNum) {
      newMessage('🍕 CORRECT NUMBER!');
      document.querySelector('body').style.background = '#60b347';
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('.number').style.width = '30rem'
        // When the player gets the highscore
        if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore 
        };
    // If guess is not the secret number
    } else if (guess !== secretNum) {
      if (score > 1) {
        newMessage(guess > secretNum ? '✋ Too high...' : '✋ Too low...');
      score--;
      document.querySelector('.score').textContent = score;
      // Game over
      } else {
        newMessage('❌ Game Over');
      document.querySelector('.score').textContent = 0;
      }
    }
    /* // When the guess is too high
    } else if (guess > secretNum && score >= 1) {
      document.querySelector('.message').textContent = '✋ Too high...';
      score--;
      document.querySelector('.score').textContent = score;

    // When the guess is too low
    } else if (guess < secretNum && score >= 1) {
      document.querySelector('.message').textContent = '✋ Too low...'
      score--;
      document.querySelector('.score').textContent = score;

    // When the game is over
    } else if (score <= 0) {
      document.querySelector('.message').textContent = '❌ Game Over';
    } */
  });
// Coding-challenge
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNum = Math.ceil(Math.random() * 20 );

  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  newMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.background = '#222';
});