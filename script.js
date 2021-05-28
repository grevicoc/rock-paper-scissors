var buttonRock = document.getElementById("rock");
var buttonPaper = document.getElementById("paper");
var buttonScissors = document.getElementById("scissors");
var computerChoose;     //variable to store what computer choose
var playerChoose;       //variable to store what player choose
const maxGame = 5;
var currentGame=0;

//function that will return rock, scissors, or paper randomly for computer
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

//function to determine who win either user or computer based on their choose
// 1 for player win, 0 for draw, and -1 for computer win
function playRound(user,comp){
    if (user==comp){
        return 0;
    }else{
        if (user=="rock"){
            if (comp=="paper"){
                return -1;
            }else{
                return 1;
            }
        }else if (user=="scissors"){
            if (comp=="rock"){
                return -1;
            }else{
                return 1;
            }
        }else if (user=="paper"){ 
            if (comp=="scissors"){
                return -1;
            }else{
                return 1;
            }
        }
    }
}

function updateDisplay(){
    //delete all dynamic display before updating
    let resultText = document.querySelector(".winner > p");
    if (resultText != null){
        resultText.remove();
    }

    let computerChooseDisplay = document.querySelector(".play-field > .computer > img");
    if (computerChooseDisplay!=null){
        computerChooseDisplay.remove();
    }

    //showing computerChoose on display
    computerChoose = computerPlay();
    let computerPanel = document.querySelector(".play-field > .computer");
    computerChooseDisplay = document.createElement("img");
    switch (computerChoose) {
        case "rock":
            computerChooseDisplay.src = "images/fist.svg";
            break;
    
        case "paper":
            computerChooseDisplay.src = "images/release.svg";
            break;

        case "scissors":
            computerChooseDisplay.src = "images/peace.svg";
            break;
        
        default:
            break;
    }
    computerChooseDisplay.style.width = "75px";
    computerChooseDisplay.style.height = "75px";
    computerChooseDisplay.style.position = "absolute";
    computerChooseDisplay.style.left = "20%";

    computerPanel.appendChild(computerChooseDisplay);

    //playing round
    let result = playRound(playerChoose,computerChoose);

    //update info on display based on result
    let playerWin = document.querySelector(".counter .player span");
    let computerWin = document.querySelector(".counter .computer span");
    let gameCounter = document.querySelector(".game-counter span");

    resultText = document.createElement("p");
    resultText.style.cssText = "font-family: 'Odibee Sans', cursive; font-size: 2.5em;";
    switch (result) {
        case 1:
            resultText.textContent = `GAME ${currentGame+1} WINNER: PLAYER`; 
            playerWin.innerHTML = parseInt(playerWin.textContent) + 1;
            break;
    
        case -1:
            resultText.textContent = `GAME ${currentGame+1} WINNER: COMPUTER`; 
            computerWin.innerHTML = parseInt(computerWin.textContent) + 1;
            break;

        case 0:
            resultText.textContent = `GAME ${currentGame+1} DRAW!`; 
            break;
        
        default:
            break;
    }

    //update display info
    let resultTextContainer = document.querySelector(".winner");
    resultTextContainer.appendChild(resultText);

    //next game
    currentGame++;
    gameCounter.innerHTML = currentGame+1;

    if (currentGame==maxGame){
        if (parseInt(playerWin.textContent) > parseInt(computerWin.textContent)){
            alert(`YOU WIN! Final Score: ${parseInt(playerWin.textContent)} vs ${parseInt(computerWin.textContent)}`);
        }else if (parseInt(playerWin.textContent) == parseInt(computerWin.textContent)){
            alert(`DRAW! Final Score: ${parseInt(playerWin.textContent)} vs ${parseInt(computerWin.textContent)}`);
        }else{
            alert(`YOU LOSE! Final Score: ${parseInt(playerWin.textContent)} vs ${parseInt(computerWin.textContent)}`);
        }
        location.reload();
    }
}

buttonRock.addEventListener('click',()=>{
    playerChoose = "rock";
    updateDisplay();
})

buttonPaper.addEventListener('click',()=>{
    playerChoose = "paper";
    updateDisplay();
})

buttonScissors.addEventListener('click',()=>{
    playerChoose = "scissors";
    updateDisplay();
})