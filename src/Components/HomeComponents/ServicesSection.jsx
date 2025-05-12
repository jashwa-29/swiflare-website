import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const services = [
  {
    id: 4,
    icon: "🔍",
    title: "Search Engine Optimization",
    description:
      "Enhance your online visibility and drive organic traffic to your website with our expert SEO strategies.",
  },

  {
    id: 3,
    icon: "🖥️",
    title: "Website Development",
    description:
      "Our design experts craft visually stunning and user-friendly websites optimized for performance and conversion.",
  },
  {
    id: 5,
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Build powerful, intuitive mobile apps for iOS and Android that deliver seamless user experiences.",
  },
  {
    id: 6,
    icon: "⚙️",
    title: "Web Application Development",
    description:
      "Robust and scalable web applications tailored to your business needs using modern frameworks and best practices.",
  },
  {
    id: 2,
    icon: "📈",
    title: "Performance Marketing",
    description:
      "Drive measurable results with ROI-focused ad campaigns across Google Ads, Meta Ads, and more.",
  },
  {
    id: 7,
    icon: "🎥",
    title: "Video Production",
    description:
      "Captivate your audience with high-quality videos designed for storytelling, branding, and conversions.",
  },
  {
    id: 1,
    icon: "📊",
    title: "Social Media Management",
    description:
      "Build engagement and community across platforms with strategic content and daily management.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 " id="services">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col justify-between gap-16 items-start">
        {/* Left Side */}
        <div className="lg:w-[33%] w-full lg:sticky relative lg:top-28 top-0">
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

  <button
                  type="submit"
                  className=" bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full w-auto px-8 py-3.5 text-white flex items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
                >
                  <span>All Services</span>
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="transition-transform duration-300 group-hover:translate-x-1" 
                  />
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
          <Link to={`/services/${service.id}`} 
                          type="submit"
                          className=" bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full w-auto px-8 py-3.5 text-white flex items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
                        >
                          <span>More Details</span>
                          <FontAwesomeIcon 
                            icon={faArrowRight} 
                            className="transition-transform duration-300 group-hover:translate-x-1" 
                          />
                        </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
