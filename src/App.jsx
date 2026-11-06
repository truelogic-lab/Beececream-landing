import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import HowItsMade from './components/HowItsMade';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Locations from './components/Locations';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Toast from './components/Toast';

// Pages
import ProductsPage from './pages/ProductsPage';
import HowItsMadePage from './pages/HowItsMadePage';
import OurHistoryPage from './pages/OurHistoryPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Products />
      <HowItsMade />
      <Gallery />
      <Testimonial />
      <Locations />
    </div>
  );
}

export default function App() {
  // Toast State
  const [toast, setToast] = useState(null);

  const handleCookieChoice = (choice) => {
    if (choice === 'accepted') {
      setToast({ type: 'success', message: 'You have accepted all cookies. Thank you!' });
    } else {
      setToast({ type: 'error', message: 'You have rejected non-essential cookies.' });
    }
  };

  return (
    <BrowserRouter>
      <Header />
      
      {/* Global Toast Notification */}
      {toast && (
        <Toast 
          type={toast.type} 
          message={toast.message} 
          onClose={() => setToast(null)} 
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/how-its-made" element={<HowItsMadePage />} />
        <Route path="/our-history" element={<OurHistoryPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      
      <Footer />
      
      <CookieBanner onChoiceMade={handleCookieChoice} />
    </BrowserRouter>
  );
}
