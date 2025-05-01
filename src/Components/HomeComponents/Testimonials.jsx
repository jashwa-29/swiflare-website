import React from 'react';

const testimonialsData = [
  {
    quote:
      'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    name: 'Devon Lane',
    title: 'President of Sales',
    image: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg',
  },
  {
    quote:
      'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.',
    name: 'Ronald Richards',
    title: 'Marketing Coordinator',
    image: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg',
  },
  {
    quote:
      'This is a top quality product. No need to think twice before making it live on web.',
    name: 'Jane Cooper',
    title: 'Dog Trainer',
    image: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg',
  },
  {
    quote:
      'Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.',
    name: 'Theresa Webb',
    title: 'Web Designer',
    image: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg',
  },
  {
    quote:
      'My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    name: 'Darlene Robertson',
    title: 'Medical Assistant',
    image: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg',
  },
  {
    quote:
      'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    name: 'Floyd Miles',
    title: 'Nursing Assistant',
    image: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-28">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-[45px] leading-tight mb-4 text-white capitalize">
            What our customers say
          </h2>
          <p className="text-[#A9AABA] text-[17px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis.
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
