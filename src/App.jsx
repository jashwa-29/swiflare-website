import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/CommonComponents/Header'
import Home from './Pages/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<h1 className='text-3xl font-bold underline'>About</h1>} />
      <Route path="/contact" element={<h1 className='text-3xl font-bold underline'>Contact</h1>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App