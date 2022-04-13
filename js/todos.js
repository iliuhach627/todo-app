const input = document.getElementById('input');

const todos = document.getElementById('todo_list');
const todoForm = document.getElementById('todo_form');

const addTodoBtn = document.getElementById('add_item_btn');
const completedTodosBtn = document.getElementById('completed_todo');
const progressTodosBtn = document.getElementById('progress_todo');
const removedTodosBtn = document.getElementById('removed_todo');
const todoStatusText = document.getElementById('todo_status_text');


todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value;

    if (todoText) {
        var todoEl = createTodoEl();
        var completeTodoBtn = createCompleteTodoBtn();
        var todoDescEl = createTodoDescEl();
        var removeTodoBtn = createRemoveTodoBtn();

        todoEl.appendChild(completeTodoBtn);
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
            if (todoEl.lastChild) {
                todoEl.style.display = 'flex';
            }
        });
        completeTodoBtn.addEventListener('click', () => {
            todoEl.classList.remove(...['default', 'removed']);
            todoEl.classList.add('completed');
            if (todoEl.lastChild) {
                todoEl.style.display = 'flex';
            }
        });

        completedTodosBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (todoEl.classList.contains('default') || todoEl.classList.contains('removed')) {
                todoEl.style.display = 'none';
            } else {
                todoEl.style.display = 'flex';
            }
            addTodoBtn.parentElement.style.display = 'none';
            todoStatusText.innerHTML = 'Completed Todos';
        });

        progressTodosBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (todoEl.classList.contains('completed') || todoEl.classList.contains('removed')) {
                todoEl.style.display = 'none';
            } else {
                todoEl.style.display = 'flex';
            }
            addTodoBtn.parentElement.style.display = 'flex';
            todoStatusText.innerHTML = 'Today';
        });

        removedTodosBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (todoEl.classList.contains('default') || todoEl.classList.contains('completed')) {
                todoEl.style.display = 'none';
            } else {
                todoEl.style.display = 'flex';
            }
            addTodoBtn.parentElement.style.display = 'none';
            todoStatusText.innerHTML = 'Removed Todos';
        });
    } else {
        showInputOrButton();
        input.focus();
    }

    function createRemoveTodoBtn() {
        let removeTodoBtn = document.createElement('div');
        removeTodoBtn.id = 'todo_remove_btn';
        removeTodoBtn.classList = 'fa-solid fa-circle-xmark';
        return removeTodoBtn;
    }

    function createTodoDescEl() {
        let todoDescEl = document.createElement('div');
        todoDescEl.classList = 'todo_description';
        todoDescEl.innerText = todoText;
        return todoDescEl;
    }

    function createCompleteTodoBtn() {
        let completeTodoBtn = document.createElement('div');
        completeTodoBtn.id = 'todo_complete_btn';
        completeTodoBtn.classList = 'circle';
        return completeTodoBtn;
    }

    function createTodoEl() {
        let todoEl = document.createElement('div');
        todoEl.id = 'todo_item';
        todoEl.classList = 'todo_item default';
        return todoEl;
    }
});

function showInputOrButton() {
    addTodoBtn.classList.toggle("showInput");
    input.classList.toggle('showInput');
}