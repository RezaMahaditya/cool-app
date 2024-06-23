// src/App.js
import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import OptionSelector from './OptionSelector';
import Navbar from './Navbar';
import Footer from './Footer';
import ProfilePage from './ProfilePage'; // Import ProfilePage di sini

function App() {
  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const handleProfileClick = () => {
    setCurrentPage('profile');
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar onProfileClick={handleProfileClick} />
      <div className="flex-1 flex items-center justify-center">
        {currentPage === 'home' && !name && <WelcomeScreen onNameSubmit={setName} />}
        {currentPage === 'home' && name && <OptionSelector name={name} />}
        {currentPage === 'profile' && (
          <ProfilePage
            onBack={handleBack} // Mengirimkan prop onBack ke ProfilePage
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
