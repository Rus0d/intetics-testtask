import React, {useState, useEffect} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';

import {getDataFromLocal, setDataToLocal, generateNewId} from './services/dataService';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [modalConfig, setModalConfig] = useState({
    title: '',
    active: false,
    listItem: {
      id: '',
      name: '',
      description: '',
    }
  });

  useEffect(() => {
    setToDoList(getDataFromLocal());
  }, []);

  function editItem(id) {
    const listItem = toDoList.find(item => item.id === id);
    setModalConfig({
      title: '',
      active: true,
      listItem: listItem,
    });
  }

  function addItem() {
    setModalConfig({
      title: 'New Task',
      active: true,
      listItem: {
        id: generateNewId(toDoList),
        name: '',
        description: '',
      }
    });
  }

  function modalClose() {
    setModalConfig({
      title: '',
      active: false,
      listItem: {
        id: '',
        name: '',
        description: '',
      }
    });
  }

  function saveTodoItem(listItem) {
    const newList = cloneDeep(toDoList);
    let itemIndex = newList.findIndex(item => item.id === listItem.id);
    if (~itemIndex) {
      newList[itemIndex] = listItem;
    } else {
      newList.push(listItem);
    }
    setToDoList(newList);
    setDataToLocal(newList);
    setModalConfig({
      title: '',
      active: false,
      listItem: {
        id: '',
        name: '',
        description: '',
      }
    });
  }

  function deleteTodoItem(id) {
    const newList = toDoList.filter((item) => {
        return item.id !== id
      });
    setDataToLocal(newList);
    setToDoList(newList);
  }

  return (
    <div className="App">
      <AppHeader itemQty={toDoList.length} addTodoItem={addItem} />
      <main className="App-content">
        <TodoList toDoList={toDoList} deleteTodoItem={deleteTodoItem} editTodoItem={editItem}/>
      </main>
      <Modal
        config={modalConfig}
        close={modalClose}
        save={saveTodoItem}
      />
    </div>
  );
}

export default App;
