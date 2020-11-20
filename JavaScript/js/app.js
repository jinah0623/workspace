import{
    Ball
}from './ball';

import{
    Block
}from './block';


class App{
    constructor() {
        this.canvas = document.createElement('canvas'); /*캔버스 생성 */
        this.ctx = this.canvas.getContext('2d');        /*캔버스 안에 2d*/

        document.body.appendChild(this.canvas);

        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();
        console.log('1');

        this.ball = new Ball(this.stageWidth,this.stageHeight, 60, 15);
        this.block = new Block(700, 30, 300, 450);
        window.requestAnimationFrame(this.animate.bind(this));
    }
    /*스크린 사이즈를 가지고 와서 애니메이션 정의 */
    resize(){           //method 호출
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        /*스크린사이즈 가지고 오는 함수 */
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);        //2배로 확대
    }
    /*애니메이션 구동 함수 */
    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));      //callback 함수
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);    //ball에 있는 draw함수
    }
    }

    window.onload = () => {
        new App();
    };

