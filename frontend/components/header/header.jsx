import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <div className="header">
            <Link to="/" className="header-link">
                <p>myRepertoire</p>
            </Link>
            <input type='submit' onClick={openModal} value='Login' />
        </div>
    );

    const personalGreeting = () => (
        <div className="header">
            <Link to="/" className="header-link">
                <h1>myRepertoire</h1>
            </Link>
            <div>
                <h2>Hi, {currentUser.username}</h2>
                <button onClick={logout}>Log Out</button>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;