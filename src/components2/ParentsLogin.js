import React, { useState } from "react";

function ParentsLoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // i should implement adding infor to parent db here
    console.log("Name:", name);
    console.log("Password:", password);
  };

  return (
    <div className="parentslogin">
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default ParentsLoginForm;
