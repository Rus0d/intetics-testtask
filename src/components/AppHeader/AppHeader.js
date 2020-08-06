import React from 'react';

import './AppHeader.css';

const AppHeader = ({itemQty, addTodoItem}) => {
    return (
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="mb-0">Task list / {itemQty} items</h1>
            </div>
            <div className="col">
              <div className="create-btn" onClick={addTodoItem}>
                <p className="btn-text">Create new</p>
                <div className="btn-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
};

export default AppHeader;