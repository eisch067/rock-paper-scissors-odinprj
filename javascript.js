let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
   let a = Math.random()
   if(a <=0.3333){
       return ("paper")
   } else if (a>0.3333 && a <=0.6666) {
       return ("rock")
   } else {
       return("scissors")
   }
};

const hrock = document.querySelector(".rock");

function playRock(){
        playRound('rock',getComputerChoice());
    }

hrock.addEventListener("click",playRock);

const paper = document.querySelector(".paper");

function playPaper(){
        playRound('rock',getComputerChoice());
    }

paper.addEventListener("click", playPaper);

const scissors = document.querySelector(".scissors");

function playScissors(){
        playRound('scissors',getComputerChoice());
    }

scissors.addEventListener("click",playScissors);


const button = document.createElement('button');
const buttontxt = document.createTextNode("End Game");
button.append(buttontxt);
button.className += "endGame";
document.body.appendChild(button);

const endGame = document.querySelector(".endGame");
function endRPS(){
        console.log("Final Score: "+ humanScore + " Human, " + computerScore + " Computer.")
        humanScore = 0;
        computerScore =  0;
    }

endGame.addEventListener("click",endRPS);


function playRound(human,computer){
    if (human === "rock" && computer === "scissors") {
        console.log("Human wins! Rock beats Scissors");
        humanScore++;
    } else if (human === "scissors" && computer === "paper") {
        console.log("Human wins! Scissors Beats Paper");
        humanScore++;
    } else if (human === "paper" && computer === "rock") { 
        console.log("Human wins! Paper Beats Rock");
        humanScore++;
    } else if (human === computer) {
        console.log("It's a draw! No one wins");                
    } else {
        console.log("Computer wins!");
        computerScore++;
    }
console.log("Current Score: " + humanScore + " Human, " + computerScore + " Computer.")

if(humanScore > 4 || computerScore > 4){
    if (humanScore>computerScore) {
        console.log("Human won the game!");
        console.log("Final Score: "+ humanScore + " Human, " + computerScore + " Computer.")
        humanScore = 0;
        computerScore =  0;
    } else {
        console.log("Computer won the game");
        console.log("Final Score: "+ humanScore + " Human, " + computerScore + " Computer.")
        humanScore = 0;
        computerScore =  0;
    }
};

};

