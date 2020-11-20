'use strict'

// 1.기본
//const arr1 = newArray();

const arr2 = ['🍖','🍤','🥩'];

console.log(arr2[0]);
console.log(arr2.length);
console.log(arr2);




// for of array value 값을 루프문으로 가져올 수 있다.

for(let value of arr2){;
    console.log(value);
}
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}
const fruits = ['🍈','🍓','🍍'];
console.log(fruits);




//forEach

fruits.forEach(function(fruit,index,array){
    console.log(`forEach: ${fruit},${index},${array}`)
});




// pop 은 삭제 and push 는 삽입

fruits.pop();               //뒤에서 부터 삭제
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.push('🍒','🍌','🍇');
console.log(fruits);



//shift and unshift    

fruits.unshift('🍉','🍊');        //앞쪽에 밀어넣기
console.log(fruits);

fruits.shift();                   //앞쪽부터 삭제
console.log(fruits);



//splice

fruits.splice(2,2);         //배열2부터 2개 삭제
console.log(fruits);

fruits.splice(1,2,'🍌','🥑');       //1자리 부터 2개 삭제 후 삽입
console.log(fruits);



//배열을 합쳐봅시다.

const fastfood = ['🌮','🍟'];
console.log(fastfood);
const food = fruits.concat(fastfood);       
//fruits배열에 fastfood 합침
console.log(food);

console.clear();



//indexOf       앞에서부터 몇번째에 있는지

console.log(food.indexOf('🌮'));        //타코가 몇번에 있는지
console.log(food.indexOf('🍊'));



//lastindexOf       뒤에서부터 몇번째에 있는지

food.push('🍕');
console.log(food);

console.log(food.lastIndexOf('🍕'));



//includes

console.log(food.includes('🍦'));       //아이스크림이 있는지? false
console.log(food.includes('🍌'));      //바나나 있는지? true


const aa = food.join('^');         //연결해주는 기호(아무거나 상관x)
console.log(aa);

