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
        "Swiflare AI Innovations was founded in 2022 by a team of tech enthusiasts and creative strategists with a passion for transforming digital landscapes. What began as a small collective focused on web development quickly evolved into a multi-disciplinary agency offering AI-powered solutions, mobile and web applications, and digital marketing. Over the years, we've empowered startups, enterprises, and global brands to scale with smart technology and human-centric design.",
    },
    {
      title: "02. Our Mission",
      content:
        "Our mission is to help ambitious businesses grow through innovative, scalable digital solutions. We blend technology, creativity, and strategy to deliver measurable impact — whether it’s through intelligent app development, high-performance websites, or marketing campaigns that convert. We are committed to building lasting partnerships rooted in trust, transparency, and results.",
    },
    {
      title: "03. Our Vision",
      content:
        "We envision a future where AI-driven innovation is accessible to all businesses — not just the big players. At Swiflare, we strive to be a global leader in digital transformation by making advanced technology simple, strategic, and powerful for our clients. Our vision is to be the go-to digital partner that helps businesses not just adapt, but thrive in the ever-evolving digital world.",
    },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center py-12">
      <div className="w-full flex lg:flex-row flex-col justify-between gap-16">

        {/* Left Side - Accordion List */}
        <div className="space-y-4 lg:w-[40%] w-full  z-10">
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
                  className={`flex flex-col items-start justify-between bg-[#171732] px-6 py-4 border border-[#3a3a50] cursor-pointer hover:bg-[#1f1f3d] transition ${isOpen ? 'rounded-2xl' : 'rounded-full'}`}
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
        <div className="lg:w-[60%] w-full">
          <p className="text-lg leading-8 mb-6 text-[#C6C7D5] sub-font">
            At <span className="font-bold">Swiflare AI Innovations</span>, our journey began with a clear vision — to empower businesses with intelligent, high-impact digital solutions that drive real growth. What started as a specialized tech-driven initiative has evolved into a full-scale digital powerhouse offering <span className="font-bold">Custom Web Development, Mobile Applications, Web Applications, SEO, Performance Marketing, Social Media Management, and Video Production</span>.
          </p>
          <p className="text-lg leading-8 mb-6 text-[#C6C7D5] sub-font">
            Over the years, we’ve collaborated with startups, enterprises, and emerging brands across industries — delivering transformative results through data-backed strategies and user-centric design. Our success stems from a relentless focus on <span className="font-bold">innovation, agility, and measurable outcomes</span>.
          </p>
          <p className="text-lg leading-8 mb-8 text-[#C6C7D5] sub-font">
            Today, we’re proud to be a trusted digital partner for forward-thinking businesses. At Swiflare, we don’t just build digital products — we engineer growth, combining cutting-edge technology with strategic marketing to help our clients not only compete but lead in their space.
          </p>

          <button
            type="submit"
            className=" bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full w-auto px-8 py-3.5 text-white flex items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
          >
            <span>More About Us</span>
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </button>

          {/* Bottom Stats */}
          <div className="flex flex-wrap md:flex-row gap-12 items-center justify-start mt-16 text-center">
            <div>
              <h2 className="text-5xl font-medium main-font">5<span className="text-[#3FA2F6]">Y</span></h2>
              <p className="text-gray-400 mt-2 sub-font">Years in business</p>
            </div>
            <div className="h-12 w-px bg-gray-600 hidden md:block"></div>
            <div>
              <h2 className="text-5xl font-medium main-font">40<span className="text-[#AD49E1]">+</span></h2>
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
