import React from 'react';
import './navstyle.css'; // Make sure to import the CSS file

function Nav() {
    return (
        <div className="nav">
            <form className="nav-form">
                <select className="nav-select">
                    <option>Mathematics</option>
                    <option>English</option>
                    <option>Programming</option>
                </select>
                <button type="submit" className="nav-button">Search</button>
            </form>
            <button className="tutor-button">Become a Tutor</button>
        </div>
    );
}

export default Nav;