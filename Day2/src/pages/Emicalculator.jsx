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
          <div className="mb-4 ml-20">
            <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
            <Slider
              axis="x"
              x={interestRate}
              xmin={0}
              xmax={20}
              onChange={({ x }) => setInterestRate(x)}
            />
            <p>{interestRate}</p>
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
            <p>{loanTenure}</p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-20"
            onClick={calculateEmi}
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
            ) : ( 
              <p className="text-lg ml-32">₹ 0 <br/> Please calculate EMI</p>
            )}
            <p class='mt-10 ml-5 text-gray-500'>*This is an approximate EMI calculation. The actual processing fee and rate of interest may vary. Interest rate for Personal Loan starts at 2% on a monthly basis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;
