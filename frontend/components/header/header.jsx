import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="header">
            <Link to="/" className="header-link">
                <h1>Bench BnB</h1>
            </Link>
            <div>
                <Link to="/login">Login</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link>
            </div>
        </div>
    );

    const personalGreeting = () => (
        <hgroup>
            <Link to="/" className="header-link">
                <h1>Bench BnB</h1>
            </Link>
            <div>
                <h2>Hi, {currentUser.username}</h2>
                <button onClick={logout}>Log Out</button>
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;