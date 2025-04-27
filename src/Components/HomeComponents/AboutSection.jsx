import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const AboutSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "01. Our History",
      content:
        "Our journey began in 2015, when a small group of passionate designers and developers came together to create a digital agency focused on helping businesses build their online presence. Starting as a small web design studio, we quickly gained traction by delivering beautiful and functional websites that resonated with clients and their customers.",
    },
    {
      title: "02. Our Mission",
      content:
        "Our mission is simple — to help businesses of all sizes thrive in the digital world by creating high-quality websites, engaging marketing strategies, and innovative digital solutions. We believe that every brand deserves a strong, professional online presence that aligns with its vision, goals, and audience.",
    },
    {
      title: "03. Our Vision",
      content:
        "We envision a world where businesses of all sizes can easily access cutting-edge digital services that not only meet their needs but exceed their expectations. Our goal is to be a one-stop partner for digital success, helping businesses grow through creativity, strategy, and measurable results.",
    },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center py-12">
      <div className="w-full flex justify-between gap-16">
        
        {/* Left Side - Accordion List */}
        <div className="space-y-4 w-[40%] sticky top-0">
          {sections.map((item, index) => {
            const isOpen = openSection === index;

            const springProps = useSpring({
              opacity: isOpen ? 1 : 0,
              height: isOpen ? 'auto' : 0,
              marginTop: isOpen ? 16 : 0,
              overflow: 'hidden',
              config: { tension: 250, friction: 20 },
            });

            return (
              <div key={index}>
                <div
                  onClick={() => toggleSection(index)}
                  className={`flex flex-col items-start justify-between bg-[#171732] px-6 py-4 border border-[#3a3a50] cursor-pointer hover:bg-[#1f1f3d] transition ${
                    isOpen ? 'rounded-2xl' : 'rounded-full'
                  }`}
                >
                  <div className="flex justify-between w-full">
                    <span className="text-lg main-font">{item.title}</span>
                    <span className="text-2xl">{isOpen ? '-' : '+'}</span>
                  </div>

                  {/* Animated Content */}
                  {isOpen && (
                    <animated.div style={springProps} className="w-full mt-4 text-[#C6C7D5] sub-font">
                      <p>{item.content}</p>
                    </animated.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - About Text and Button */}
        <div className="w-[60%]">
          <p className="text-lg leading-8 mb-6 text-[#C6C7D5] sub-font">
            At <span className="font-bold">Web Designs Sphere</span>, Our Journey Began With A Simple Mission — To Help Businesses Establish A Strong And Professional Online Presence Through Stunning, Functional Websites. What Started As A Small Web Design Studio Has Now Evolved Into A Full-Service Digital Agency Offering <span className="font-bold">Web Design, Development, SEO, Google Ads, Meta Ads, And Social Media Marketing And Management</span>.
          </p>
          <p className="text-lg leading-8 mb-6 text-[#C6C7D5] sub-font">
            Over The Years, We’ve Partnered With Startups, Small Businesses, And Growing Brands From Around The World, Delivering Results That Matter — More Traffic, Higher Engagement, And Increased Conversions. Our Growth Has Been Driven By Our Commitment To <span className="font-bold">Innovation, Transparency, And Client Success</span>.
          </p>
          <p className="text-lg leading-8 mb-8 text-[#C6C7D5] sub-font">
            Today, We’re Proud To Be A One-Stop Digital Partner, Combining Creativity And Strategy To Help Businesses Not Just Exist Online — But Thrive.
          </p>

         <button className="bg-[#3FA2F6] rounded-full w-auto px-6 py-3 text-white flex items-center gap-3 text-base sub-font hover:bg-[#AD49E1] hover:scale-90 transition-all duration-500 group ease-in-out">
                 <span>Learn More</span>
                 {/* Scale only the icon on hover */}
                 <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
               </button>

           {/* Bottom Stats */}
      <div className="flex flex-col md:flex-row gap-12 items-center justify-start mt-16 text-center">
        <div>
          <h2 className="text-5xl font-medium main-font">10<span className="text-[#3FA2F6]">Y</span></h2>
          <p className="text-gray-400 mt-2 sub-font">Years in business</p>
        </div>
        <div className="h-12 w-px bg-gray-600 hidden md:block"></div>
        <div>
          <h2 className="text-5xl font-medium main-font">200<span className="text-[#AD49E1]">+</span></h2>
          <p className="text-gray-400 mt-2 sub-font">Successful Projects</p>
        </div>
        <div className="h-12 w-px bg-gray-600 hidden md:block"></div>
        <div>
          <h2 className="text-5xl font-medium main-font">99<span className="text-white">%</span></h2>
          <p className="text-gray-400 mt-2 sub-font">Happy Clients</p>
        </div>
      </div>
        </div>
      </div>

     
    </div>
  );
};

export default AboutSection;
