'use strict';

const con_full_screen = document.querySelector('.fullScreen');
const con_outer = document.querySelector('.outer');
const con_inner = document.querySelector('.inner');
const con_client = document.querySelector('.client');

console.log(con_full_screen);
console.log(con_outer);
console.log(con_inner);
console.log(con_client);



function inserScreenSize() {

    con_full_screen.innerHTML = ` Width ${screen.width}, Height ${screen.height}`;
    con_outer.innerHTML = ` Width ${outerWidth}, Height ${outerHeight}`;
    con_inner.innerHTML = ` Width ${innerWidth}, Height ${innerHeight}`;
    con_client.innerHTML = ` Width ${document.documentElement.clientWidth},
        Height ${document.documentElement.clientHeight}`;
}

window.addEventListener('resize', () => {
    inserScreenSize();
});
inserScreenSize();
