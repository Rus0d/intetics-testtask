import React from 'react';

import './TodoListItem.css';

function TodoListItem({index, toDoItem, deleteTodo, editTodoItem}) {
  return (
    <li className="todo-list-item list-group-item list-body">
      <div className="row">
        <div className="col-1 text-center">{index + 1}</div>
        <div className="col-4 edit-btn text-overflow" onClick={() => editTodoItem(toDoItem.id)}>
          <i className="mail-icon"></i>
          {toDoItem.name}
        </div>
        <div className="col-6 text-overflow">{toDoItem.description}</div>
        <div className="col-1 text-center">
          <div className="delete-icon" onClick={() => deleteTodo(toDoItem.id)}></div>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;