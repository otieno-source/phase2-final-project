import React from "react";
import ParentSignupToggle from "./HandlePSignupClick"; 
import ParentLoginToggle from "./HandlePLoginClick";

function ParentsNav() {
    

    return (
        <div className="parentsnav">
            <ParentSignupToggle/>
            <h3>Or</h3>
            <ParentLoginToggle/>
        </div>
    );
}

export default ParentsNav;




// import React, { useState } from "react";
// import ParentsSignupForm from "./ParentSignup"; 
// import ParentLogin from "./ParentLogin";

// function ParentsNav() {
//     const [showSignupForm, setShowSignupForm] = useState(false);

//     const handleClick = (e) => {
//         e.preventDefault(); // Prevent the default anchor behavior
//         setShowSignupForm(true); // Show the form when the link is clicked
//     };

//     const [showParentLogin, setShowParentLogin] = useState(false);

//     const handleLoginClick = (event)=>{
//         event.preventDefault();
//         setShowParentLogin(true);
//     };

    

//     return (
//         <div>
//             <h1>For Parents</h1>
//             <a href="./ParentSignup" onClick={handleClick}>Signup</a>
//             {showSignupForm && <ParentsSignupForm />} {/* Conditionally render the ParentSignup */}
//             <a href="./ParentLogin" onClick={handleLoginClick}>LogIn</a>
//             {showParentLogin && <ParentLogin/>}
//         </div>
//     );
// }

// export default ParentsNav;