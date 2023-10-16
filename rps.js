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

function playRound(playerSelection) {
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

function updateScore() {
    matchScore.textContent = `${playerScore} - ${computerScore}`;
}

function checkWin() {
    if (playerScore === 5) {
        matchResult.textContent = "Congratulations! You win!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        matchResult.textContent = "Sorry, computer won!";
        playerScore = 0;
        computerScore = 0;
    } else {
        matchResult.textContent = "First to 5 wins!";
    };
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;

const div = document.querySelector('div');
const roundResult = document.querySelector('#round-result');
const matchScore = document.querySelector('#match-score');
const matchResult = document.querySelector('#match-result');

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () => {
    roundResult.textContent = playRound('Rock');
    updateScore();
    checkWin();
});

btnPaper.addEventListener('click', () => {
    roundResult.textContent = playRound('Paper');
    updateScore();
    checkWin();
});

btnScissors.addEventListener('click', () => {
    roundResult.textContent = playRound('Scissors');
    updateScore();
    checkWin();
});


