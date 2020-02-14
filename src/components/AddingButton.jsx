import * as React from 'react';

const AddingButton = ({onClick}) => (
  <button className="add-btn select-line__add-btn" onClick={onClick}>
        +
  </button>
);

export default AddingButton;