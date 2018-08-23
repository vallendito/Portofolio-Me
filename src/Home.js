import React from 'react';
import ParallaxBackground from './components/ParallaxBackground';
import Nav from './components/Nav';
import LandingPages from './Pages/LandingPages';
import AboutPages from './Pages/AboutPages';
import SkillPages from './Pages/SkillPages';


const Home = () => {
  return(
    <div>
      <ParallaxBackground />
      <Nav />
      <LandingPages />
      <AboutPages />
      <SkillPages />
    </div>
  )
}

export default Home;


