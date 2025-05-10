import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

import aesthetichospital from '../assets/Doctor Project.png'; 
import mythrigleams from '../assets/Mythris Gleams.png';
import faberproject from '../assets/Faber.png'
import equitasproject from '../assets/Equitas.png' 
import goldfinproject from '../assets/Gold Loan.png'
import iniproject from '../assets/Ini.png'
import goldenhiveproject from '../assets/Honey.png'
import digitalarchitectsproject from '../assets/Digital Marketing Agency.png'
import minyfoproject from '../assets/Minyfo.png'

const projects = [
  {
    id: 1,
    name: 'Aesthetic Studio',
    description: 'A modern website developed for a hospital, focusing on aesthetics and usability.',
    categories: ['Web Development', 'UI/UX Design', 'Healthcare'],
    image: aesthetichospital,
    url: '/',
  },
    {
    id: 2,
    name: 'Mythri Gleams',
    description: 'A charming website built for a brand specializing in miniature and personalized gifts, highlighting their creativity and craftsmanship.',
    categories: ['E-commerce', 'Branding', 'Gift Design'],
    image: mythrigleams, // Make sure this image is imported or defined
    url: '/',
  },
    {
    id: 3,
    name: 'Faber Appliances',
    description: 'Corporate website crafted for Faber, showcasing their premium kitchen appliances including chimneys, refrigerators, and cooktops.',
    categories: ['Corporate', 'Product Showcase', 'Home Appliances'],
    image: faberproject, // Ensure this image is defined or imported
    url: '/',
  },
    {
    id: 4,
    name: 'Equitas',
    description: 'A modern corporate website built for Equitas, highlighting their services, values, and brand presence with a clean design.',
    categories: ['Corporate', 'Services', 'Web Design'],
    image: equitasproject, // Ensure this image is defined or imported
    url: '/',
  },
    {
    id: 5,
    name: 'Gold Loans',
    description: 'A trusted and informative website for a gold loan company, designed to clearly present loan options, benefits, and secure processing.',
    categories: ['Finance', 'Gold Loans', 'Informational'],
    image: goldfinproject, // Replace with your actual image reference
    url: '/',
  },
   {
    id: 6,
    name: 'INI ',
    description: 'An elegant and user-friendly platform for INI, offering a wide range of eBooks and physical books with smooth browsing and purchase options.',
    categories: ['E-commerce', 'Books', 'Digital Content'],
    image: iniproject, // Replace with your actual image import
    url: '/',
  },
    {
    id: 7,
    name: 'Golden Hive Honey',
    description: 'A nature-inspired website designed for Golden Hive, showcasing their pure honey products with a focus on quality, sustainability, and brand storytelling.',
    categories: ['FMCG', 'Organic Products', 'Branding'],
    image: goldenhiveproject, // Make sure to import or define this image
    url: '/',
  },
  {
    id: 8,
    name: 'Digital Architects',
    description: 'A dynamic and results-driven website built for Digital Architects, highlighting their expertise in SEO, social media, performance marketing, and brand strategy.',
    categories: ['Digital Marketing', 'Agency', 'SEO & Advertising'],
    image: digitalarchitectsproject, // Replace with the actual image reference
    url: '/',
  },
    {
    id: 9,
    name: 'MINYFO',
    description: 'An artisanal e-commerce website for MINYFO, showcasing handcrafted, one-of-a-kind jewelry pieces with a focus on elegance and individuality.',
    categories: ['E-commerce', 'Jewelry', 'Handcrafted'],
    image: minyfoproject, // Replace with your actual image import or path
    url: '/',
  },
  
];

const Portfolio = () => {
  return (
    <section className=" py-20 px-4 md:px-8 lg:px-16 mt-14">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl md:text-5xl">
            Our Works and <span className="text-[#3FA2F6]">Portfolio</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-[#C6C7D5]">
            We'd love to hear from you. Reach out for collaborations, questions, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-[#FFFFFF38] bg-[#0D0D1A] rounded-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Clean image container without background or extra padding */}
              <div className="p-6 pb-0">
                <div className="relative w-full aspect-video rounded-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 pt-4 flex-grow flex flex-col">
                <div className="mb-4">
                  <h5 className="text-xl font-semibold text-white mb-2">{project.name}</h5>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-[#1A1A2E] px-3 py-1 text-xs font-medium uppercase text-[#C6C7D5] border border-[#FFFFFF38]"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={project.url}
                    className="inline-flex items-center text-[#3FA2F6] hover:text-[#AD49E1] font-bold text-sm uppercase transition group"
                  >
                    View Project
                    <FiArrowUpRight className="ml-2 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;