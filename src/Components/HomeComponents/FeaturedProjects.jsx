import React from 'react';
import aesthetichospital from '../../assets/Doctor Project.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import mythrigleams from '../../assets/Mythris Gleams.png';
import faberproject from '../../assets/Faber.png'
import equitasproject from '../../assets/Equitas.png' 
import goldfinproject from '../../assets/Gold Loan.png'
import iniproject from '../../assets/Ini.png'
import goldenhiveproject from '../../assets/Honey.png'
import digitalarchitectsproject from '../../assets/Digital Marketing Agency.png'
import minyfoproject from '../../assets/Minyfo.png'

const projects = [
  {
    id: 1,
    tags: ['Healthcare', 'Website', 'UI/UX Design'],
    image: aesthetichospital, // Make sure to import or define this image
    title: 'Website for Aesthetic Studio',
    link: '/projects/aesthetic-studio-website',
  },
  {
    id: 2,
    tags: ['E-commerce', 'Website', 'Gift Design'],
    image: mythrigleams, // Replace with correct image reference
    title: 'Personalized Gifts for Mythri Gleams',
    link: '/projects/mythri-gleams-gift-website',
  },



  {
    id: 6,
    tags: ['E-commerce', 'Website', 'Books'],
    image: iniproject, // Replace with correct image reference
    title: 'eCommerce for INI Books',
    link: '/projects/ini-books-website',
  },
  {
    id: 7,
    tags: ['FMCG', 'Website', 'Branding'],
    image: goldenhiveproject, // Replace with correct image reference
    title: 'Website for Golden Hive Honey',
    link: '/projects/golden-hive-honey-website',
  },
  {
    id: 8,
    tags: ['Digital Marketing', 'Website', 'SEO'],
    image: digitalarchitectsproject, // Replace with correct image reference
    title: 'Website for Digital Architects',
    link: '/projects/digital-architects-website',
  },
  {
    id: 9,
    tags: ['E-commerce', 'Website', 'Jewelry'],
    image: minyfoproject, // Replace with correct image reference
    title: 'eCommerce for MINYFO Jewelry',
    link: '/projects/minyfo-jewelry-website',
  },
];


const FeaturedProjects = () => {
  return (
    <section className="bg-[radial-gradient(at_bottom_center,_#021644_0%,_#050516_70%)] py-16 px-4 mx-auto sm:px-6 lg:px-28">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <div className="text-[#C6C7D5] border-[1px] border-[#FFFFFF38] sub-font rounded-full px-5 py-2 text-sm font-medium w-fit mx-auto mb-5 bg-[radial-gradient(at_center_center,_#021644_0%,_#F2295B00_100%)]">
            Featured Projects
          </div>
        </div>
        <h2 className="text-4xl md:text-[45px] text-white mb-4 main-font">
          Check Our Project With Real Results
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Dive into our portfolio and discover the remarkable success stories behind our campaigns.
          Explore our work and envision how we can elevate your brand to new heights.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              to={project.link}
              key={project.id}
              className="transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="border-[1px] border-[#FFFFFF38] rounded-2xl p-3 group bg-[#1A1A1A] hover:shadow-lg">
                <div className="px-4 pt-7 p-2 rounded-2xl relative transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="border-[1px] border-[#FFFFFF38] text-[#A9AABA] main-font font-medium text-sm px-5 py-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    <div className="ml-auto">
                      <div className="bg-[#3FA2F6] p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="bg-white/60 py-3 mt-4 rounded text-left ps-3 uppercase w-[80%] mx-auto text-black text-xl font-semibold absolute bottom-4 left-0 right-0">
                    {project.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex items-center justify-center gap-4 p-6 rounded-2xl max-w-3xl mx-auto mt-12">
        <div className="text-right">
          <h3 className="text-white text-lg sub-font mb-1">Do You Want to See More?</h3>
          <p className="text-gray-400 text-sm">Explore our full portfolio</p>
        </div>

        <Link
          to="/projects"
          className="bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full w-auto px-8 py-3.5 text-white flex items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
        >
          <span>Portfolio</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;