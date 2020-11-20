'use strict';

const box4 = document.querySelector('.box4');        //html의 class
console.log(box4);

box4.addEventListener('click',function(event){
    console.log(event);
    const rect = box4.getBoundingClientRect();
    // getBoundingClientRect는 내가 선택한 element의 위치
    console.log(rect);
});

const scroll_by = document.querySelector('.scrollDown');
const scroll_to = document.querySelector('.scrollMove');
const scroll_in = document.querySelector('.scrollTT');
const scroll_by4 = document.querySelector('.scrollUp');
const scroll_by5 = document.querySelector('.scrollLeft');
const scroll_by6 = document.querySelector('.scrollRight');


console.log(scroll_by);
console.log(scroll_to);
console.log(scroll_in);
console.log(scroll_by4);
console.log(scroll_by5);
console.log(scroll_by6);



scroll_by.addEventListener('click', (event) => window.scrollBy({top:100, left:0, behavior:"smooth"}));
scroll_by4.addEventListener('click', (event) => window.scrollBy({top:-100, left:0, behavior:"smooth"}));  //원하는 만큼 부드럽게 스크롤
scroll_by5.addEventListener('click', (event) => window.scrollBy({top:0, left:-100, behavior:"smooth"}));
scroll_by6.addEventListener('click', (event) => window.scrollBy({top:0, left:100, behavior:"smooth"}));
scroll_to.addEventListener('click',(event)=> window.scrollTo(0,100));       //지정 위치로 스크롤
scroll_in.addEventListener('click',(event)=> box4.scrollIntoView());         //지정한 object한테 스크롤