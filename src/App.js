import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddButton from './AddButton';
import JobList from './Job/JobList';
import Modal from './Modal/Modal';
import AddJob from './Modal/AddJob';
import RemoveJob from './Modal/RemoveJob';

const App = () => {
  const [toggleAddJob, setToggleAddJob] = useState(false);
  const [toggleRemoveJob, setToggleRemoveJob] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobCount, setJobCount] = useState(0);
  const [currJob, setCurrJob] = useState({});

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  useEffect(() => {
    if(window.sessionStorage.company && window.sessionStorage.position){
      let company = window.sessionStorage.company;
      let position = window.sessionStorage.position;
      let color = window.sessionStorage.color;
      let timeStampInMinutes = window.sessionStorage.timeStampInMinutes;
      setJobs([...jobs, {company, position, color, timeStampInMinutes}])
      setJobCount(jobs.length + 1);
    }
  }, [window.sessionStorage.company, window.sessionStorage.position]);

  useEffect(() => {
    setJobCount(jobs.length);
  }, [jobs.length]);

  return (
    <div className="App">
      <Header jobCount = {jobCount}/>
      <AddButton setToggleAddJob = {setToggleAddJob}/>
      {
        toggleAddJob ?
          <Modal>
            <AddJob
              setToggleAddJob = {setToggleAddJob}
            />
          </Modal>
          :
          <React.Fragment></React.Fragment>
      }
      {
        toggleRemoveJob ?
          <Modal>
            <RemoveJob
              setToggleRemoveJob = {setToggleRemoveJob}
              currJob = {currJob}
              jobs = {jobs}
              setJobs = {setJobs}
            />
          </Modal>
          :
          <React.Fragment></React.Fragment>
      }
      <JobList jobs = {jobs} setToggleRemoveJob = {setToggleRemoveJob} setCurrJob = {setCurrJob}/>
    </div>
  );
}

export default App;
