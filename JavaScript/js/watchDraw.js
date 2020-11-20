export class WatchDraw{
    
    constructor(){      // = Data class // 변경되지 않는 값
        this.time = new Date();
        if (this.hour == 0){
            this.hour = 12;
        }else if (this.hour >=13){
            this.hour -= 13
        }
        this.min = this.time.getMinutes();
        this.sec = this.time.getSeconds();
        this.m_sec = this.time.getMilliseconds();  
        this.ang = 0;
        this.mark_hour;
 
    }
    //rotate에 있는 resize값 불러오기 + class에 있기 때문에 'this'사용
    resize(stageWidth, stageHeight){        
        this.stageWidth = stageWidth;
        this.stageHeight= stageHeight;
    }

    update(ctx) {
        let time = new Date();
        let hour = time.getHours();
 
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let m_sec = time.getMilliseconds();
        let green = ctx.createRadialGradient(250, 250, .5, 250, 250, 250);
        

        console.log(sec);
        green.addColorStop(0, 'hsla(180, 55%, 8%, 1)');
        green.addColorStop(1, 'hsla(180, 95%, 15%, 1)');
        ctx.fillStyle = green;
        //console.log (this.stageWidth);
        //console.log (this.stageHeight)
        ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);      //바탕 색칠
        this.drawSeconds(ctx,sec,m_sec);
        this.drawMinutes(ctx,min,sec,m_sec);
        this.drawHours(ctx,hour,min,sec,m_sec);
    }
      drawSeconds(ctx,sec,m_sec) {
        this.ang = 0.006 * ( ( sec * 1000 ) + m_sec );
        ctx.beginPath();
        ctx.fillStyle = 'hsla(214, 54%, 3%, .8)';

        ctx.moveTo(250, 250);
        ctx.lineTo(250,50);
        ctx.arc(250,250,200, this.calcDeg(0), this.calcDeg(this.ang), false);
        ctx.lineTo(250,250);
        ctx.shadowColor = 'hsla(180, 45%, 5%, .4)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;
        ctx.fill();
    
    }
    drawMinutes(ctx,min,sec,m_sec){
        this.ang = 0.0001 * ( ( min * 60 * 1000 ) + ( sec * 1000 ) + m_sec );
        ctx.beginPath();
        ctx.fillStyle = 'hsla(272, 53%, 24%, 1)';
        ctx.moveTo(250,250);
        ctx.lineTo(250,100);
        ctx.arc(250,250,150,this.calcDeg(0),this.calcDeg(this.ang),false);
        ctx.lineTo(250,250);
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;
        ctx.fill();
    
    }
    drawHours(ctx,hour,min,sec,m_sec){
        this.ang = 0.000008333 * ( ( hour * 60 * 60 * 1000 ) + ( min * 60 * 1000 ) + ( sec * 1000 ) + m_sec );
        if( this.ang > 360 ){
            this.ang -= 360;
            }
             ctx.beginPath();          
            ctx.fillStyle = 'hsla(359, 69%, 66%, 1)';
 
            ctx.moveTo( 250, 250 );       //중심 지점
            ctx.lineTo( 250, 150 );       //시계 윗 지점
            ctx.arc( 250, 250, 100, this.calcDeg( 0 ), this.calcDeg(this.ang ), false );
            ctx.lineTo( 250, 250 );
              ctx.shadowColor = 'hsla(180, 45%, 5%, .4)';
              ctx.shadowBlur =15;
              ctx.shadowOffsetX = 15;
              ctx.shadowOffsetY = 15;
            ctx.fill();
    
    }
    mark_hour(ctx) {
        for (let i=0; i<12; i++){
            this.angle = (i-3) * (Math.PI * 2) / 12;       //1~12시
            ctx.lineWidth = '2px'
            ctx.beginPath();


            this.x1 = (this.stageWidth/2) + Math.cos(this.angle)*60;
            this.y1 = (this.stageHeight/2) + Math.sin(this.angle)*60;
            this.x2 = (this.stageWidth/2) + Math.cos(this.angle)* (60 - (60/7));
            this.y2 = (this.stageHeight/2) + Math.sin(this.angle)*(60-(60/7));
            ctx.moveTo(x1,x2);
            ctx.moveTo(x2,y2);
    
            ctx.strokeStyle='red';
            ctx.stroke();
        }  

     calcDeg(deg){
        return (Math.PI/180) * (deg - 90);
        }
    }
