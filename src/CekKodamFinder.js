
// src/CekKodam.js
import React, { useState, useEffect } from 'react';

function CekKodamFinder({ onBack }) {
  const [name, setName] = useState('');
  const [kodam, setKodam] = useState('');

  const randomKodamNames = ['Kodam Warrior', 'Kodam Guardian', 'Kodam Healer', 'Kodam Sage', "Cacing Serigala Malam",
  "Sapi Awak Bengkong",
  "Harimau Repang",
  "Jerapah Keceret",
  "Rangga Kalap",
  "Irul Penusuk",
  "Hardcoe Man",
  "Sempak Hijau",
  "Sempak Cindo",
  "Pocong Kendut Kendut",];

  useEffect(() => {
    setKodam(''); // Hapus nama kodam setiap kali nama berubah
  }, [name]);

  const handleFindKodam = () => {
    if (name.toLowerCase() === 'nora') {
      setKodam('Kodam Princes');
    } else if (name.toLowerCase() === 'reza') {
      setKodam('Kodam Pangeran');
    } else {
      const randomIndex = Math.floor(Math.random() * randomKodamNames.length);
      setKodam(randomKodamNames[randomIndex]);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Cek Kodam</h1>
      <div className="mb-4">
        <label htmlFor="nameInput" className="block mb-2">Masukkan Nama:</label>
        <input
          id="nameInput"
          type="text"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        onClick={handleFindKodam}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Cek Kodam
      </button>
      <button
        onClick={onBack}
        className="bg-gray-500 text-white p-2 rounded w-full mt-4"
      >
        Kembali
      </button>
      {kodam && (
        <div className="mt-4">
          <strong>Kodammu:</strong> {kodam}
        </div>
      )}
    </div>
  );
}

export default CekKodamFinder;