import React from 'react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  // Importing Link

const Header = () => {
  return (
    <header>
      <div className="fixed inset-x-0 top-0 z-10">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-28 py-3">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="/" title="" className="flex">
                <img className="w-auto h-8 lg:h-12" src={logo} alt="" />
              </Link>
            </div>

            <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:space-x-10 text-[#C6C7D5] border-[1px] border-[#FFFFFF38] sub-font rounded-full px-8 py-3">
              <Link to="/" className="text-base sub-font font-medium text-[#C6C7D5] hover:bg-[#3FA2F6] hover:text-white transition-all duration-300 py-1 px-3 border-2 border-transparent rounded-full">
                Home
              </Link>
              <Link to="/about" className="text-base sub-font font-medium text-[#C6C7D5] hover:bg-[#3FA2F6] hover:text-white transition-all duration-300 py-1 px-3 border-2 border-transparent rounded-full">
                About
              </Link>
              <Link to="/services" className="text-base sub-font font-medium text-[#C6C7D5] hover:bg-[#3FA2F6] hover:text-white transition-all duration-300 py-1 px-3 border-2 border-transparent rounded-full">
                Services
              </Link>
              <Link to="/portfolio" className="text-base sub-font font-medium text-[#C6C7D5] hover:bg-[#3FA2F6] hover:text-white transition-all duration-300 py-1 px-3 border-2 border-transparent rounded-full">
                Portfolio
              </Link>
              <Link to="/contact" className="text-base sub-font font-medium text-[#C6C7D5] hover:bg-[#3FA2F6] hover:text-white transition-all duration-300 py-1 px-3 border-2 border-transparent rounded-full">
                Contact
              </Link>
            </div>

            <button className="bg-[#3FA2F6] rounded-full w-auto px-6 py-3 text-white flex items-center gap-3 text-base sub-font hover:bg-[#AD49E1] hover:scale-90 transition-all duration-500 group ease-in-out">
              <span>Get Started</span>
              <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            </button>
          </nav>
        </div>
      </div>

      <nav className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden">
        <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col flex-grow h-full">
          <nav className="flex flex-col flex-1 mt-10 space-y-2">
            <Link to="/features" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 hover:bg-[#3FA2F6] hover:text-white border-2 border-transparent rounded-full px-3">
              Features
            </Link>
            <Link to="/solutions" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 hover:bg-[#3FA2F6] hover:text-white border-2 border-transparent rounded-full px-3">
              Solutions
            </Link>
            <Link to="/resources" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 hover:bg-[#3FA2F6] hover:text-white border-2 border-transparent rounded-full px-3">
              Resources
            </Link>
            <Link to="/pricing" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 hover:bg-[#3FA2F6] hover:text-white border-2 border-transparent rounded-full px-3">
              Pricing
            </Link>
          </nav>

          <div className="flex flex-col items-start">
            <Link to="/join" className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-[#3FA2F6] border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500">
              Join Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
