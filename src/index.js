import './styles/reset.css';
import './styles/main.css';
import * as view from './modules/view';
import * as factories from './modules/factories';
import * as model from './modules/model';

const addProject = document.getElementById('addProject');
const addTodo = document.getElementById('addTodo');

const form = document.getElementById('form');
const submit = document.getElementById('submit');

addProject.addEventListener('click', () => {
  view.displayProjectForm();
  submit.setAttribute('data-type', 'project');
});

addTodo.addEventListener('click', () => {
  view.displayTodoForm();
  submit.setAttribute('data-type', 'todo');
});

submit.addEventListener('click', e => {
  e.preventDefault();

  const title = form.elements[0].value;
  const description = form.elements[1].value;
  const creationDate = model.getCurrentDate();
  const dueDate = form.elements[2].value;
  const priority = form.elements[3].value;
  const notes = form.elements[4].value;

  if (!title) {
    alert('The title field is mandatory');
  } else {
    if (submit.getAttribute('data-type') === 'project') {
      const newProject = factories.projectFactory(
        1, // temp hardcoded id
        title,
        description,
        creationDate,
        dueDate
      );
      console.log(newProject.getProjectData());
    } else {
      const newTodo = factories.toDoFactorty(
        1, // temp hardcoded id
        title,
        description,
        creationDate,
        dueDate,
        priority,
        notes
      );
      console.log(newTodo.getTodoData());
    }
    form.reset();
    view.resetFormDisplay();
  }
});
