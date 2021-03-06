/* --- event handles --- */

// sell buttons
const sellButtonPitcher = document.getElementById('pitcherB');
const sellButtonIce = document.getElementById('iceB');
const sellButtonStraw = document.getElementById('strawB');
const sellButtonUmbrella = document.getElementById('umbrellaB');

// upgrade buttons
const upgradeButtonPitcher = document.getElementById('upgradePitcher');
const upgradeButtonIce = document.getElementById('upgradeIce');
const upgradeButtonStraw = document.getElementById('upgradeStraw');
const upgradeButtonUmbrella = document.getElementById('upgradeUmbrella');

// aside info
const money = document.getElementById('money');
const timer = document.getElementById('time');
const highscore = document.getElementById('highscore');
const reset = document.querySelector('div#reset');

// play button on landing page
const lets_play = document.getElementById('start');

// last 5 second counter
const last = document.getElementById('last5');

/* --- cached --- */

let fill1 = 0;
let fill2 = 0;
let fill3 = 0;
let fill4 = 0;
let speed1 = 50;
let speed2 = 100;
let speed3 = 200;
let speed4 = 400;
let ticks1 = 0;
let ticks2 = 0;
let ticks3 = 0;
let ticks4 = 0;
let accMoney = 10;
let timerrr;
let time = 100;
let score = 0;
let compare = 0;

/* --- event listeners --- */

// start button

lets_play.addEventListener('click', function(){
    document.querySelector('home').style.display = 'none';
    document.querySelector('.game').style.display = 'flex';
    init();
})

// this will handle the sell buttons

sellButtonPitcher.addEventListener('click', function(){
    document.getElementById('pitcherB').style.pointerEvents = 'none';
    let int = setInterval(function(){
            if(fill1 < 100){
                fill1 +=5;
                document.getElementById('grow1').style.width = fill1 + '%';
                document.getElementById('pitcherB').style.pointerEvents = 'none';
            }else{
                money.textContent = `Money: $${accMoney+=1}`;
                fill1 = 0;
                document.getElementById('grow1').style.width = fill1 + '%';
                clearInterval(int);
                document.getElementById('pitcherB').style.pointerEvents = 'auto';
        }
    }, speed1);
})

sellButtonIce.addEventListener('click', function(){
    document.getElementById('iceB').style.pointerEvents = 'none';
    let int = setInterval(function(){
        if(fill2 < 100){
            fill2 +=5;
            document.getElementById('grow2').style.width = fill2 + '%';
            document.getElementById('iceB').style.pointerEvents = 'none';
        }else{
            money.textContent = `Money: $${accMoney += 2}`;
            fill2 = 0;
            document.getElementById('grow2').style.width = fill2 + '%';
            clearInterval(int);
            document.getElementById('iceB').style.pointerEvents = 'auto';
        }
    }, speed2);
})

sellButtonStraw.addEventListener('click', function(){
    document.getElementById('strawB').style.pointerEvents = 'none';
    let int = setInterval(function(){
        if(fill3 < 100){
            fill3 +=5;
            document.getElementById('grow3').style.width = fill3 + '%';
            document.getElementById('strawB').style.pointerEvents = 'none';
        }else{
            money.textContent = `Money: $${accMoney += 3}`;
            fill3 = 0;
            document.getElementById('grow3').style.width = fill3 + '%';
            clearInterval(int);
            document.getElementById('strawB').style.pointerEvents = 'auto';
        }
    }, speed3);
    
})

sellButtonUmbrella.addEventListener('click', function(){
    document.getElementById('umbrellaB').style.pointerEvents = 'none';
    let int = setInterval(function(){
        if(fill4 < 100){
            fill4 +=5;
            document.getElementById('grow4').style.width = fill4 + '%';
            document.getElementById('umbrellaB').style.pointerEvents = 'none';
        }else{
            money.textContent = `Money: $${accMoney += 4}`;
            fill4 = 0;
            document.getElementById('grow4').style.width = fill4 + '%';
            clearInterval(int);
            document.getElementById('umbrellaB').style.pointerEvents = 'auto';
        }
    }, speed4);
    
})

// this will handle the upgrade buttons

upgradeButtonPitcher.addEventListener('click', ()=>{
    let incr = 10;
    if (ticks1 <= 2 && accMoney >= 2){
        accMoney -= 2;
        money.textContent = `Money: $${accMoney}`;
        speed1 -= incr;
        ticks1++
    } 
    if (ticks1 === 3){
        document.getElementById('upgradePitcher').textContent = 'MAX';
        document.getElementById('upgradePitcher').style.pointerEvents = 'none';
    }
})

