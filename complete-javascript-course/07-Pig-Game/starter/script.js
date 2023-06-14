'use strict';
const scoreP1 = document.getElementById('score--0');
const scoreP2 = document.getElementById('score--1');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');
const newGame = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

diceEl.classList.add('hidden');
let currentScore, playing, activePlayer, totalScores;


const init = function () {
    totalScores = [0, 0];
    currentScore = 0;
    activePlayer = 0; // player 1 = 0 and player 2 = 1!
    playing = true;
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
    currentScoreP1.textContent = 0;
    currentScoreP2.textContent = 0;
    player1El.classList.add('player--active');
    activePlayer = 0; // player 1 = 0 and player 2 = 1!
    // totalScores[0] = 0;
    // totalScores[1] = 0;
}
init()

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //current scores sets to 0
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
}

//add evLis to rolldicebtn to call the rolldice func
rollDiceBtn.addEventListener('click', () => {
  if (playing) {
    // console.log(activePlayer)
    diceEl.classList.remove('hidden');
    //random 1-6
    let roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById(`score--${activePlayer}`).textContent = roll; //`score--${activePlayer}`
    // scoreP1.textContent = roll
    diceEl.src = `dice-${roll}.png`;

    if (roll !== 1) {
      currentScore += roll;
      //checks for the current player dynamically
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch players
      switchPlayer();
      //other
      // currentScoreP1.textContent = 0
      // scoreP1.textContent = 0
      if (roll === 1) {
        scoreP2.textContent = 0;
      }
    }
  }
});

//evLis to hold button
holdBtn.addEventListener('click', () => {
  if (playing) {
    //go to other player
    // add current score to active playes score
    totalScores[activePlayer] += currentScore;

    // this below gets the current totalScores and changes its content to reflect the totalScores from the array!
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    // check if players score is >=100 if yes finish game
    if (totalScores[activePlayer] >= 100) {
      playing = false;
      console.log('you win');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      currentScore = 0;
      diceEl.classList.add('hidden');
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});



newGame.addEventListener('click', () => {
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  init()
});
