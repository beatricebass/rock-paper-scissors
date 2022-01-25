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
    console.log(playerSelection);
    game();
    
    });
    
});



// function playerSelect() { 
//     playerSelection = selection.textContent;
//         return playerSelection;
// }
// function playerSelect () {
//     return playerSelection = document.getElementById('button').innerText;
    
// }


// this function takes what the computer plays and human plays, compares the result and spits out a response...either you win, you lose, or tie game

function playRound(computerSelection, playerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (computerSelection === playerSelection) {
        return "Computer plays: " + computerSelection + ". You play: " + playerSelection + "Tie. Try again! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Rock") && (playerSelection === "Paper")) {
        playerScore++;
        return "Computer plays: " + computerSelection + ". You play: " + playerSelection + " You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Rock") && (playerSelection === "Scissors")){
        compScore++;
        return "Computer plays: " + computerSelection + ". You play: " + playerSelection + " You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Scissors") && (playerSelection === "Paper")) {
        compScore++;
        return "Computer plays: " + computerSelection + ". You play: " + playerSelection + " You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Scissors") && (playerSelection === "Rock")) {
        playerScore++;
        return "Computer plays: " + computerSelection + ". You play: " + playerSelection + " You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Paper") && (playerSelection === "Scissors")) {
        playerScore++;
        return "Computer plays: " + computerSelection + ". You play: " + playerSelection + " You win! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else if ((computerSelection === "Paper") && (playerSelection === "Rock")) {
        compScore++;
        return "Computer plays: " + computerSelection + ". You play: " + playerSelection + " You lose! The score is Computer: " + compScore + " vs you: " + playerScore;
    }
    else {
        return "Invalid selection"
    }
}

// function gets input from the previous two functions and plays the game for 5 rounds. The score is kept track of and a winner is announced at the end of 5 rounds

function game() {
    computerSelection = computerPlay();
    roundResult = playRound();
    
    
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
    div.textContent = roundResult;
}

const refreshPage = () => {
    location.reload();
}

const body = document.querySelector('body');

    const div = document.createElement('div');
    body.appendChild(div);
    div.setAttribute('style', 'margin-top: 20px');