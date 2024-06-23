// src/CekKodamFinder.js
import React, { useState } from "react";

const randomKodams = [
  "Cacing Serigala Malam",
  "Sapi Awak Bengkong",
  "Harimau Repang",
  "Jerapah Keceret",
  "Rangga Kalap",
  "Irul Penusuk",
  "Hardcoe Man",
  "Sempak Hijau",
  "Sempak Cindo",
  "Pocong Kendut Kendut",
];

function CekKodamFinder({ onBack }) {
  const [name, setName] = useState("");
  const [kodam, setKodam] = useState("");

  const findKodam = () => {
    const lowerCaseName = name.toLowerCase();
    if (lowerCaseName === "cek kodam") {
      setKodam("TNI");
    } else {
      const randomIndex = Math.floor(Math.random() * randomKodams.length);
      setKodam(randomKodams[randomIndex]);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96 mb-8">
      <h1 className="text-2xl font-bold mb-4">Cek Kodam</h1>
      <input
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <button
        onClick={findKodam}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Cek Kodam
      </button>
      {kodam && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          {name}, kodam yang kamu punyai adalah {kodam}!
        </div>
      )}
      <button
        onClick={onBack}
        className="bg-red-500 text-white p-2 rounded w-full mt-4"
      >
        Kembali
      </button>
    </div>
  );
}

export default CekKodamFinder;
