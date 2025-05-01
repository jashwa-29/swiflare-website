import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import AboutUs from '../Components/HomeComponents/AboutUs'
import FeaturedProjects from '../Components/HomeComponents/FeaturedProjects'
import ServicesSection from '../Components/HomeComponents/ServicesSection'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs'
import Banner from '../Components/HomeComponents/banner'
import Testimonials from '../Components/HomeComponents/Testimonials'

const Home = () => {
  return (
    <main>
        
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