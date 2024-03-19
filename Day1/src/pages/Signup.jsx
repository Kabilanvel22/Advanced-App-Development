import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import '../assets/css/signup.css';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });

  const nav = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobileNumber);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long and contain at least one number, one lowercase letter, one uppercase letter, and one special character
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const errors = {};
    if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!validateMobileNumber(formData.mobileNumber)) {
      errors.mobileNumber = 'Invalid mobile number';
    }
    if (!validatePassword(formData.password)) {
      errors.password = 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, one uppercase letter, and one special character';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    if (Object.keys(errors).length === 0) {
      // Submit the form or perform other actions
      console.log('Form submitted:', formData);
      setErrors({});
      toast.success('Signup successful!');
      nav("/login");
    } else {
      setErrors(errors);
      toast.error('Enter the valid data');
    }
  };

  return (
    <>
    <Navbar/>
      <div className="parent clearfix">
        <div className="bug-illustration">
          <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo" />
          <div className="burger-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="signup">
          <div className="container">
            <h1>Signup to access to your account</h1>
            <div className="signup-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
                {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                />
                {errors.password && <span className="error">{errors.password}</span>}
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                <button type="submit">SIGN UP</button>
                <span className="forget-pas">Already Have Account? <Link to="/login"> <b>Sign In</b></Link> </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Signup;
