import React from 'react';
import './Header.css';
import Star from './Logos/Star';

const Header = ({jobCount}) => {
  return(
    <div id = 'header'>
      <Star/>
      <div id = 'header-text'>
        <h3 id = 'header-title'>WISHLIST</h3>
        <h4 id = 'header-jobs'> {`${jobCount} JOBS`}</h4>
      </div>
    </div>
  );
}

export default Header;
