const buttonsContainer = document.getElementById('buttons-container');
const formContainer = document.getElementById('form-container');
const todoInputs = document.getElementById('todo-inputs');

const hide = element => {
  element.classList.add('display-none');
};

const show = element => {
  element.classList.remove('display-none');
};

const displayProjectForm = () => {
  hide(buttonsContainer);
  show(formContainer);
};

const displayTodoForm = () => {
  hide(buttonsContainer);
  show(formContainer);
  show(todoInputs);
};

export { displayProjectForm, displayTodoForm };
