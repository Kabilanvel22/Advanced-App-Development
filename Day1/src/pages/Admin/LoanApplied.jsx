import React, { useState } from 'react';
import Sidebar from './Sidebar';

const LoanApplied = () => {
    const [applications, setApplications] = useState([
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            mobileNumber: '9876543210',
            address: '123 Main St',
            pinCode: '123456',
            bankAccountNumber: '0123456789',
            aadharNumber: '123456789012',
            panNumber: 'ABCDE1234F',
            landRegisterNumber: 'LRN12345',
            amount: '100000',
            document: 'Link to document',
            status: 'Pending'
        },
        {
            id: 2,
            firstName: 'Ram',
            lastName: 'Doe',
            email: 'ram.doe@example.com',
            mobileNumber: '9876543210',
            address: '123 Main St',
            pinCode: '123456',
            bankAccountNumber: '0123456789',
            aadharNumber: '123456789012',
            panNumber: 'ABCDE1234F',
            landRegisterNumber: 'LRN12345',
            amount: '100000',
            document: 'Link to document',
            status: 'Pending'
        },
        {
            id: 3,
            firstName: 'raghul',
            lastName: 'M',
            email: 'raghul@example.com',
            mobileNumber: '9876543210',
            address: '123 Main St',
            pinCode: '123456',
            bankAccountNumber: '0123456789',
            aadharNumber: '123456789012',
            panNumber: 'ABCDE1234F',
            landRegisterNumber: 'LRN12345',
            amount: '100000',
            document: 'Link to document',
            status: 'Pending'
        },
        {
            id: 4,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            mobileNumber: '9876543210',
            address: '123 Main St',
            pinCode: '123456',
            bankAccountNumber: '0123456789',
            aadharNumber: '123456789012',
            panNumber: 'ABCDE1234F',
            landRegisterNumber: 'LRN12345',
            amount: '100000',
            document: 'Link to document',
            status: 'Pending'
        },
        {
            id: 5,
            firstName: 'ram',
            lastName: 'Doe',
            email: 'ram.doe@example.com',
            mobileNumber: '9876543210',
            address: '123 Main St',
            pinCode: '123456',
            bankAccountNumber: '0123456789',
            aadharNumber: '123456789012',
            panNumber: 'ABCDE1234F',
            landRegisterNumber: 'LRN12345',
            amount: '100000',
            document: 'Link to document',
            status: 'Pending'
        },
        {
            id: 6,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            mobileNumber: '9876543210',
            address: '123 Main St',
            pinCode: '123456',
            bankAccountNumber: '0123456789',
            aadharNumber: '123456789012',
            panNumber: 'ABCDE1234F',
            landRegisterNumber: 'LRN12345',
            amount: '100000',
            document: 'Link to document',
            status: 'Pending'
        },
        {
            id: 7,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            mobileNumber: '9876543210',
            address: '123 Main St',
            pinCode: '123456',
            bankAccountNumber: '0123456789',
            aadharNumber: '123456789012',
            panNumber: 'ABCDE1234F',
            landRegisterNumber: 'LRN12345',
            amount: '100000',
            document: 'Link to document',
            status: 'Pending'
        },
        {
            id: 8,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            mobileNumber: '9876543210',
            address: '123 Main St',
            pinCode: '123456',
            bankAccountNumber: '0123456789',
            aadharNumber: '123456789012',
            panNumber: 'ABCDE1234F',
            landRegisterNumber: 'LRN12345',
            amount: '100000',
            document: 'Link to document',
            status: 'Pending'
        },
    ]);
    
    const [editingId, setEditingId] = useState(null);
    const [updatedApplication, setUpdatedApplication] = useState({
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
        status: 'Pending'
    });

    const handleUpdate = (id) => {
        setEditingId(id);
        const applicationToUpdate = applications.find(app => app.id === id);
        setUpdatedApplication({ ...applicationToUpdate });
    };

    const handleSave = (id, updatedApplication) => {
        const updatedApplications = applications.map(app => (app.id === id ? updatedApplication : app));
        setApplications(updatedApplications);
        setEditingId(null);
        console.log('Update application:', updatedApplication);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedApplication({ ...updatedApplication, [name]: value });
    };

    const handleApprove = (id) => {
        // Update application status to 'Approved'
        const updatedApplications = applications.map(app => {
            if (app.id === id) {
                return { ...app, status: 'Approved' };
            }
            return app;
        });
        setApplications(updatedApplications);
    };

    const handleReject = (id) => {
        // Update application status to 'Rejected'
        const updatedApplications = applications.map(app => {
            if (app.id === id) {
                return { ...app, status: 'Rejected' };
            }
            return app;
        });
        setApplications(updatedApplications);
    };

    const handleDelete = (id) => {
        // Logic for deleting the application
        const updatedApplications = applications.filter(app => app.id !== id);
        setApplications(updatedApplications);
        console.log('Delete application:', id);
    };

    return (
        <>
        <div className='flex'>
        <Sidebar/>
        <div className="container mx-auto p-8 py-28">
            <h1 className="text-2xl font-bold mb-4">Loan Applications</h1>
            <table className="min-w-full divide-y divide-gray-200">
                {/* Table headers */}
                <thead className="bg-gray-50">
                    {/* Table rows */}
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {applications.map((application) => (
                        <tr key={application.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{application.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{application.firstName}{application.lastName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{application.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{application.mobileNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{application.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{application.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${application.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {application.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                            {application.status === 'Pending' && (
                                <>
                                    <button onClick={() => handleApprove(application.id)} className="text-indigo-600 hover:text-indigo-900">Approve</button>
                                    <button onClick={() => handleReject(application.id)} className="ml-2 text-red-600 hover:text-red-900">Reject</button>
                                </>
                            )}
                            <button onClick={() => handleUpdate(application.id)} className="ml-2 text-blue-600 hover:text-blue-900">Update</button>
                            <button onClick={() => handleDelete(application.id)} className="ml-2 text-red-600 hover:text-red-900">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>

            {/* Edit Form */}
            {editingId && (
                <div className="mt-4 p-4 border border-gray-200 rounded">
                    <h2 className="text-lg font-semibold mb-2">Edit Application</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSave(editingId, updatedApplication);
                    }}>
                        {/* Editable fields */}
                        <input type="text" name="firstName" value={updatedApplication.firstName} onChange={handleChange} />
                        <input type="text" name="lastName" value={updatedApplication.lastName} onChange={handleChange} />
                        <input type="email" name="email" value={updatedApplication.email} onChange={handleChange} />
                        <input type="text" name="mobileNumber" value={updatedApplication.mobileNumber} onChange={handleChange} />
                        <input type="text" name="amount" value={updatedApplication.amount} onChange={handleChange} />
                        <button type="submit" className="text-blue-600 hover:text-blue-900">Save</button>
                        <button type="button" onClick={handleCancel} className="ml-2 text-red-600 hover:text-red-900">Cancel</button>
                    </form>
                </div>
            )}
        </div>
        </div>
        </>
    );
};
export default LoanApplied;