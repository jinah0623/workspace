import{
    Example1
}from './example1.js';

class Example{
    constructor(){
        this.num1=5;
        this.num2=10;
        this.num3=15;
        this.num4=20;
        this.num5=25;

        this.mac1 = '🍟';
        this.mac2 = '🍔';
        this.mac3 = '🍺';

        this.ex = new Example1();
        this.addition();        //더하기 결과
        this.minus();           //빼기 결과
        this.multiply();
        this.set();
        }

        addition(){
        this.ex.add(this.num1,this.num2,this.num3,this.num4,this.num5); 
            console.log(this.ex.total);
        }
        minus(){
        this.ex.min(this.num1,this.num2,this.num3,this.num4,this.num5); 
            console.log(this.ex.total);
        }
        multiply(){
            this.ex.mul(this.num1,this.num2,this.num3,this.num4,this.num5);
            console.log(this.ex.total);
        }

        set(){
            this.ex.md1(this.mac1,this.mac2,this.mac3);
            console.log(this.ex.set);
        }

}
    window.onload = () => {
        new Example();
    }


