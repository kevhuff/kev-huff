import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMinus, HiMenuAlt3 } from 'react-icons/hi';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const closeNavAndNavigate = () => setNav(false);

  return (
   <div className="fixed top-0 left-0 w-full h-16 md:h-20 bg-slate-900 shadow-lg text-white z-[100] flex justify-between items-center px-4 md:px-12">

  <h1 className="text-sky-300 font-bold text-xl md:text-3xl tracking-wide">
    Kevin Huffman
  </h1>


      {/* Desktop Nav */}
      <ul className="hidden lg:flex space-x-4">
        {['Home', 'About', 'Contact', 'Projects', 'Socials', 'Resume'].map((text, idx) => (
          <li key={text}>
            <Link
              to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-sky-500/80 hover:text-white transition duration-300"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div onClick={handleNav} className="lg:hidden z-[101] cursor-pointer">
        {!nav ? <HiMenuAlt3 size={30} /> : <HiMinus size={30} />}
      </div>

      {/* Mobile Side Menu */}
      <ul
        className={`fixed top-0 right-0 w-[60%] sm:w-[40%] h-full bg-slate-900 shadow-2xl transition-transform duration-500 ease-in-out transform ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {['Home', 'About', 'Contact', 'Projects', 'Socials', 'Resume'].map((text) => (
          <li
            key={text}
            className="p-6 border-b border-slate-700 hover:bg-sky-600 transition-colors duration-300"
            onClick={closeNavAndNavigate}
          >
            <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
