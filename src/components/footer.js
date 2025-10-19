import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMinus, HiMenuAlt3 } from 'react-icons/hi';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggle = () => setNav(v => !v);
  const close = () => setNav(false);

  const items = ['Home', 'About', 'Contact', 'Projects', 'Socials', 'Resume'];

  return (
    <>
      {/* Solid, fixed navbar */}
      <div className="fixed top-0 left-0 w-full h-20 bg-slate-900 text-white z-[100] shadow-lg flex items-center justify-between px-6 md:px-12">
        <h1 className="text-sky-300 font-bold text-2xl md:text-3xl tracking-wide">
          Kevin Huffman
        </h1>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-3">
          {items.map(text => (
            <li key={text}>
              <Link
                to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-sky-600 hover:text-white transition"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button onClick={toggle} className="lg:hidden z-[110]">
          {nav ? <HiMinus size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Dim overlay behind the drawer */}
      <div
        onClick={close}
        className={nav
          ? 'fixed inset-0 bg-black/50 backdrop-blur-[1px] z-[90]'
          : 'hidden'}
      />

      {/* Mobile drawer (only as tall as content) */}
      <ul
        className={`fixed top-0 right-0 w-[70%] sm:w-[45%] max-w-xs
                    bg-slate-900/95 text-white shadow-2xl rounded-bl-xl
                    z-[120] transition-transform duration-500 ease-in-out
                    ${nav ? 'translate-x-0' : 'translate-x-full'}
                    h-fit max-h-[90vh] overflow-y-auto`}
      >
        {/* Header row with close icon */}
        <li className="flex items-center justify-between px-6 py-5 border-b border-slate-700">
          <span className="font-semibold">Menu</span>
          <button onClick={close} aria-label="Close menu">
            <HiMinus size={24} />
          </button>
        </li>

        {items.map(text => (
          <li
            key={text}
            onClick={close}
            className="px-6 py-5 border-b border-slate-700 hover:bg-sky-600/80 transition"
          >
            <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
