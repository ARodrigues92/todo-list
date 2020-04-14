const displayArea = document.getElementById('display-area');

const hide = element => {
  element.classList.add('display-none');
};

const show = element => {
  element.classList.remove('display-none');
};

const resetViewArea = () => {
  displayArea.innerHTML = '';
};

const setAttributes = (element, attributes) => {
  const keys = Object.keys(attributes);

  keys.forEach(key => {
    element.setAttribute(key, attributes[key]);
  });
};

const createInputBlock = (title, type, innerText, extraAttributes) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('form-block');
  const label = document.createElement('label');
  label.setAttribute('for', title);
  label.innerText = innerText;
  const input = document.createElement('input');
  setAttributes(input, { type, id: title, name: title });

  if (extraAttributes) {
    setAttributes(input, extraAttributes);
  }

  newDiv.append(label, input);
  return newDiv;
};

const clearForm = () => {
  const formDiv = document.getElementById('form-container');
  formDiv.innerHTML = '';
};

const displayForm = type => {
  const formDiv = document.getElementById('form-container');
  clearForm();
  const form = document.createElement('form');
  form.setAttribute('id', 'form');

  form.append(createInputBlock('title', 'text', '*Title:'));
  form.append(createInputBlock('description', 'text', 'Description:'));
  form.append(createInputBlock('due-date', 'date', 'Due date:'));

  if (type === 'todo') {
    form.append(
      createInputBlock('priority', 'number', 'Priority:', {
        min: 1,
        max: 3,
      })
    );
    const newDiv = document.createElement('div');
    newDiv.classList.add('form-block');
    const label = document.createElement('label');
    label.setAttribute('for', 'notes');
    label.innerText = 'Notes: ';
    const textarea = document.createElement('textarea');
    setAttributes(textarea, { id: 'notes', name: 'notes' });
    newDiv.append(label, textarea);
    form.append(newDiv);
  }

  const submit = document.createElement('input');
  setAttributes(submit, { type: 'submit', id: 'submit', value: 'Submit' });
  form.append(submit);
  formDiv.append(form);
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
  resetViewArea,
  setAttributes,
  clearForm,
  displayForm,
  expandToDo,
  renderToDo,
  renderProject,
};
