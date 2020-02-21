import React, {useState} from 'react';
import './AddJob.css';

const AddJob = ({setToggleAddJob}) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [color, setColor] = useState('');
  const colors = ['blue', 'pink', 'green', 'violetBlue'];

  return(
    <div id = 'add-job'>
      <div id = 'add-job-title'>Add a job</div>
      <input
        id = 'add-job-company'
        type = 'text'
        placeholder = {'Company Name'}
        onChange = {event => setCompany(event.target.value)}/>
      <input
        id = 'add-job-position'
        type = 'text'
        placeholder = {'Job Title'}
        onChange = {event => setPosition(event.target.value)}/>
      <button
        id = 'add-job-continue'
        onClick = {() => {
          setToggleAddJob(false);
          window.sessionStorage.setItem('company', company);
          window.sessionStorage.setItem('position', position);
          window.sessionStorage.setItem('color', colors[[Math.floor(Math.random() * Math.floor(4))]]);
          let timeStampInMinutes = Math.floor((Date.now()/1000) / 60);
          window.sessionStorage.setItem('timeStampInMinutes', timeStampInMinutes);
        }}
      >Continue</button>
    </div>
  );
}

export default AddJob;
