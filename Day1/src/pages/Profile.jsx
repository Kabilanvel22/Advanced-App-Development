import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Profile = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastName: '',
        mobileNumber: '',
        altMobileNumber: '',
        address: '',
        pinCode: '',
    });
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <>
        <Navbar/>
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md py-28">
            {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="grid-email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email"
                                type="email"
                                placeholder="********@*****.**"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Mobile Number
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="tel"
                                placeholder="95432....."
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Alternate Mobile Number
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="tel"
                                placeholder="953...."
                                name="altMobileNumber"
                                value={formData.altMobileNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="grid-message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Address
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Address..."
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="grid-message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Pin Code
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="pin code..."
                                name="pinCode"
                                value={formData.pinCode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <button
                            className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5"
                            type="submit"
                        >
                            Save
                        </button>
                        <button
                            className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5"
                            type="button"
                            onClick={handleEdit}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt="Profile"
                    className="w-24 h-24 rounded-full"
                  />
                  <p className="text-lg font-semibold">{formData.firstname} {formData.lastName}</p>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  <p className="font-bold">First Name:</p>
                  <p>{formData.firstname}</p>
                  <p className="font-bold">Last Name:</p>
                  <p>{formData.lastName}</p>
                  <p className="font-bold">Email:</p>
                  <p>{formData.email}</p>
                  <p className="font-bold">Mobile Number:</p>
                  <p>{formData.mobileNumber}</p>
                  <p className="font-bold">Alternate Mobile Number:</p>
                  <p>{formData.altMobileNumber}</p>
                  <p className="font-bold">Address:</p>
                  <p>{formData.address}</p>
                  <p className="font-bold">Pin Code:</p>
                  <p>{formData.pinCode}</p>
                </div>
                <button
                  className="block w-full bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5"
                  type="button"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>
              

            )}
        </div>
        <Footer/>
        </>
    );
};

export default Profile;
