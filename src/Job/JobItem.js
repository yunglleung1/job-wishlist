import React, {useState, useEffect} from 'react';
import './JobItem.css';
import AirbnbLogo from '../Logos/AirbnbLogo';
import GoogleLogo from '../Logos/GoogleLogo';
import FacebookLogo from '../Logos/FacebookLogo';
import PathriseLogo from '../Logos/PathriseLogo';
import UberLogo from '../Logos/UberLogo';
import GeneralLogo from '../Logos/GeneralLogo';
import TrashCan from './TrashCan';

const JobItem = ({job, setToggleRemoveJob, setCurrJob, color}) => {
  const [currTime, setCurrTime] = useState(Math.floor((Date.now()/1000) / 60));

  useEffect(() => {
    setTimeout(() => {
      let timeUpdate = Math.floor((Date.now()/1000) / 60);
      setCurrTime(timeUpdate);
    }, 1000 * 60);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let timeUpdate = Math.floor((Date.now()/1000) / 60);
      setCurrTime(timeUpdate);
    }, 1000 * 60);
  }, [currTime]);

  const getLogo = (company) => {
      switch(company){
        case 'airbnb':
          return <AirbnbLogo/>;
        case 'google':
          return <GoogleLogo/>;
        case 'facebook':
          return <FacebookLogo/>;
        case 'pathrise':
          return <PathriseLogo/>;
        case 'uber':
          return <UberLogo/>;
        default:
          return <GeneralLogo/>;
      };
  };

  return(
    <div className = {`job ${job.color}`}>
      <div className= 'company'>
        <div className = 'company-icon'>
          {getLogo(job.company.toLowerCase())}
        </div>
        <div className = 'company-text'>
          <div className = 'company-name'>{`${job.company}`}</div>
          <div className = 'company-position'>{`${job.position}`}</div>
        </div>
        <div className = 'company-trash'>
          <TrashCan setToggleRemoveJob = {setToggleRemoveJob} setCurrJob = {setCurrJob} job = {job}/>
        </div>
      </div>

      <div className='job-added'>
        <div className = 'time'>{
            `added ${currTime - job.timeStampInMinutes} minutes ago`
          }</div>
      </div>

    </div>
  );
}

export default JobItem;
