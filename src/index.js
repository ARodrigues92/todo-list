import './styles/reset.css';
import './styles/main.css';
import * as view from './modules/view';
import * as factories from './modules/factories';
import * as model from './modules/model';

const buttonsDiv = document.getElementById('buttons-container');

const submitCreationForm = type => {
  const submit = document.getElementById('submit');
  const form = document.getElementById('form');

  submit.addEventListener('click', e => {
    e.preventDefault();

    const title = form.elements[0].value;
    const description = form.elements[1].value;
    const creationDate = model.getCurrentDate();
    const dueDate = form.elements[2].value;

    if (!title) {
      // eslint-disable-next-line no-alert
      alert('The title field is mandatory');
    } else {
      if (type === 'project') {
        const newProject = factories.projectFactory(
          title,
          description,
          creationDate,
          dueDate
        );
        model.saveObject(newProject.getProjectData());
        // eslint-disable-next-line no-use-before-define
        renderProjects();
      } else if (type === 'toDo') {
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

        const projectID = document
          .getElementById('add')
          .getAttribute('data-project');
        const project = JSON.parse(localStorage.getItem(projectID));
        project.toDoItems.push(newTodo.getToDoData());
        localStorage.setItem(projectID, JSON.stringify(project));
        // eslint-disable-next-line no-use-before-define
        renderToDos(projectID, project);
      }
      view.clearForm();
    }
  });
};

const renderToDos = (key, object) => {
  view.resetViewArea();
  buttonsDiv.innerHTML = '';

  const toDoBackButton = view.createButton('Back', 'back');

  toDoBackButton.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    renderProjects();
  });

  const addButton = view.createButton('Add to-do', 'add');
  addButton.setAttribute('data-project', key);

  addButton.addEventListener('click', () => {
    view.displayForm('toDo');
    submitCreationForm('toDo');
  });

  buttonsDiv.append(toDoBackButton, addButton);

  const toDos = object.toDoItems;

  toDos.forEach(toDo => {
    const toDoDiv = view.renderToDo(toDo);

    toDoDiv.addEventListener('click', () => {
      buttonsDiv.innerHTML = '';
      const expandBackButton = view.createButton('Back', 'back');

      expandBackButton.addEventListener('click', () => {
        renderToDos(key, object);
      });

      buttonsDiv.append(expandBackButton);

      view.resetViewArea();
      view.expandToDo(toDo);
    });
  });
};

const renderProjects = () => {
  view.resetViewArea();
  buttonsDiv.innerHTML = '';

  const addButton = view.createButton('Add project', 'add');

  addButton.addEventListener('click', () => {
    view.displayForm('project');
    submitCreationForm('project');
  });

  buttonsDiv.append(addButton);

  const keys = Object.keys(localStorage);

  keys.forEach(key => {
    const object = JSON.parse(localStorage.getItem(key));
    const projectDiv = view.renderProject(object);

    projectDiv.addEventListener('click', () => {
      renderToDos(key, object);
    });
  });
};

renderProjects();
