const colorBtn = document.querySelector('.colorBtn');
const bodyBackgroundColor = document.querySelector('body');

const color = ['#E32A2A','black','white','#0FE58B','pink','#E50FDB','#E6730A','#79E60A','#E00A66'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    let random = Math.floor(Math.random()*color.length);
    bodyBackgroundColor.style.backgroundColor = color[random];
}
