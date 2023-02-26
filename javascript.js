function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if(choice == 0){
        let result = "rock";
        console.log(result);
    }else if(choice == 1){
        let result = "paper";
        console.log(result);
    }else{
        let result = "scissors";
        console.log(result);
    }
}