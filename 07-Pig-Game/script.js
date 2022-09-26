'use strict';

// Set starting scores to 0

// Click ROLL DICE --> start as PLAYER 1 --> roll the die --> if not a 1 --> add roll to CURRENT score, else if a 1 --> reset CURRENT score to 0 and switch to PLAYER 2
document.querySelector('.btn--roll').onclick = rollDice;

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const p1_CurrentScore = document.querySelector('#current--0');
const p2_CurrentScore = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');

let currentScore = 0;

function rollDice() {
  const randRoll = Math.ceil(Math.random() * 6);
  const player1Active = player1.classList.contains('player--active')
  
  if (randRoll === 1) {
    currentScore = 0;
    p1_CurrentScore.textContent = currentScore;
    p2_CurrentScore.textContent = currentScore;
    diceImg.src = 'dice-1.png';
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');

  } else if (randRoll === 2) {
      currentScore += 2;
      diceImg.src = 'dice-2.png';
      if (player1Active) {
        p1_CurrentScore.textContent = currentScore; 
      } else {
        p2_CurrentScore.textContent = currentScore;
      }

  } else if (randRoll === 3) {
      currentScore += 3;
      diceImg.src = 'dice-3.png';
      if (player1Active) {
        p1_CurrentScore.textContent = currentScore; 
      } else {
        p2_CurrentScore.textContent = currentScore;
      }

  } else if (randRoll === 4) {
      currentScore += 4;
      diceImg.src = 'dice-4.png';
      if (player1Active) {
        p1_CurrentScore.textContent = currentScore; 
      } else {
        p2_CurrentScore.textContent = currentScore;
      }

  } else if (randRoll === 5) {
      currentScore += 5;
      diceImg.src = 'dice-5.png';
      if (player1Active) {
        p1_CurrentScore.textContent = currentScore; 
      } else {
        p2_CurrentScore.textContent = currentScore;
      }

  } else if (randRoll === 6) {
      currentScore += 6;
      diceImg.src = 'dice-6.png';
      if (player1Active) {
        p1_CurrentScore.textContent = currentScore; 
      } else {
        p2_CurrentScore.textContent = currentScore;
      }
  } 
};
