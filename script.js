// Played in the console
let computerSelection = "";
let playerTotal = 0;
let computerTotal = 0;
let computerScore = 0;
let playerScore = 0;
let winner = "";

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerSelection = "rock";
    } else if (randomNumber == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    console.log("Computer Selection : " + computerSelection);
    return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt('Please make your selection (rock, paper or scissors');
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("Invalid Choice - Try again");
        playerSelection = "";
        playerPlay();
    }
    console.log("Player Selection :" + playerSelection);
    return playerSelection;
}

function singleRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        scoring(0,0);
        return "The result is a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            scoring(1,0);
            return "You win ! Rock beats Scissors";
        } else {
            scoring(0,1);
            return "You Lose! Paper beats Rock.";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            scoring(1,0);
            return "You Win! Paper beats Rock.";
        } else {
            scoring(0,1);
            return "You Lose! Scissors beats Paper.";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            scoring(1,0);
            return "You Win! Scissors beats Paper.";
        } else {
            scoring(0,1);
            return "You Lose! Rock beats Scissors.";
        }
    }
}

function scoring(playerScore, computerScore) {
    playerTotal = playerTotal + playerScore;
    computerTotal = computerTotal + computerScore;
    if (playerTotal > computerTotal) {
        winner = "You Win!!";
    } else if(playerTotal < computerTotal) {
        winner = "The Computer wins!!";
    } else {
        winner = "It's a draw.";
    }
    return playerTotal, computerTotal, winner;
}

function game() {
    for (let i=0; i <= 4; i++) {

console.log(singleRound(playerPlay(), computerPlay()));

    }
    console.log("Your Score : " + playerTotal + " computer Score : " + computerTotal);
    console.log(winner);
}

game();
// console.log(singleRound(playerPlay(), computerPlay()));
//console.log(playerTotal, computerTotal, winner);

