import './styles/reset.css';
import './styles/main.css';
import * as view from './modules/view';
import * as factories from './modules/factories';
import * as model from './modules/model';

const addProject = document.getElementById('add-project');
const addToDo = document.getElementById('add-todo');

const renderProjects = () => {
  view.resetViewArea();
  const keys = Object.keys(localStorage);

  keys.forEach(key => {
    const object = JSON.parse(localStorage.getItem(key));
    const projectDiv = view.renderProject(object);

    projectDiv.addEventListener('click', () => {
      view.resetViewArea();
      view.hide(addProject);
      view.show(addToDo);

      const toDos = object.toDoItems;

      toDos.forEach(toDo => {
        const toDoDiv = view.renderToDo(toDo);

        toDoDiv.addEventListener('click', () => {
          view.resetViewArea();
          view.expandToDo(toDo);
        });
      });
    });
  });
};

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
            title,
            description,
            creationDate,
            dueDate
          );
          model.saveObject(newProject.getProjectData());
        } else {
          // set new values for object properties
        }
      } else if (type === 'todo') {
        if (purpose === 'create') {
          const priority = form.elements[3].value;
          const notes = form.elements[4].value;

          const newTodo = factories.toDoFactorty(
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
      renderProjects();
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

renderProjects();
