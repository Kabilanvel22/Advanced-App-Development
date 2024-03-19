import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSignup = () => {
    const nav = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        adminCode: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.username.trim()) {
            validationErrors.username = "Username is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is not valid";
        }

        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password should be at least 6 characters";
        }

        if (!formData.adminCode.trim()) {
            validationErrors.adminCode = "Admin Code is required";
        } else if (formData.adminCode.length !== 6) {
            validationErrors.adminCode = "Admin Code should be 6 characters";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Proceed with signup logic
            console.log('Form submitted:', formData);
            toast.success("Registration Successful!");
            //nav("/admin/login");
        }
    };

    return (
        <div className="container mx-auto p-8 w-80 py-28">
            <h1 className="text-2xl font-bold mb-4">Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Admin Code</label>
                    <input
                        type="text"
                        name="adminCode"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.adminCode}
                        onChange={handleChange}
                        required
                    />
                    {errors.adminCode && <p className="text-red-500 text-sm">{errors.adminCode}</p>}
                </div>
                <Link to="/admin/login"><button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Signup
                </button></Link>
                <p className='mt-5'>Already Have Account ? <Link to="/admin/login">SignIn</Link> </p>
            </form>
        </div>
    );
};

export default AdminSignup;
