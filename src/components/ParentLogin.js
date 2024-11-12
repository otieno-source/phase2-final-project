import React from "react";
import './parentlogin.css'

function ParentLogin(){
    return(
        <div className="parentlogin">
        <h3>Parent's Login</h3>
        <form action="#" method="POST" enctype="multipart/form-data">

            <label for="parent-name">Name:</label>
            <input type="text" id="parent-name" name="name" required/>

            <label for="password">Create Password:</label>
            <input type="password" id="password" name="password" required/>

            <button type="submit">Sign Up</button>

        </form>
        </div>
    )
}

export default ParentLogin;