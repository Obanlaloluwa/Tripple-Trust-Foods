const player1btn = document.querySelector('#btn1')
const player2btn = document.querySelector('#btn2')
const player1num = document.querySelector('.num1')
const player2num = document.querySelector('.num2')
const overlay = document.querySelector('.overlay')
const startagainbtn = document.querySelector('#but')
const start = document.querySelector('#start')
const player2img = document.querySelector('.img2')
const imgforplayer2and1 = document.querySelector('.image')


function firstPlayer() {
    
    console.log('clicking')
    const prv  = Number(player1num.innerHTML)
    if (Number(player1num.innerHTML)>=100) {
        console.log('greater or equal to 100')
        overlay.classList.remove('hide')
        start.innerHTML = player1num.innerHTML
        imgforplayer2and1.src =  "Images/lm1.JPG"

    } else {
        const ran = Math.floor(Math.random()*10)
        console.log(ran)
        const final = ran + prv
        player1num.innerHTML = final
        
    }

    
}

function secondPlayer() {
    
    console.log('clicking')
    const port  = Number(player2num.innerHTML)
    if (Number(player2num.innerHTML)>=100) {
        console.log('greater or equal to 100')
        overlay.classList.remove('hide')
        imgforplayer2and1.src = "Images/lm.JPG"
        start.innerHTML = player2num.innerHTML
        

    } else {
        const running = Math.floor(Math.random()*10)
        console.log(running)
        const final = running + port
        player2num.innerHTML = final
        
        
    }
}

function startagnBtn() {
    
    console.log('clicking')
    overlay.classList.add('hide')

    player1num.innerHTML = 0
    player2num.innerHTML = 0
    

}

function startPly() {
    

    console.log('clicking')   
}

start.addEventListener('click',startPly)

startagainbtn.addEventListener('click',startagnBtn)

player1btn.addEventListener('click',firstPlayer)

player2btn.addEventListener('click',secondPlayer)