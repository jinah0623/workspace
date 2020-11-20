//'use strict';
// //menu_left
// $('.menu_toggle').onclick(function ()=>{
//     $('.menu_left').toggleClass("open");
// })

//scroll event
/*when scrolls down, hide / when scroll up, show */
const under_menu = document.querySelector('#m_p_menu');
const under_footer = document.querySelector('#footer')
const html = document.querySelector('html');
console.log(html);
const x =window.innerWidth;
const y = window.innerHeight;
console.log(html.style.width);
console.log(html.style.height);

document.addEventListener('scroll', ()=>{
    let documentY = document.documentElement.scrollTop;
    let direction = documentY - window.scrollPosition >= 0 ? 1 : -1;
    window.scrollPosition = documentY; 
    console.log(direction);
    if (direction===1){
        under_menu.style.display ="";
        under_menu.style.opacity ='1';
        under_menu.style.position ='absolute';
        under_menu.style.transition = 'transform 1000ms ease-in';
        under_menu.style.transform ='translateY(-900px)';
        } 
       else if(direction === -1){
            under_menu.style.transition = 'transform 1000ms ease-in';
            under_menu.style.transform ='translateY(500px)';
        }
})


const btn = document.querySelector('.dropbtn');
const div = document.querySelector('#menu_left');

btn.addEventListener('click', ()=>{
    if(div.style.display === 'none'){
        div.style.display = 'block';
    }
    else{
        div.style.display = 'none';
    }
})