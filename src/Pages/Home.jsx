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
        <title>My Page Title</title>
          <meta name="description" content="This is the description for SEO." />
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