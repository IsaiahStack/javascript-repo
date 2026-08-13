

const todoList = [];

renderTodoList();

function addTodo() {


  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}

function renderTodoList() {
  
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject // this is called destructuring gets the object name and puts it in a variable called name, short for this: const name = todoObject.name;.
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
        "
        class="delete-todo-button"
      >Delete</button>
    `;
    todoListHTML += html;
  })

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

}