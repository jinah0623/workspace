const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");


console.log(canvas);

//세모
// ctx.beginPath();
// ctx.moveTo(200,200);
// ctx.lineTo(150,150);
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(150,150);
// ctx.lineTo(100,200);
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(100,200);
// ctx.lineTo(200,200);
// ctx.stroke();

// //정사각형
// ctx.beginPath();
// ctx.rect(100,100,70,70);
// ctx.stroke();



// //원
// ctx.beginPath();
// ctx.arc(350,400,30,Math.PI*2,false);
// ctx.stroke();

function init(){
    
    window.requestAnimationFrame(draw);

}

function draw(){
    ctx.clearRect(0,0,1000,1000);
    ctx.fillStyle = "purple";
    ctx.translate(200,0);

   //Triangle
   let time = new Date();
//    ctx.rotate(
//        ((2 * Math.PI)/60) * 5 + 
//        ((2 * Math.PI)/60000)* 0.5
//    );
   ctx.rotate(
       ((Math.PI / 180) * 7)
   );
   console.log((Math.PI / 180)*7);

    ctx.rect(100,100,50,50);
    ctx.stroke();
    ctx.fill();
    
    ctx.save();
    ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
          ((2 * Math.PI) / 6000) * time.getMilliseconds()
      );
   ctx.beginPath();
   ctx.moveTo(200,200);
   ctx.lineTo(150,150);
   ctx.lineTo(100,200);
   ctx.lineTo(200,200);
   ctx.stroke();
   
    ctx.restore();
    ctx.restore();

    //ctx.arc(400,400,500,0, Math.PI * 2, false);
    ctx.stroke();



    window.requestAnimationFrame(draw);
}
init();