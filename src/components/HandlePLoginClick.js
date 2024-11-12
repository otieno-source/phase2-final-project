import React, { useState } from "react";
import ParentLogin from "./ParentLogin";

function ParentLoginToggle() {
  const [showParentLogin, setShowParentLogin] = useState(false);

  const handleLoginClick = () => {
    setShowParentLogin(prev => !prev); // Toggle login form visibility
  };

  return (
    <div>
      <button onClick={handleLoginClick}>
        {showParentLogin ? "Hide Login" : "Log In"}
      </button>
      {showParentLogin && <ParentLogin />}
    </div>
  );
}

export default ParentLoginToggle;



// import React, { useState } from "react";
// import React, { useState } from "react";
// import ParentLogin from "./ParentLogin"

// function HandleParentLoginClick() {
//   const [showParentLogin, setShowParentLogin] = useState(false);

//   const handleLoginClick = (event) => {
//     event.preventDefault();
//     setShowParentLogin((prev) => !prev); // Toggle login form visibility
//   };
//   return (
//     <div>
//       <button onClick={handleLoginClick}>
//         {showParentLogin ? "Hide Login" : "LogIn"}
//       </button>
//       {showParentLogin && <ParentLogin />}
//     </div>
//   );
// }

// export default HandleParentLoginClick;
