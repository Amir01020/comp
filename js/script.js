
import { click } from './func.js'
import { colorClick } from './func.js'

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let text  = document.querySelector('#text')
let img = document.querySelector('#img')
let grey = document.querySelector('#grey')
let boxBtn = document.querySelectorAll('#box_btn')
let clickFon = document.querySelector('#clickFon')
let body = document.querySelector('body')
// let dollars = document.querySelectorAll('#dollars')
console.log(clickFon);
clickFon.onclick = ()=>{
    let c = clickFon.firstChild.nextSibling
    clickFon.classList.toggle('clickColor')
    c.classList.toggle('c')
    body.classList.toggle('blac_fon')
    
}
click(btn1,btn2,text,img,grey,boxBtn)
colorClick(boxBtn, text,btn1, )
