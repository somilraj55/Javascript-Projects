let input = document.querySelector('input');
let btn = document.querySelector('button');
let todoList = document.querySelector('#todoList');


btn.addEventListener('click', () => {
    console.log(input.value);
    if (input.value === "") {
        console.log("Please Enter daba");
        
    }
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = input.value;
    li.append(span);
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    todoList.append(li);
    input.value = "";
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.id = "deleteBtn";
    li.append(deleteBtn);
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove();
    });
    let edit = document.createElement('button');
    edit.textContent = "Edit";
    edit.classList.add("editBtn");
    li.append(edit);
    edit.addEventListener('click', () => {
        if(edit.textContent === "Edit"){
            input.value = span.textContent;
            edit.textContent = "Save";
            edit.style.backgroundColor = "Blue";
        }else{
            span.textContent = input.value;
            edit.textContent = "Edit";
        }
    });
});