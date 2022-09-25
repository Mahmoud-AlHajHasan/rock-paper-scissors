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