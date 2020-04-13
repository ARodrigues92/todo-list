const buttonsContainer = document.getElementById('buttons-container');
const formContainer = document.getElementById('form-container');
const todoInputs = document.getElementById('todo-inputs');

const displayArea = document.getElementById('display-area');

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

const resetFormDisplay = () => {
  hide(todoInputs);
  hide(formContainer);
  show(buttonsContainer);
};

const resetViewArea = () => {
  displayArea.innerHTML = '';
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
  descriptionP.innerText = `Title: ${toDo.description}`;
  creationP.innnerText = `Title: ${toDo.creationDate}`;
  dueP.innerText = `Due date: ${toDo.dueDate}`;
  priorityP.innerText = `Due date: ${toDo.dueDate}`;
  notesP.innerText = `Notes: ${toDo.notes}`;

  newDiv.append(titleP, descriptionP, creationP, dueP, priorityP, notesP);
  displayArea.append(newDiv);
};

const renderToDo = toDo => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');

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

  newDiv.append(titleP, dueP, completeP);
  displayArea.append(newDiv);

  return newDiv;
};

const renderProject = project => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');

  const titleP = document.createElement('p');
  const descriptionP = document.createElement('p');
  const creationP = document.createElement('p');
  const dueP = document.createElement('p');

  titleP.innerText = `Title: ${project.title}`;
  descriptionP.innerText = `Description: ${project.description}`;
  creationP.innerText = `Creation date: ${project.creationDate}`;
  dueP.innerText = `Due date: ${project.dueDate}`;

  newDiv.append(titleP, descriptionP, creationP, dueP);
  displayArea.append(newDiv);

  return newDiv;
};

export {
  hide,
  show,
  displayProjectForm,
  displayTodoForm,
  resetFormDisplay,
  resetViewArea,
  expandToDo,
  renderToDo,
  renderProject,
};
