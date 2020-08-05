import React, {useState} from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="mb-0">Task list / 6 items</h1>
            </div>
            <div className="col">
              <div className="create-btn">
                <p className="btn-text">Create new</p>
                <div className="btn-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="App-content">
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
              <li className="list-group-item list-body">
                <div className="row">
                  <div className="col-1 text-center">1</div>
                  <div className="col-4 edit-btn">test task</div>
                  <div className="col-6">Description of the test task</div>
                  <div className="col-1 text-center">
                    <div className="delete-icon"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <div class="modal fade show" tabindex="-1" aria-hidden="true">
        <div className="modal-backdrop show"></div>
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