upgradeButtonIce.addEventListener('click', ()=>{
    let incr = 15;
    if (ticks2 <= 2 && accMoney >= 4){
        accMoney -= 4;
        money.textContent = `Money: $${accMoney}`;
        speed2 -= incr;
        ticks2++
    }
    if (ticks2 === 3){
        document.getElementById('upgradeIce').textContent = 'MAX';
        document.getElementById('upgradeIce').style.pointerEvents = 'none';
    }
})

upgradeButtonStraw.addEventListener('click', ()=>{
    let incr = 20;
    if (ticks3 <= 2 && accMoney >= 6){
        accMoney -= 6;
        money.textContent = `Money: $${accMoney}`;
        speed3 -= incr;
        ticks3++
    }
    if (ticks3 === 3){
        document.getElementById('upgradeStraw').textContent = 'MAX';
        document.getElementById('upgradeStraw').style.pointerEvents = 'none';
    }
})

upgradeButtonUmbrella.addEventListener('click', ()=>{
    let incr = 35;
    if (ticks4 <= 2 && accMoney >= 8){
        accMoney -= 8;
        money.textContent = `Money: $${accMoney}`;
        speed4 -= incr;
        ticks4++
    }
    if (ticks4 === 3){
        document.getElementById('upgradeUmbrella').textContent = 'MAX';
        document.getElementById('upgradeUmbrella').style.pointerEvents = 'none';
    }
})

// functions

render();

function init(){
    render();
    countdown();
    reset.style.pointerEvents = 'auto'
    
}

function render(){
    money.textContent = `Money: $${accMoney}`;
    highscore.textContent = `Highscore: ${score}`
    timer.textContent = `Time left: ${time}`;
    document.getElementById('upgradePitcher').textContent = 'Upgrade -$2';
    document.getElementById('upgradeIce').textContent = 'Upgrade -$4';
    document.getElementById('upgradeStraw').textContent = 'Upgrade -$6';
    document.getElementById('upgradeUmbrella').textContent = 'Upgrade -$8';
}

function countdown(){
    timerrr = setInterval(function (){
        time--;
        if(time <= 5){
            last.style.display = 'block';
            last.textContent = time;
            timer.textContent = `Time left: ${time}`;
        }
        if(time){
            timer.textContent = `Time left: ${time}`;
        }else{
            clearInterval(timerrr);
            compare = accMoney;
            winner();
            stop();
            timer.textContent = `GAME OVER`;
            last.style.display = 'none';
            if(score < compare){
                score = accMoney;
                highscore.textContent = `Highscore: ${score}`;
            }
        }
    }, 1000)
}

function winner(){
    if(score < compare){
        swal("Great job!", `You beat your highscore of ${score} and earned ${accMoney}$ dollars! Can you do it again...`, "success")
    } else {
         swal("AWWWW MAN!", `Almost but you didn't make as much this time with only ${accMoney}$ dollars.`, "error");
     }
}

// this will prevent buttons from activating when game is
// over

function stop(){
    document.getElementById('pitcherB').style.pointerEvents = 'none';
    document.getElementById('iceB').style.pointerEvents = 'none';
    document.getElementById('strawB').style.pointerEvents = 'none';
    document.getElementById('umbrellaB').style.pointerEvents = 'none';
    document.getElementById('upgradePitcher').style.pointerEvents = 'none';
    document.getElementById('upgradeIce').style.pointerEvents = 'none';
    document.getElementById('upgradeStraw').style.pointerEvents = 'none';
    document.getElementById('upgradeUmbrella').style.pointerEvents = 'none'
}

// this will start the functionality up when reset is clicked

function start(){
    document.getElementById('pitcherB').style.pointerEvents = 'auto';
    document.getElementById('iceB').style.pointerEvents = 'auto';
    document.getElementById('strawB').style.pointerEvents = 'auto';
    document.getElementById('umbrellaB').style.pointerEvents = 'auto';
    document.getElementById('upgradePitcher').style.pointerEvents = 'auto';
    document.getElementById('upgradeIce').style.pointerEvents = 'auto';
    document.getElementById('upgradeStraw').style.pointerEvents = 'auto';
    document.getElementById('upgradeUmbrella').style.pointerEvents = 'auto'
}

function myButton(){
    speed1 = 50;
    speed2 = 100;
    speed3 = 200;
    speed4 = 400;
    ticks1 = 0;
    ticks2 = 0;
    ticks3 = 0;
    ticks4 = 0;
    accMoney = 10;
    time = 100;
    render();
    clearInterval(timerrr)
    start();
    countdown();
};