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
                <div className="user-icon">
                    {/* <img src={window.userIcon} alt="" /> */}
                </div>
                <div id='user-dropdown' className='user-dropdown'>
                    <div className=''>{currentUser.fname} {currentUser.lname}</div>
                    <ul className='dropdown-links'>
                        <li><Link to={`/users/${currentUser.id}`} >Profile</Link></li>
                        <button className='header-session-button' onClick={logout}>Log Out</button>
                    </ul>
                </div>
                {/* <button className='header-session-button' onClick={logout}>Log Out</button> */}
            </div>

        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;