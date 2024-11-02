let x ;
let y ;
let z ;

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const btn = document.querySelector('button');


function genNum() {

    console.log('clicking')

    x = Math.floor(Math.random()*6)+1;
    y = Math.floor(Math.random()*6)+1;
    z = Math.floor(Math.random()*6)+1;

    one.innerHTML = x
    two.innerHTML = y
    three.innerHTML = z

    one.style.color = 'red'
    two.style.color = 'green'
    three.style.color = 'blue'
}

btn.addEventListener('click', genNum)