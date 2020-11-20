const ul = document.querySelector('ul');
const arr_img = document.querySelectorAll('.img');

// console.log(ul);

let id = 0;


arr_img.forEach(index => {
    // console.log(i);
    index.addEventListener('click',function(){
        const result = confirm("앨범을 추가하시겠습니까?");

        if(result){
            list_add();
            alert('앨범을 추가했습니다.');
        }
    });
}); 


function list_add(){
    ul.appendChild(create());
}


function loadItems() {
    return fetch('./data.json')
      .then(response => response.json())
      .then(json => json.items);  
    }
  
   loadItems()
   .then(items=>{
    console.log(items);   
   })


function create(){
    const list = document.createElement('li');
    list.setAttribute('class','new_li');
    list.setAttribute('data-id',id);
    list.innerHTML = `<img src="images/img1.jpg" alt="" data-id${id}><span class="title">나랑 같이 걸을래 - 적재</span><span class="time">&times;</span>`;
    id++;

    return list;
}

// let json = JSON.parse('data.json');
// // let json = JSON.stringify(true);
// console.log(json);

// console.log(json);



//   .then(items =>{
//       displayItems(items)
//   })
//   .catch(console.log)












