'use strict';

const x_line = document.querySelector('.x_line');
const y_line = document.querySelector('.y_line');
const target = document.querySelector('.target');
const where = document.querySelector('.where');
const rabbit = document.querySelector('.rabbit');

/*확인*/
console.log(x_line);
console.log(y_line);
console.log(target);
console.log(where);
console.log(rabbit);


/*마우스위치*/
/*event=마우스움직임*/
// mouse event = resize / click / mousemove
document.addEventListener('mousemove',function(event){
    const x = event.clientX;        //const는 고정값
    const y = event.clientY;

    //console.log(`x:${x}px, y:${y}px`);
    /*해당 요소의 css의 top/left값 변경*/
    x_line.style.top = `${y}px`;
    y_line.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    where.style.top = `${y}px`;
    where.style.left = `${x}px`;
}); 

/* document.addEventListener('click',function(event){
    target.style.background = 'red';
    setTimeout(()=> {target.style.background = "";},100)
    })
*/

document.addEventListener('click', function(){
    target.classList.add('active');
    target.style.background = 'red';
    setTimeout(() => { remove()}, 10000);
});

function remove(){
    target.classList.remove('active');
}

    
