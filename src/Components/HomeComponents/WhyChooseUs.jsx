import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

export default function MarketingAgencySection() {
  return (

    



    <div className="min-h-screen  text-white flex items-center justify-center">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mx-auto sm:px-6 lg:px-28">
        {/* Left - Image with overlay skills */}
        <div className="relative bg-[url('../src/assets/whychooseus.png')] bg-cover bg-no-repeat w-full mx-auto rounded-2xl overflow-hidden h-[540px] flex justify-start items-end p-7">
          {/* Overlay with color #021644 */}
          <div className="absolute inset-0 bg-[#021644] opacity-50"></div>
          {/* <div className="relative z-10 w-full bg-white/10 backdrop-blur-md rounded-xl p-5 text-white">
            {[
              { label: "Digital Marketing", value: 85, color: "bg-blue-400" },
              { label: "Design & Branding", value: 87, color: "bg-pink-500" },
              { label: "Social Media Management", value: 90, color: "bg-purple-400" },
              { label: "Content Marketing", value: 78, color: "bg-fuchsia-400" },
            ].map((item) => (
              <div key={item.label} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-white/30 rounded-full">
                  <div
                    className={`h-2 ${item.color} rounded-full`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right - Text and features */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            
          <div className="text-[#C6C7D5] text-left border-[1px] border-[#FFFFFF38] sub-font rounded-full px-5 py-2 text-sm font-medium w-fit  mb-5 bg-[radial-gradient(at_center_center,_#021644_0%,_#F2295B00_100%)]
">
          Why Choose Us
          </div>
            <h2 className="text-4xl md:text-[45px] main-font leading-tight mb-4">
              Creating Experiences,<br />Generating Success Together
            </h2>
            <p className="text-[#A9AABA] text-[17px]">
              we're not just another digital marketing agency – we’re your strategic partner in
              growth. Here’s why businesses choose us to elevate their brand:
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
