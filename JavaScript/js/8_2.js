'use strictly';

function change(){
    const ttt = document.querySelector('.ttt');
    const myspan = document.querySelector('.myspan');

    button.addEventListener('click',() =>{
        ttt.classList.toggle('active');     //ttt가있으면 active 추가
        myspan.classList.toggle('active');
    })

}


/* const button = document.querySelector('.button');
const ttt = document.querySelector('.ttt');
const myspan = document.querySelector('.myspan'); */
