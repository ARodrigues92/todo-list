const getCurrentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  // Matches format of form by adding 0 before single digits
  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

const saveObject = object => {
  const id = localStorage.length;
  localStorage.setItem(id, JSON.stringify(object));
};

export { getCurrentDate, saveObject };
