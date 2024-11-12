import React, { useState } from "react";
import TutorForm from "./TutorForm"; 

function ParentsNav() {
    const [showForm, setShowForm] = useState(false);

    const handleClick = (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        setShowForm(true); // Show the form when the link is clicked
    };

    return (
        <div>
            <a href="./TutorForm" onClick={handleClick}>Parent's Login</a>
            {showForm && <TutorForm />} {/* Conditionally render the TutorForm */}
        </div>
    );
}

export default ParentsNav;