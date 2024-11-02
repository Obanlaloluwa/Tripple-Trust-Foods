const ptag = document.querySelector('p')
const btn = document.querySelector('.button')
const heed = document.querySelector('h1')
const swall = document.querySelector('.swall')
const time = document.querySelector('.now')
const menu = document.querySelector('.men')
const change = document.querySelector('.change')
const pork = document.querySelector('.chan')

function changeBtn() {
    
    console.log('clicking')

    

    menu.classList.remove('hide')
}

function talk() {
    
    console.log('clicking')

    menu.classList.add('hide')
}

function chan(){

    console.log('clicking')

    ptag.style.fontSize= '30px'
    heed.style.color = 'red'
    swall.style.color = 'red'

    
}

function DoNothin() {
    
    console.log('clicking')

    ptag.style.fontSize = '16px'
    heed.style.color = 'black'
    swall.style.color = 'black'
}

change.addEventListener('click',chan)



time.addEventListener('click',talk)


btn.addEventListener('click', changeBtn)

pork.addEventListener('click',DoNothin)

let age=25

console.log(age)

Math.round

let x = 5.5

console.log(Math.round(x))

Math.floor

let y = 85.126

console.log(Math.floor(y))

console.log(Math.round ( Math.random() ))