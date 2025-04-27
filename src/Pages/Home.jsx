import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import AboutUs from '../Components/HomeComponents/AboutUs'
import FeaturedProjects from '../Components/HomeComponents/FeaturedProjects'
import ServicesSection from '../Components/HomeComponents/ServicesSection'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs'

const Home = () => {
  return (
    <main>
        
        <Hero/>
        <AboutUs/>
        <ServicesSection/>
        <FeaturedProjects/>
        <WhyChooseUs/>


     
    </main>
  )
}

export default Home