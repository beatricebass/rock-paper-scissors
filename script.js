// this function generates a play from the computer; rock, paper or scissors
//store game options in an array
//generate a random number between 1 and 3
//the number will correspond to the key in the array, and the corresponding game option




function computerPlay() { 
    let min = 1;
    let max = 3;

    function randomInt (min, max) {
    return Math.floor(Math.random() * (3 -1 + 1) + 1);
    
    }
    console.log(randomInt());

    const gameOptions = ["rock", "paper", "scissors"];
    let computerSelection = gameOptions.find(randomInt());
    console.log(computerSelection);
}

