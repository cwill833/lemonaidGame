// event handlers
const sellButton = document.querySelector('.sell');

sellButton.addEventListener('click', (evt) => {
    console.log(evt)
    let iW = 100;
    let grow = document.getElementById('grow1');
    grow.style.width = `${iW}px`;
    iw++
    // console.log(grow.style.width.toString());
    // grow.style.width++;
})




function myButton(){
    location.reload();
};