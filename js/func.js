export let click = (btn1,btn2,text,img,grey,boxBtn)=>{
    btn1.onclick = ()=>{
        if (btn1.className === 'btn1') {
            text.innerHTML = '2,599'
            grey.innerHTML = 'grey'
            img.src = "img/mbp14-silver-select-202110 1.png" 
            btn1.classList.remove('btn1')
            btn1.classList.add('btn2')
            btn2.classList.remove('btn2')
            btn2.classList.add('btn1')
           
        }else if(btn1.className === 'btn2'){
            img.src = "img/mbp14-spacegray-select-202110 1.png" 
            grey.innerHTML = 'white'
            text.innerHTML = '1,999'
            btn1.classList.remove('btn2')
            btn1.classList.add('btn1')
            btn2.classList.remove('btn1')
            btn2.classList.add('btn2')
            
        }
        boxBtn.forEach(btn => {
            btn.classList.remove('color')
        }) 
        
    }
    btn2.onclick = ()=>{
        boxBtn.forEach(btn => {
            btn.classList.remove('color')
        }) 
        if (btn2.className === 'btn1') {
            img.src = "img/mbp14-spacegray-select-202110 1.png" 
            text.innerHTML = '1,999'
            grey.innerHTML = 'white'
            btn2.classList.remove('btn1')
            btn2.classList.add('btn2')
            btn1.classList.remove('btn2')
            btn1.classList.add('btn1')
        }else if(btn2.className === 'btn2'){
            img.src = "img/mbp14-silver-select-202110 1.png" 
            text.innerHTML = '2,599'
            grey.innerHTML = 'grey'
            btn2.classList.remove('btn2')
            btn2.classList.add('btn1')
            btn1.classList.remove('btn1')
            btn1.classList.add('btn2')
        }
        
    }
}
let dollar = [
    {'dollar':0},
    {'dollar':200},
    {'dollar':600},
    {'dollar':1200}
    
]
export let colorClick = (boxBtn, text,btn1)=>{
    boxBtn.forEach((btn, index) => {
        btn.onclick = () => {
            boxBtn.forEach(btn2 => {
                btn2.classList.remove('color')
            });
            btn.classList.add('color')
            let price;
            if(btn1.style.background == '#0071E3'){
                price = 1999

            }else if(btn1.style.background !== '#0071E3'){
                price =2590
            }
            let idx = dollar[index]
            let total = price + idx['dollar']
            text.innerHTML = `${total.toString().slice(0, 1)},${total.toString().slice(1)}`
        }
    });
}
