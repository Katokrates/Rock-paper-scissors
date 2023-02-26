function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if(choice == 0){
        let result = "rock";
        return result;
    }else if(choice == 1){
        let result = "paper";
        return result;
    }else{
        let result = "scissors";
        return result;
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Please choose between rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
        
    if(computerChoice == "rock"){
        if(playerChoice == "rock"){
            console.log("It's a draw! Rock and Rock.")
        }else if(playerChoice == ("paper")){
            console.log("Yes! You won. Paper beats Rock.")
        }else{
            console.log("You lose! Rock beats scissors.")
        }

    }else if(computerChoice == "paper"){
        if(playerChoice == "rock"){
            console.log("You lose! Paper beats rock.")
        }else if(playerChoice == "paper"){
            console.log("It's a draw! Paper and Paper.")
        }else{
            console.log("You win! Scissors beat Paper.")
        }
    }else{
        if(playerChoice == "rock"){
            console.log("You win! Rock beats Scissors.")

        }else if(playerChoice == "paper"){
            console.log("You lose! Scissors beat Paper.")

        }else{
                console.log("It's a draw. Scissors and Scissors.")
            }
        }
    }

