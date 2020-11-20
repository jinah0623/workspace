const activities = document.querySelector('.activities');
const input = document.querySelector('.header_input');
const addBtn = document.querySelector('.header_button');

console.log(activities);
console.log(input);
console.log(addBtn);

function onAdd(){
    const text = input.value;
    if (text ===''){
        return;
    }
    const activity = createActivity(text);
    activities.appendChild(item);
}