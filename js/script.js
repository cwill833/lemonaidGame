// event handlers
const sellButtonPitcher = document.getElementById('pitcherB');
const sellButtonIce = document.getElementById('iceB');
const sellButtonStraw = document.getElementById('strawB');
const sellButtonUmbrella = document.getElementById('umbrellaB');
const upgradeButton = document.querySelector('.upgrade');
const money = document.getElementById('money');

// cached
let fill1 = 0;
let fill2 = 0;
let fill3 = 0;
let fill4 = 0;
let speed1 = 500;
let speed2 = 750;
let speed3 = 1000;
let speed4 = 1250;
let incr = 1;
let accMoney = 10;
money.textContent = `${accMoney}$`;

// event listeners
sellButtonPitcher.addEventListener('click', load_bar)

sellButtonIce.addEventListener('click', function(){
    int = setInterval(function(){
        if(fill2 < 100){
            fill2 +=25;
            document.getElementById('grow2').style.width = fill2 + '%';
            console.log(fill2);
        }else{
            money.textContent = `${accMoney += 1}$`;
            fill2 = 0;
            document.getElementById('grow2').style.width = fill2 + '%';
            clearInterval(int);
        }
    }, speed2);
    
})

sellButtonStraw.addEventListener('click', function(){
    int = setInterval(function(){
        if(fill3 < 100){
            fill3 +=25;
            document.getElementById('grow3').style.width = fill3 + '%';
            console.log(fill3);
        }else{
            money.textContent = `${accMoney += 1}$`;
            fill3 = 0;
            document.getElementById('grow3').style.width = fill3 + '%';
            clearInterval(int);
        }
    }, speed3);
    
})

sellButtonUmbrella.addEventListener('click', function(){
    int = setInterval(function(){
        if(fill4 < 100){
            fill4 +=25;
            document.getElementById('grow4').style.width = fill4 + '%';
            console.log(fill4);
        }else{
            money.textContent = `${accMoney += 1}$`;
            fill4 = 0;
            document.getElementById('grow4').style.width = fill4 + '%';
            clearInterval(int);
        }
    }, speed4);
    
})

upgradeButton.addEventListener('click', ()=>{
    if (incr <= 4 && accMoney >= 2){
        accMoney -= 2;
        money.textContent = `${accMoney}$`;
        incr ++;
    }
    console.log(incr)
})

function load_bar(){
    int = setInterval(function(){
        if(fill1 < 100){
            fill1 +=25;
            document.getElementById('grow1').style.width = fill1 + '%';
            console.log(fill1);
        }else{
            money.textContent = `${accMoney += 1}$`;
            fill1 = 0;
            document.getElementById('grow1').style.width = fill1 + '%';
            clearInterval(int);
        }
    }, speed1);
    
}


function myButton(){
    incr = 1;
    accMoney = 10;
    money.textContent = `${accMoney}$`;
    console.log(accMoney)

    // location.reload();
};