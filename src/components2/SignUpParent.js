import React from 'react';


const SignUpParent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
  };

  return (
    <div className="signup-parent">
      <h2>Sign Up as a Parent</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Telephone Number" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpParent;