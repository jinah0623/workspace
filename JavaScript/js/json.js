'use strict';

//1.object를 json화 시키기

let json = JSON.stringify(true);        //JSON대문자로쓰기*****
console.log(json);

json = JSON.stringify('🍕','🍜');
console.log(json);

const cat = {                   //object
    name : 'tensu',             //속성
    color: 'white',
    size : null,
    birthDay : new Date(),

    meow : ()=>{
        console.log(`${name}야옹`);
    },
};

console.log(cat);
console.clear();

json = JSON.stringify(cat);         //보내기  stringify는 직렬화시킴
console.log(json);

//parse = JSON.parse(json);           //받기


//key와 value로 분리
const obj = JSON.parse(json,(key,value) =>{
    console.log(`key: ${key} value:${value}`)
    return key == 'birthDay' ? new Date(value) : value; 
})


console.log(obj);
console.log(cat.birthDay.getDate());
console.log(obj.birthDay.getDate());