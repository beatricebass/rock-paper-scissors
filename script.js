// this function generates a play from the computer; rock, paper or scissors
//store game options in an array
//generate a random number between 1 and 3
//the number will correspond to the key in the array, and the corresponding game option

let compScore = 0
let playerScore = 0


function computerPlay() { 
    const gameOptions = ["Rock", "Paper", "Scissors"];
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

const selections = document.querySelectorAll('.button');
selections.forEach((selection) => { selection.addEventListener('click', game);
});

function playerSelect () {
    return playerSelection = document.getElementById('button').innerText;
}

// this function takes what the computer plays and human plays, compares the result and spits out a response...either you win, you lose, or tie game

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "Tie. Try again! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Rock") && (playerSelection === "Paper")) {
        playerScore++;
        return "Rock loses to Paper. You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Rock") && (playerSelection === "Scissors")){
        compScore++;
        return "Rock beats Scissors. You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Scissors") && (playerSelection === "Paper")) {
        compScore++;
        return "Scissors beats Paper. You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Scissors") && (playerSelection === "Rock")) {
        playerScore++;
        return "Scissors loses to Rock. You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Paper") && (playerSelection === "Scissors")) {
        playerScore++;
        return "Paper loses to Scissors. You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Paper") && (playerSelection === "Rock")) {
        compScore++;
        return "Paper beats Rock. You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else {
        return "Invalid selection"
    }
}

// function gets input from the previous two functions and plays the game for 5 rounds. The score is kept track of and a winner is announced at the end of 5 rounds

function game() {
    computerSelection = computerPlay();
    playerSelection = playerSelect();
    roundResult = playRound(computerSelection, playerSelection);
    
    
    if (playerScore === 5) {
        roundResult = "The final score is Computer: " + compScore + " vs you: " + playerScore + ". Congratulations, you win!";
        const endBtn = document.createElement('button');
        body.appendChild(endBtn);
        endBtn.setAttribute('style', 'display: flex; margin-top: 20px');
        endBtn.textContent = 'Reset Game';
    }
    if (compScore === 5) {
        roundResult = "The final score is Computer: " + compScore + " vs you: " + playerScore + ". You lose.";
        const endBtn = document.createElement('button');
        body.appendChild(endBtn);
        endBtn.setAttribute('style', 'display: flex; margin-top: 20px; justify-content: center;');
        endBtn.textContent = 'Reset Game';
    }
    div.textContent = roundResult;

    

}

const body = document.querySelector('body');

    const div = document.createElement('div');
    body.appendChild(div);
    div.setAttribute('style', 'display: flex; margin-top: 20px');