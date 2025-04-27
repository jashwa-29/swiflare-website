import React from 'react';

const projects = [
  {
    id: 1,
    tags: ['Boost', 'Website', 'Marketing'],
    image: 'https://via.placeholder.com/400x300', // replace with actual image
    title: 'Growth Marketing For Anox',
  },
  {
    id: 2,
    tags: ['Packaging', 'Design', 'Marketing'],
    image: 'https://via.placeholder.com/400x300', // replace with actual image
    title: 'Packaging Design For Kopiku',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-[#0A0A23] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Featured Project
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Check Our Project With Real Results
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Dive into our portfolio and discover the remarkable success stories behind Campaign.
          Explore our work and envision how we can elevate your brand to new heights.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#1A1A2E] p-4 rounded-2xl shadow-lg">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#2E2E4E] text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <div className="ml-auto">
                  <button className="bg-blue-400 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              </div>
              <div className="bg-white bg-opacity-80 backdrop-blur-sm py-2 mt-4 rounded text-black text-lg font-semibold">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
