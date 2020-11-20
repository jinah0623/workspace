'use strict';

    const square_1 = document.querySelector('#canvas1');
    const ctx = square_1.getContext("2d");
    console.log(square_1);

    ctx.beginPath();
    ctx.arc(100,100,30,Math.PI,1.5*Math.PI,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(200,100,30,1.5*Math.PI,0.5*Math.PI,true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(300,100,30,0,Math.PI*1.5,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(400,100,30,Math.PI*2,false);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeRect(100,200,60,60);
    ctx.beginPath();
    ctx.moveTo(200,200);
    ctx.lineTo(200,300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300,200);
    ctx.lineTo(300,300);
    ctx.lineTo(400,300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(500,200);
    ctx.lineTo(500,300);
   

    






   