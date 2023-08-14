//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './assets/components/Header'
import AboutMe from './assets/components/AboutMe';
import Portfolio from './assets/components/Portfolio';
import Contact from './assets/components/Contact';
import Resume from './assets/components/Resume';
import Footer from './assets/components/Footer';

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<AboutMe />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
