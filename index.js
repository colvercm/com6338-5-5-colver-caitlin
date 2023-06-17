// variables
var form = document.getElementById('add-todo');
var input = document.querySelector('input');
var ul = document.getElementById('todo-list');
let todos = [];

// Prevent Default
form.onsubmit = function(e) {
    e.preventDefault();

var task = input.value.trim()

var li = document.createElement('li');
var button = document.createElement('button');
button.textContent = task;

if (task !=='') {    
        
ul.appendChild(li);
li.appendChild(button);

//reset
input.value = "";
var count = 0;

// Removing
button.addEventListener('click', (e) => {
    count++
        
    if (count === 1){
        button.style.textDecoration = "line-through";
    
    }else if (count === 2) {
       li.addEventListener('click', () => {
        li.remove();
       })
    }
 })

} else {
    form.reset()
    return;
    }   
}






