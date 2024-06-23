// src/Calculator.js
import React, { useState } from 'react';

function Calculator({ onBack }) {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Kalkulator</h1>
      <div className="border border-gray-300 p-2 rounded w-full mb-4 text-right">
        {input}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)} className="bg-gray-200 p-2 rounded">
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)} className="bg-gray-200 p-2 rounded">
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)} className="bg-gray-200 p-2 rounded">
            {value}
          </button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)} className="bg-gray-200 p-2 rounded">
            {value}
          </button>
        ))}
        <button onClick={() => handleButtonClick('C')} className="col-span-4 bg-red-500 text-white p-2 rounded">
          C
        </button>
      </div>
      <button
        onClick={onBack}
        className="bg-red-500 text-white p-2 rounded w-full mt-4"
      >
        Kembali
      </button>
    </div>
  );
}

export default Calculator;
