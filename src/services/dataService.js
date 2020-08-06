const idHash = 'todoid';

function getDataFromLocal() {
  return JSON.parse(localStorage.getItem('todoListData') || "[]");
}

function setDataToLocal(data) {
  localStorage.setItem('todoListData', JSON.stringify(data));
}

function generateNewId (toDoList) {
  let ids = toDoList
    .map(item => Number.parseInt(item.id.replace(idHash, ''), 10))
    .sort((a, b) => (a - b));
  for (let i = 0; i <= ids.length; i++) {
    if (ids[i] !== i) {
      return `${idHash}${i}`;
    }
  }
}

export {getDataFromLocal, setDataToLocal, generateNewId};