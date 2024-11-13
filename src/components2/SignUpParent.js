import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpParent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // work on it later
  };

  const handleNotToday = () => {
    navigate("/"); // Route back to the main App.js
  };

  return (
    <div className="signup-parent">
      <h2>Create Parent Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Telephone Number" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleNotToday}>Not Today</button>
    </div>
  );
};

export default SignUpParent;