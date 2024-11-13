import React from 'react';
import { Link } from 'react-router-dom';


const Nav2 = () => {
  return (
    <nav className="nav2">
      <h1>For Parents</h1>
      <Link to="/search-tutors">Search For Tutors</Link>
      <div>
        <Link to="/create-account">Create Account</Link><br></br>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Nav2;