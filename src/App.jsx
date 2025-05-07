import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/CommonComponents/Header';
import Home from './Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from './Components/CommonComponents/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ServicesPage from './Pages/ServicesPage';
import Portfolio from './Pages/Portfolio';
import ServicesDetailPage from './Pages/ServiceDetailPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/:id" element={<ServicesDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;