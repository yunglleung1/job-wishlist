import React from 'react';
import './JobList.css';
import JobItem from './JobItem'

const JobList = ({jobs, setToggleRemoveJob, setCurrJob}) => {
  return(
    <div className = 'job-list'>
      {jobs.map((job, idx) => <JobItem job = {job} key = {idx} setToggleRemoveJob = {setToggleRemoveJob} setCurrJob = {setCurrJob}/>)}
    </div>
  );
}

export default JobList;
