function getComputerChoice() {
  let choiceValue = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let computerChoice;
  if (choiceValue === 1){
    computerChoice = `rock`
  } else if  (choiceValue === 2){
    computerChoice = `paper`
  } else {
    computerChoice = `scissors`
  }
  return computerChoice
}

function playRound(playerChoice, computerChoice){
  let winner;
  if ((playerChoice === `rock` && computerChoice === `paper`)
    || (playerChoice === `paper` && computerChoice === `scissors`)
    || (playerChoice === `scissors` && computerChoice === `rock`)) {
    winner = `computer`;
    return winner;
  } else if ((playerChoice === `paper` && computerChoice === `rock`)
    || (playerChoice === `scissors` && computerChoice === `paper`)
    || (playerChoice === `rock` && computerChoice === `scissors`)) {
    winner = `player`;
    return winner;
  } else if (computerChoice === playerChoice) {
    winner = `none`;
    return winner;
  } else { 
    winner = `none`;
    return winner;
  }
}

function getPlayerChoice(){
  let playerChoice = prompt(`Rock, Paper or Scissors?`).toLowerCase()
  return playerChoice
}

function game() {
  let computerPoints = 0;
  let playerPoints = 0;
  for (i=0;i<5;i++){
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()
    let winner = playRound(playerChoice,computerChoice)
    if (winner === `computer`){
      computerPoints += 1
      alert(`YOU LOST`)
    } else if (winner === `player`) {
      playerPoints += 1
      alert(`You win this round!`)
    } else { 
      alert(`Draw!`)
      i -= 1
    }
  }
  if (playerPoints > computerPoints) {
    alert(`YOU WON IT ALL GZ!!!!`)
  } else {
    alert(`lol loser.`)
  }
}

game()
