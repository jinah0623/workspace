'use strict';

class Photo {
    constructor() {
        /*left side*/
        this.aside = document.querySelector('.aside');
        this.aside1 = document.querySelector('.aside1');
        this.bside = document.querySelector('.bside');
        this.cside = document.querySelector('.cside');
        /*center*/
        this.head = document.querySelector('.head');
        this.center = document.querySelector('.center');
        this.footer = document.querySelector('.footer');
        /*right side*/
        this.dside = document.querySelector('.dside');
        this.eside = document.querySelector('.eside');
        this.xbtn = document.querySelector('.xbtn');

        this.shadow = document.querySelector('.shadow');

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        this.center1Event();
        this.aside1Event();
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.x = this.stageWidth / 2.9;
        this.y = this.stageHeight / 3;

        this.center_x = this.stageWidth / 2;
        this.center_y = this.stageHeight / 2;

        this.divPosition(this.aside, `-${this.y}px`);
        this.divPosition(this.bside, '', `-${this.x}px`);
        this.divPosition(this.cside, `${this.y}px`);
        this.divPosition(this.head, `-${this.y}px`,`${this.x}px`);
        this.divPosition(this.center, `${this.y*3}px`,`${this.x*3.01}px`);
        this.divPosition(this.footer, `${this.y*3}px`,`${this.x}px`);
        this.divPosition(this.dside, `-${this.y}px`,`${this.x*1.93}px`);
        this.divPosition(this.eside, `${this.y*3.1}px`,`${this.x*1.93}px`);
        this.divPosition(this.xbtn, `${this.center_y}px`,`${this.center_x*1.8}px`);
  

        // this.eside.style.left = `${x*1.93}px`;
        /*aside*/
        this.cssProcess(this.aside,'visible', 'relative', 'transform 2000ms ease-in', `translateY(${this.y}px)`, '1');
        this.cssProcess(this.bside,'visible', 'relative', 'transform 2000ms ease-in', `translateX(${this.x}px)`, '1');
        this.cssProcess(this.cside,'visible', 'relative', 'transform 2000ms ease-in', `translateY(-${this.y}px)`, '1');
        this.cssProcess(this.head, 'visible', 'absolute', 'transform 1400ms ease-in', `translateY(${this.y}px)`, '1' );
        this.cssProcess(this.center, "visible", 'absolute', 'transform 1400ms ease-in', `translate(-${this.x*2}px, -${(this.y*2)+((this.y*35)/100)}px)`, '1');
        this.cssProcess(this.footer, "visible", 'absolute', 'transform 1800ms ease-in', `translateY(-${this.y+((this.y*10)/100)}px)`, '1' );
        this.cssProcess(this.dside,'visible', 'absolute', 'transform 2000ms ease-in', `translateY(${this.y}px)`, '1');
        this.cssProcess(this.eside, 'visible', 'absolute', 'transform 1500ms ease-in', `translateY(-${this.y*2}px)`, '1');

    }

    divPosition(location,top,left){
        const loc = location;
        const tp = top;
        const lf = left;

        loc.style.top = tp;
        loc.style.left = lf;
    }

    cssProcess(location, visibility, position, transit, transform,zIndex){
        const loc = location;
        const vis = visibility;
        const posit = position;
        const transt = transit;
        const transf = transform;
        const zin = zIndex;

        loc.style.visibility = vis;
        loc.style.position = posit;
        loc.style.transition = transt;
        loc.style.transform = transf;
        loc.style.zIndex = zin;
    }
    center1Event(){
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;
        const x = this.stageWidth / 3;
        const y = this.stageHeight / 3;

        const center = this.center
        const shadow = this.shadow;
        const center1 = document.querySelector('.center1');

        const xbtn = this.xbtn;

        center1.addEventListener('click', function(){
            center1.style.background = 'url("img/mackbook.jpg")';
            center1.style.backgroundSize = 'cover';
            center1.style.transition = 'transform 1000ms ease-in';
            center1.style.transform = 'scale(2)';
            center1.style.color = 'rgba(255,255,255,0.5)';
            center1.style.fontSize ='50px';
            center1.style.textAlign = 'center';
            center1.style.lineHeight = center1.clientHeight+'px';
            shadow.style.display = 'block';
            center.style.zIndex = '99';
            center.style.top= y*3.2+'px';

            xbtn.style.visibility = 'visible';
            xbtn.style.transition = 'transform 2000ms ease-in';
            xbtn.style.transform = 'rotate(270deg)';
        })
        xbtn.addEventListener('click', () => {
            this.xbtn.style.visibility ='hidden'
            location.reload();
        })
            
    }
    aside1Event(){
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;
        const x = this.stageWidth / 3;
        const y = this.stageHeight / 3;
        
        const center1 = this.center1;
        const aside = this.aside;
        const shadow = this.shadow;
        const xbtn = this.xbtn;
        const aside1 = document.querySelector('.aside1');
        console.log(aside1);
        const center_x = this.stageWidth / 2;
        const center_y = this.stageHeight / 2;

        aside1.addEventListener('click', function(){
            aside1.style.backgroundSize = 'cover';
            aside1.style.transition = 'transform 1000ms ease-in';
            aside1.style.transform = 'scale(2)';
            aside1.style.fontSize = '50px';
            aside1.style.textAlign = 'center';
            aside.style.zIndex = '98'
            aside1.style.position = 'absolute';
            shadow.style.display = 'block';
            aside1.style.left = `${center_x}px`;
            aside1.style.top = `${center_y}px`;
            console.log(center_y);

            
            aside.style.visibility = 'hidden';
            aside1.style.visibility = 'visible';

            xbtn.style.visibility = 'visible';   
            xbtn.style.transition = 'transform 2000ms ease-in';
            xbtn.style.transform = 'rotate(270deg)';

            aside1.addEventListener('click', ()=> {
                location.href = "../realphone/realphone.html";
            })


        })
        xbtn.addEventListener('click', () => {
            this.xbtn.style.visibility ='hidden'
            location.reload();
        })
    }
    //app img changing
    // changeimg(){
    //     const images = [
    //     'url("img/music.jpg")',
    //     'url("img/icloud.jpg")',
    //     'url("img/msg.jpg")',
    //     ]
    //     const apps = document.querySelector('.dside1')
    //     const bg = images[Math.floor(Math.random()*images.length)];
    //     apps.style.backgroundImage = bg;
    //         setInterval(changeimg, 1000)
    // }

}
window.onload = () => {
    new Photo();
}