//////////////////////////////////////////
// GUESS MY NUMBER FROM SCRATCH

// Set random secret number, rounded up
let secretNum = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

// Functions
const showSecretNum = function () {
  document.querySelector('.number').textContent = secretNum;
};
const enterMessage = message => document.querySelector('.message').textContent = message;
const showScore = score => document.querySelector('.score').textContent = score;
const backgroundColor = color => document.querySelector('body').style.background = color;
const winBoxSize = width => document.querySelector('.number').style.width = width;

// Click check button
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  // If not a number
  if (!guess) {
    enterMessage('💢 Not a number');

  // If too high or low
  } else if (guess !== secretNum) {
    if (score > 1) {
    enterMessage(guess > secretNum ? '🤚 STOP! Too high...' : '🤚 STOP! Too low...');
    score--;
    showScore(score);
    // If score hits 0
    } else {
      enterMessage('💥 Game over 💥');
      showScore(0);
    }

  // If winner
  } else if (guess === secretNum) {
    enterMessage('🍕 Winner! Winner! Pizza Dinner 🍕');
    backgroundColor('green');
    winBoxSize('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// Click again button and reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.ceil(Math.random() * 20);

  showScore(score);
  enterMessage('Start guessing...');
  document.querySelector('.guess').value = "";
  backgroundColor('#222');
  winBoxSize('15rem');
});