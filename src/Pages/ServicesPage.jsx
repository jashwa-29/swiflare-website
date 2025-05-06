import React from 'react';
import { useInView } from 'react-intersection-observer';

import socialMediaImage from '../assets/Social Media Management.jpg';
import performanceMarketingImage from '../assets/Performance Marketing.jpg';
import webDevImage from '../assets/Website Development.jpg';
import seoImage from '../assets/SEO Services.jpg';
import mobileAppImage from '../assets/Mobile Applications.jpg';
import webAppImage from '../assets/Web Applications.jpg';
import videoProductionImage from '../assets/Video Production.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    id: 1,
    title: "Social Media Management",
    description: "Strategic management of your social platforms to build brand awareness and engagement.",
    image: socialMediaImage,
    features: ["Content Strategy", "Community Management", "Analytics Reporting"]
  },
  {
    id: 2,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable results and ROI.",
    image: performanceMarketingImage,
    features: ["PPC Advertising", "Conversion Optimization", "Campaign Management"]
  },
  {
    id: 3,
    title: "Website Development",
    description: "Modern, responsive websites designed for performance and user experience.",
    image: webDevImage,
    features: ["Custom CMS", "E-commerce Solutions", "Responsive Design"]
  },
  {
    id: 4,
    title: "SEO Services",
    description: "Organic growth strategies to improve search visibility and traffic.",
    image: seoImage,
    features: ["Keyword Research", "Technical SEO", "Content Optimization"]
  },
  {
    id: 5,
    title: "Mobile Applications",
    description: "Native and cross-platform apps built for user retention and engagement.",
    image: mobileAppImage,
    features: ["iOS & Android", "User Testing", "App Store Optimization"]
  },
  {
    id: 6,
    title: "Web Applications",
    description: "Custom web-based solutions tailored to your business processes.",
    image: webAppImage,
    features: ["SAAS Development", "API Integration", "Cloud Deployment"]
  },
  {
    id: 7,
    title: "Video Production",
    description: "Professional video content that tells your brand story effectively.",
    image: videoProductionImage,
    features: ["Commercial Videos", "Animation", "Editing & Post-Production"]
  }
];

const ServiceCard = ({ service }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`group relative h-80 overflow-hidden rounded-lg border border-gray-800 hover:border-[#AD49E1] transition-all duration-500 cursor-pointer ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } transform transition-opacity transition-transform duration-700 ease-out`}
    >
      {inView && (
        <>
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#050516] via-[#050516cc] to-[#05051600] group-hover:via-[#050516aa] transition-all duration-500"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6">
            <h3 className="text-xl text-white main-font mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
              {service.title}
            </h3>
            <p className="text-gray-200 text-sm font-light mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              {service.description}
            </p>
            <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
              <ul className="space-y-1.5">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#AD49E1] rounded-full mr-2"></span>
                    <span className="text-xs font-light text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#050516] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl main-font text-gray-100 mb-3">
            Our Services
          </h1>
          <p className="text-[#A9AABA] text-[17px]">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-5 text-sm">
            Ready to transform your business with our expertise?
          </p>
            <button
                          type="submit"
                          className=" bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full w-auto px-8 py-3.5 text-white flex items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
                        >
                    <span>Get In Touch</span>
                    {/* Scale only the icon on hover */}
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

export default ServicesPage;
