import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';// Import the CSS for toastify
import '../assets/css/login.css';
import { useDispatch } from 'react-redux';
import { login } from '../components/Redux/Userslice';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Signin = () => {
    const [errors, setErrors] = useState({});
    const nav = useNavigate();
    const dispatch = useDispatch();
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {}; 
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      if (!email.trim()) {
          validationErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          validationErrors.email = "Email is not valid";
      }
      if (!password.trim()) {
          validationErrors.password = "Password is required";
      } else if (password.length < 6) {
          validationErrors.password = "Password should be at least 6 characters";
      }
  
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
          dispatch(login(email));
          toast.success("Login successful!");
          nav("/");
      }
  }
  
    return (
      <>
      <Navbar/>
        <div className="parent clearfix py-20">
            <div className="bg-illustration">
                <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo" />
                <div className="burger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="login">
                <div className="container">
                    <h1>Login to access to<br />your account</h1>
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <input type="email" placeholder="E-mail Address" />
                            {errors.email && <span className="error">{errors.email}</span>}
                            <input type="password" placeholder="Password" />
                            {errors.password && <span className="error">{errors.password}</span>}
                            <div className="remember-form">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <div className="forget-pass">
                                <a href="#">Forgot Password ?</a>
                            </div>
                            <button type="submit">LOG-IN</button>
                            <span className="forget-pas">New User? <Link to="/register"><b>SIGNUP</b></Link>  </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <ToastContainer />
        </>
    );
};

export default Signin;
