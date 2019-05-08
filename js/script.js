/* --- event handles --- */

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
const lets_play = document.getElementById('start');

/* --- cached --- */

let fill1 = 0;
let fill2 = 0;
let fill3 = 0;
let fill4 = 0;
let speed1 = 500;
let speed2 = 700;
let speed3 = 900;
let speed4 = 1100;
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

// this will handle the sell buttons

lets_play.addEventListener('click', function(){
    document.querySelector('home').style.display = 'none';
    document.querySelector('.game').style.display = 'flex';
    init();
})

sellButtonPitcher.addEventListener('click', function(){
    document.getElementById('pitcherB').style.pointerEvents = 'none';
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
    document.getElementById('iceB').style.pointerEvents = 'none';
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
})

sellButtonStraw.addEventListener('click', function(){
    document.getElementById('strawB').style.pointerEvents = 'none';
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
    document.getElementById('umbrellaB').style.pointerEvents = 'none';
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

// this will handle the upgrade buttons

upgradeButtonPitcher.addEventListener('click', ()=>{
    let incr = 100;
    if (ticks1 <= 2 && accMoney >= 2){
        accMoney -= 2;
        money.textContent = `Money: ${accMoney}$`;
        speed1 -= incr;
        ticks1++
    } 
    if (ticks1 === 3){
        document.getElementById('upgradePitcher').textContent = 'MAX'
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
    if (ticks2 === 3){
        document.getElementById('upgradeIce').textContent = 'MAX'
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
    if (ticks3 === 3){
        document.getElementById('upgradeStraw').textContent = 'MAX'
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
    if (ticks4 === 3){
        document.getElementById('upgradeUmbrella').textContent = 'MAX'
    }
})

// functions

render();

function init(){
    render();
    countdown();
}

function render(){
    money.textContent = `Money: ${accMoney}$`;
    highscore.textContent = `Highscore: ${score}`
    timer.textContent = `Time left: ${time}`;
    document.getElementById('upgradePitcher').textContent = 'Upgrade -2$'
    document.getElementById('upgradeIce').textContent = 'Upgrade -4$'
    document.getElementById('upgradeStraw').textContent = 'Upgrade -6$'
    document.getElementById('upgradeUmbrella').textContent = 'Upgrade -8$'
}

function countdown(){
    timerrr = setInterval(function (){
        time--;
        timer.textContent = `Time left: ${time}`;
        if(time){
            timer.textContent = `Time left: ${time}`;
        }else{
            clearInterval(timerrr);
            compare = accMoney;
            if(score < compare){
                winner();
                score = accMoney;
                highscore.textContent = `Highscore: ${score}`;
                stop();
                timer.textContent = `GAME OVER`;
            }else{
                winner();
                stop();
                timer.textContent = `GAME OVER`;
                
            }
        }
    }, 1000)
}

function winner(){
    if(score < compare){
        swal("Great job!", `You beat your highscore of ${score} and earned ${accMoney}$ dollars! Can you do it again...`, "success")
    } else {
         swal("AWWWW MAN!", "Almost but you didn't make as much this time...", "error");
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

// reset button

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
    time = 100;
    render();
    clearInterval(timerrr)
    start();
    countdown();
};