

let sun = new Image();
let moon  = new Image();
let earth = new Image();

const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");

function init(){
    sun.src = "Canvas_sun.png";
    moon.src = "Canvas_moon.png";
    earth.src = "Canvas_earth.png";
    window.requestAnimationFrame(draw);
}

function draw(){
    ctx.globalCompositeOperation = "destination-over";  //원래 도형 아래에 그려짐
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);

    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.strokeStyle = "rgba(0,153,255,0.4)";
    ctx.save();
    ctx.translate(150,150);     //첫번째 이동

    //지구
    let time = new Date();
    ctx.rotate(
        ((2*Math.PI)/60)*time.getSeconds()+
        ((2*Math.PI)/60000)*time.getMilliseconds()
    );
    ctx.translate(105,0);       //두번째 이동
    ctx.fillRect(0,-12, 50, 24);        //shadow
    ctx.drawImage(earth, -12, -12);
    

    //달
    ctx.save();         //255,150 = 0,0
    ctx.rotate(
        ((2*Math.PI)/6)*time.getSeconds()+          //지구보다 빠르게
        ((2*Math.PI)/6000)*time.getMilliseconds()
    );
 
    ctx.translate(0,28.5);
    ctx.drawImage(moon, -3.5,-3.5);

    ctx.restore();
    ctx.restore();

    //태양
    ctx.beginPath();
    ctx.arc(150,150,105,0, Math.PI*2,false);    //earth orbit 0,0
    ctx.stroke();

    ctx.drawImage(sun,0,0, 300, 300);


    window.requestAnimationFrame(draw);
}
init();