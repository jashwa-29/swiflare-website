import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="relative h-lvh flex items-center justify-center px-4 mx-auto sm:px-6 lg:px-28">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('../src/assets/heroBG.jpg')] bg-cover bg-no-repeat"></div>

      {/* Overlay color */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center_center,_#021644_0%,_#F2295B00_100%)]"></div>

      {/* Content */}
      <div className="relative z-20 text-center w-[1200px] flex flex-col justify-center items-center gap-3">
        <div className="text-[#C6C7D5] border-[1px] border-[#FFFFFF38] sub-font rounded-full px-5 py-2 text-sm font-medium w-fit mx-auto mb-5">
          👋 Welcome To Swiflare AI Innovations
        </div>

        <h1 className="main-font font-[500] lg:text-[80px] text-3xl  bg-clip-text text-white">
          We Build Websites That Rank,
        </h1>

        <h1 className="main-font font-[500] lg:text-[80px] text-3xl bg-clip-text text-white">
          Convert, and 
          <span className="bg-[#3FA2F6] text-white inline-block -rotate-3 rounded-[5px] mx-[16px]">
            Scale
          </span>
        </h1>

        <h1 className="main-font font-[500] lg:text-[80px] text-3xl bg-clip-text text-white">
          Your Business
        </h1>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-5 mt-5">
    <button
                  type="submit"
                  className=" bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full w-auto px-8 py-3.5 text-white flex items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
                >
            <span>Get Started</span>
            {/* Scale only the icon on hover */}
            <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="transition-transform duration-300 group-hover:translate-x-1" 
                  />
          </button>
          <p className="text-[#C6C7D5] w-[400px] text-lg">
            Our Agency Drives Results, and Fuels Success in the Dynamic Landscape of Online Marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
