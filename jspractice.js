// const dop = document.querySelector('.pop')

// const hello = [4,4,8,5,8,5,8,4,9,5]

// for (let p = 0; p < 10; p++) {
//     dop.innerHTML += hello[p]
//     console.log(hello[p])
// }

// // The push function
// const pra = document.querySelector('.prac')
// const but = document.querySelector('.but')

// const the = ["boy", "girl", "woman"]
// pra.innerHTML = the

// function het() {
//     console.log('clicking')
//     //The push function is to add a variable to the array
//     the.push('lemon');
//     pra.innerHTML = the
//     console.log(the)
// }
// //The includes function
// const find = document.querySelector('.find')
// const fond = document.querySelector('.check')

// const arr = [10,20,40,35,80,100]
// function check() {
//     console.log('clicking')
//     //The includes function is used to check if a variable or number is true or false in the array
//     let high = arr.includes(10);
//     //10 is true because it is in the array
//     fond.innerHTML = high
//     console.log(high)
// }
// //The sort function
// const sort = document.querySelector('.sort')
// const sorn = document.querySelector('.sop')

// const sortarr = ['yello','blue','black','green']
// document.querySelector('.arrnormal').innerHTML = sortarr
// function sortfun() {
//     console.log('clicking')
//     //The sort function is used to allow the computer to set the array itself
//     let sortlet = sortarr.sort();
//     sorn.innerHTML = sortlet
//     console.log(sortlet)
// }

// const reverse = document.querySelector('.reverse')
// const rev = document.querySelector('.rev')

// const revarr = [1,2,3,4,5,6,7,8,9,10]
// document.querySelector('.revarr').innerHTML = revarr

// function revfun() {
//     console.log('clicking')
//     let revlet = revarr.reverse();
//     rev.innerHTML = revlet
// }
// const d = new Date(99,11,24)
// document.querySelector('.jjj').innerHTML = d

// // let array = []

// // for (let m = 1; m <= 20; m++) {
// //     if (m % 2 === 0) {
// //         array.push(m)
// //         console.log(m)
// //     }
// // }

// let art = []
// for (let m = 1; m <= 5; m++) {
//     console.log(m)
//     for (let n = 1; n < 4; n++) {
//         console.log(n)
//     }
// }
// //FUNCTIONS
// reverse.addEventListener('click',revfun)
// sort.addEventListener('click',sortfun)
// find.addEventListener('click',check)
// but.addEventListener('click',het)

// for (let n = 1; n <= 20; n++) {
//     console.log(`5 * ${n} = ${5*n}`)
// }

// let sum = 0;
// let multiple = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// for (let m = 0; m < multiple.length; m++) {
//     sum = sum + multiple[m]
//     console.log(sum)
// }

const btn = document.querySelector('button')
const input = document.querySelector('input')

function generateTimesTable() {
    console.log('clicking')

    let html = ''
    // for (let i = 1; i <= 20; i++) {
        
    //     html += `<div class="table">
    //         <span>5</span>
    //         <span>X</span>
    //         <span>${i}</span>
    //         <span>=</span>
    //         <span>${5 * i}</span>
    //     </div>`
    // }
    console.log(html)

    console.log(input.value)
    input.value = ''
}

btn.addEventListener('click',generateTimesTable)