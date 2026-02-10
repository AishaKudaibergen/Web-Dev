const input = document.getElementById('todo_input');
const addBtn = document.getElementById('adding_btn');
const todoList = document.getElementById('todo_list');

function addTask() {
    const taskValue = input.value.trim();
    
    if (taskValue === "") return;

    const li = document.createElement('li');
    li.className = 'todo_item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed');
    });

    const span = document.createElement('span');
    span.className = 'todo_text';
    span.textContent = taskValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑';
    deleteBtn.className = 'deleting_btn';
    deleteBtn.onclick = () => {
        todoList.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);// 3 внутри одного блока

    todoList.appendChild(li);

    input.value = "";
}

addBtn.addEventListener('click', addTask);


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') 
        addTask();
});