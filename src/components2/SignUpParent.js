import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpParent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here. i want parents details to go to a db.json file.
  };

  const handleNotToday = () => {
    navigate("/");
  };

  return (
    <div className="signup-parent">
      <h2>Create Parent Account</h2>
      <button onClick={handleNotToday}>Not Today</button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Telephone Number" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpParent;