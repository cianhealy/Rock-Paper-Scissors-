//console.log ("HI");

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}



function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "Its a tie!!"
    }
    else if(result == "Player"){
        return `Player wins! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! "${computerSelection} beats ${playerSelection}`
    }

}
// const playerSelection = "paper";
// const computerSelection= getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));

function game(){
    console.log("Hi there, welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}
game()