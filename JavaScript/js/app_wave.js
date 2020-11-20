'use-strict'
import{
    WaveGroup
} from './waveGroup.js';

class App_wave{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
       
        this.waveGroup = new WaveGroup();           //waveGroup에 있는 construct값들

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth *2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight); //웨이브그룹에 있는 resize에게 보내기
    }

    animate(t){
        this.ctx.clearRect(0, 0, this.stageWidth,this.stageHeight);
        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));

    }
}

window.onload = () => {
    new App_wave
}