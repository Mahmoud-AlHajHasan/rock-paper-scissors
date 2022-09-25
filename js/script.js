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

// make a function that prompts input and saves it playerChoice to use for the playRound function
function getPlayerChoice(){
  let playerChoice = prompt(`Rock, Paper or Scissors?`).toLowerCase()
  return playerChoice
}


// start a loop with a games counter (games), increment by 1 every time unless a draw
// playerPoints = playerPoints + 1 if player wins
// computerPoints = computerPoints + 1 if computer wins
// when loop exits 
// if points > points totalWin = `Player`
// if else totalWIn = `Computer`
// show message depending on totalWin

function game() {
  let computerPoints = 0;
  let playerPoints = 0;
  let totalWinner;
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

// game starts automatically on refresh, asks for input of playerChoice then measures it against computerChoice and return in an alert the result.
// game loops for five finished rounds, and keeps points for each player and the highest points win the game in the end.