import React from 'react';
import "../../assets/css/navbar.css";
import { Link } from 'react-router-dom';
import profileimg from '../../assets/images/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from '../../components/Redux/Userslice';

const Navbar = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = user.email !== null;
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className='header-container'>
            <h1>AgriTech</h1>
            <div className='menu-item ml-96'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/loans">Loans</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/faq">Faq</Link>
                    </li>
                </ul>
            </div>
            {isLoggedIn ? (
                <div className='dropdown'>
                    <div className="dropbtn "> <img src={profileimg} alt='Profile' className='w-10 ml-10' />
                    </div>
                    <div className="dropdown-content">
                        <Link to="/profile">Profile</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            ) : (
                <div className='dropdown'>
                    <button className="dropbtn">Login
                    </button>
                    <div className="dropdown-content">
                        <Link to="/login">User Login</Link>
                        <Link to="/admin/login">Admin Login</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
