import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Service from './pages/Service/Service';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/error/NotFound';
import Footer from './pages/Footer/Footer';
import BlogPost from './components/Blog/BlogPost';




const App = () => {
  return (
    <>
            <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;