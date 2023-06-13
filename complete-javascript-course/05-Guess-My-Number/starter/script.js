'use strict';

const message = document.querySelector('.message');
const checkBtn = document.querySelector('.btn.check');
const numberDisplay = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;

let scoreValue = 20;
let highScoreValue = 0;
console.log(secretNumber, 'turn on to work on BUGs') // erase later

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // No input
  if (guess === 0) {
    message.textContent = 'Enter number from 1 to 20!';
  } else {
    // numberDisplay.textContent = secretNumber // displays number

    // Player wins
    if (guess === secretNumber) {
      message.textContent = '🎉 You win!';
      checkBtn.setAttribute('disabled', '');
      checkBtn.classList.add('disabled', 'btn:hover');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      numberDisplay.textContent = secretNumber; // displays number

      if (scoreValue > highScoreValue) {
        highScoreValue = scoreValue;
        highScore.textContent = highScoreValue;
      }
      
      // Guess too High
    } else if (guess > secretNumber) {
      message.textContent = '📈 Too High!';
      guessWrong()

      // Guess too Low
    } else if (guess < secretNumber) {
      message.textContent = '📉 Too Low!';
      guessWrong()
    }

    function guessWrong(){
      scoreValue--;
      scoreDisplay.textContent = scoreValue;
    }

    // Game over
    if (scoreValue <= 0) {
      message.textContent = '💥 Game Over';
      checkBtn.setAttribute('disabled', '');
      checkBtn.classList.add('disabled', 'btn:hover');
    }
  }

  // }
});
// restart
againBtn.addEventListener('click', () => {
  const guess = document.querySelector('.guess');
  guess.value = '';
  numberDisplay.textContent = '?';
  checkBtn.removeAttribute('disabled');
  checkBtn.classList.remove('disabled', 'btn:hover');
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  scoreDisplay.textContent = 20;
  scoreValue = 20;
  console.log(secretNumber, 'turn on to work on BUGs')
});
