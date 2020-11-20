'use strict';

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const carrot_size = 80;   /*당근 크기 지정*/
const bug_size = 80;      /*벌레 크기 지정*/
const carrot_count = 5;
const bug_count = 5;
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let started = false;        //시작 전
let score = 0;
let timer;

gameBtn.addEventListener('click',()=>{
    console.log('start');
    if(started){
        stopGame();
    }else{
        startGame();
    }
    started = true;
});


function startGame(){
    initGame();
    showstopGame();
}
function showstopGame(){
    const icon = document.querySelector('.fa-play');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-stop');
}
function stopGame(){

}


//벌레, 당근 생성
function initGame(){
    //console.log(fieldRect);
    addItem('carrot',carrot_count, 'img/carrot.png');
    addItem('bug',bug_count, 'img/bug.png');
    //이미지 이름, 원하는 갯수, 이미지경로
}

//아이템 이미지 그리기
function addItem(className, count, imgPath){
    const x1 =0;
    const y1 = field.offsetTop;
    const x2 = fieldRect.width - carrot_size;
    const y2 = field.offsetTop + fieldRect.height - carrot_size;
    console.log (`길이 : ${x2}, 높이:${y2}`);
    for(let i = 0 ; i < count ; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';

        //좌표 (위치)
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        console.log(x);
        console.log(y);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        //아이템 추가
        field.appendChild(item);
    }
}

//난수 생성
function randomNumber(min,max){
    return Math.random()*(max);
}

