'use strict';

// Set starting scores to 0

// Click ROLL DICE --> start as PLAYER 1 --> roll the die --> if not a 1 --> add roll to CURRENT score, else if a 1 --> reset CURRENT score to 0 and switch to PLAYER 2
const rollBtn = document.querySelector('.btn--roll');
rollBtn.onclick = rollDice;

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

// Click HOLD button to store CURRENT score and switch players; First to 100 shows winner
const holdBtn = document.querySelector('.btn--hold');
holdBtn.onclick = storeCurrentScore;

const p1_Score = document.querySelector('#score--0');
const p2_Score = document.querySelector('#score--1');
const p1_Name = document.querySelector('#name--0');
const p2_Name = document.querySelector('#name--1');

let score = 0;

function storeCurrentScore() {
  const player1Active = player1.classList.contains('player--active')
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  
  if (player1Active) {
    score = Number(p1_Score.textContent) + currentScore;
    p1_Score.textContent = score;
    currentScore = 0;
    p1_CurrentScore.textContent = currentScore;
    
  } else {
    score = Number(p2_Score.textContent) + currentScore;
    p2_Score.textContent = score;
    currentScore = 0;
    p2_CurrentScore.textContent = currentScore;
  }

  if (p1_Score.textContent >= 10) {
    player1.classList.toggle('player--winner');
    p1_Name.textContent = "🎊 WINNER!"
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    
  } else if (p2_Score.textContent >= 10) {
    player2.classList.toggle('player--winner');
    p2_Name.textContent = "🎊 WINNER!"
    rollBtn.disabled = true;
    holdBtn.disabled = true;
  }
};

// Click NEW GAME to set score and current score to 0
document.querySelector('.btn--new').onclick = newGame;

function newGame() {
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  p1_Name.textContent = "PLAYER 1";
  p2_Name.textContent = "PLAYER 2";
  p1_Score.textContent = 0;
  p2_Score.textContent = 0;
  p1_CurrentScore.textContent = 0;
  p2_CurrentScore.textContent = 0;
  rollBtn.disabled = false;
  holdBtn.disabled = false;
}