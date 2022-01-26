//global variables to keep track of the score
let compScore = 0
let playerScore = 0

// this function generates a play from the computer; rock, paper or scissors
//store game options in an array
//generate a random number between 1 and 3
//the number will correspond to the key in the array, and the corresponding game option
function computerPlay() { 
    const gameOptions = ["Rock", "Paper", "Scissors"];
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

// generate nodelist for game buttons
const selections = document.querySelectorAll('.button');

// add an event listener to each button, get player selection when pressed, and call game function
selections.forEach((selection) => { selection.addEventListener('click', () => {
    playerSelection = selection.textContent;
    game();
    
    });
    
});

// this function takes what the computer plays and human plays, compares the result and spits out a response...either you win, you lose, or tie game, also increases the global variable score each round

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "Computer played: " + computerSelection + ". You played: " + playerSelection + ". Tie. Try again! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Rock") && (playerSelection === "Paper") || (computerSelection === "Scissors") && (playerSelection === "Rock") || (computerSelection === "Paper") && (playerSelection === "Scissors")) {
        playerScore++;
        return "Computer played: " + computerSelection + ". You played: " + playerSelection + ". You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Rock") && (playerSelection === "Scissors") || (computerSelection === "Scissors") && (playerSelection === "Paper") || (computerSelection === "Paper") && (playerSelection === "Rock")){
        compScore++;
        return "Computer played: " + computerSelection + ". You played: " + playerSelection + ". You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else {
        return "Invalid selection"
    }


}

// calls playRound() and puts result into a div, checks if there is a winner

function game() {
    computerSelection = computerPlay();
    roundResult = playRound(computerSelection, playerSelection);
    
    checkWinner();
   
    div.textContent = roundResult;
}

// creates refresh page button

const refreshPage = () => {
    location.reload();
}

const body = document.querySelector('body');

    const div = document.createElement('div');
    body.appendChild(div);
    div.setAttribute('style', 'margin-top: 20px');

    // checks the score after each round to see if there is a winner

function checkWinner() {
    if (playerScore === 5) {
        roundResult = "The final score is Computer: " + compScore + " vs you: " + playerScore + ". Congratulations, you win!";
        const endBtn = document.createElement('button');
        body.appendChild(endBtn);
        endBtn.setAttribute('style', 'margin-top: 20px; align-self: center;');
        endBtn.textContent = 'Reset Game';
        endBtn.addEventListener('click', refreshPage);

    }
    if (compScore === 5) {
        roundResult = "The final score is Computer: " + compScore + " vs you: " + playerScore + ". You lose.";
        const endBtn = document.createElement('button');
        body.appendChild(endBtn);
        endBtn.setAttribute('style', 'margin-top: 20px; align-self: center;');
        endBtn.textContent = 'Reset Game';
        endBtn.addEventListener('click', refreshPage);
    }
}