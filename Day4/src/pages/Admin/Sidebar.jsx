import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="text-black bg-slate-300 h-screen w-1/6 flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-2xl font-bold">AgriTech</h1>
        <ul className="mt-4">
          <li>
            <Link to="/admin/addloan" className="block py-2">Add Loan</Link>
          </li>
          <li>
            <Link to="/admin/viewloan" className="block py-2">View Loan</Link>
          </li>
          <li>
            <Link to="/admin/applications" className="block py-2">Applied Loan</Link>
          </li>
          <li>
            <Link to="/admin/login" className="block py-2">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
