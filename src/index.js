import './styles/reset.css';
import './styles/main.css';
import * as view from './modules/view';

const addProject = document.getElementById('addProject');
const addTodo = document.getElementById('addTodo');

addProject.addEventListener('click', () => {
  view.displayProjectForm();
});

addTodo.addEventListener('click', () => {
  view.displayTodoForm();
});
