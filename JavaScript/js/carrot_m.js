'use strict';


const pause = document.querySelector('.pause_button');
const game_timer = document.querySelector('.timer');
const count = document.querySelector('.score_count');
const land = document.querySelector('.land');
const count_carrot = 10;
const carrot_size = 100;
const count_bug = 10;
const bug_size = 90;
const landRect = land.getBoundingClientRect();

/* 벌레+당근*/
function showimg(){
    addItem(land, 'carrot',count_carrot, 'carrot.png');
    addItem(land, 'ubg',count_bug,'bug.png');
    
}

let started = false;
let score = 0;
let timer;
pause.addEventListener('click',()=>{
    console.log('Go');
    if(started){
        stop();
    }
    else{
        start();
    }
    started = true;
});

function start(){
    showimg();
}
function stop(){
}


function addItem(land,className, count, imgPath){
    const x1 = 0;
    const x2 = landRect.width - carrot_size;
    const y1 = 400;
    const y2 = 969 - carrot_size;
    console.log(`length:${x2}, height:${y2}`);
    console.log(`y1:${y1}`);
    for(let i = 0; i<=count; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src',imgPath);
        item.style.position = 'absolute';

        const x = randomNumber(x1,x2);      //x축 램덤으로 위치
        const y = randomNumber(y1,y2);
        console.log(y);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        land.appendChild(item);
    }
}
function randomNumber(min,max){
    return Math.random()*(max-min)+min;
}
/*max는 969 - 당근 값 / min은 400 /random은 0.1~1.0*/