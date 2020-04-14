const projectFactory = (iTitle, iDescription, iCreationDate, iDueDate) => {
  // Private Data
  const toDoItems = [];
  let title = iTitle;
  let description = iDescription;
  const creationDate = iCreationDate;
  let dueDate = iDueDate;

  // Public Methods
  const addToDo = item => {
    toDoItems.push(item);
  };

  const removeToDo = item => {
    toDoItems.splice(item, 1);
  };

  const getProjectData = () => {
    return { title, description, creationDate, dueDate, toDoItems };
  };

  const setProjectData = (newTitle, newDescription, newDueDate) => {
    title = newTitle;
    description = newDescription;
    dueDate = newDueDate;
  };

  return { addToDo, removeToDo, getProjectData, setProjectData };
};

const toDoFactorty = (
  iTitle,
  iDescription,
  iCreationDate,
  iDueDate,
  iPriority,
  iNotes,
  iComplete = false
) => {
  // Private Data
  let title = iTitle;
  let description = iDescription;
  const creationDate = iCreationDate;
  let dueDate = iDueDate;
  let priority = iPriority;
  let notes = iNotes;
  let complete = iComplete;

  // Public Methods
  const getToDoData = () => {
    return {
      title,
      description,
      creationDate,
      dueDate,
      priority,
      notes,
      complete,
    };
  };

  const setToDoData = (
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newNotes
  ) => {
    title = newTitle;
    description = newDescription;
    dueDate = newDueDate;
    priority = newPriority;
    notes = newNotes;
  };

  const setCompletion = state => {
    complete = state;
  };

  return { getToDoData, setToDoData, setCompletion };
};

export { projectFactory, toDoFactorty };
