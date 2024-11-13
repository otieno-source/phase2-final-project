import React from 'react';
import { Link } from 'react-router-dom';


const Nav2 = () => {
  return (
    <nav className="nav2">
      <div className='ontopnav'>
      <p>“A teacher affects eternity; he can never tell where his influence stops.”
      -Henry B. Adams</p>
      <Link to="/search-tutors" className='searchbtn'>Search For Tutors</Link>
      </div>
      
      <div className='parentsnav'>
        <h2>For Parents</h2>
        <Link to="/create-account">Create Account</Link><br></br>
        <h3>Or</h3>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Nav2;