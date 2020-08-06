import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem'

function TodoList({toDoList, deleteTodoItem, editTodoItem}) {
  return (
    <div className="todo-list">
      <div className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-1 text-center">#</div>
              <div className="col-4">Name</div>
              <div className="col-6">Description</div>
              <div className="col-1 text-center">Delete</div>
            </div>
          </li>
          {
            toDoList.map((listItem, index) => {
              return <TodoListItem
                key={listItem.id}
                index={index}
                toDoItem={listItem}
                deleteTodo={deleteTodoItem}
                editTodoItem={editTodoItem}
              />
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default TodoList;