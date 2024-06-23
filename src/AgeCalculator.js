// src/AgeCalculator.js
import React, { useState } from 'react';

function AgeCalculator({ onBack }) {
  const [birthDate, setBirthDate] = useState('');
  const [ageYears, setAgeYears] = useState(0);
  const [ageMonths, setAgeMonths] = useState(0);
  const [ageDays, setAgeDays] = useState(0);

  const handleCalculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    
    const diffTime = Math.abs(today - birthDateObj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = (diffDays % 365) % 30;

    setAgeYears(years);
    setAgeMonths(months);
    setAgeDays(days);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Penghitung Usia</h1>
      <div className="mb-4">
        <label htmlFor="birthDateInput" className="block mb-2">Masukkan Tanggal Lahir:</label>
        <input
          id="birthDateInput"
          type="date"
          className="border p-2 rounded w-full"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button
        onClick={handleCalculateAge}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Hitung Usia
      </button>
      <button
        onClick={onBack}
        className="bg-gray-500 text-white p-2 rounded w-full mt-4"
      >
        Kembali
      </button>
      {ageYears > 0 && (
        <div className="mt-4">
          <strong>Usiamu:</strong> {ageYears} tahun, {ageMonths} bulan, {ageDays} hari
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
