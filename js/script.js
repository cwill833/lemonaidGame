// event handlers
const sellButton = document.querySelector('.sell');
const upgradeButton = document.querySelector('.upgrade');

// cached
let iW = 185;
let incr = 1;

// event listeners
sellButton.addEventListener('click', (evt) => {
    let grow = document.getElementById('grow1');
    grow.style.width = `${iW}px`;
    console.log(grow.style.width);
    if(parseInt(grow.style.width.slice(0,3)) <= parseInt(187)){
        iW += incr;
    }
    if(parseInt(grow.style.width.slice(0,3)) >= parseInt(187)){
        iW = 0;
    }
    console.log(iW)
})

upgradeButton.addEventListener('click', ()=>{
    incr ++
    console.log(incr)
})



function myButton(){
    location.reload();
};