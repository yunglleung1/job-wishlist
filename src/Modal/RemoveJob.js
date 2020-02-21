import React from 'react';
import './RemoveJob.css';

const RemoveJob = ({setToggleRemoveJob, currJob, jobs, setJobs}) => {
  return(
    <div id = 'remove-job'>
      <div id = 'remove-job-title'>
        <div id = 'remove-title'>
          {`Delete ${currJob.company} ${currJob.position}`}
        </div>
      </div>
      <div id = 'remove-job-subtitle'>
        <div id = 'remove-subtitle'>
          {'Are you sure you want to delete '}
          <div id = 'remove-subtitle-nextline'>
            {'this job?'}
          </div>

        </div>
      </div>

      <div id = 'remove-buttons'>
        <button
          id = 'remove-job-delete'
          onClick = {() => {
            let jobsUpdate = jobs.filter(job => job !== currJob);
            setJobs(jobsUpdate);
            setToggleRemoveJob(false);
          }}
        >Delete</button>

        <button
          id = 'remove-job-cancel'
          onClick = {() => {
            setToggleRemoveJob(false);
          }}
        >Cancel</button>
      </div>
    </div>
  );
}

export default RemoveJob;
