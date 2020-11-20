import{Wave} from'./wave.js'

export class WaveGroup{
    constructor(){
        this.totalWaves = 10;            //파도갯수
        this.totalPoints = 6;           

        this.color = [
    
            'rgba(255,255,0,0.4)',
            'rgba(0,255,255,0.4)',
            'rgba(255, 223, 211,0.4)',
            'rgba(255,0,0,0.4)',
            'rgba(210, 145, 188,0.4)',
            'rgba(235, 219, 212,0.4)',
            'rgba(150, 212, 204,0.4)',
            'rgba(254, 200, 216,0.4)',
            'rgba(217, 229, 174,0.5)',
            'rgba(224, 187, 228,0.4)',
  
        ];

        this.waves = [];

        for(let i = 0; i<this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight){
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx){
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}