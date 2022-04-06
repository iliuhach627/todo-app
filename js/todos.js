const input = document.getElementById('input');

const todos = document.getElementById('todo_list');
const todoForm = document.getElementById('todo_form');

const addTodoBtn = document.getElementById('add_item_btn');
const completedTodosBtn = document.getElementById('completed_todo');
const progressTodosBtn = document.getElementById('progress_todo');
const removedTodosBtn = document.getElementById('removed_todo');



todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value;

    if (todoText) {
        var todoEl = createTodoEl();
        var circleEl = createCircleEl();
        var todoDescEl = createTodoDescEl();
        var removeTodoBtn = createRemoveTodoBtn();

        todoEl.appendChild(circleEl);
        todoEl.appendChild(todoDescEl);
        todoEl.appendChild(removeTodoBtn);
        todos.appendChild(todoEl);

        showInputOrButton();
        input.value = '';
        progressTodosBtn.click();

        removeTodoBtn.addEventListener('click', () => {
            if (todoEl.classList.contains('completed') || todoEl.classList.contains('removed')) {
                todoEl.classList.remove(...['completed', 'removed'])
                todoEl.classList.add('default');
            } else {
                todoEl.classList.remove(...['default', 'completed']);
                todoEl.classList.add('removed');
            }
        });
        circleEl.addEventListener('click', () => {
            todoEl.classList.remove(...['default', 'removed']);
            todoEl.classList.add('completed');
        });

        completedTodosBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (todoEl.classList.contains('default') || todoEl.classList.contains('removed')) {
                todoEl.style.display = 'none';
            } else {
                todoEl.style.display = 'flex';
            }
            addTodoBtn.parentElement.style.display = 'none';
        });

        progressTodosBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (todoEl.classList.contains('completed') || todoEl.classList.contains('removed')) {
                todoEl.style.display = 'none';
            } else {
                todoEl.style.display = 'flex';
            }
            addTodoBtn.parentElement.style.display = 'flex';
        });

        removedTodosBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (todoEl.classList.contains('default') || todoEl.classList.contains('completed')) {
                todoEl.style.display = 'none';
            } else {
                todoEl.style.display = 'flex';
            }
            addTodoBtn.parentElement.style.display = 'none';
        });
    } else {
        showInputOrButton();
        input.focus();
    }

    function createRemoveTodoBtn() {
        var removeTodoBtn = document.createElement('div');
        removeTodoBtn.id = 'todo_remove_btn';
        removeTodoBtn.classList = 'fa-solid fa-circle-xmark';
        return removeTodoBtn;
    }

    function createTodoDescEl() {
        var todoDescEl = document.createElement('div');
        todoDescEl.classList = 'todo_description';
        todoDescEl.innerText = todoText;
        return todoDescEl;
    }

    function createCircleEl() {
        var circleEl = document.createElement('div');
        circleEl.id = 'todo_complete_btn';
        circleEl.classList = 'circle';
        return circleEl;
    }

    function createTodoEl() {
        var todoEl = document.createElement('div');
        todoEl.id = 'todo_item';
        todoEl.classList = 'todo_item default';
        return todoEl;
    }
});

function showInputOrButton() {
    addTodoBtn.classList.toggle("showInput");
    input.classList.toggle('showInput');
}
// function addTodo(todoText) {
//     todos.insertAdjacentHTML("beforeEnd",
//         `<div id="todo_item" class="todo_item">
//             <div class="circle"></div>
//             <div class="todo_description">${todoText}</div>
//             <div id="todo_remove_btn" class="fa-solid fa-circle-xmark"></div>
//          </div>`);
//     input.value = '';
// }