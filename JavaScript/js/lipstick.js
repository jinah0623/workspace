'use strict';

 

const lipcolors = document.querySelector('.lipcolors');
const input = document.querySelector('.header_input');
const addBtn = document.querySelector('.header_button');
const button_1 = document.querySelector('.palette1');
const button_2 = document.querySelector('.palette2');
const button_3 = document.querySelector('.palette3');
const button_4 = document.querySelector('.palette4');
const button_5 = document.querySelector('.palette5');
const button_6 = document.querySelector('.palette6');
const button_7 = document.querySelector('.palette7');
const button_8 = document.querySelector('.palette8');

console.log(button_1);
console.log(button_2);
console.log(button_3);
console.log(button_4);
console.log(button_5);

console.log(lipcolors);
console.log(input);
console.log(addBtn);

//red버튼을 눌렀을때
 button_1.addEventListener('click', ()=>{
    const rrr = 'RED <i style="color:red" class="fas fa-circle"></i>';
 
   onAdd(rrr);             //onAdd 리스트에 rrr 입력 
 });
 //Coral 버튼을 눌렀을때
 button_2.addEventListener('click', ()=>{
   const ccc = 'CORAL <i style = "color:#ff7d6c" class="fas fa-circle"></i>';
 
   onAdd(ccc);             //onAdd 리스트에 ccc 입력
 })
 //Nude 버튼 눌렀을 때
 button_3.addEventListener('click',() =>{
   const nnn = 'NUDE <i style="color:#f5cdb2" class="fas fa-circle"></i>';
 
   onAdd(nnn);
 })
 //Orange 버튼 눌렀을 때
 button_4.addEventListener('click',()=>{
   const ooo = 'ORANGE <i style = "color:#FF8C00" class="fas fa-circle"></i>';
 
   onAdd(ooo);
 })
 //Pink 버튼 눌렀을 때
 button_5.addEventListener('click',()=>{
   const ppp = 'PINK <i style = "color:#ff73ad" class="fas fa-circle"></i>';
 
   onAdd(ppp);
 })
//Cherry버튼을 눌렀을때
button_6.addEventListener('click', ()=>{
    const ch = 'CHERRY <i style="color:#ff008c" class="fas fa-circle"></i>';
 
   onAdd(ch);             
 });
//Black 버튼을 눌렀을때
button_7.addEventListener('click', ()=>{
    const bbb = 'BLACK <i style="color:black" class="fas fa-circle"></i>';
 
   onAdd(bbb);             
 });
//Green 버튼을 눌렀을때
button_8.addEventListener('click', ()=>{
    const ggg = 'GREEN <i style="color:#46da46" class="fas fa-circle"></i>';
 
   onAdd(ggg);             
 });


//a는 지정만, 값은 없기 때문에 null대신 undefined
function onAdd(a){          

    let text = input.value;
    console.log(text);
    if (text ==='' && a===undefined){
        return; 
    }
    if(text === '' && a !== undefined){
        text = a;
    }
    if(text !=='' && a ===undefined ){

    }
    const lipcolor = createItem(text);
    lipcolors.appendChild(lipcolor);
    input.value = '';
}


let id = 0;
function createItem(text){
    const lipcolorrow = document.createElement('li');
    lipcolorrow.setAttribute('class','lipcolor_row');
    lipcolorrow.setAttribute('data-id', id);
    lipcolorrow.innerHTML = `<div class="lipcolor">
                            <span class="lipcolor_name">${text}</span>
                            <button class="lipcolor_delete">
                                <i class="fas fa-minus-circle" data-id=${id}></i>
                            </button>
                            </div>
                            <div class="lipcolor_divider"></div>`;
    id++;

    return lipcolorrow;
}

addBtn.addEventListener('click',() =>{
    onAdd();
});

input.addEventListener('keypress',(event) =>{
    if (event.key === 'Enter'){
        onAdd();
    }
});
    lipcolors.addEventListener('click',event =>{
        const id = event.target.dataset.id;
        console.log(id);
        if(id){
            const toBeDeleted = document.querySelector(`.lipcolor_row[data-id="${id}"]`);
            toBeDeleted.remove();
        }
    });