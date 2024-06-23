// src/ProfilePage.js
import React from 'react';

function ProfilePage({ onBack }) {
  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Profil Pembuat Website</h1>
      <div className="mb-4">
        <strong>Nama:</strong> Reza Mahaditya
      </div>
      <div className="mb-4">
        <strong>Email:</strong> rezamahaditya15@gmail.com
      </div>
      <div className="mb-4">
        <strong>Alamat:</strong> Kec. Junrejo, Kota Batu, Jawa Timur 65233
      </div>
      <div className="mb-4">
        <strong>Kontak:</strong> 089523824566
      </div>
      <button
        onClick={onBack}
        className="bg-gray-500 text-white p-2 rounded w-full mt-4"
      >
        Kembali
      </button>
    </div>
  );
}

export default ProfilePage;
