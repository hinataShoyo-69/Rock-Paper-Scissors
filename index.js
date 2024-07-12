const choices=['rock','paper','scissors'];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");

const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");

let playerScore=0;
let computerScore=0;

function playGame(playerChoice){
  const computerChoice=choices[Math.floor(Math.random()*3)];
  let result="";
  if(playerChoice===computerChoice){
    result="It's a tie!"
  }
  else{
    switch(playerChoice){
      case "rock":
        result=(computerChoice==="scissors")?"You win!":"You lose!";
        break;

      case "paper":
        result=(computerChoice==="scissors")?"You lose!":"You win!";
        break;

      case "scissors":
        result=(computerChoice==="paper")?"You win!":"You lose!";
        break;
    }
  }
  playerDisplay.textContent=`Player: ${playerChoice}`;
  computerDisplay.textContent=`Computer: ${computerChoice}`;
  resultDisplay.textContent=`${result}`;

  switch(result){
  case "You win!":
    playerScore++;
    playerScoreDisplay.textContent=playerScore;
    break;

  case "You lose!":
    computerScore++;
    computerScoreDisplay.textContent=computerScore;
    break;
}
 
}



