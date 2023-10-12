function getComputerChoice() {
    let result;
    result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "Rock";
    } else if (result === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice() {
    let playerInput = prompt("What will you play? Rock, Paper or Scissors? ").toLowerCase();
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return (playerInput.slice(0,1)).toUpperCase() + playerInput.slice(1);
    } else {
        console.log("Player input something incorrect, defaulting to Rock.");
        return "Rock";
    }
}

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore += 1;
            return "Computer wins! Paper beats rock!";
        } else {
            playerScore += 1;
            return "Player wins! Rock beats scissors!";
        };
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore += 1;
            return "Player wins! Paper beats rock!";
        } else {
            computerScore += 1;
            return "Computer wins! Scissors beats paper!";
        };
    } else {
        if (computerSelection === "Rock") {
            computerScore += 1;
            return "Computer wins! Rock beats scissors!";
        } else {
            playerScore += 1;
            return "Player wins! Scissors beats paper!";
        };
    }
    
}

function game() {
    playerScore = 0;
    computerScore = 0;
    let roundResult;
    roundResult = playRound();
    console.log(roundResult);
    roundResult = playRound();
    console.log(roundResult);
    roundResult = playRound();
    console.log(roundResult);
    roundResult = playRound();
    console.log(roundResult);
    roundResult = playRound();
    console.log(roundResult);

    if (playerScore === computerScore) {
        console.log(`It's a tie! Player and Computer both had a score of ${playerScore}.`);
    } else if (playerScore > computerScore) {
        console.log(`${playerScore} - ${computerScore}. Player wins!`);
    } else {
        console.log(`${playerScore} - ${computerScore}. Computer wins!`);
    }
}

let playerScore;
let ComputerScore;


// getComputerChoice() randomly returns "Rock", "Paper" or "Scissors"

// getPlayerChoice() use prompt to get input from user

// a function that plays a single round of RPS, with two parameters:
// playerSelection and computerSelection
// returns a string that declares the result of the round
// should be case insensitive

// another function called game() to play a 5 round game
// keeps score and reports a winner at the end of the game
// use console.log to display the results of each round