// event handlers
const sellButton = document.querySelector('.sell');

sellButton.addEventListener('click', ()=>{
    let iW = 0;
    let grow = parseInt(document.getElementById('grow1').style.width);
    grow = `${iW}px`;
    iW++;
    // console.log(grow.style.width.toString());
    // grow.style.width++;
})