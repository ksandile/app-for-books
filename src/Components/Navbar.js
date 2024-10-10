import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/Navbar.css'; // Import the CSS file

function Navbar() {
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/userprofile">UserProfile</Link>
        </nav>
    );
}

export default Navbar;
