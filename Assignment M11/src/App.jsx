import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import Service from './components/Service/Service';
import About from './components/About/About';
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Project/>
      <About/>
      <Footer/>
    </div>
  );
};

export default App;