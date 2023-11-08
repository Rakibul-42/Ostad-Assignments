import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
