import './styles/reset.css';
import './styles/main.css';
import * as view from './modules/view';
import * as factories from './modules/factories';
import * as model from './modules/model';

// Testing data

const project1 = factories.projectFactory(
  1,
  'proj-a',
  'desc',
  model.getCurrentDate(),
  model.getCurrentDate()
);

const project2 = factories.projectFactory(
  2,
  'proj-b',
  'desc',
  model.getCurrentDate(),
  model.getCurrentDate()
);

const todo1 = factories.toDoFactorty(
  1,
  'todo-a',
  'desc',
  model.getCurrentDate(),
  model.getCurrentDate(),
  1,
  'notes'
);

const todo2 = factories.toDoFactorty(
  2,
  'todo-b',
  'desc',
  model.getCurrentDate(),
  model.getCurrentDate(),
  1,
  'notes'
);

project1.addTask(todo1);
project1.addTask(todo2);
project2.addTask(todo2);

model.projects.push(project1);
model.projects.push(project2);

// End testing data

const addProject = document.getElementById('add-project');
const addToDo = document.getElementById('add-todo');

const createSubmitEventListener = (purpose, type) => {
  const submit = document.getElementById('submit');
  const form = document.getElementById('form');

  submit.addEventListener('click', e => {
    e.preventDefault();

    const title = form.elements[0].value;
    const description = form.elements[1].value;
    const creationDate = model.getCurrentDate();
    const dueDate = form.elements[2].value;

    if (!title) {
      alert('The title field is mandatory');
    } else {
      if (type === 'project') {
        if (purpose === 'create') {
          const newProject = factories.projectFactory(
            1, // temp hardcoded id
            title,
            description,
            creationDate,
            dueDate
          );
          console.log(newProject.getProjectData());
        } else {
          // set new values for object properties
        }
      } else if (type === 'todo') {
        if (purpose === 'create') {
          const priority = form.elements[3].value;
          const notes = form.elements[4].value;

          const newTodo = factories.toDoFactorty(
            1, // temp hardcoded id
            title,
            description,
            creationDate,
            dueDate,
            priority,
            notes
          );
          console.log(newTodo.getToDoData());
        } else {
          // set new values for object properties
        }
      }
      view.clearForm();
    }
  });
};

addProject.addEventListener('click', () => {
  view.displayForm('project');
  createSubmitEventListener('create', 'project');
});

addToDo.addEventListener('click', () => {
  view.displayForm('todo');
  createSubmitEventListener('create', 'todo');
});

model.projects.forEach(project => {
  const projectDiv = view.renderProject(project.getProjectData());

  projectDiv.addEventListener('click', () => {
    view.resetViewArea();
    view.hide(addProject);
    view.show(addToDo);

    const toDos = project.getToDos();

    toDos.forEach(toDo => {
      const toDoData = toDo.getToDoData();
      const toDoDiv = view.renderToDo(toDoData);

      toDoDiv.addEventListener('click', () => {
        view.resetViewArea();
        view.expandToDo(toDoData);
      });
    });
  });
});
