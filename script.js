// Played in the console
let computerSelection = "";
let playerTotal = 0;
let computerTotal = 0;
let computerScore = 0;
let playerScore = 0;
let winner = "";
let move;

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
    console.log("Player Selection : " + move);
    document.getElementById("playerPick").innerHTML = move;
    document.getElementById("computerPick").innerHTML = computerSelection;
    return computerSelection;
}

function playerPlay(move) {
    let playerSelection = move;
    
    //window.onload = function() {
    //    document.getElementById("playerPick").innerHTML = playerSelection;
    // };
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
    if (playerTotal == 5 || computerTotal == 5) {
    if (playerTotal > computerTotal) {
        winner = "You Win!!";
    } else if(playerTotal < computerTotal) {
        winner = "The Computer wins!!";
    } else {
        winner = "It's a draw.";
    }
}
    return playerTotal, computerTotal, winner;
}

function game() {
   
    
let result = (singleRound(move, computerPlay()));

document.getElementById('result').innerHTML = result;
document.getElementById('playerscore').innerHTML = playerTotal;
document.getElementById('computerScore').innerHTML = computerTotal;

if (winner != "") {
    //$('exampleModal').find('#changeThis').innerHTML = winner;
    document.getElementById('changeThis').innerHTML = winner;
    $('#exampleModal').modal('show');
    
        

    console.log("Your Score : " + playerTotal + " computer Score : " + computerTotal);
    console.log(winner);
}
}

function reset() {
    computerSelection = "";
    playerTotal = 0;
    computerTotal = 0;
    computerScore = 0;
    playerScore = 0;
    winner = "";
    move="";
    result = "";
    game();
}

// game();


const rockbtn = document.querySelector('#rockbtn');

rockbtn.addEventListener('click', () => {
move = "rock";
game();
});

const paperbtn = document.querySelector('#paperbtn');

paperbtn.addEventListener('click', () => {
move = "paper";
game();
});

const scissorsbtn = document.querySelector('#scissorsbtn');

scissorsbtn.addEventListener('click', () => {
    move = "scissors";
    game();
});

const resetbtn = document.querySelector('#resetbtn');
resetbtn.addEventListener('click', () => {
    reset();
});