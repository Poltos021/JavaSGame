console.log("Весёлая рыбалка");

/* Переменные */
var user = ""; //Имя игрока
var score = 0; //Очки
var time = 20; //Время игры в секундах
var timer;

var startButton = document.getElementById("startButton");
var restartButton = document.getElementById("restart");
var startScreen = document.getElementById("start");
var gameScreen = document.getElementById("game");
var resultScreen = document.getElementById("result");
let second = document.getElementById("time");
let sc = document.getElementById("score");

startButton.addEventListener("click", start);
restartButton.addEventListener("click", startGame);

function start(){
    var input=document.getElementById("user");
    var user=input.value;
    if(user != ""){
        let gamer = document.getElementById("gamer");
        gamer.innerText = user;
        startGame();
    }
}

function startGame(){
    score = 0;
    sc.innerText = score;
    time = 30;
    second.innerText = "00:"+time;
    resultScreen.style.display = "none";
    startScreen.style.display="none";
    gameScreen.style.display="block";
    timer = setInterval(tick, 1000); //Функция tick будет вызываться каждые 1000мс=1с
}

function tick(){
    time--;
    //console.log(time);
    if(time<10)
        second.innerText = "00:0"+time;
    else
        second.innerText = "00:"+time;
    if(time == 0){
        clearInterval(timer);
        //console.log("Ваше время вышло");
        gameScreen.style.display="none";
        resultScreen.style.display="flex";
        document.getElementById("total").innerText = score;
    }
    if(time%2 == 0){
        let r=Math.round(0.5 + Math.random() * 3);
        console.log(r);
        let fish = document.createElement('div');
        fish.classList.add("fish");
        fish.classList.add("fish"+r);
        fish.addEventListener("animationend",kill);
        fish.addEventListener("click", killFish)
        gameScreen.append(fish);
    }
}

function kill(e){
    //console.log(e.target);
    //e.target.remove();
    this.remove();
}

function killFish(){
    let f=this.classList;
    switch(f[1]){
        case "fish1":score+=1;break;
        case "fish2":score+=2;break; 
        case "fish3":score+=3;break;
    }
    sc.innerText = score;
    this.remove();
}