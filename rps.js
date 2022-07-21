let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch(randomNumber) {
        case 0: computerChoice = "rock"; break;
        case 1: computerChoice = "paper"; break;
        case 2: computerChoice = "scissor"; break;
    }
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let winner;

    if(!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissor"))
        return;
    else if(computerChoice == playerChoice) 
        winner = "tie";
        // result = "It's a Tie!";
    else if((computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "scissor" && playerChoice == "rock") || (computerChoice == "paper" && playerChoice == "scissor") )
        winner = "player";
        // result = "You win! " + playerChoice + " beats " + computerChoice;
    else
        winner = "computer";
        // result = "You lose! " + computerChoice + " beats " + playerChoice;
    return winner;
}

function displayRoundResult(winner, playerChoice, computerChoice) {
    switch(winner) {

        case "tie": message = "It's a Tie!"; 
            break;
        case "player": message = "You win! " + playerChoice + " beats " + computerChoice; 
            playerScore++; 
            break;
        case "computer": message = "You lose! " + computerChoice + " beats " + playerChoice;
            computerScore++;
            break;
        default: message = "Invalid input";
    }
    console.log(message);    
}

function displayFinalResult() {
    console.log(`Final Result: \nYou-${playerScore} \t Computer-${computerScore} `);
    let winner = (playerScore > computerScore) ? "You're the winner!" : (playerScore < computerScore) ? "Computer wins!" : "It's a draw";
    console.log(winner);
}

function game() {

    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Enter your choice: ");
        let computerChoice = getComputerChoice();
        winner = playRound(playerChoice, computerChoice);
        displayRoundResult(winner, playerChoice, computerChoice);
    }
    displayFinalResult();
}

game();