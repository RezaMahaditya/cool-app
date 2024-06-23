// src/OptionSelector.js
import React, { useState } from 'react';
import PasanganFinder from './PasanganFinder';
import Calculator from './Calculator';
import AgeCalculator from './AgeCalculator';
import ShoppingCalculator from './ShoppingCalculator';
import CekKodamFinder from './CekKodamFinder';

function OptionSelector({ name }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleBack = () => {
    setSelectedOption('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-8">
      {!selectedOption ? (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Selamat datang di layanan kami, {name}!</h1>
          <h2 className="text-xl mb-4">Pilih Opsi</h2>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setSelectedOption('pasangan')}
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Cari Pasangan
            </button>
            <button
              onClick={() => setSelectedOption('kalkulator')}
              className="bg-green-500 text-white p-2 rounded w-full"
            >
              Kalkulator
            </button>
            <button
              onClick={() => setSelectedOption('penghitung-usia')}
              className="bg-yellow-500 text-white p-2 rounded w-full"
            >
              Penghitung Usia
            </button>
            <button
              onClick={() => setSelectedOption('penghitung-belanja')}
              className="bg-purple-500 text-white p-2 rounded w-full"
            >
              Penghitung Belanjaan
            </button>
            <button
              onClick={() => setSelectedOption('cek-kodam')}
              className="bg-indigo-500 text-white p-2 rounded w-full"
            >
              Cek Kodam
            </button>
          </div>
        </div>
      ) : selectedOption === 'pasangan' ? (
        <PasanganFinder onBack={handleBack} />
      ) : selectedOption === 'kalkulator' ? (
        <Calculator onBack={handleBack} />
      ) : selectedOption === 'penghitung-usia' ? (
        <AgeCalculator onBack={handleBack} />
      ) : selectedOption === 'penghitung-belanja' ? (
        <ShoppingCalculator onBack={handleBack} />
      ) : (
        <CekKodamFinder onBack={handleBack} />
      )}
    </div>
  );
}

export default OptionSelector;
