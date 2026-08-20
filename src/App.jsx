import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CustomCursor from './components/CustomCursor';
import InitialLoader from './components/InitialLoader';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      {loading && <InitialLoader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />
      <CookieBanner />
    </LanguageProvider>
  );
}

export default App;
