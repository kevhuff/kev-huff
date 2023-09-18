import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Contact from './components/contact'; 
import Footer from './components/footer';
import SocialMediaSection from './components/socials';
import ScrollToTopButton from './components/ScrollToTopButton';
import Projects from './components/projects';
import Resume from './components/resume';
import About from './components/About';
import StarBackground from './components/StarBackground';

function App() {
  return (
    <Router>
      <div>
        <StarBackground />  {/* This renders the starry background */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socials" element={<SocialMediaSection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
