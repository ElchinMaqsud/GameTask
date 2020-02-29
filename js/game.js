"use strict";
let gameStart = document.getElementById("gameStart");
let gameZone = document.getElementById("gameZone");
let startBtn = document.querySelector(".startBtn");
let finishBtn= document.querySelector(".Close");
let scoreTablo = document.querySelector(".scoreTab");
let bestScoreTab= document.querySelector(".bestScoreTab");

let playGame=null;
let color;
let positionLeft;
let score = 0;
let bestScore=0;



window.onload = function () {
  startBtn.onclick = function () {
    gameStart.classList.remove("d-flex");
    gameStart.classList.add("d-none");
    finishBtn.classList.remove("d-none");
    gameZone.classList.remove("d-none");
    playGame= setInterval(CreatingBalls, 700);
   
  }
  finishBtn.onclick=function(){
    finishBtn.classList.add("d-none");
    gameZone.classList.add("d-none");
    gameStart.classList.remove("d-none");
    gameStart.classList.add("d-flex");
    clearInterval(playGame);
    gameZone.innerText="";
    score="";
   
   
   
    
   
  }

  function CreatingBalls() {

    let Ball = null;
      Ball = document.createElement("div");
      color = '#' + Math.round(0xffffff * Math.random()).toString(16);
      positionLeft = Math.floor(Math.random() * (1000)) + "px";
      Ball.style.left = positionLeft;
      Ball.classList.add("game_Ball");
      Ball.style.backgroundColor = color;
      gameZone.append(Ball);
      movingBall();
      function movingBall() {
        let position = 0;
        let startingGame = setInterval(Moving, 2);
        function Moving() {
          if (position == 500) {
            clearInterval(startingGame);
            Ball.classList.add("d-none");
            
          }
          position++;
          Ball.style.top = position + 'px';
          
          Ball.onclick = function () {
            Ball.classList.add("d-none");
            score++;
            scoreTablo.innerHTML="Your score:"+" "+score;
            if(score>bestScore){
              bestScore=score;
              bestScoreTab.innerHTML="Your best score:"+" "+bestScore;
            }
            
            
            
  
          }
  
        }
      }


    

  }


}






