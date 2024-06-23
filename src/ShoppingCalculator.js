// src/ShoppingCalculator.js
import React, { useState } from 'react';

function ShoppingCalculator({ onBack }) {
  const [items, setItems] = useState([{ name: '', price: '' }]);
  const [total, setTotal] = useState(0);

  const handleChange = (index, event) => {
    const newItems = items.slice();
    newItems[index][event.target.name] = event.target.value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', price: '' }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.slice();
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const calculateTotal = () => {
    const total = items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);
    setTotal(total);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Penghitung Belanjaan</h1>
      {items.map((item, index) => (
        <div key={index} className="flex mb-4 space-x-2">
          <input
            type="text"
            name="name"
            placeholder="Nama Item"
            value={item.name}
            onChange={(e) => handleChange(index, e)}
            className="border border-gray-300 p-2 rounded w-1/2"
          />
          <input
            type="number"
            name="price"
            placeholder="Harga"
            value={item.price}
            onChange={(e) => handleChange(index, e)}
            className="border border-gray-300 p-2 rounded w-1/2"
          />
          <button
            onClick={() => handleRemoveItem(index)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Hapus
          </button>
        </div>
      ))}
      <button
        onClick={handleAddItem}
        className="bg-green-500 text-white p-2 rounded w-full mb-4"
      >
        Tambah Item
      </button>
      <button
        onClick={calculateTotal}
        className="bg-blue-500 text-white p-2 rounded w-full mb-4"
      >
        Hitung Total
      </button>
      {total > 0 && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Total Belanjaan: Rp {total.toFixed(2)}
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

export default ShoppingCalculator;
