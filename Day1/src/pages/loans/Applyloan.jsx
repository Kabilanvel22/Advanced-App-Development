import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyLoan = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        address: '',
        pinCode: '',
        bankAccountNumber: '',
        aadharNumber: '',
        panNumber: '',
        landRegisterNumber: '',
        amount: '',
        document: '',
    });
    const [errors, setErrors] = useState({});
    const nav = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear error message when user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const formErrors = {};

        if (!formData.firstName.trim()) {
            formErrors.firstName = 'First Name is required';
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            formErrors.lastName = 'Last Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!formData.mobileNumber.trim()) {
            formErrors.mobileNumber = 'Mobile Number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            formErrors.mobileNumber = 'Mobile Number is invalid';
            isValid = false;
        }
        if (!formData.address.trim()) {
            formErrors.address = 'Address is required';
            isValid = false;
        }
        if (!formData.pinCode.trim()) {
            formErrors.pinCode = 'Pin Code is required';
            isValid = false;
        } else if (!/^\d{6}$/.test(formData.pinCode)) {
            formErrors.pinCode = 'Pin Code is invalid';
            isValid = false;
        }
        if (!formData.bankAccountNumber.trim()) {
            formErrors.bankAccountNumber = 'Account Number is required';
            isValid = false;
        } else if (!/^\d{11}$/.test(formData.bankAccountNumber)) {
            formErrors.bankAccountNumber = 'Valid Account Number is required';
            isValid = false;
        }
        if (!formData.aadharNumber.trim()) {
            formErrors.aadharNumber = 'Aadhar Number is required';
            isValid = false;
        } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
            formErrors.aadharNumber = 'Valid Aadhar Number is required';
            isValid = false;
        }
        if (!formData.panNumber.trim()) {
            formErrors.panNumber = 'PAN Number is required';
            isValid = false;
        } else if (!/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/.test(formData.panNumber)) {
            formErrors.panNumber = 'Valid PAN Number is required';
            isValid = false;
        }
        if (!formData.landRegisterNumber.trim()) {
            formErrors.landRegisterNumber = 'Land Register Number is required';
            isValid = false;
        }
        if (!formData.amount.trim()) {
            formErrors.amount = 'Amount is required';
            isValid = false;
        }

        setErrors(formErrors);

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit the form data
            console.log(formData);
            toast.success("Application submitted successfully");
            alert("Application submitted Successfully!");
            nav("/loans");
        }
    };
        return (
            <>
            <Navbar/>
            <div className="max-w-2xl mx-auto bg-white p-16 py-28">
                <h2 className="text-lg font-semibold mb-4">Apply for Loan</h2>
                <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John"
                            required
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Doe"
                            required
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="john.doe@example.com"
                            required
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="mobile_number" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile_number"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="1234567890"
                            required
                        />
                        {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Address"
                            required
                        />
                        {errors.address && <p className="text-red-500">{errors.address}</p>}
                    </div>
                    <div>
                        <label htmlFor="pin_code" className="block mb-2 text-sm font-medium text-gray-900">Pin Code</label>
                        <input
                            type="text"
                            id="pin_code"
                            name="pinCode"
                            value={formData.pinCode}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Pin Code"
                            required
                        />
                        {errors.pinCode && <p className="text-red-500">{errors.pinCode}</p>}
                    </div>
                    <div>
                        <label htmlFor="bank_account_number" className="block mb-2 text-sm font-medium text-gray-900">Bank Account Number</label>
                        <input
                            type="text"
                            id="bank_account_number"
                            name="bankAccountNumber"
                            value={formData.bankAccountNumber}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Bank Account Number"
                            required
                        />
                        {errors.bankAccountNumber && <p className="text-red-500">{errors.bankAccountNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="aadhar_number" className="block mb-2 text-sm font-medium text-gray-900">Aadhar Number</label>
                        <input
                            type="text"
                            id="aadhar_number"
                            name="aadharNumber"
                            value={formData.aadharNumber}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Aadhar Number"
                            required
                        />
                        {errors.aadharNumber && <p className="text-red-500">{errors.aadharNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="pan_number" className="block mb-2 text-sm font-medium text-gray-900">PAN Number</label>
                        <input
                            type="text"
                            id="pan_number"
                            name="panNumber"
                            value={formData.panNumber}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="PAN Number"
                            required
                        />
                        {errors.panNumber && <p className="text-red-500">{errors.panNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="land_register_number" className="block mb-2 text-sm font-medium text-gray-900">Land Register Number</label>
                        <input
                            type="text"
                            id="land_register_number"
                            name="landRegisterNumber"
                            value={formData.landRegisterNumber}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Land Register Number"
                            required
                        />
                        {errors.landRegisterNumber && <p className="text-red-500">{errors.landRegisterNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Amount"
                            required
                        />
                        {errors.amount && <p className="text-red-500">{errors.amount}</p>}
                    </div>
                    <div>
                        <label htmlFor="document" className="block mb-2 text-sm font-medium text-gray-900">Document</label>
                        <input
                            type="file"
                            id="document"
                            name="document"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.document && <p className="text-red-500">{errors.document}</p>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
            <ToastContainer/>
            </>
        );
    };
    

export default ApplyLoan;
