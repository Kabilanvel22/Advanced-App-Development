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
            <Slider
              axis="x"
              x={loanAmount}
              xmin={10000}
              xmax={1000000}
              onChange={({ x }) => setLoanAmount(x)}
            />
            <p>{loanAmount}</p>
          </div>
          terestRate}</p>
          </div>
          <div className="mb-4 ml-20">
            <label className="block text-sm font-medium text-gray-700">Loan Tenure (years)</label>
            <Slider
              axis="x"
              x={loanTenure}
              xmin={1}
              xmax={30}
              onChange={({ x }) => setLoanTenure(x)}
            />
           
  );
}

export default EMICalculator;
