// 




// Select elements from the DOM
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Event listener for the add button
addTodoBtn.addEventListener('click', addTodo);

// Event listener for pressing the Enter key
todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  // Get the trimmed input value
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = todoText;

    // Append the new item to the list
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = '';
  }
}
