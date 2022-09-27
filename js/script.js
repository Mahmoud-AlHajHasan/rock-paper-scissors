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
    winner = `spellingMistake`;
    return winner;
  }
}

function getPlayerChoice(){
  let playerChoice = prompt(`Rock, Paper or Scissors?`).toLowerCase().trim()
  return playerChoice
}

function game() {
  let computerPoints = 0;
  let playerPoints = 0;
  for (i=0;(i<5)&&(playerPoints<3)&&(computerPoints<3);i++){
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()
    let winner = playRound(playerChoice,computerChoice)
    if (winner === `computer`){
      computerPoints += 1
      alert(`You lost this round!`)
    } else if (winner === `player`) {
      playerPoints += 1
      alert(`You won this round!`)
    } else if (winner === `none`) { 
      alert(`Draw!`)
      i -= 1
    } else { 
      alert(`Spell it right!`)
      i -= 1
    }
  }
  if (playerPoints > computerPoints) {
    alert(`You won the game, Good Job!`)
  } else {
    alert(`lol loser.`)
  }
}

game()
