import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminCode, setAdminCode] = useState('');
    const [errors, setErrors] = useState({});

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAdminCodeChange = (e) => {
        setAdminCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
    
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
        
        if (!adminCode.trim()) {
            validationErrors.adminCode = "Admin Code is required";
        } else if (adminCode.length !== 6) {
            validationErrors.adminCode = "Admin Code should be 6 characters";
        }
    
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
            toast.success("Logged in successfully");
            //nav("/addloan");
        }
    };

    return (
        <div className="container mx-auto p-8 w-80 py-28">
            <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Admin Code</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={adminCode}
                        onChange={handleAdminCodeChange}
                        required
                    />
                    {errors.adminCode && <p className="text-red-500 text-sm">{errors.adminCode}</p>}
                </div>
                <Link to="/admin/addloan"><button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Login
                </button></Link>
                <p className='mt-5'>Don't Have An Account ? <Link to="/admin/register"> SignUp</Link></p>
            </form>
        </div>
    );
};

export default Login;
