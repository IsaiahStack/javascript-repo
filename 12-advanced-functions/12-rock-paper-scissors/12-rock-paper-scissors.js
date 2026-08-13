let score = JSON.parse(localStorage.getItem('score')) || { 
  wins: 0,
  losses: 0,
  ties: 0
};

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}*/

let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {
  
//};

function autoplay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
  
    }, 1000)
    isAutoPlaying = true;
    document.querySelector('.js-auto-play').
    innerHTML = 'Stop Play';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play').
    innerHTML = 'Auto Play';
  }

}

function playGame(playerMove) {

  const computerMove = pickComputerMove();  

  let result = '';

  if (playerMove === 'scissors') {

    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }

  } else if (playerMove === 'paper') {

    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }

  } else {

    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }

  }

  if (result === 'You win') {
    score.wins++;
  } else if (result === 'You lose') {
    score.losses++;
  } else if (result === 'Tie') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = `${result}!`;

  document.querySelector('.js-moves')
    .innerHTML = 
    `Your move: <img src="/10-together/Pics/${playerMove}-emoji.png" class="move-icon">
    Computer move: <img src="/10-together/Pics/${computerMove}-emoji.png" class="move-icon">
    `;

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}


function pickComputerMove() {

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

updateScoreElement()
