import React from 'react';
import { Link } from 'react-router-dom';


const Nav1 = () => {
  return (
    <nav className="nav1">
      <Link to="/become-a-tutor" className='becometutor'>Become A Tutor & Earn</Link>
    </nav>
  );
};

export default Nav1;