
let items = ["rock","paper","scissors"]
let playerSelect
let playerScored = 0
let computerSelect
let computerScored = 0
let finish = false
let timer;


function computerChoice () {
computerSelect = items[Math.floor(Math.random()*items.length)]
}



// Elements 
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
paper.style.visibility = "hidden";
rock.style.visibility = "hidden";
scissors.style.visibility = "hidden";
let allButtons = [rock,paper,scissors];

let orangePlayer = document.getElementsByClassName("progress-bar-orange-player")[0];
let redPlayer = document.getElementsByClassName("progress-bar-red-player")[0];
let orangeIa = document.getElementsByClassName("progress-bar-orange-ia")[0];
let redIa = document.getElementsByClassName("progress-bar-red-ia")[0];
let startButton = document.getElementById("start-button"); 
startButton.addEventListener("click", function (){ start () });
let fightLogo = document.getElementById("fight"); 
fightLogo.style.visibility = "hidden";



// Launch game when items are clicked
rock.addEventListener("click", function (){ playerSelect = "rock" ; launchGame() })
paper.addEventListener("click", function (){ playerSelect = "paper" ; launchGame() })
scissors.addEventListener("click", function (){ playerSelect = "scissors" ; launchGame() })



// Fonction when START is pushed
function start () {

  // Settings
  clearTimeout(timer);
  playerScored = 0
  computerScored = 0
  document.getElementById("result").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result3").innerHTML = "";
  orangePlayer.style.width = '100%';
  orangeIa.style.width = '100%';
  redPlayer.style.width = '0%';
  redIa.style.width = '0%';

  // Fight logo flash 
  fightLogo.style.visibility = "visible"; 
  setTimeout(function(){ fightLogo.style.visibility = "hidden"; }, 500);

  // Show buttons
  document.getElementById("paper").style.visibility = "visible";
  document.getElementById("rock").style.visibility = "visible";
  document.getElementById("scissors").style.visibility = "visible";
 };



// Compare each choice and give the point
function playground () {
    if (playerSelect === "scissors" && computerSelect === "paper"){
      playerSelect = null ;
      playerScored++ 
      return "Player scored";
    }
    else if (playerSelect === "rock" && computerSelect === "scissors"){
      playerSelect = null ; 
      playerScored++ 
      return "Player scored";
    }
    else if (playerSelect === "paper" && computerSelect === "rock"){
      playerSelect = null ;
      playerScored++  
      return "Player scored";
    }
    else if  (playerSelect == computerSelect) {
      playerSelect = null ; 
      return "Tie Game";
    }
    else {
      playerSelect = null ;
      computerScored++  
      return "IA scored";
    }
};



// Display logs
function displayResult (){
  document.getElementById("vs").innerHTML = playerSelect + " VS " + computerSelect;
  document.getElementById("result").innerHTML = playground();
  document.getElementById("result2").innerHTML = "Score : " + playerScored + "-" + computerScored;
}



// Regulate the life bar (this can be easily optimise 
// By changing value of the width with incrementation)
function life() {
  if (computerScored === 1){
    orangePlayer.style.width = '80%';
    redPlayer.style.width = '20%';
  };
  if (playerScored === 1){
    orangeIa.style.width = '80%';
    redIa.style.width = '20%';
  };
  
  if (computerScored === 2){
    orangePlayer.style.width = '60%';
    redPlayer.style.width = '40%';
  };
  if (playerScored === 2){
    orangeIa.style.width = '60%';
    redIa.style.width = '40%';
  };

  if (computerScored === 3){
    orangePlayer.style.width = '40%';
    redPlayer.style.width = '60%';
  };
  if (playerScored === 3){
    orangeIa.style.width = '40%';
    redIa.style.width = '60%';
  };

  if (computerScored === 4){
    orangePlayer.style.width = '20%';
    redPlayer.style.width = '80%';
  };
  if (playerScored === 4){
    orangeIa.style.width = '20%';
    redIa.style.width = '80%';
  };

  if (computerScored === 5){
    orangePlayer.style.width = '0%';
    redPlayer.style.width = '100%';
    finish = true;
    document.getElementById("result3").innerHTML = "IA WINS !";
  };
  if (playerScored === 5){
    orangeIa.style.width = '0%';
    redIa.style.width = '100%';
    finish = true;
    document.getElementById("result3").innerHTML = "YOU WINS !";
  };

}



// Call all functions
function launchGame() {
  computerChoice () ; 
  displayResult () ;
  life() ;
  if ( finish == true ) { 
    timer = setTimeout(function(){ start() }, 3000) ; 
    finish = false ;
  } ;
}