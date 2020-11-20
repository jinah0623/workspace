'use strict';


const box1_1 = document.querySelector('.box1_1');
console.log(box1_1);
const box1_2 = document.querySelector('.box1_2');
console.log(box1_2);
const box1_3 = document.querySelector('.box1_3');
console.log(box1_3);
const box1_4 = document.querySelector('.box1_4');
console.log(box1_4);
const box1_5 = document.querySelector('.box1_5');
console.log(box1_5);


box1_1.addEventListener('click', function(event){
    console.log(event);
    const rect = box1_1.getBoundingClientRect();
    console.log(rect);
    let x=0;
})

const MOVE = document.querySelector('.MOVE');
const RIGHT = document.querySelector('.RIGHT');
const LEFT = document.querySelector('.LEFT');

function start() {
    box1_1.scrollIntoView();
    box1_2.classList.toggle('passive');
    box1_3.classList.toggle('passive');
    box1_4.classList.toggle('passive');
    box1_5.classList.toggle('passive');
}
    start();
    let x=0;
    RIGHT.addEventListener('click', (event)=>{
    x++;
   if(x==1){
    box1_2.scrollIntoView();
    box1_1.classList.remove('passive');
    box1_2.classList.add('passive');     
}
   if(x==2){
    box1_3.scrollIntoView();
    box1_2.classList.remove('passive');
    box1_3.classList.add('passive');     
}
   if(x==3){
    box1_4.scrollIntoView();
    box1_3.classList.remove('passive');
    box1_4.classList.add('passive');     
}
    if(x==4){
    box1_5.scrollIntoView();
    box1_4.classList.remove('passive');
    box1_5.classList.add('passive');
}
    if(x==5){
    box1_6.scrollIntoView();
    box1_5.classList.remove('passive');
    box1_6.classList.add('passive');
}
})


/* document.getElementById("aaa")
.addEventListener('click', function(){
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }else this.classList.add('active');
    });*/

    /* box1.addEventListener('click',function(event){
        console.log(event);
        const rect = box1.getBoundingClientRect();
        console.log(rect);
    })
    
    box2.addEventListener('click',function(event){
        console.log(event);
        const rect = box2.getBoundingClientRect();
        console.log(rect);
    })
    box3.addEventListener('click',function(event){
        console.log(event);
        const rect = box3.getBoundingClientRect();
        console.log(rect);
    })
    */