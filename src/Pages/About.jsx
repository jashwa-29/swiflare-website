import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Banner from '../Components/HomeComponents/Banner';
import { Helmet } from "react-helmet";

const About = () => {
  const [openSection, setOpenSection] = useState(null);
  
    const toggleSection = (index) => {
      setOpenSection(openSection === index ? null : index);
    };
  
    const sections = [
      {
        title: "01. Our History",
        content:
          "Swiflare AI Innovations was founded in 2015 by a team of tech enthusiasts and creative strategists with a passion for transforming digital landscapes. What began as a small collective focused on web development quickly evolved into a multi-disciplinary agency offering AI-powered solutions, mobile and web applications, and digital marketing. Over the years, we've empowered startups, enterprises, and global brands to scale with smart technology and human-centric design.",
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
    <>
           <Helmet>
        <title>My Page Title</title>
          <meta name="description" content="This is the description for SEO." />
      </Helmet>
    <div className=" text-white px-4 mx-auto sm:px-6 lg:px-28 mt-32
"><div className="text-center mb-12">
<h1 className="text-white text-4xl md:text-5xl">
  About Our <span className="text-[#3FA2F6]">Company</span>
</h1>
<p className="mt-5 max-w-xl mx-auto text-lg text-[#C6C7D5]">
  We are a passionate team dedicated to delivering innovative solutions and exceptional service to our clients worldwide.
</p>
</div>
         <section className="">
            <div className="relative bg-[url('../src/assets/about.png')] bg-cover bg-no-repeat w-full mx-auto rounded-2xl overflow-hidden h-[540px] flex justify-start items-end p-7">
              {/* Overlay with color #021644 */}
              <div className="absolute inset-0 bg-[#021644] opacity-50"></div> 
              {/* Custom overlay color with opacity */}
      
              {/* Content */}
              <div className="bg-transparent backdrop-blur-md bg-opacity-20 border border-gray-300 p-6 rounded-2xl w-[350px] shadow-md">
      
                <h2 className="text-2xl font-semibold text-white mb-2">Swiflare AI Innovations</h2>
                <hr className="border-t border-gray-300 mb-4" />
      
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-4">
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/65.jpg" alt="User 3" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/76.jpg" alt="User 4" />
                  </div>
      
                  <div>
                    <div className="flex space-x-1 mb-1">
                      <div className="w-3 h-3 border-2 border-yellow-500"></div>
                      <div className="w-3 h-3 border-2 border-yellow-500"></div>
                      <div className="w-3 h-3 border-2 border-yellow-500"></div>
                      <div className="w-3 h-3 border-2 border-yellow-500"></div>
                      <div className="w-3 h-3 border-2 border-yellow-500"></div>
                    </div>
                    <p className="text-white text-sm font-semibold">From 40+ Clients</p>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="min-h-screen text-white flex flex-col items-center justify-center py-12">
        <div className="w-full flex lg:flex-row flex-col justify-between gap-16">
  
          {/* Left Side - Accordion List */}
          <div className="space-y-4 lg:w-[40%] w-full z-10">
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
          </section>
      {/* About Content */}
  

      {/* How We Work Section */}
      <section className="py-24 ">
        <div className=" ">
          <div className="text-center mb-20">
            <h2 className="text-4xl main-font mb-4">How Our Team Works</h2>
            <p className="text-xl text-[#C6C7D5] sub-font max-w-3xl mx-auto">Our proven process for delivering exceptional results</p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#3FA2F6] to-[#AD49E1] transform -translate-x-1/2"></div>
            
            {/* Process Steps */}
            <div className="space-y-20 lg:space-y-32">
              {[
                {
                  step: "01",
                  title: "Discovery & Research",
                  description: "We begin by deeply understanding your business, audience, and objectives through comprehensive research and stakeholder interviews.",
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Strategy & Planning",
                  description: "Our team crafts a tailored roadmap with clear milestones, KPIs, and technical specifications to guide the project.",
                  icon: "📊"
                },
                {
                  step: "03",
                  title: "Design & Prototyping",
                  description: "We create intuitive user experiences and stunning interfaces, validated through rapid prototyping and user testing.",
                  icon: "🎨"
                },
                {
                  step: "04",
                  title: "Development & Testing",
                  description: "Our engineers build robust solutions using agile methodologies, with continuous testing and quality assurance.",
                  icon: "💻"
                },
                {
                  step: "05",
                  title: "Launch & Optimization",
                  description: "We deploy your solution and continuously monitor performance, making data-driven optimizations for maximum impact.",
                  icon: "🚀"
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-5/12 mb-8 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-[#0A0A14] p-8 rounded-2xl border border-[#3a3a50] hover:border-[#3FA2F6] transition-all h-full">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <span className="text-sm font-mono text-[#3FA2F6]">Step {item.step}</span>
                      <h3 className="text-2xl main-font mb-3">{item.title}</h3>
                      <p className="text-[#C6C7D5] sub-font">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/12 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#3FA2F6] to-[#AD49E1] flex items-center justify-center text-xl font-bold z-10">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className=" ">
          <div className="text-center mb-20">
            <h2 className="text-4xl main-font mb-4">Our Core Values</h2>
            <p className="text-xl text-[#C6C7D5] sub-font max-w-3xl mx-auto">The principles that guide every decision we make</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Innovation", 
                description: "We challenge the status quo and push boundaries to create groundbreaking solutions.",
                icon: "💡"
              },
              { 
                title: "Integrity", 
                description: "We operate with honesty, transparency, and accountability in all our relationships.",
                icon: "🤝"
              },
              { 
                title: "Excellence", 
                description: "We pursue mastery in everything we do, delivering nothing short of exceptional quality.",
                icon: "🏆"
              },
              { 
                title: "Collaboration", 
                description: "We believe the best solutions emerge from diverse perspectives working in harmony.",
                icon: "🌐"
              },
              { 
                title: "Empathy", 
                description: "We design with deep understanding of human needs at the core of every solution.",
                icon: "❤️"
              },
              { 
                title: "Growth", 
                description: "We foster continuous learning and evolution for our team and clients alike.",
                icon: "📈"
              },
            ].map((value, index) => (
              <div key={index} className="bg-[#0D0D1A] p-8 rounded-2xl border border-[#3a3a50] hover:border-[#3FA2F6] transition-all group">
                <div className="text-4xl mb-6 group-hover:text-[#3FA2F6] transition-all">{value.icon}</div>
                <h3 className="text-2xl main-font mb-3">{value.title}</h3>
                <p className="text-[#C6C7D5] sub-font">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl main-font mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-[#C6C7D5] sub-font">Everything you need to know about Swiflare</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "What industries do you specialize in?",
                answer: "We work across multiple industries including fintech, healthcare, e-commerce, and education. Our solutions are tailored to meet the unique needs of each sector."
              },
              {
                question: "How do you approach a new project?",
                answer: "We follow a human-centered design process that begins with deep research, followed by prototyping, testing, and iterative development to ensure optimal results."
              },
              {
                question: "What makes Swiflare different from other agencies?",
                answer: "Our unique blend of technical expertise, design thinking, and AI innovation allows us to create solutions that are not just functional but transformative."
              },
              {
                question: "Do you offer ongoing support after launch?",
                answer: "Absolutely. We provide comprehensive maintenance packages and are committed to the long-term success of every project we deliver."
              },
            ].map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

   

    </div>
    <Banner/>
    </>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const contentAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    height: isOpen ? 'auto' : 0,
    marginTop: isOpen ? 16 : 0,
    config: { tension: 250, friction: 20 },
  });

  return (
    <div className=" rounded-xl border border-[#3a3a50] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-[#1f1f3d] transition-all"
      >
        <h3 className="text-xl font-medium">{question}</h3>
        <FontAwesomeIcon 
          icon={isOpen ? faChevronUp : faChevronDown} 
          className="text-gray-400 ml-4 transition-transform"
        />
      </button>
      
      <animated.div style={contentAnimation} className="px-6 pb-6 text-gray-400">
        {answer}
      </animated.div>
    </div>
  );
};

export default About;