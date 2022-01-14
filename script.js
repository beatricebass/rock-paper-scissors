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

// this function takes what the computer plays and human plays, compares the result and spits out a response...either you win, you lose, or tie game

function gameRound(computerSelection, playerSelection) {
    if ((computerSelection === "Rock") && (playerSelection === "Rock")) {
        return "Rock vs Rock. Tie game. Try again! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Rock") && (playerSelection === "Paper")) {
        playerScore++;
        return "Rock loses to Paper. You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Rock") && (playerSelection === "Scissors")){
        compScore++;
        return "Rock beats Scissors. You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Scissors") && (playerSelection === "Scissors")) {
        return "Scissors vs Scissors. Tie game. Try again! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Scissors") && (playerSelection === "Paper")) {
        compScore++;
        return "Scissors beats Paper. You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Scissors") && (playerSelection === "Rock")) {
        playerScore++;
        return "Scissors loses to Rock. You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Paper") && (playerSelection === "Paper")) {
        return "Paper vs Paper. Tie game. Try again! The score is Computer: " + compScore + " vs you: " + playerScore;
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
    for (i = 1; i < 6; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("Rock, Paper or Scissors?");
        roundResult = gameRound(computerSelection, playerSelection);
        alert(roundResult);
        console.log(roundResult);
    }
    
    if (playerScore > compScore) {
        return "The final score is Computer: " + compScore + " vs you: " + playerScore + ". Congratulations, you win!";
    }
    else if (playerScore < compScore) {
        return "The final score is Computer: " + compScore + " vs you: " + playerScore + ". You lose.";
    }
    else if (playerScore == compScore) {
        return "The final score is Computer: " + compScore + " vs you: " + playerScore + ". Tie game.";
    }
}