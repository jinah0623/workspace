'use strict';

// 1.class 기본 
class Person{
    constructor(name, age){
        this.name = name ;
        this.age = age ;
    }

speak(){
    console.log(`${this.name}: 안녕하세요.`);
}
}

const lee = new Person('Mr_Lee',42);    //object
const jeong = new Person('Gina',24);

console.log(lee.name);
console.log(lee.age);
lee.speak();

console.log(jeong.name);
console.log(jeong.age);
jeong.speak();


// 2. getter,setter

class User{
    constructor(firstname,lastname,age){
        this.firstname = firstname ;
        this.lastname = lastname ;
        this.age = age;
    //this.age는 get에서, age는 set에서 값 가져옴.
    }

    get age(){
        return this._age;
    }

    set age(value){
        if (value<0){
            //throw Error('말도 안되');
            //alert('말도 안되');
        }
        //this._age = value;
        this._size = value <0 ? 1:value;
    }
}

const user1 = new User('Gina','Jeong',-3);
console.log(user1.age);


// 3. public, private(클래스 안에서만 표시)

class Experiment{

     public_val = 2;
     #private_val = 4;
}

const experiment = new Experiment ();
console.log(experiment.public_val);
console.log(experiment.private_val);


// 4. 다양성

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
    }

    getArea(){
        return this.width*this.height;
    }
}



class Triangle extends Shape{
    draw(){
        console.log('🔺');
    }
    getArea(){
        return (this.width* this.height)/2;     //함수의 재정의
    }
}
class Rectangle extends Shape{          //함수의 상속
    draw(){
        console.log('⬛');       //함수재정의
    }
}

const rectangle = new Rectangle(20,30,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//5.instance of

console.log(rectangle instanceof Rectangle);    //t
console.log(triangle instanceof Rectangle);     //f
console.log(triangle instanceof Triangle);      //t
console.log(triangle instanceof Shape);         //t
console.log(rectangle instanceof object);       //t

