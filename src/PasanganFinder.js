// src/PasanganFinder.js
import React, { useState } from "react";

function PasanganFinder({ onBack }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("cowok"); // default cowok
  const [partner, setPartner] = useState("");

  const randomCewekNames = [
    "Sarah",
    "Jessica",
    "Emily",
    "Sophia",
    "Olivia",
    "Ava",
    "Devi",
    "Layla",
    "Putri",
    "Fitri",
    "Lina",
    "Diana",
    "Ani",
    "Jujuk",
    "Peni",
  ];
  const randomCowokNames = [
    "Michael",
    "David",
    "John",
    "William",
    "James",
    "Jackson",
    "Rizki",
    "Saprol",
    "Yayan",
    "Bagus",
    "Didik",
    "Sueb",
    "Bintang",
    "Cipto",
    "Alfan",
    "Amar",
    "Arman",
    "Ibrahim",
    "Sokep",
    "Ajes",
    "Rangga",
    "Hari",
    "Gamblong",
    "Jono",
    "Rudi",
    "Diki QT",
  ];

  const handleFindPartner = () => {
    if (name.toLowerCase() === "reza" && gender === "cowok") {
      setPartner("Nora");
    } else if (name.toLowerCase() === "nora" && gender === "cewek") {
      setPartner("Reza");
    } else {
      const randomIndex =
        gender === "cowok"
          ? Math.floor(Math.random() * randomCewekNames.length)
          : Math.floor(Math.random() * randomCowokNames.length);

      setPartner(
        gender === "cowok"
          ? randomCewekNames[randomIndex]
          : randomCowokNames[randomIndex]
      );
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Cari Pasangan</h1>
      <div className="mb-4">
        <label htmlFor="nameInput" className="block mb-2">
          Masukkan Nama:
        </label>
        <input
          id="nameInput"
          type="text"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Pilih Jenis Kelamin:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="cowok">Cowok</option>
          <option value="cewek">Cewek</option>
        </select>
      </div>
      <button
        onClick={handleFindPartner}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Cari Pasangan
      </button>
      <button
        onClick={onBack}
        className="bg-gray-500 text-white p-2 rounded w-full mt-4"
      >
        Kembali
      </button>
      {partner && (
        <div className="mt-4">
          <strong>Jodohmu:</strong> {partner}
        </div>
      )}
    </div>
  );
}

export default PasanganFinder;
