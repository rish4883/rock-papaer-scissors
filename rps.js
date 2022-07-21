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