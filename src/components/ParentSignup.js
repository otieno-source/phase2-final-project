import React from "react";
import './parentform.css'

function ParentsSignupForm(){
    return(
        <div className="parentssignupForm">
        <h3>Parent's Signup Form</h3>
        <form action="#" method="POST" enctype="multipart/form-data">
            <label for="parent-name">Name:</label>
            <input type="text" id="parent-name" name="name" required/>

            <label for="parent-phone">Phone Number:</label>
            <input type="tel" id="parent-phone" name="phone" required/>

            <label for="password">Create Password:</label>
            <input type="password" id="password" name="password" required/>

            <button type="submit">Sign Up</button>
        </form>
        </div>
    )
}

export default ParentsSignupForm;