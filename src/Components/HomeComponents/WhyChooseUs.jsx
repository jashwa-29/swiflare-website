import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import whyChooseUsImage from '../../assets/whychooseus.png'; // Make sure to import your image

export default function MarketingAgencySection() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mx-auto sm:px-6 lg:px-28">
        {/* Left - Normal image */}
        <div className="relative w-full mx-auto rounded-2xl overflow-hidden h-[540px]">
          <img 
            src={whyChooseUsImage} 
            alt="Why Choose Us" 
            className="w-full h-full object-cover"
          />
          {/* Optional overlay content */}
          <div className="absolute bottom-0 left-0 p-7 w-full">
            {/* You can add any overlay content here if needed */}
          </div>
        </div>

        {/* Right - Text and features */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <div className="text-[#C6C7D5] text-left border-[1px] border-[#FFFFFF38] sub-font rounded-full px-5 py-2 text-sm font-medium w-fit mb-5 bg-[radial-gradient(at_center_center,_#021644_0%,_#F2295B00_100%)]">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-[45px] main-font leading-tight mb-4">
              Creating Experiences,<br />Generating Success Together
            </h2>
            <p className="text-[#A9AABA] text-[17px]">
              we're not just another digital marketing agency – we're your strategic partner in
              growth. Here's why businesses choose us to elevate their brand:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { text: "Tailored Solutions", color: "bg-[#3FA2F6]" },
              { text: "Proven Expertise", color: "bg-[#AD49E1]" },
              { text: "Data-Driven Results", color: "bg-[#AD49E1]" },
              { text: "Innovative Strategies", color: "bg-[#3FA2F6]" },
            ].map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-3 p-7 bg-[#191930] rounded-xl border border-transparent hover:border-white"
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${feature.color}`}>
                  <FontAwesomeIcon icon={faCheckDouble} className="transition-transform duration-500 ease-in-out group-hover:translate-x-1" />
                </div>
                <span className="text-[18px] sub-font font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}