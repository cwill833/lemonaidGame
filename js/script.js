// event handlers
const sellButton = document.querySelector('.sell');
const upgradeButton = document.querySelector('.upgrade');
const money = document.getElementById('money');

// cached
let iW = 50;
let incr = 1;
let accMoney = 10
money.textContent = `${accMoney}$`;

// event listeners
sellButton.addEventListener('click', (evt) => {
    let grow = document.getElementById('grow1');
    grow.style.width = `${iW}%`;
    console.log(grow.style.width);
    if(parseInt(grow.style.width.slice(0,3)) <= parseInt(100)){iW += incr;}
    if(parseInt(grow.style.width.slice(0,3)) >= parseInt(100)){
        iW = 0;
        money.textContent = `${accMoney += 1}$`;
    }
})

upgradeButton.addEventListener('click', ()=>{
    if (incr <= 4){
    incr ++
    }
    console.log(incr)
})





function myButton(){
    let incr = 1;
    let accMoney = 10;
    money.textContent = `${accMoney}$`;

    // location.reload();
};