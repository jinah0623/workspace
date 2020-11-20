//5개가 들어가 있는 배열 생성

'use strict'

const ani = ['🙉','🐶','🐮','🐷','🐻'];
console.log(ani.length);

ani.forEach(element => console.log(element));

  ani.pop();
    console.log(ani);
    ani.shift();
    console.log(ani);
    ani.splice(2,0,'🐱‍👤');
    console.log(ani); 


/* for(let i=0; i<=ani.length; i++){
    console.log(ani[i]);
    if(j=2){
        ani.push('🐸');
    }
}
*/


for(let value of ani){;
    console.log(value);
    ani.pop();
    console.log(ani);
    ani.shift();
    console.log(ani);
    ani.splice(2,1,'🐨');
    console.log(ani);
}

