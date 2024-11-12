import React, { useState } from "react";
import TForminput from "./TutorForm";

function TutorFormButton() {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleFormToggle}>
        {showForm ? "No Thanks" : "Become A Tutor"}
      </button>
      {showForm && <TForminput />}
    </div>
  );
}

export default TutorFormButton;

