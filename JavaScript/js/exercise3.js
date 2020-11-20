'use strict';
//object -> class -> json

let json = JSON.stringify(true);
console.log(json);


//object
const vehicle = {     
    name : 'car',
    year: 2019,
};

const obj = JSON.parse(json,(key,value) =>{
    
})

console.log(vehicle);

json = JSON.stringify(vehicle);
console.log(json);


//class
class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value == '' || null ? 'Por' :value;
    }
    get year(){
        return this._year;
    }
    set year(value){
        this._year = value == '' || null ? 2019 : value;
    }
}

let car1 = new Car('BMW','red',2020);
let car2 = new Car('BENZ','white',2020);


console.log()