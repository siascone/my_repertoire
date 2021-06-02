import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <div className="header">
            <Link to="/" className="header-link">
                <p>myRepertoire</p>
            </Link>
            <input type='submit' className='header-session-button' onClick={openModal} value='Login' />
        </div>
    );

    const personalGreeting = () => (
        <div className="header-logged-in">
            <Link to="/" className="header-link">
                <h1>myRepertoire</h1>
            </Link>
            <div className='header-greeting'>
                <h2>Hi, {currentUser.fname}</h2>
                <button className='header-session-button' onClick={logout}>Log Out</button>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;