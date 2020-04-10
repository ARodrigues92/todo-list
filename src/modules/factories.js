const projectFactory = (iId, iTitle, iDescription, iCreationDate, iDueDate) => {
  // Private Data
  const toDoItems = [];
  const id = iId;
  let title = iTitle;
  let description = iDescription;
  const creationDate = iCreationDate;
  let dueDate = iDueDate;

  // Public Methods
  const addTask = item => {
    toDoItems.push(item);
  };

  const removeTask = item => {
    toDoItems.splice(item, 1);
  };

  const getProjectData = () => {
    return [id, title, description, creationDate, dueDate];
  };

  const setProjectData = (newTitle, newDescription, newDueDate) => {
    title = newTitle;
    description = newDescription;
    dueDate = newDueDate;
  };

  const getToDos = () => {
    return toDoItems;
  };

  return { addTask, removeTask, getProjectData, setProjectData, getToDos };
};

const toDoFactorty = (
  iId,
  iTitle,
  iDescription,
  iCreationDate,
  iDueDate,
  iPriority,
  iNotes,
  iComplete = false
) => {
  // Private Data
  const id = iId;
  let title = iTitle;
  let description = iDescription;
  const creationDate = iCreationDate;
  let dueDate = iDueDate;
  let priority = iPriority;
  let notes = iNotes;
  let complete = iComplete;

  // Public Methods
  const getData = () => {
    return [
      id,
      title,
      description,
      creationDate,
      dueDate,
      priority,
      notes,
      complete,
    ];
  };

  const setData = (
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

  return { getData, setData, setCompletion };
};

export { projectFactory, toDoFactorty };
