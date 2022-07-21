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