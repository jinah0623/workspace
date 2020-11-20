import{
    WatchDraw
}from './watchDraw.js';         //watchDraw랑 같이 읽힘


const COLOR =[
    {r: 45, g:74, b:227}, //blue
    {r:250, g:255, b:89}, //yellow
    {r:255, g:104, b:248}, //pupple
    {r:44, g:209, b:252} //skyblue
] 

class Rotate {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.wd = new WatchDraw();          //watchDraw 파일로 가기

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();          //call resize
        this.mark_hr ;

        requestAnimationFrame(this.animate.bind(this));
    }


    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        console.log (this.stageHeight);

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);             //캔버스 사이즈를 두배로 줌 선명성을  위해

        this.wd.resize(this.stageWidth, this.stageHeight);          //객체 생성

    }

    animate(t) {
        console.log(t);
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        
        this.wd.update(this.ctx);
        //this.draw.draw1(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
        
    }

}
    window.onload = () => {
    new Rotate();
}
