// event handlers
const sellButton = document.querySelector('.sell');
const upgradeButton = document.querySelector('.upgrade');
const money = document.getElementById('money');

// cached
let fill = 0;
let speed1 = 500;
let incr = 1;
let accMoney = 10
money.textContent = `${accMoney}$`;

// event listeners
sellButton.addEventListener('click', load_bar)
//     let grow = document.getElementById('grow1');
//     grow.style.width = `${iW}%`;
//     console.log(grow.style.width);
//     if(parseInt(grow.style.width.slice(0,3)) <= parseInt(100)){iW += incr;}
//     if(parseInt(grow.style.width.slice(0,3)) >= parseInt(100)){
//         iW = 0;
//         money.textContent = `${accMoney += 1}$`;
//     }
// })

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
        if(fill < 100){
            fill +=10;
            document.getElementById('grow1').style.width = fill + '%';
            console.log(fill);
        }else{
            money.textContent = `${accMoney += 1}$`;
            fill = 0;
            document.getElementById('grow1').style.width = fill + '%';
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


// let fill = 0;

// function load_bar(){

//     window.setInterval(function(){

//         fill += 10;

//         if(fill === 100){
//             clearInterval();
//         }
//         else {
//             document.getElementById('grow1').style.width = fill + '%';
//         }
//     }, 50)
// }