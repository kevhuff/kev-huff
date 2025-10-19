// App.js
import React from 'react';
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
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* Background should not affect layout */}
      <StarBackground />

      {/* Fixed navbar sits on top */}
      <NavBar />

      {/* Page content offset by navbar height (h-16 md:h-20) */}
      <div className="pt-16 md:pt-20">
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
    </BrowserRouter>
  );
}

export default App;
