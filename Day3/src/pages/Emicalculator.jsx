import React, { useState } from 'react';
import Slider from 'react-input-slider';

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8);
  const [loanTenure, setLoanTenure] = useState(5);
  const [emi, setEmi] = useState('');

  const calculateEmi = () => {
    const p = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(loanTenure) * 12;
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow-md ">
          <h1 className="text-2xl font-bold mb-4 ml-44">EMI Calculator</h1>
          <div className="mb-4 ml-20">
            <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
         
          >
            Calculate EMI
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div>
          <h2 className='mt-14 mb-5 font-serif'>Estimated Amount Required</h2>
            {emi ? (
              <>
                <p className="text-lg ml-36 font-bold text-4xl"> ₹ {emi}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-44">
                  Apply
                </button>
              </>
           
      </div>
    </div>
  );
}

export default EMICalculator;
