// 1.Object
// object = {키(우리가 접근 할 수 있는 프로퍼티): 값의 집합채(프로퍼티가 가지고 없는 값)}

/*
const name = 'mr.Lee'
const age = 42;
print(name,age);
const job = true;
const color = 'white';
print(name,age);

function print(name,age,job){
    console.log(person.name);
    console.log(person.age);

}
*/


const person1 = {name: 'mr.lee', age:42};
print(person1);

function print(person){
    console.log(person.name);
    console.log(person.age);
}

person1.job = true;                 //object에 추가
person1.pay = 1000;
console.log(person1.job);
console.log(person1.pay);
//delete person1.name;              //정보 삭제
console.log(person1.name);

// 2. Computed properties

console.log(person1.name);          //
console.log(person1['name']);

function printValue(obj,key){
    console.log(obj.key);
    console.log(obj[key]);
}



printValue(person1, 'name');
printValue(person1, 'age');