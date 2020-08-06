import React, {useState, useEffect} from 'react';

import './Modal.css';

const Modal = ({config, close, save}) => {
  let className = config.active ? ' show' : '';
  const [listItemName, setListItemName] = useState('');
  const [listItemDescription, setListItemDescription] = useState('');

  useEffect(() => {
    setListItemName(config.listItem.name);
    setListItemDescription(config.listItem.description);
  }, [config]);

  function onNameChange(e) {
    setListItemName(e.target.value);
  }

  function onDescriptionChange(e) {
    setListItemDescription(e.target.value);
  }

  return (
    <div className={"modal fade" + className} tabIndex="-1">
      <div className="modal-backdrop show" onClick={close}></div>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{config.title}</h5>
            <button type="button" className="close" aria-label="Close" onClick={close}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <label htmlFor="nameInput">Name:</label>
            <div className="input-group mb-3">
              <input
                type="text"
                value={listItemName}
                onChange={onNameChange}
                className="form-control"
                id="nameInput"
                aria-label="nameInput"
                aria-describedby="nameInput" />
            </div>
            <label htmlFor="descriptionInput">Description:</label>
            <div className="input-group mb-3">
              <textarea
                type="text"
                rows="3"
                value={listItemDescription}
                onChange={onDescriptionChange}
                className="form-control"
                id="descriptionInput"
                aria-label="descriptionInput"
                aria-describedby="descriptionInput" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
            <button
              disabled={!listItemName || !listItemDescription}
              type="button"
              className="btn btn-primary"
              onClick={() => save({id: config.listItem.id, name: listItemName, description: listItemDescription})}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;