import React from 'react';
import { Link } from 'react-router-dom'

const Splashpage = function () {
    
    return (
    <div className="splash">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
    </div>
)};

export default Splashpage;