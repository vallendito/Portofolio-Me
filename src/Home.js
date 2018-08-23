import React from 'react';
import ParallaxBackground from './components/ParallaxBackground';
import Nav from './components/Nav';
import LandingPages from './Pages/LandingPages';
import AboutPages from './Pages/AboutPages';
import SkillPages from './Pages/SkillPages';
import PortfolioPage from './Pages/PortofolioPages/PortofolioPages';


const Home = () => {
  return(
    <div>
      <ParallaxBackground />
      <Nav />
      <LandingPages />
      <AboutPages />
      <SkillPages />
      <PortfolioPage />
    </div>
  )
}

export default Home;


