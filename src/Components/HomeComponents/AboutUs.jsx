import React from 'react';
import AboutSection from './AboutSection'; 
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'

const AboutUs = () => {
  return (
    <section className="px-4 mx-auto sm:px-6 lg:px-28">
      <div className="relative bg-[url('../src/assets/about.png')] bg-cover bg-no-repeat w-full mx-auto rounded-2xl overflow-hidden h-[540px] flex justify-start items-end p-7">
        {/* Overlay with color #021644 */}
        <div className="absolute inset-0 bg-[#021644] opacity-50"></div> 
        {/* Custom overlay color with opacity */}

        {/* Content */}
        <div className="bg-transparent backdrop-blur-md bg-opacity-20 border border-gray-300 p-6 rounded-2xl w-[350px] shadow-md">

          <h2 className="text-2xl font-semibold text-white mb-2">Swiflare AI Innovations</h2>
          <hr className="border-t border-gray-300 mb-4" />

          <div className="flex items-center space-x-3">
            <div className="flex -space-x-4">
              <img className="w-10 h-10 rounded-full border-2 border-white" src={user1} alt="User 1" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src={user2}alt="User 2" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src={user3} alt="User 3" />

            </div>

            <div>
              <div className="flex space-x-1 mb-1">
                <div className="w-3 h-3 border-2 border-yellow-500"></div>
                <div className="w-3 h-3 border-2 border-yellow-500"></div>
                <div className="w-3 h-3 border-2 border-yellow-500"></div>
                <div className="w-3 h-3 border-2 border-yellow-500"></div>
                <div className="w-3 h-3 border-2 border-yellow-500"></div>
              </div>
              <p className="text-white text-sm font-semibold">From 40+ Clients</p>
            </div>
          </div>
        </div>
      </div>

        <AboutSection/>
    </section>
  );
};

export default AboutUs;
