import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <div className="header">
            <div className='header-left'>
                {/* Other Navigations Coming */}
            </div>
            <div className='header-center'>
                <Link to="/" className="header-link">
                    <img className="header-logo" src={window.logoCircle} alt="" />
                    <p>myRepertoire</p>
                </Link>
            </div>
            <div className='header-right'>
                <Link className='login-button' to="/login">Login</Link>
                <Link className='signup-button' to="/signup">Sign Up!</Link>
            </div>
            
        </div>
    );

    const personalGreeting = () => (
        <div className="header">
            <div className='header-left'>
                {/* Other Navigations Coming */}
            </div>
            <div className='header-center'>
                <Link to="/" className="header-link">
                    <img className="header-logo" src={window.logoCircle} alt="" />
                    <h1>myRepertoire</h1>
                </Link>
            </div>
            <div className='header-right'>
                <div className='user-dropdown'>
                    {currentUser.username}
                </div>
                <button className='header-session-button' onClick={logout}>Log Out</button>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;