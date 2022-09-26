'use strict';

// Set starting scores to 0

// Click ROLL DICE --> start as PLAYER 1 --> roll the die --> if not a 1 --> add roll to CURRENT score, else if a 1 --> reset CURRENT score to 0 and switch to PLAYER 2
const rollBtn = document.querySelector('.btn--roll');
rollBtn.onclick = rollDice;

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const p1_CurrentScore = document.querySelector('#current--0');
const p2_CurrentScore = document.querySelector('#current--1');
let diceImg = document.querySelector('.dice');

diceImg.style.display = 'none';
let currentScore = 0;

function switchPlayer() {
  
}

function rollDice() {
  const randRoll = Math.ceil(Math.random() * 6);
  const player1Active = player1.classList.contains('player--active')
  diceImg.style.display = 'block';
  diceImg.src = `dice-${randRoll}.png`;
  
  if (randRoll !== 1) {
    currentScore += randRoll;
    if (player1Active) {
    p1_CurrentScore.textContent = currentScore;
    } else {
    p2_CurrentScore.textContent = currentScore;
    }
  // Roll a 1
  } else {
    currentScore = 0;
    p1_CurrentScore.textContent = currentScore;
    p2_CurrentScore.textContent = currentScore;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
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
    
  } else {
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
  diceImg.style.display = 'none';
  rollBtn.disabled = false;
  holdBtn.disabled = false;
}