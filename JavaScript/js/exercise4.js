'use strict';
let arrdata=new Array;

function insertArr(){
    for(let i=0; i<=99; i++){
        arrdata[i]=i+1;
        document.write(`${arrdata[i]}   `);
        console.log(`변경전 값: ${arrdata[i]}   `);
        }
    }
function delArr(){
    for(let j=0; j<arrdata.length; j++){
        if (j%2==0){
            arrdata[j]=0;
        arrdata.splice(j,1,'');
        console.log(arrdata[j]);        
        }
    }
    selectArr();
}
insertArr();
    function selectArr(){
        let i;
        for(i=0; i<arrdata.length;i++){
            document.write(arrdata[i]+"   ");
        }
        document.write("홀수 번째 데이터 초기화 완료!");
        console.log("돌아가기")
    } 









  /* let i;
    for(i=0; i<=arrdata.length;i++){
        if(i%2==0){
            arrdata[i]=0;
        }
        continue;
    }
    arrdata.splice(1,arrdata.)
    */