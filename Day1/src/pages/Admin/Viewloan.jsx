import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Viewloan = () => {
    const [loans, setLoans] = useState([
        { id: 1, loanName: 'Farm Loan', description: 'Description 1', image: 'Image 1' },
        { id: 2, loanName: 'Crop Loan', description: 'Description 2', image: 'Image 2' },
        { id: 3, loanName: 'Gold Loan', description: 'Description 3', image: 'Image 3' },
        { id: 4, loanName: 'Farm Loan', description: 'Description 1', image: 'Image 1' },
        { id: 5, loanName: 'Crop Loan', description: 'Description 2', image: 'Image 2' },
        { id: 6, loanName: 'Gold Loan', description: 'Description 3', image: 'Image 3' },
        { id: 7, loanName: 'Farm Loan', description: 'Description 1', image: 'Image 1' },
        { id: 8, loanName: 'Crop Loan', description: 'Description 2', image: 'Image 2' },
        { id: 9, loanName: 'Gold Loan', description: 'Description 3', image: 'Image 3' },
    ]);

    const [editingLoan, setEditingLoan] = useState(null);

    const handleUpdate = (id) => {
        // Find the loan to edit
        const loanToEdit = loans.find((loan) => loan.id === id);
        setEditingLoan(loanToEdit);
    };

    const handleSave = (id, updatedLoan) => {
        // Update the loan in the list
        const updatedLoans = loans.map((loan) => (loan.id === id ? updatedLoan : loan));
        setLoans(updatedLoans);
        setEditingLoan(null);
        console.log('Update loan:', updatedLoan);
    };

    const handleCancel = () => {
        setEditingLoan(null);
    };

    return (
        <>
        <div className='flex'>
        <Sidebar/>
        <div className="container mx-auto p-8 py-28">
            <h1 className="text-2xl font-bold mb-4">View Loans</h1>
            <table className="min-w-full divide-y divide-gray-200">
                {/* Table headers */}
                <thead className="bg-gray-50">
                    {/* Table rows */}
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {loans.map((loan) => (
                        <tr key={loan.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{loan.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{loan.loanName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{loan.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{loan.image}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handleUpdate(loan.id)} className="text-blue-600 hover:text-blue-900">Update</button>
                                <button onClick={() => handleDelete(loan.id)} className="ml-2 text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Form */}
            {editingLoan && (
                <div className="mt-4 p-4 border border-gray-200 rounded">
                    <h2 className="text-lg font-semibold mb-2">Edit Loan</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSave(editingLoan.id, editingLoan);
                    }}>
                        <input type="text" value={editingLoan.loanName} onChange={(e) => setEditingLoan({ ...editingLoan, loanName: e.target.value })} />
                        <input type="text" value={editingLoan.description} onChange={(e) => setEditingLoan({ ...editingLoan, description: e.target.value })} />
                        <input type="text" value={editingLoan.image} onChange={(e) => setEditingLoan({ ...editingLoan, image: e.target.value })} />
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

export default Viewloan;
