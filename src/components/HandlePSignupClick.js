
import React, { useState } from "react"; // Added useState import
import ParentsSignupForm from "./ParentSignup"; // Ensure this import path is correct

function ParentSignupToggle() { // Possible name change to ParentSignupHandler
    const [showSignupForm, setShowSignupForm] = useState(false);
    
    const handleClick = () => {
        setShowSignupForm(prev => !prev); // Toggle signup form visibility
    };

    return (
        <div>
            <h1>For Parents</h1>
            <button onClick={handleClick}>
                {showSignupForm ? "Hide Signup" : "Signup"}
            </button>
            {showSignupForm && <ParentsSignupForm />}
        </div>
    );
}

export default ParentSignupToggle;

// import React from "react";
// import React, { useState } from "react";
// import ParentsSignupForm from "./ParentSignup";


// function HandleParentSignupClick() {
//     const [showSignupForm, setShowSignupForm] = useState(false);
    
//     const handleClick = (e) => {
//         e.preventDefault();
//         setShowSignupForm(prev => !prev); // Toggle signup form visibility
//     };

//     return (
//         <div>
//             <h1>For Parents</h1>
//             <button onClick={handleClick}>
//                 {showSignupForm ? "Hide Signup" : "Signup"}
//             </button>
//             {showSignupForm && <ParentsSignupForm />}
//         </div>
//     );
// }
// export default HandleParentSignupClick;