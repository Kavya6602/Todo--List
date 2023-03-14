//   Select elements that needed
var input = document.querySelector('.todo-input');
var MainTodoContainer = document.getElementById('todos');
var addingButton = document.querySelector('.icon');
var deleteButton = document.querySelector('.delete');


addingButton.addEventListener('click', function (e) {
    // create all the elements
    if (input.value.trim()) {
        // Dropdown 
        var ultag = document.createElement('ul');
        ultag.classList.add('todo-list-container');
        // todo list div
        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        // li tag
        var liTag = document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item');
        // button div

        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');

        // completed button element
        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';

        // edit button element2
        var editButton = document.createElement('button');
        editButton.classList.add('editBtn');
        editButton.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i>';
        editButton.onclick  = function(){
            editWorking(liTag);
        }

        // trash button element2
        var trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';

        //  Appending elements into each other

        ultag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(trashButton);
        // append all the element in main div
        MainTodoContainer.appendChild(ultag);

        // complete and trash button working
        todoList.addEventListener('click', function (e) {
            var items = e.target;
            if (items.classList[0] === 'completed') {
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line-through');
            }
           else if (items.classList[0] === 'trash') {
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                var todo3 = todo2.parentElement;
                todo3.classList.add('fall');
                todo3.addEventListener('transitionend',function(){ 
                    todo3.remove();})
               
            }
        })

        //  when the add button click clear the input value 
        input.value = '';

    }
    else if(input.value===''){
        alert('Please fill the input field')
    }
})

function editWorking(e){
    var editValue = prompt('Edit the selelted item',e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

function deleteAllElement (){
    var gettingULtag = document.querySelectorAll('.todo-list-container');
    for(var i = 0; i<gettingULtag.length;i++){
        gettingULtag[i].remove();
    }
    input.value = '';

}



