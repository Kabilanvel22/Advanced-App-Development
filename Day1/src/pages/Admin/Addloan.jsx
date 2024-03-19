import React, { useState } from 'react'
import Sidebar from './Sidebar';

const Addloan = () => {
    const [loanName, setLoanName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleLoanNameChange = (e) => {
        setLoanName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Loan Name:', loanName);
        console.log('Description:', description);
        console.log('Image:', image);
    };

    return (
        <>
        <div className="flex">
            <Sidebar/>
            <div className="container mx-auto p-8 w-80 py-32">
                <h1 className="text-2xl font-bold mb-4">Add Loan</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Loan Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={loanName}
                            onChange={handleLoanNameChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={description}
                            onChange={handleDescriptionChange}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Loan
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Addloan