import React, { useState } from 'react';
import GranimBackground from './assets/components/Granim';
import './App.css'
import Header from './assets/components/Header';
import AboutMe from './assets/components/AboutMe';
import Portfolio from './assets/components/Portfolio';
import Contact from './assets/components/Contact';
import Resume from './assets/components/Resume';


function App() {
  const [activeState, setActiveState] = useState('default-state');

  const handleStateChange = (newState) => {
    setActiveState(newState);
  };

  return (
    <>
      <GranimBackground activeState={activeState} onStateChange={handleStateChange} />
      <Header onSectionClick={handleStateChange} />
      <AboutMe onSectionClick={handleStateChange}/>
      <Portfolio />
      <Contact />
      <Resume />
    </>
  )
}

export default App
