import React from 'react';
import './AddButton.css';

const AddButton = ({setToggleAddJob}) => {
  return(
    <div
      id = 'add-button'
      onClick = {() => setToggleAddJob(true)}
    >+</div>
  );
}

export default AddButton;
