'use strict'

let sum = 0;

function print(sum_1){
    console.log(sum);
}

function cal(a,b){
    sum = a+b;
    print(sum)
}

print();

cal(1,2);