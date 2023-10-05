import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMinus, HiMenuAlt3 } from 'react-icons/hi';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const closeNavAndNavigate = (route) => {
        setNav(false);
    };

    return (
        <div className='flex justify-between items-center h-24 w-screen mx-auto px-4 text-white bg-black z-50'>
            
            <h1 className='w-full text-indigo-200 text-left text-3xl pl-20'>Kevin Huffman</h1>
            
            {/* Navigation list - hidden on small screens, displayed on large screens */}
            <ul className='hidden lg:flex flex-row space-x-4 pr-4'>
                {['Home', 'About', 'Contact', 'Projects', 'Socials', 'Resume'].map((text, idx) => (
                    <li key={text} className='group p-2'>
                        <div className='relative'>
                            <span className='absolute top-0 left-[-1.5rem] bg-indigo-400 rounded-full w-6 h-6 flex items-center justify-center'>{idx + 1}</span>
                            <Link to={text === 'Home' ? '/' : `/${text.toUpperCase()}`} className='px-4 py-2 bg-gray-800 rounded transition-colors duration-1000 hover:bg-indigo-300'>{text}</Link>
                        </div>
                    </li>
                ))}
            </ul>
            
            {/* Hamburger icon - displayed on small screens, hidden on large screens */}
            <div onClick={handleNav} className="z-10 relative lg:hidden">
                {!nav ? <HiMenuAlt3 size={30} /> : <HiMinus size={30} onClick={handleNav} />}
            </div>
            
            {/* Side navigation - displayed when hamburger is clicked */}
            <ul className={nav ? 'fixed right-0 top-0 w-[40%] h-fit border-black bg-[#000300] transition-transform duration-700 ease-in-out' : 'fixed right-full top-0 w-[60%] h-full border-l border-gray-500 bg-[#000300] transition-transform duration-700 ease-in-out'}>
                <h1 className='text-center text-3xl font-bold text-indigo-300 '>Kevin Huffman</h1>
                {['Home', 'About', 'Contact', 'Projects', 'Socials', 'Resume'].map((text, idx) => (
                    <div className='relative p-4 border-b border-gray-500 hover:bg-indigo-300 transition-colors duration-300' onClick={() => closeNavAndNavigate(text.toLowerCase())}>
                        <Link key={text} to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>{text}</Link>
                    </div>
                ))}
            </ul>
            
        </div>
    );
};

export default NavBar;
