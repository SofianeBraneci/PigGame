/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, clazz;
scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0 first and 1 seconde player
var x = document.querySelector("#score-"+activePlayer).textContent;
console.log(x);
document.querySelector(".dice").style.display = 'none';
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;


document.querySelector(".btn-roll").addEventListener("click",()=>{
    var dice =  Math.floor((Math.random() * 6) + 1); 
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice + '.png';
    if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current-"+activePlayer).textContent = roundScore;
    }else{
        nextPlayer();    
    }


})

document.querySelector(".btn-hold").addEventListener("click", ()=>{
    scores[activePlayer] += roundScore;

    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 10){
        clazz = ".player-"+ activePlayer +"-panel";
        document.querySelector(clazz).classList.add("winner");
        alert("Player " + (activePlayer + 1)+ " Won !!!");
        return;
    }
    nextPlayer();
    
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
 
}

document.querySelector(".btn-new").addEventListener('click', ()=>{
    document.querySelector(".dice").style.display = 'none';
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(clazz).classList.remove("winner");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    roundScore = 0;
    scores = [0, 0];
    activePlayer = 0;      
})