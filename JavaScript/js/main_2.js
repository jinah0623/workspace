let count = 10;
const plus = count++;
console.log(`plus: ${plus}, count:{plus}`);

console.log(`or: ${val_1 || val_2 || check()}`);
console.log(`and: ${val_1 && val_2 && check()}`);
function check(){
    for(let i=0; i<10; i++){
        console.log;
    }
}