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
            result = 0;
            return result;
        }else if(playerChoice == ("paper")){
            console.log("Yes! You won. Paper beats Rock.")
            result = 1;
            return result;
        }else{
            console.log("You lose! Rock beats scissors.")
            result = 2;
            return result;
        }

    }else if(computerChoice == "paper"){
        if(playerChoice == "rock"){
            console.log("You lose! Paper beats rock.")
            result = 2;
            return result;
        }else if(playerChoice == "paper"){
            console.log("It's a draw! Paper and Paper.")
            result = 0;
            return result;
        }else{
            console.log("You win! Scissors beat Paper.")
            result = 1;
            return result;
        }
    }else{
        if(playerChoice == "rock"){
            console.log("You win! Rock beats Scissors.")
            result = 1;
            return result;

        }else if(playerChoice == "paper"){
            console.log("You lose! Scissors beat Paper.")
            result = 2;
            return result;

        }else{
                console.log("It's a draw. Scissors and Scissors.")
                result = 0;
                return result;
            }
        }
    
    }


    function game(){
        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++){
            playRound();
            if(result == 1){
                playerScore = playerScore + 1;
            }else if(result == 2){
                computerScore = computerScore +1;
            }

            
                        
        }

        if(playerScore > computerScore){
            console.log("Congratulations! You won! You won " + playerScore + " rounds. The computer won " + computerScore + " rounds.");
        }else if(playerScore < computerScore){
            console.log("I'm sorry but you lose! You won " + playerScore + " rounds. The computer won " + computerScore + " rounds.")
        } else{
            console.log("It's a draw!  You won " + playerScore + " rounds. The computer won " + computerScore + " rounds.")
        }
    }
