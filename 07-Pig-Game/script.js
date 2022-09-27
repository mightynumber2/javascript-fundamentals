'use strict';

// Set starting scores to 0

// Click ROLL DICE --> start as PLAYER 1 --> roll the die --> if not a 1 --> add roll to CURRENT score, else if a 1 --> reset CURRENT score to 0 and switch to PLAYER 2

const rollBtn = document.querySelector('.btn--roll');
rollBtn.onclick = rollDice;

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let diceImg = document.querySelector('.dice');

let currentScore, scores, playing;
let activePlayer = 0;

function init() {
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  document.getElementById(`name--0`).textContent = `Player 1`;
  document.getElementById(`name--1`).textContent = `Player 2`;
  document.getElementById('current--0').textContent = currentScore;
  document.getElementById('current--1').textContent = currentScore;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  diceImg.style.display = 'none';
};
init();

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

function rollDice() {
  if (playing) {
    const randRoll = Math.ceil(Math.random() * 6);
    diceImg.style.display = 'block';
    diceImg.src = `dice-${randRoll}.png`;
  
    if (randRoll !== 1) {
      currentScore += randRoll;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  // Roll a 1
    } else {
    switchPlayer();
    }
  }
};

// Click HOLD button to store CURRENT score and switch players; First to 100 shows winner
const holdBtn = document.querySelector('.btn--hold');
holdBtn.onclick = storeCurrentScore;

function storeCurrentScore() {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    if (scores[activePlayer] >= 10) {
      document.getElementById(`name--${activePlayer}`).textContent = '🎊 WINNER!';
      document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');
      diceImg.style.display = 'none';
      playing = false;

    } else {
    switchPlayer();
    }
  }
};

// Click NEW GAME to set score and current score to 0
document.querySelector('.btn--new').onclick = init;
