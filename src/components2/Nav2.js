import React from 'react';
import { Link } from 'react-router-dom';

const Nav2 = () => {
  return (
    <nav className="nav2">
      <div className='ontopnav'>
        <Link to="/search-tutors" className='searchbtn'>Search For Tutors</Link>
      </div>
      
      <div className='parentsnav'>
        <Link to="/create-account">Create Parent's Account</Link><br></br>
        <h3>||</h3><br></br>
        <Link to="/login">Login</Link> {/* This link now routes to ParentsLoginForm */}
      </div>
    </nav>
  );
};

export default Nav2;