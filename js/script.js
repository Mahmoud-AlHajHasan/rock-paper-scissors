function getComputerChoice() {
  let choiceValue = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let computerChoice;
  if (choiceValue === 1) {
    computerChoice = `rock`;
  } else if (choiceValue === 2) {
    computerChoice = `paper`;
  } else {
    computerChoice = `scissors`;
  }
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice === `rock` && computerChoice === `paper`) ||
    (playerChoice === `paper` && computerChoice === `scissors`) ||
    (playerChoice === `scissors` && computerChoice === `rock`)
  ) {
    winner = `computer`;
    lossAudio.currentTime = 0;
    lossAudio.play()
    return winner;
  } else if (
    (playerChoice === `paper` && computerChoice === `rock`) ||
    (playerChoice === `scissors` && computerChoice === `paper`) ||
    (playerChoice === `rock` && computerChoice === `scissors`)
  ) {
    winner = `player`;
    winAudio.currentTime = 0;
    winAudio.play()
    return winner;
  } else if (computerChoice === playerChoice) {
    winner = `Draw!`;
    return winner;
  } 
}

function storeChoice(e) {
  playerChoice = e.target.textContent.toLowerCase()
  computerChoice = getComputerChoice()
}

function decidePoints() {
    let winner = playRound(playerChoice, computerChoice);
    if (winner === `computer`) {
      computerPoints += 1;
      roundCounter += 1;
    } else if (winner === `player`) {
      playerPoints += 1;
      roundCounter += 1;
    } else if (winner === `Draw!`) {
      
    } else {
      
    }
}


function viewOutput() {
  currentRoundCounter.textContent = roundCounter
  computerPointsCounter.textContent = computerPoints
  playerPointsCounter.textContent = playerPoints
  reverseRoundsCounter.textContent = 5-roundCounter
  computerPointsCounter.textContent = computerPoints
  playerPointsCounter.textContent = playerPoints

  if (roundCounter<5 && playerPoints < 3 && computerPoints < 3){
    document.querySelector("#choiceText").textContent= `Choose your play`
    textAboveReverseRounds.textContent = `This Round's Winner:`
    document.querySelector("#winnerChoice").textContent = `${winner.slice(0,1).toUpperCase()+winner.slice(1)}`
  } else {
    if (computerPoints>playerPoints) {
      winner = `Computer`;
    } else {
      winner = `Player`
    }
    document.querySelector("#choiceText").textContent= `Good Game!`
    reverseRoundsCounter.textContent = `${winner.slice(0,1).toUpperCase()+winner.slice(1)}!`
    textAboveReverseRounds.textContent = `Final Winner:`
    choiceMenu.removeChild(rockChoice)
    choiceMenu.removeChild(scissorsChoice)
    paperChoice.textContent = `Replay`
    paperChoice.removeEventListener(`click`, storeChoice);
    paperChoice.removeEventListener(`click`, playRound)
    paperChoice.removeEventListener(`click`, decidePoints)
    paperChoice.removeEventListener(`click`, viewOutput)
    if (paperChoice.textContent === `Replay`){
      paperChoice.addEventListener(`click`, replay)
    }

  }
}

function replay() {
  if (confirm(`Are you sure?`)){
    computerPoints = 0
    playerPoints = 0
    roundCounter = 0
    document.querySelector("#choiceText").textContent= `Choose your play`
    textAboveReverseRounds.textContent = `This Round's Winner:`
    document.querySelector("#winnerChoice").textContent = `...`
    currentRoundCounter.textContent = roundCounter
    computerPointsCounter.textContent = computerPoints
    playerPointsCounter.textContent = playerPoints
    paperChoice.addEventListener(`click`, storeChoice);
    paperChoice.addEventListener(`click`, playRound)
    paperChoice.addEventListener(`click`, decidePoints)
    paperChoice.addEventListener(`click`, viewOutput)
    choiceMenu.insertBefore(rockChoice,paperChoice)
    choiceMenu.appendChild(scissorsChoice)
    paperChoice.textContent = `Paper`
    paperChoice.removeEventListener(`click`, replay)
}}

const computerPointsCounter = document.querySelector(`#computerPoints`)
const playerPointsCounter = document.querySelector(`#playerPoints`)
const currentRoundCounter = document.querySelector(`#currentRound`)
const reverseRoundsCounter = document.querySelector(`#winnerChoice`)
const textAboveReverseRounds = document.querySelector("#winnerText")

const choiceMenu = document.querySelector("#choice")

const rockChoice = document.querySelector(`#rock`)
const paperChoice = document.querySelector(`#paper`)
const scissorsChoice = document.querySelector(`#scissors`)
const choices = [rockChoice, paperChoice, scissorsChoice]
let winner;
let playerChoice;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;
let roundCounter = 0;
let reverseRounds = 0;

const winAudio = document.querySelector("#win")
const lossAudio = document.querySelector("#loss")


choices.forEach(
  (choice)=> {
    choice.addEventListener(`click`, storeChoice);
    choice.addEventListener(`click`, playRound)
    choice.addEventListener(`click`, decidePoints)
    choice.addEventListener(`click`, viewOutput)

  }
)


