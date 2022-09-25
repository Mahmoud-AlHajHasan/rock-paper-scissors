// get a random number from 1 to 3 and assign it to a variable
// assign rock paper or scissor to computerChoice depending on the random number generated
// return computerChoice

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



// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// 

function playRound(playerChoice, computerChoice){
  let winner;
  // computer winner 
  if ((playerChoice === `rock` && computerChoice === `paper`) || (playerChoice === `paper` && computerChoice === `scissors`) || (playerChoice === `scissors` && computerChoice === `rock`)) {
    winner = `computer`
    return winner;
  } else if ((playerChoice === `paper` && computerChoice === `rock`) || (playerChoice === `scissors` && computerChoice === `paper`) || (playerChoice === `rock` && computerChoice === `scissors`)) {
    winner = `player`
    return winner;
  } else if (computerChoice === playerChoice) {
    winner = `none`
    return winner;
  } else { 
    winner = `none`
    return winner;
  }


  return winner;
}

// start a loop with a games counter (games), increment by 1 every time unless a draw
// playerPoints = playerPoints + 1 if player wins
// 