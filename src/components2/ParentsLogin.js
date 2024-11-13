import React from "react";

function ParentsLoginForm() {
  return (
    <div className="parentslogin">
      <h3>LogIn</h3>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default ParentsLoginForm;
