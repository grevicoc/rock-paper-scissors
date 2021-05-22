function computerPlay() {
    let retval = Math.random();
    retval = Math.floor(retval*3);
    
    switch (retval) {
        case 0:
            return "rock"; 
        case 1:
            return "scissors"
        case 2:
            return "paper";

        default:
            return null;
    }
}

function playRound(user,comp){
    if (user==comp){
        return "DRAW!";
    }else{
        if (user=="rock"){
            if (comp=="paper"){
                return "COMPUTER WIN!";
            }else{
                return "USER WIN!";
            }
        }else if (user=="scissors"){
            if (comp=="rock"){
                return "COMPUTER WIN!";
            }else{
                return "USER WIN!";
            }
        }else if (user=="paper"){ 
            if (comp=="scissors"){
                return "COMPUTER WIN!";
            }else{
                return "USER WIN!";
            }
        }
    }
}

let userCount=0;
let computerCount=0;

var i;
for (i=0;i<5;i++){
    
    let computerSelection = computerPlay();
    let playerSelection = prompt(`Game ${i+1} | Input Your Choice!: (rock, paper, or scissors)`).toLowerCase();

    console.log(computerSelection);
    let result = playRound(playerSelection,computerSelection); 
    console.log(result);

    if (result=="USER WIN!"){
        userCount++;
    }else if (result=="COMPUTER WIN!"){
        computerCount++;
    }
}

if (userCount>computerCount){
    console.log("FINAL RESULT USER WIN!");
}else if (userCount==computerCount){
    console.log("FINAL RESULT DRAW!");
}else{
    console.log("FINAL RESULT COMPUTER WIN!");
}