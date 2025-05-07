import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

// Import images
import socialMediaImage from '../assets/Social Media Management.jpg';
import performanceMarketingImage from '../assets/Performance Marketing.jpg';
import webDevImage from '../assets/Website Development.jpg';
import seoImage from '../assets/SEO Services.jpg';
import mobileAppImage from '../assets/Mobile Applications.jpg';
import webAppImage from '../assets/Web Applications.jpg';
import videoProductionImage from '../assets/Video Production.jpg';
import Banner from '../Components/HomeComponents/Banner'
import { section } from 'framer-motion/client';

const servicesData = [
  {
    id: 1,
    title: "Social Media Management",
    description: "Strategic management of your social platforms to build brand awareness and engagement.",
    detailedDescription: "Our comprehensive social media management service takes the burden off your shoulders while ensuring your brand maintains a strong, consistent presence across all platforms. We develop customized strategies tailored to your business goals, audience demographics, and industry trends to maximize your online impact.",
    image: socialMediaImage,
    features: [
      { title: "Content Strategy", description: "Tailored content calendar aligned with your brand voice and marketing objectives" },
      { title: "Community Management", description: "Daily engagement to build relationships with your audience and customers" },
      { title: "Analytics Reporting", description: "Monthly performance insights with actionable recommendations" }
    ],
    benefits: [
      { title: "Increased brand visibility", description: "Our clients see 2-3x more profile visits within 3 months" },
      { title: "Higher engagement rates", description: "Average 45% increase in engagement across platforms" },
      { title: "Data-driven strategies", description: "Continuous optimization based on performance metrics" }
    ],
    process: [
      { step: 1, title: "Discovery", description: "We analyze your business, competitors, and target audience" },
      { step: 2, title: "Strategy", description: "Custom content and posting strategy development" },
      { step: 3, title: "Content Creation", description: "Professional content tailored to each platform" },
      { step: 4, title: "Engagement", description: "Active community management and interaction" },
      { step: 5, title: "Reporting", description: "Monthly performance analysis and optimization" }
    ],
    faqs: [
      { question: "How often will you post on my accounts?", answer: "Posting frequency is customized based on your industry and platform, typically ranging from 3-5 times per week." },
      { question: "Do I need to provide content?", answer: "No, we handle content creation. You can provide brand assets if you wish." },
      { question: "How quickly will I see results?", answer: "You’ll typically see increased engagement within 1-2 months and more measurable results by month 3." }
    ],
    seoTitle: "Professional Social Media Management Services | Swiflare AI Innovations",
    seoDescription: "Boost your brand's online presence with expert social media management. Custom strategies for Facebook, Instagram, LinkedIn & more."
  },
  {
    id: 2,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable results and ROI.",
    detailedDescription: "Our performance marketing solutions focus on driving tangible business outcomes through precisely targeted digital campaigns. We leverage cutting-edge tools and analytics to ensure every dollar spent works hard for your business, with complete transparency and measurable results.",
    image: performanceMarketingImage,
    features: [
      { title: "PPC Advertising", description: "Strategic paid campaigns on Google, Facebook, Instagram, and LinkedIn" },
      { title: "Conversion Optimization", description: "Continuous testing to improve landing page performance and ROI" },
      { title: "Campaign Management", description: "24/7 monitoring and optimization of your ad spend" }
    ],
    benefits: [
      { title: "Immediate traffic generation", description: "Start driving qualified leads within 48 hours of launch" },
      { title: "Lower acquisition costs", description: "30-50% cost-per-lead savings on average" },
      { title: "Scalable growth", description: "Strategies that grow with your business and budget" }
    ],
    process: [
      { step: 1, title: "Audience Research", description: "Identify and segment your ideal customers" },
      { step: 2, title: "Channel Selection", description: "Choose the most effective platforms" },
      { step: 3, title: "Campaign Setup", description: "Create optimized ad sets and landing pages" },
      { step: 4, title: "Launch & Monitor", description: "24/7 campaign oversight and adjustment" },
      { step: 5, title: "Optimization", description: "A/B testing and real-time refinements" }
    ],
    faqs: [
      { question: "What's your minimum budget requirement?", answer: "We recommend starting with at least $1,500/month." },
      { question: "How do you measure success?", answer: "We focus on ROI, cost per acquisition, and customer lifetime value." },
      { question: "Which platforms do you specialize in?", answer: "Google Ads, Meta Ads (Facebook/Instagram), LinkedIn, and display networks." }
    ],
    seoTitle: "Results-Driven Performance Marketing Agency | Swiflare AI Innovations",
    seoDescription: "Maximize your marketing ROI with performance marketing services. We deliver measurable results through data-driven ad campaigns."
  },
  {
    id: 3,
    title: "Website Development",
    description: "Modern, responsive websites designed for performance and user experience.",
    detailedDescription: "Our website development service is focused on creating high-performing, SEO-optimized, and user-friendly websites that represent your brand and support business growth. From concept to deployment, we ensure your site delivers results.",
    image: webDevImage,
    features: [
      { title: "Custom CMS", description: "Flexible content management systems built to your business needs" },
      { title: "E-commerce Solutions", description: "Robust online store integration and shopping experience" },
      { title: "Responsive Design", description: "Websites that adapt perfectly to all screen sizes and devices" }
    ],
    benefits: [
      { title: "Faster load times", description: "Optimized code and assets for fast browsing" },
      { title: "Improved UX", description: "User-centric designs tailored to your audience" },
      { title: "SEO-friendly architecture", description: "Structured for higher search engine visibility" }
    ],
    process: [
      { step: 1, title: "Planning", description: "Define project scope and technical specs" },
      { step: 2, title: "Design", description: "Wireframing, mockups, and design revisions" },
      { step: 3, title: "Development", description: "Frontend and backend implementation" },
      { step: 4, title: "Testing", description: "Browser/device compatibility and QA" },
      { step: 5, title: "Launch", description: "Deployment and post-launch support" }
    ],
    faqs: [
      { question: "Can I update the site myself?", answer: "Yes, with a custom CMS and admin panel." },
      { question: "Do you provide hosting?", answer: "Yes, we offer secure managed hosting." },
      { question: "What’s the average build time?", answer: "Around 4–6 weeks, depending on complexity." }
    ],
    seoTitle: "Custom Website Development Company | Swiflare AI Innovations",
    seoDescription: "Build a fast, modern website with Swiflare. Custom web design, development, and SEO-ready architecture."
  },
  {
    id: 4,
    title: "SEO Services",
    description: "Organic growth strategies to improve search visibility and traffic.",
    detailedDescription: "We help you climb search engine rankings with ethical SEO techniques. From in-depth keyword research to ongoing technical audits, we focus on long-term visibility and increased traffic that converts.",
    image: seoImage,
    features: [
      { title: "Keyword Research", description: "Identify high-converting keywords tailored to your niche" },
      { title: "Technical SEO", description: "Site audits, speed optimization, and crawlability improvements" },
      { title: "Content Optimization", description: "Enhance existing and new content for maximum relevance" }
    ],
    benefits: [
      { title: "Higher search rankings", description: "Get found by users actively searching for your services" },
      { title: "Increased organic traffic", description: "Grow your website visitors without paid ads" },
      { title: "Better ROI", description: "Long-term gains from sustainable SEO strategies" }
    ],
    process: [
      { step: 1, title: "SEO Audit", description: "Evaluate your site's current performance" },
      { step: 2, title: "Keyword Strategy", description: "Create a roadmap targeting relevant keywords" },
      { step: 3, title: "On-page Optimization", description: "Update titles, meta descriptions, headers, and internal links" },
      { step: 4, title: "Technical Fixes", description: "Resolve indexing, speed, and mobile issues" },
      { step: 5, title: "Monitoring & Reporting", description: "Track keyword rankings and traffic improvements" }
    ],
    faqs: [
      { question: "When will I see results?", answer: "SEO is a long-term strategy. Expect noticeable gains in 3–6 months." },
      { question: "Do you write content too?", answer: "Yes, we include content writing and optimization." },
      { question: "Can you help with local SEO?", answer: "Yes, we specialize in Google Business Profile and local visibility." }
    ],
    seoTitle: "Expert SEO Services & Organic Search Optimization | Swiflare AI Innovations",
    seoDescription: "Improve your search engine rankings with Swiflare’s SEO services. Ethical, technical, and content-based optimization."
  },
  {
    id: 5,
    title: "Mobile Applications",
    description: "Native and cross-platform apps built for user retention and engagement.",
    detailedDescription: "We build intuitive, high-performance mobile applications that are scalable, secure, and tailored to your users’ needs. Whether it's iOS, Android, or cross-platform, we ensure your app stands out in the marketplace.",
    image: mobileAppImage,
    features: [
      { title: "iOS & Android", description: "Native and cross-platform app development" },
      { title: "User Testing", description: "In-depth usability testing and bug fixes" },
      { title: "App Store Optimization", description: "Enhanced visibility and ranking in app stores" }
    ],
    benefits: [
      { title: "High user retention", description: "Apps designed for optimal UX and engagement" },
      { title: "Faster time-to-market", description: "Agile development and rapid deployment" },
      { title: "Cross-platform support", description: "Reach more users with a single codebase" }
    ],
    process: [
      { step: 1, title: "Planning", description: "Define app goals, features, and user flows" },
      { step: 2, title: "UI/UX Design", description: "Create wireframes and interactive prototypes" },
      { step: 3, title: "Development", description: "Code the app using best practices for scalability" },
      { step: 4, title: "Testing", description: "Run functional, performance, and user tests" },
      { step: 5, title: "Launch & Support", description: "Deploy to app stores and provide ongoing updates" }
    ],
    faqs: [
      { question: "Do you develop both Android and iOS?", answer: "Yes, we build for both natively or using cross-platform frameworks." },
      { question: "Can you maintain my app post-launch?", answer: "Absolutely. We offer update and support packages." },
      { question: "How long does development take?", answer: "Typically 6–10 weeks depending on features." }
    ],
    seoTitle: "Mobile App Development Company | Swiflare AI Innovations",
    seoDescription: "Custom iOS and Android app development by Swiflare. Scalable, secure mobile applications for startups and enterprises."
  },
  {
    id: 6,
    title: "Web Applications",
    description: "Custom web-based solutions tailored to your business processes.",
    detailedDescription: "We create modern web applications that automate workflows, improve productivity, and scale with your business. From SaaS platforms to internal tools, our apps are built for performance and usability.",
    image: webAppImage,
    features: [
      { title: "SAAS Development", description: "Cloud-based software platforms for end users" },
      { title: "API Integration", description: "Seamless third-party integrations and automation" },
      { title: "Cloud Deployment", description: "Secure hosting and DevOps for scalability" }
    ],
    benefits: [
      { title: "Process automation", description: "Replace manual tasks with digital workflows" },
      { title: "Real-time data access", description: "Live dashboards and reporting capabilities" },
      { title: "Enterprise-ready", description: "Scalable architecture for growing teams" }
    ],
    process: [
      { step: 1, title: "Requirement Gathering", description: "Map business needs into technical specs" },
      { step: 2, title: "Architecture Design", description: "Plan database, user flows, and APIs" },
      { step: 3, title: "Agile Development", description: "Iterative releases and feature rollout" },
      { step: 4, title: "Quality Assurance", description: "Test for performance, bugs, and security" },
      { step: 5, title: "Deployment", description: "Go live and monitor performance" }
    ],
    faqs: [
      { question: "Can you build internal company tools?", answer: "Yes, we specialize in custom portals and dashboards." },
      { question: "What technologies do you use?", answer: "React, Node.js, Firebase, AWS, PostgreSQL and more." },
      { question: "Do you support ongoing development?", answer: "Yes, we offer long-term feature expansion and maintenance." }
    ],
    seoTitle: "Custom Web App Development Services | Swiflare AI Innovations",
    seoDescription: "Build powerful web applications with Swiflare. SAAS platforms, dashboards, and custom internal tools tailored to your needs."
  },
  {
    id: 7,
    title: "Video Production",
    description: "Professional video content that tells your brand story effectively.",
    detailedDescription: "From corporate videos to animated explainers, we produce stunning video content that drives engagement. Our team handles scripting, shooting, editing, and distribution strategy for maximum impact.",
    image: videoProductionImage,
    features: [
      { title: "Commercial Videos", description: "Promotional content for brands and campaigns" },
      { title: "Animation", description: "2D and motion graphics explainers" },
      { title: "Editing & Post-Production", description: "Polished storytelling with transitions, music, and color grading" }
    ],
    benefits: [
      { title: "Higher engagement", description: "Video boosts engagement by up to 80%" },
      { title: "Versatile content", description: "Reusable across platforms and campaigns" },
      { title: "Professional quality", description: "Filmed and edited with cinematic precision" }
    ],
    process: [
      { step: 1, title: "Briefing", description: "Understand goals, audience, and story" },
      { step: 2, title: "Scripting", description: "Write compelling narrative and voiceover" },
      { step: 3, title: "Production", description: "Shoot or animate scenes as required" },
      { step: 4, title: "Editing", description: "Assemble visuals, sound, and effects" },
      { step: 5, title: "Delivery", description: "Export in multiple formats for distribution" }
    ],
    faqs: [
      { question: "Can you shoot on-site?", answer: "Yes, we can film at your location or remotely." },
      { question: "Do you write the script?", answer: "Yes, we handle scripting from scratch or can work with your brief." },
      { question: "How long is the turnaround?", answer: "2–4 weeks depending on video complexity." }
    ],
    seoTitle: "Video Production & Animation Services | Swiflare AI Innovations",
    seoDescription: "High-quality video production services for your brand. Commercials, animation, editing & more by Swiflare."
  }
];



