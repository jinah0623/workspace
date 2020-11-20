'use strict';

class Car {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    colorchange(key){                   //
        return this.color=key;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value == '' || null ? '똥차' :value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value == '' || null ? 'silver' :value;
    }
    //''로 되있거나 값이 없으면 silver로 color 지정
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value <= 0 ? 10 :value;
    }

    speedUp(){
       return this.speed= this.speed+10;
    }

    speedDown(){
        return this.speed= this.speed-10;
    }

}

const mr_lee = new Car('Hyundai', 'white', 300);

const mr_park = new Car('쉐보레', '', -1);
mr_lee.colorchange('blue');         //흰색을 블루로 재정의
mr_lee.speedUp();
mr_lee.speedUp();
mr_lee.speedUp();
console.log(mr_lee);


mr_park.speedUp();
mr_park.colorchange('purple');
console.log(mr_park);















/*
const Hong = {name : 'Sonata', color: 'blue', speed: 100};
print(Hong);

function print(Hong){
    console.log('이름:' + Hong.name);
    console.log('색상:'+ Hong.color);
    console.log('속도:'+ Hong.speed-j);
}

const Kim = {name : 'Jeep', color: 'red', speed: 70};
print(Kim);

function print(Kim){
    console.log('[김씨의 차]');
    console.log('이름:'+Kim.name);
    console.log('색상:'+ Kim.color);
    console.log('속도:'+ Kim.speed+j);
}
*/



/*
class Car{
    constructor(name,color,speed){
        this.name = name;
        this.color = color;
        this.speed = speed;
    
    get speed(){
        return this._speed;
    }
    set speed(value){
        if (value<0){
        }
    this._speed = value;    
    }
    
    speedup(){
        return this.speed+10;
    }
    speeddown(){
        return this.speed-10;
    }
    }

console.log('[홍씨의 차]');
console.log('이름:' + Hong.name);
console.log('색상:'+ Hong.color);
console.log('속도:'+ Hong.speedup());
const Kim = new Car('Jeep', 'red', '70');
console.log('[김씨의 차]');
console.log('이름:'+Kim.name);
console.log('색상:'+ Kim.color);
console.log('속도:'+ Kim.speeddown());
*/