import * as React from 'react';

const DeleteButton = ({onClick}) => (
  <button className="line__item delete-btn" onClick={onClick}>
      &times;
  </button>
);

export default DeleteButton;