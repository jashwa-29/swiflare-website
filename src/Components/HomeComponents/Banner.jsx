// src/components/Banner.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className=" items-center justify-center  px-4 mx-auto sm:px-6 lg:px-28">
      <div className=" bg-[radial-gradient(at_center_center,_#3FA2F6_0%,_#021644_100%)] rounded-[2rem] py-12  w-full  text-center shadow-2xl text-white">
      <div className="text-[#C6C7D5] text-left border-[1px] border-[#FFFFFF38] mx-auto sub-font rounded-full px-5 py-2 text-sm font-medium w-fit  mb-5 bg-[radial-gradient(at_center_center,_#021644_0%,_#F2295B00_100%)]
">
         Contact Us
          </div>
        <h1 className="main-font font-[500] lg:text-[55px] text-4xl bg-clip-text text-white sm:w-full lg:w-[850px] mx-auto capitalize">
        Let's create the best
          <span className="bg-[#3FA2F6] text-white inline-block -rotate-3 py-2 rounded-[5px] mx-[16px]">
          
Experience
          </span>
          For your business with us
        </h1>
        <div className="mt-10">
      <button
                      type="submit"
                      className=" bg-[#3FA2F6] hover:bg-[#AD49E1] mx-auto rounded-full w-auto px-8 py-3.5 text-white flex items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
                    >
                      <span>Let's Talk</span>
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="transition-transform duration-300 group-hover:translate-x-1" 
                      />
                    </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
