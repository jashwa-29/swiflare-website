import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  const navLinks = ['Home', 'About', 'Services', 'Portfolio'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Top Nav */}
      <div
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-[#050516]/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="relative px-4 mx-auto sm:px-6 lg:px-28 py-3">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex">
   <img
  className="w-auto h-8 lg:h-12"
  src={logo}
  alt="Logo"
  loading="lazy"
  width="120"
  height="48"
/>

              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10 text-[#C6C7D5] border border-[#FFFFFF38] rounded-full px-8 py-3">
              {navLinks.map((item) => {
                const linkPath = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase();
                const isActive = currentPath === linkPath;

                return (
                  <Link
                    key={item}
                    to={`/${linkPath === 'home' ? '' : linkPath}`}
                    className={`text-base font-medium py-1 px-3 border-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-[#3FA2F6] text-white border-transparent'
                        : 'text-[#C6C7D5] border-transparent hover:bg-[#3FA2F6] hover:text-white'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Contact Button */}
            <Link
              to="/contact"
              className="bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full w-auto px-8 py-3.5 lg:flex hidden text-white items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
            >
              <span>Contact Us</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#050516] px-4 py-10 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            type="button"
            className="p-2 text-white hover:bg-gray-800 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="mt-10 space-y-2">
          {navLinks.map((item) => {
            const linkPath = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase();
            const isActive = currentPath === linkPath;

            return (
              <Link
                key={item}
                to={`/${linkPath === 'home' ? '' : linkPath}`}
                className={`block w-full py-2 px-3 font-medium rounded-full transition ${
                  isActive
                    ? 'bg-[#3FA2F6] text-white'
                    : 'text-white hover:bg-[#3FA2F6]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile Contact Us Button */}
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-block w-full text-center px-6 py-3 text-base font-semibold bg-[#3FA2F6] text-black rounded-full hover:bg-yellow-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
