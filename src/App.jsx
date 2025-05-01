import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/CommonComponents/Header'
import Home from './Pages/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from './Components/CommonComponents/Footer';
import About from './Pages/About';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<h1 className='text-3xl font-bold underline'>Contact</h1>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App