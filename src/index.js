import './styles/reset.css';
import './styles/main.css';
import * as view from './modules/view';
import * as factories from './modules/factories';
import * as model from './modules/model';

const buttonsDiv = document.getElementById('buttons-container');
const displayArea = document.getElementById('display-area');

const submitForm = (purpose, type, key, project, toDo, toDoIndex) => {
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
        if (purpose === 'create') {
          const newProject = factories.projectFactory(
            title,
            description,
            creationDate,
            dueDate
          );
          model.saveObject(newProject.getProjectData());
          // eslint-disable-next-line no-use-before-define
          renderProjects();
        } else if (purpose === 'edit') {
          project.title = title;
          project.description = description;
          project.dueDate = dueDate;

          localStorage.setItem(key, JSON.stringify(project));
          renderProjects();
        }
      } else if (type === 'toDo') {
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

          const projectID = document
            .getElementById('add')
            .getAttribute('data-project');
          const project = JSON.parse(localStorage.getItem(projectID));
          project.toDoItems.push(newTodo.getToDoData());
          localStorage.setItem(projectID, JSON.stringify(project));
          // eslint-disable-next-line no-use-before-define
          renderToDos(projectID, project);
        } else if (purpose === 'edit') {
          const priority = form.elements[3].value;
          const notes = form.elements[4].value;

          toDo.title = title;
          toDo.description = description;
          toDo.dueDate = dueDate;
          toDo.priority = priority;
          toDo.notes = notes;

          project.toDoItems[toDoIndex] = toDo;

          localStorage.setItem(key, JSON.stringify(project));
          renderToDos(key, project);
        }
      }
      view.clearForm();
    }
  });
};

const expandToDo = toDo => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');

  const titleP = document.createElement('p');
  const descriptionP = document.createElement('p');
  const creationP = document.createElement('p');
  const dueP = document.createElement('p');
  const priorityP = document.createElement('p');
  const notesP = document.createElement('p');

  titleP.innerText = `Title: ${toDo.title}`;
  descriptionP.innerText = `Description: ${toDo.description}`;
  creationP.innerText = `Creation Date: ${toDo.creationDate}`;
  dueP.innerText = `Due date: ${toDo.dueDate}`;
  priorityP.innerText = `Priority: ${toDo.priority}`;
  notesP.innerText = `Notes: ${toDo.notes}`;

  newDiv.append(titleP, descriptionP, creationP, dueP, priorityP, notesP);
  displayArea.append(newDiv);
};

const renderToDo = (objectKey, project, toDo, toDoIndex) => {
  const outerDiv = document.createElement('div');
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('box');

  const titleP = document.createElement('p');
  const dueP = document.createElement('p');
  const completeP = document.createElement('p');

  titleP.innerText = `Title: ${toDo.title}`;
  dueP.innerText = `Due date: ${toDo.dueDate}`;

  if (toDo.complete) {
    completeP.innerText = 'Completed: Yes';
  } else {
    completeP.innerText = 'Completed: No';
  }

  const deleteButton = view.createButton('Delete', 'delete');

  deleteButton.addEventListener('click', () => {
    project.toDoItems.splice(toDoIndex, 1);
    localStorage.setItem(objectKey, JSON.stringify(project));
    // eslint-disable-next-line no-use-before-define
    renderToDos(objectKey, project);
  });

  const editButton = view.createButton('Edit', 'edit');

  editButton.addEventListener('click', () => {
    view.displayForm('toDo');
    submitForm('edit', 'toDo', objectKey, project, toDo, toDoIndex);
  });

  const toggleButton = view.createButton('Toggle complete', 'toggle');

  toggleButton.addEventListener('click', () => {
    toDo.complete === true ? (toDo.complete = false) : (toDo.complete = true);
    project.toDoItems[toDoIndex] = toDo;
    localStorage.setItem(objectKey, JSON.stringify(project));
    renderToDos(objectKey, project);
  });

  toDoDiv.append(titleP, dueP, completeP);

  toDoDiv.addEventListener('click', () => {
    buttonsDiv.innerHTML = '';
    const expandBackButton = view.createButton('Back', 'back');

    expandBackButton.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      renderToDos(objectKey, project);
    });

    buttonsDiv.append(expandBackButton);

    view.resetViewArea();
    expandToDo(toDo);
  });

  outerDiv.append(toDoDiv, deleteButton, editButton, toggleButton);
  displayArea.append(outerDiv);
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
    submitForm('create', 'toDo');
  });

  buttonsDiv.append(toDoBackButton, addButton);

  const toDos = object.toDoItems;

  toDos.forEach((toDo, index) => {
    renderToDo(key, object, toDo, index);
  });
};

const renderProject = (key, project) => {
  const outerDiv = document.createElement('div');
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('box');

  const titleP = document.createElement('p');
  const descriptionP = document.createElement('p');
  const creationP = document.createElement('p');
  const dueP = document.createElement('p');

  titleP.innerText = `Title: ${project.title}`;
  descriptionP.innerText = `Description: ${project.description}`;
  creationP.innerText = `Creation date: ${project.creationDate}`;
  dueP.innerText = `Due date: ${project.dueDate}`;

  projectDiv.append(titleP, descriptionP, creationP, dueP);

  projectDiv.addEventListener('click', () => {
    renderToDos(key, project);
  });

  const deleteButton = view.createButton('Delete', 'delete');

  deleteButton.addEventListener('click', () => {
    localStorage.removeItem(key);
    // eslint-disable-next-line no-use-before-define
    renderProjects();
  });

  const editButton = view.createButton('Edit', 'edit');

  editButton.addEventListener('click', () => {
    view.displayForm(project);
    submitForm('edit', 'project', key, project);
  });

  outerDiv.append(projectDiv, deleteButton, editButton);
  displayArea.append(outerDiv);
};

const renderProjects = () => {
  view.resetViewArea();
  buttonsDiv.innerHTML = '';

  const addButton = view.createButton('Add project', 'add');

  addButton.addEventListener('click', () => {
    view.displayForm('project');
    submitForm('create', 'project');
  });

  buttonsDiv.append(addButton);

  const keys = Object.keys(localStorage);

  keys.forEach(key => {
    const object = JSON.parse(localStorage.getItem(key));
    renderProject(key, object);
  });
};

renderProjects();
