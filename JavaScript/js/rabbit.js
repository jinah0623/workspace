'use strict';
/* const rabbit = document.querySelector('.box5');
const carrot = document.querySelector('.box');
const button = document.querySelector('.button'); 

console.log(rabbit);
console.log(carrot);
console.log(button);

document.addEventListener('click',function(){

}) */

const img = document.querySelector('.img_name');
let test1 = document.getElementById("test").getBoundingClientRect().width/2;
let test2 = document.getElementById("test").getBoundingClientRect().height/2;
addEventListener('click',function(a){    
    let x_position = a.pageX - test1; // 절반값
    let y_position = a.pageY - test2; // 절반값
    let every = img.style.transform ="translate("+x_position+"px , "+y_position+"px)";
    console.log(every);
    //console.log("x좌표:",a.clientX);
    //console.log("y좌표:",a.clientY);
    console.log("x좌표:",a.pageX);
    console.log("y좌표:",a.pageY);
    console.log(img.getBoundingClientRect());
});
let choice = document.querySelector(".target_1");
choice.addEventListener('click',()=>{
    console.log("2번출력");
    choice.style.background = "red";    
    setTimeout(() => {      
        choice.innerHTML ="100나옴"  ;        
        setTimeout(() => {
            choice.remove();
        }, 1000);  
    }, 2000);
    
});
let choice_2 = document.querySelector(".target_2");
choice_2.addEventListener('click',()=>{
    console.log("3번출력");
    choice_2.style.background = "red";
    
    setTimeout(() => {      
        choice_2.innerHTML ="200나옴"  ;
        setTimeout(() => {
            choice_2.remove();
        }, 1000); 
    }, 2000);
});