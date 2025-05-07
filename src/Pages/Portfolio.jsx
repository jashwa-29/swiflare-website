import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

import aesthetichospital from '../assets/image.png'; // Replace with actual image

const projects = [
  {
    id: 1,
    name: 'Growth Marketing For Anox',
    description: 'Full-stack performance marketing solution to increase visibility and conversions.',
    categories: ['Boost', 'Website', 'Marketing'],
    image: aesthetichospital,
    url: '/projects/anox',
  },
  {
    id: 2,
    name: 'Packaging Design For Kopiku',
    description: 'Brand identity and packaging design for a premium coffee product.',
    categories: ['Packaging', 'Design', 'Marketing'],
    image: aesthetichospital,
    url: '/projects/kopiku',
  },
  {
    id: 3,
    name: 'SEO & Dev for Zenix',
    description: 'End-to-end SEO optimization and web development for a tech startup.',
    categories: ['SEO', 'Development'],
    image: aesthetichospital,
    url: '/projects/zenix',
  },
];

const Portfolio = () => {
  return (
    <section className="bg-[#050516] py-20 px-4 md:px-8 lg:px-16 mt-14">
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