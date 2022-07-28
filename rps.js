let playerScore = 0;
let computerScore = 0;
let gameNumber = 0;

//Valid in the update
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

//valid now
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let winner;
    displayChoice(playerChoice.toUpperCase(), computerChoice.toUpperCase());
    gameNumber++;
    if(!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissor"))
        return;
    else if(computerChoice == playerChoice) 
        winner = "tie";
        
    else if((computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "scissor" && playerChoice == "rock") || (computerChoice == "paper" && playerChoice == "scissor") )
        winner = "player";
        
    else
        winner = "computer";
        
    return winner;
}

//working
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
    }
    const roundResult = document.querySelector('.round');
    roundResult.innerText = message;
    const scores = document.querySelectorAll('.score div');
    scores[0].innerText = `Player Score: ${playerScore}`;
    scores[1].innerText = `Computer Score: ${computerScore}`;

}


function displayFinalResult() {
    console.log(`Final Result: \nYou-${playerScore} \t Computer-${computerScore} `);
    let winner = (playerScore > computerScore) ? "You're the winner!" : (playerScore < computerScore) ? "Computer wins!" : "It's a draw";
    const result = document.querySelectorAll('.result div');
    result[0].innerText = "Final Result: ";
    result[1].innerText = winner;
    playerScore = 0;
    computerScore = 0;
    gameNumber = 0;
}



const buttons = document.querySelectorAll('button');

buttons.forEach( button => {
    button.addEventListener('click', buttonClick);
});

function buttonClick(event) {
    if(gameNumber === 5) {
        displayFinalResult();
        return;
    }
    computerChoice = getComputerChoice();
    playerChoice = event.target.id;
    let roundWinner = playRound(playerChoice, computerChoice);

    displayRoundResult(roundWinner, playerChoice, computerChoice);

}

function displayChoice(playerChoice, computerChoice) {
    const choices = document.querySelectorAll('.choices div p');
    choices[0].textContent = playerChoice;
    choices[1].textContent = computerChoice;
}