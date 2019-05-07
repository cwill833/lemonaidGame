// event handles
const sellButtonPitcher = document.getElementById('pitcherB');
const sellButtonIce = document.getElementById('iceB');
const sellButtonStraw = document.getElementById('strawB');
const sellButtonUmbrella = document.getElementById('umbrellaB');
const upgradeButtonPitcher = document.getElementById('upgradePitcher');
const upgradeButtonIce = document.getElementById('upgradeIce');
const upgradeButtonStraw = document.getElementById('upgradeStraw');
const upgradeButtonUmbrella = document.getElementById('upgradeUmbrella');
const money = document.getElementById('money');
const timer = document.getElementById('time');
const highscore = document.getElementById('highscore');


// cached
let fill1 = 0;
let fill2 = 0;
let fill3 = 0;
let fill4 = 0;
let speed1 = 500;
let speed2 = 750;
let speed3 = 1000;
let speed4 = 1250;
let ticks1 = 0;
let ticks2 = 0;
let ticks3 = 0;
let ticks4 = 0;
let accMoney = 10;
let timerrr;
let time = 180;
let score = 0;

// event listeners
sellButtonPitcher.addEventListener('click', function(){
    let int = setInterval(function(){
            if(fill1 < 100){
                fill1 +=25;
                document.getElementById('grow1').style.width = fill1 + '%';
                document.getElementById('pitcherB').style.pointerEvents = 'none';
            }else{
                money.textContent = `Money: ${accMoney+=1}$`;
                fill1 = 0;
                document.getElementById('grow1').style.width = fill1 + '%';
                clearInterval(int);
                document.getElementById('pitcherB').style.pointerEvents = 'auto';
        }
    }, speed1);
})

sellButtonIce.addEventListener('click', function(){
    let int = setInterval(function(){
        if(fill2 < 100){
            fill2 +=25;
            document.getElementById('grow2').style.width = fill2 + '%';
            document.getElementById('iceB').style.pointerEvents = 'none';
        }else{
            money.textContent = `Money: ${accMoney += 2}$`;
            fill2 = 0;
            document.getElementById('grow2').style.width = fill2 + '%';
            clearInterval(int);
            document.getElementById('iceB').style.pointerEvents = 'auto';
        }
    }, speed2);
    console.log(int)
})

sellButtonStraw.addEventListener('click', function(){
    let int = setInterval(function(){
        if(fill3 < 100){
            fill3 +=25;
            document.getElementById('grow3').style.width = fill3 + '%';
            document.getElementById('strawB').style.pointerEvents = 'none';
        }else{
            money.textContent = `Money: ${accMoney += 3}$`;
            fill3 = 0;
            document.getElementById('grow3').style.width = fill3 + '%';
            clearInterval(int);
            document.getElementById('strawB').style.pointerEvents = 'auto';
        }
    }, speed3);
    
})

sellButtonUmbrella.addEventListener('click', function(){
    let int = setInterval(function(){
        if(fill4 < 100){
            fill4 +=25;
            document.getElementById('grow4').style.width = fill4 + '%';
            document.getElementById('umbrellaB').style.pointerEvents = 'none';
        }else{
            money.textContent = `Money: ${accMoney += 4}$`;
            fill4 = 0;
            document.getElementById('grow4').style.width = fill4 + '%';
            clearInterval(int);
            document.getElementById('umbrellaB').style.pointerEvents = 'auto';
        }
    }, speed4);
    
})

upgradeButtonPitcher.addEventListener('click', ()=>{
    let incr = 100;
    if (ticks1 <= 2 && accMoney >= 2){
        accMoney -= 2;
        money.textContent = `Money: ${accMoney}$`;
        speed1 -= incr;
        ticks1++
    }
})

upgradeButtonIce.addEventListener('click', ()=>{
    let incr = 125;
    if (ticks2 <= 2 && accMoney >= 4){
        accMoney -= 4;
        money.textContent = `Money: ${accMoney}$`;
        speed2 -= incr;
        ticks2++
    }
})

upgradeButtonStraw.addEventListener('click', ()=>{
    let incr = 150;
    if (ticks3 <= 2 && accMoney >= 6){
        accMoney -= 6;
        money.textContent = `Money: ${accMoney}$`;
        speed3 -= incr;
        ticks3++
    }
})

upgradeButtonUmbrella.addEventListener('click', ()=>{
    let incr = 175;
    if (ticks4 <= 2 && accMoney >= 8){
        accMoney -= 8;
        money.textContent = `Money: ${accMoney}$`;
        speed4 -= incr;
        ticks4++
    }
})
// functions

init();

function init(){
    render();
    countdown();
}

function render(){
    money.textContent = `Money: ${accMoney}$`;
    highscore.textContent = `Highscore: ${score}`
    timer.textContent = time;
}

function countdown(){
    timerrr = setInterval(function (){
        time--;
        timer.textContent = time;
        if(time){
            timer.textContent = time;
        }else{
            clearInterval(timerrr);
            console.log(highscore.textContent.slice(11))
            if(score < accMoney){
                winner();
                score = accMoney;
                highscore.textContent = `Highscore: ${score}`;
            }
        }
    }, 1000)
}

function winner(){
    if(score < accMoney){
        console.log('congratulations! You beat the highscore!')
    }
}


function myButton(){
    speed1 = 500;
    speed2 = 750;
    speed3 = 1000;
    speed4 = 1250;
    ticks1 = 0;
    ticks2 = 0;
    ticks3 = 0;
    ticks4 = 0;
    accMoney = 10;
    time = 180;
    render();
    clearInterval(timerrr)
    countdown();
};