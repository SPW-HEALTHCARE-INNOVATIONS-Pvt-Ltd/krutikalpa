import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Government from './components/Government';
import Enterprise from './components/Enterprise';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Helper component to handle anchor links with react-router
const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <ScrollToHash />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<><Hero /><Contact /></>} />
            <Route path="/about" element={<><About /><Contact /></>} />
            <Route path="/government" element={<><Government /><Contact /></>} />
            <Route path="/enterprise" element={<><Enterprise /><Contact /></>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
