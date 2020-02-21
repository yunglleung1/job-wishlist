import React from 'react';
import './TrashCan.css';

const TrashCan = ({setToggleRemoveJob, job, setCurrJob}) => {
// const TrashCan = ({jobs, setJobs, currJob, setToggleRemoveJob}) => {
  return(
    <svg
      width='20px'
      viewBox='0 0 512 512'
      className = 'trash'
      onClick = {() => {
        setToggleRemoveJob(true);
        setCurrJob(job);
      }}
    >
      <path className='trash-path1' d='M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320' />
      <line className='trash-line1' x1='80' y1='112' x2='432' y2='112'/>
      <path className='trash-path2' d='M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40' />
      <line className='trash-line2' x1='256' y1='176' x2='256' y2='400' />
      <line className='trash-line3' x1='184' y1='176' x2='192' y2='400' />
      <line className='trash-line4' x1='328' y1='176' x2='320' y2='400' />
      </svg>
  );
};

export default TrashCan;
