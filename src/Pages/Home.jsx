import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import AboutUs from '../Components/HomeComponents/AboutUs'
import FeaturedProjects from '../Components/HomeComponents/FeaturedProjects'
import ServicesSection from '../Components/HomeComponents/ServicesSection'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs'
import Banner from '../Components/HomeComponents/Banner'
import Testimonials from '../Components/HomeComponents/Testimonials'
import { Helmet } from "react-helmet";

const Home = () => {
  
  return (
    <main>
          <Helmet>
        <title>Swiflare AI Innovations</title>
  <meta property="og:description" content="Boost your business with our expert digital marketing and AI-powered solutions." />
             <meta property="og:title" content="The Best Digital Marketing Agency in Chennai" />
      </Helmet>
        <Hero/>
        <AboutUs/>
        <ServicesSection/>
        <FeaturedProjects/>
        <WhyChooseUs/>
        <Testimonials/>
        <Banner/>
    

     
    </main>
  )
}

export default Home