import React from 'react';
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'

const testimonialsData = [
  {
    quote:
      'Swiflare AI transformed our outdated website into a cutting-edge web app with seamless UX. Their AI-driven development approach reduced our load time by 60% and boosted conversions instantly!',
    name: 'Rajesh Kumar',
    title: 'CEO, TechNova Solutions',
    image: user1, // Indian exec (Unsplash)
  },
  {
    quote:
      'Their digital marketing team is a game-changer! Our mobile app downloads grew by 300% in 3 months thanks to Swiflare’s targeted AI ad campaigns and SEO strategies.',
    name: 'Priya Sharma',
    title: 'CMO, UrbanMingle',
    image: user2,
  },
  {
    quote:
      'As a startup, Swiflare’s cost-effective AI web solutions helped us launch faster. Their team automated our CRM integration, saving us 20+ hours/week in manual work!',
    name: 'Arun Patel',
    title: 'Founder, Finova Labs',
    image: user3, // Indian tech entrepreneur
  }
];

const Testimonials = () => {
  return (
    <section className="pb-10 sm:py-16 lg:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-28">
        <div className="max-w-2xl mx-auto text-center mb-10">
        <div className="text-[#C6C7D5] border-[1px] border-[#FFFFFF38] sub-font rounded-full px-5 py-2 text-sm font-medium w-fit mx-auto mb-5 bg-[radial-gradient(at_center_center,_#021644_0%,_#F2295B00_100%)]
">
          Testimonials
        </div>
          <h2 className="text-4xl md:text-[45px] leading-tight mb-4 text-white capitalize">
            What our customers say
          </h2>
          <p className="text-[#A9AABA] text-[17px]">
          Don’t just take our word for it—here’s what our clients say.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#191930] border border-[#FFFFFF29] rounded-md"
            >
              <div className="flex flex-col justify-between flex-1 p-8">
                <blockquote>
                  <p className="text-lg text-[#A9AABA]">“{item.quote}”</p>
                </blockquote>
                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-200 truncate">{item.name}</p>
                      <p className="text-base text-gray-400 truncate">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
