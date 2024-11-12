import React from "react";
import './tutorform.css'

function TutorForm(){
    return(
        <div className="tutorform">
        <h1>Tutor's Signup Form</h1>
        <form action="#" method="POST" enctype="multipart/form-data">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required/>

            <label for="salary">Fee/Salary:</label>
            <input type="number" id="salary" name="salary" required/>

            <label for="subject">Subject:</label>
            <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="history">History</option>
                <option value="computer">Computer Science</option>
            </select>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required/>

            <label for="rating">Rating (1-5):</label>
            <input type="number" id="rating" name="rating" min="1" max="5" required/>

            <label for="picture">Upload Picture:</label>
            <input type="file" id="picture" name="picture" accept="image/*" required/>

            <button type="submit">Sign Up</button>
        </form>
    </div>
    )
}

export default TutorForm;