//Colors array
let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];
    
//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', 
function(){
    //Random
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    //getBackGround
    let bg = document.getElementById('bg');
    bg.style.background = randomColor;})