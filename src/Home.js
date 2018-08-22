import React from 'react';
import ParallaxBackground from './components/ParallaxBackground';
import Nav from './components/Nav';
import LandingPages from './Pages/LandingPages';
import AboutPages from './Pages/AboutPages';


const Home = () => {
  return(
    <div>
      <ParallaxBackground />
      <Nav />
      <LandingPages />
      <AboutPages />
    </div>
  )
}

export default Home;


