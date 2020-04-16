const displayArea = document.getElementById('display-area');

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

  if (type === 'toDo') {
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

const createButton = (text, id) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.setAttribute('id', id);

  return button;
};

export { resetViewArea, clearForm, displayForm, createButton };
