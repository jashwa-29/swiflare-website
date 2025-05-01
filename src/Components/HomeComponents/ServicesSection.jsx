import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: "🔍", // You can replace this with real icons if you want
    title: "Search Engine Optimization",
    description:
      "Enhance your online visibility and drive organic traffic to your website with our expert SEO strategies.",
  },
  {
    icon: "📝",
    title: "Content Marketing",
    description:
      "Fuel your digital strategy with high-quality content that resonates with your audience and drives meaningful engagement.",
  },
  {
    icon: "🖥️",
    title: "Website Design",
    description:
      "Our design experts craft visually stunning and user-friendly websites optimized for performance and conversion.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col justify-between gap-16 items-start">
        {/* Left Side */}
        <div className="lg:w-[33%] w-full">
        <div className="text-[#C6C7D5] text-left border-[1px] border-[#FFFFFF38] sub-font rounded-full px-5 py-2 text-sm font-medium w-fit  mb-5 bg-[radial-gradient(at_center_center,_#021644_0%,_#F2295B00_100%)]
">
            Our Services
          </div>

          <h2 className="text-4xl md:text-5xl main-font text-white mb-6 leading-tight">
            What We Are Offering For You?
          </h2>

          <p className="text-gray-400 mb-10 sub-font">
            As a digital marketing agency, we offer services that can cover various aspects of online marketing and brand growth. Here is a breakdown of the main services we can offer.
          </p>

          <button className="bg-[#3FA2F6] rounded-full w-auto px-6 py-3 text-white flex items-center gap-3 text-base sub-font hover:bg-[#AD49E1] hover:scale-90 transition-all duration-500 group ease-in-out">
            <span>All Services</span>
            {/* Scale only the icon on hover */}
            <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
          </button>
        </div>

        {/* Right Side */}
        <div className="lg:w-[67%] w-full space-y-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-start w-full border-x-0 border-t-0 border-b-2 border-dashed border-[#FFFFFF] pb-8 mb-10">
              <div className="text-blue-400 text-4xl mr-6">
                {service.icon}
              </div>
              <div className="flex justify-between flex-wrap items-center w-full">
                <div className="lg:w-[410px] w-full">
                  <h3 className="text-white text-[28px] mb-2 main-font">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                </div>
                <button className="bg-[#3FA2F6] rounded-full w-auto px-6 py-3 text-white flex items-center gap-3 text-base sub-font hover:bg-[#AD49E1] hover:scale-90 transition-all duration-500 group ease-in-out">
                  <span>Read More</span>
                  {/* Scale only the icon on hover */}
                  <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