const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">Service not found</div>;
  }

  return (
    <>
    
    <div className="min-h-screen mt-16 py-16 px-4 mx-auto sm:px-6 lg:px-28 bg-[#050516] text-white">
      {/* SEO Meta (would be handled by your framework) */}
      <title>{service.seoTitle}</title>
      <meta name="description" content={service.seoDescription} />

      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[#C6C7D5] sub-font">
          <Link to="/" className="hover:text-[#AD49E1] transition-colors sub-font">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-[#AD49E1] transition-colors sub-font">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-[#3FA2F6] sub-font">{service.title}</span>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl main-font text-white">
              {service.title}
            </h1>
            <p className="text-xl text-[#C6C7D5] font-normal sub-font">{service.detailedDescription}</p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full px-8 py-3.5 text-white inline-flex items-center gap-3 text-base sub-font hover:scale-[0.98] transition-all duration-300 group"
                aria-label={`Get started with ${service.title}`}
              >
                <span>Get Started</span>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden border border-gray-800">
            <img 
              src={service.image} 
              alt={`${service.title} service`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050516] via-[#050516cc] to-transparent"></div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* What We Offer */}
            <div className="bg-gradient-to-br from-[#050516] to-[#0f0f2e] p-8 rounded-xl border border-gray-800 hover:border-[#3FA2F6] transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-[#3FA2F6] p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl main-font text-white">
                  Our {service.title} Solutions
                </h2>
              </div>
              <p className="text-[#C6C7D5] sub-font mb-6 text-sm leading-relaxed">
                We deliver comprehensive {service.title.toLowerCase()} services designed to address your specific business challenges and opportunities:
              </p>
              <ul className="space-y-4">
  {service.features.map((feature, index) => (
    <li key={index} className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <div className="bg-[#3FA2F6] bg-opacity-20 p-1 rounded-full">
          <svg 
            className="w-3 h-3 text-[#3FA2F6]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
      </div>
      <div className="ml-3">
        <p className="text-white font-medium">{feature.title}</p>
        <p className="text-[#C6C7D5] sub-font text-sm mt-1">
          {feature.description}
        </p>
      </div>
    </li>
  ))}
</ul>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-[#050516] to-[#0f0f2e] p-8 rounded-xl border border-gray-800 hover:border-[#AD49E1] transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-[#AD49E1] p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl main-font text-white">
                  Business Benefits
                </h2>
              </div>
              <p className="text-[#C6C7D5] sub-font mb-6 text-sm leading-relaxed">
                When you partner with us for {service.title.toLowerCase()}, you gain measurable advantages that impact your bottom line:
              </p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#AD49E1] bg-opacity-20 p-1 rounded-full">
                        <svg className="h-3 w-3 text-[#AD49E1]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{benefit.title}</p>
                      <p className="text-[#C6C7D5] sub-font text-sm mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results Spotlight */}
          <div className="bg-gradient-to-r from-[#050516] to-[#0f0f2e] p-8 rounded-xl border border-gray-800 mb-12">
            <h3 className="text-xl main-font text-center mb-6 text-white">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#050516] p-6 rounded-lg border border-gray-800 text-center hover:border-[#3FA2F6] transition-colors duration-300">
                <div className="text-4xl main-font text-[#3FA2F6] mb-2">30-200%</div>
                <div className="text-gray-300 text-sm">Average improvement in key performance metrics</div>
              </div>
              <div className="bg-[#050516] p-6 rounded-lg border border-gray-800 text-center hover:border-[#AD49E1] transition-colors duration-300">
                <div className="text-4xl main-font text-[#AD49E1] mb-2">2-5X</div>
                <div className="text-gray-300 text-sm">Return on marketing investment</div>
              </div>
              <div className="bg-[#050516] p-6 rounded-lg border border-gray-800 text-center hover:border-[#3FA2F6] transition-colors duration-300">
                <div className="text-4xl main-font text-[#3FA2F6] mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring & optimization</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl main-font mb-12 text-center text-white">
            Our Proven {service.title} Process
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-[#AD49E1] to-[#3FA2F6] transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {service.process.map((step, index) => (
                <div 
                  key={step.step} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <h3 className="text-xl main-font mb-2 text-white">{step.title}</h3>
                    <p className="text-[#C6C7D5] sub-font">{step.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#AD49E1] to-[#3FA2F6] flex items-center justify-center text-white font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl main-font mb-12 text-center text-white">
            {service.title} FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-800 rounded-lg overflow-hidden hover:border-[#AD49E1] transition-colors duration-300">
                <details className="group">
                  <summary className="list-none p-6 cursor-pointer flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                    <div className="w-5 h-5 flex-shrink-0 ml-4 transform group-open:rotate-180 transition-transform duration-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="text-[#AD49E1]">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-300">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

       

      </div>
    
    </div>
    <Banner/>
    </>
  );
};

export default ServiceDetailPage;